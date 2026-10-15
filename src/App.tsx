import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, FileText, Maximize2, Menu, Minimize2, Presentation, X } from 'lucide-react'
import { SLIDES } from './slides'

const W = 1920
const H = 1080
const BASE = import.meta.env.BASE_URL
const PPTX_URL = `${BASE}downloads/Karla_USIL_Creator_Economy_15slides.pptx`
const PDF_NAME = 'Karla_USIL_Creator_Economy_15slides.pdf'
const TOTAL = SLIDES.length

function readHash() {
  const n = parseInt(window.location.hash.replace('#', ''), 10)
  return Number.isFinite(n) ? Math.min(Math.max(n, 1), TOTAL) - 1 : 0
}

export default function App() {
  const [index, setIndex] = useState(readHash)
  const [scale, setScale] = useState(1)
  const [presenting, setPresenting] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [exporting, setExporting] = useState(false)
  const reduce = useReducedMotion()
  const exportRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  const go = useCallback((n: number) => setIndex(Math.min(Math.max(n, 0), TOTAL - 1)), [])
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, TOTAL - 1)), [])
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])

  useEffect(() => {
    window.history.replaceState(null, '', `#${index + 1}`)
  }, [index])

  const enterPresent = useCallback(async () => {
    setMenuOpen(false)
    setPresenting(true)
    try {
      await document.documentElement.requestFullscreen()
    } catch {
      /* el modo presentación funciona aunque el navegador rechace fullscreen */
    }
  }, [])

  const exitPresent = useCallback(async () => {
    setPresenting(false)
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen()
      } catch {
        /* noop */
      }
    }
  }, [])

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else await document.documentElement.requestFullscreen()
    } catch {
      /* noop */
    }
  }, [])

  useEffect(() => {
    const onFs = () => {
      if (!document.fullscreenElement) setPresenting(false)
    }
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          go(0)
          break
        case 'End':
          go(TOTAL - 1)
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
        case 'Escape':
          setMenuOpen(false)
          setPresenting(false)
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, toggleFullscreen])

  const exportPdf = useCallback(async () => {
    setMenuOpen(false)
    setExporting(true)
    try {
      await document.fonts.ready
      await new Promise((r) => setTimeout(r, 300))
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
      const nodes = exportRef.current?.querySelectorAll<HTMLElement>('.slide')
      if (!nodes?.length) return
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H], compress: true })
      for (let i = 0; i < nodes.length; i++) {
        const canvas = await html2canvas(nodes[i], { width: W, height: H, scale: 1, useCORS: true, backgroundColor: null, logging: false })
        if (i > 0) pdf.addPage([W, H], 'landscape')
        pdf.addImage(canvas.toDataURL('image/jpeg', 0.93), 'JPEG', 0, 0, W, H)
      }
      pdf.save(PDF_NAME)
    } catch (err) {
      console.error('Error al exportar PDF', err)
    } finally {
      setExporting(false)
    }
  }, [])

  const Current = SLIDES[index]
  const dur = reduce ? 0 : 0.3

  return (
    <>
      <div className="stage-wrap" onClick={(e) => { if ((e.target as HTMLElement).closest('.controls')) return; setMenuOpen(false) }}>
        <div className="stage" style={{ width: W * scale, height: H * scale }}>
          <div className="stage-inner" style={{ transform: `scale(${scale})` }}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={index}
                className="slide-motion"
                initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: dur, ease: 'easeOut' }}
              >
                <Current />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {!presenting && (
        <div className="controls">
          <button className="ctl" onClick={prev} disabled={index === 0} aria-label="Diapositiva anterior"><ChevronLeft size={16} /></button>
          <span className="counter">{String(index + 1).padStart(2, '0')} / {TOTAL}</span>
          <button className="ctl" onClick={next} disabled={index === TOTAL - 1} aria-label="Diapositiva siguiente"><ChevronRight size={16} /></button>
          <button className="ctl" onClick={toggleFullscreen} aria-label="Pantalla completa"><Maximize2 size={15} /></button>
          <div className="menu">
            <button className="ctl" onClick={() => setMenuOpen((v) => !v)} aria-label="Menú" aria-expanded={menuOpen}>
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            {menuOpen && (
              <div className="menu-pop" role="menu">
                <button onClick={enterPresent}><Presentation size={17} /> Presentar</button>
                <button onClick={exportPdf} disabled={exporting}><FileText size={17} /> Descargar PDF</button>
                <a href={PPTX_URL} download="Karla_USIL_Creator_Economy_15slides.pptx"><Download size={17} /> Descargar PPTX</a>
              </div>
            )}
          </div>
        </div>
      )}

      {presenting && (
        <div className="exit-hot">
          <button className="ctl" onClick={exitPresent} aria-label="Salir de presentación"><Minimize2 size={15} /> Salir</button>
        </div>
      )}

      {exporting && <div className="exporting-toast">Generando PDF…</div>}

      {exporting && (
        <div className="export-root" ref={exportRef} aria-hidden="true">
          {SLIDES.map((S, i) => (
            <S key={i} />
          ))}
        </div>
      )}
    </>
  )
}
