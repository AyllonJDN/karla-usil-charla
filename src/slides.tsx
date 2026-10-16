import type { CSSProperties, ReactNode } from 'react'

export type Theme = 'dark' | 'light'

const BASE = import.meta.env.BASE_URL
const img = (name: string) => `${BASE}images/${name}`

/* ---------- Primitivas ---------- */

function Cut({ src, style, className = '' }: { src: string; style?: CSSProperties; className?: string }) {
  return <img className={`cut ${className}`} src={img(src)} style={style} alt="" />
}

function Frame({
  theme,
  eyebrow,
  children,
  className = '',
  chrome = true,
}: {
  theme: Theme
  eyebrow?: string
  children: ReactNode
  className?: string
  chrome?: boolean
}) {
  return (
    <section className={`slide ${theme} ${className}`}>
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      {chrome && (
        <>
          <div className="brand">
            <span>KARLA</span> RODRÍGUEZ
          </div>
        </>
      )}
      <img className="mark-logo" src={img(theme === 'dark' ? 'logo-matiz-cream.png' : 'logo-matiz.png')} alt="Matiz" />
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <div className="slide-body">{children}</div>
    </section>
  )
}

function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`lead ${className}`}>{children}</p>
}
function Remate({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`remate ${className}`}>{children}</p>
}
function Float({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`fcard ${className}`} style={style}>
      {children}
    </div>
  )
}

/* ---------- Slides ---------- */

const S1 = () => (
  <Frame theme="dark" className="cover" chrome={false}>
    <div className="cover-brand">
      <span>KARLA</span> RODRÍGUEZ
    </div>
    <div className="cover-left">
      <div className="logos">
        <img src={img('logo-usil.png')} alt="USIL" onError={(e) => ((e.currentTarget.style.display = 'none'), (e.currentTarget.nextElementSibling as HTMLElement | null)?.setAttribute('style', 'display:none'))} />
        <span className="logo-sep" />
        <img src={img('logo-glc.png')} alt="Global Leaders Club" />
      </div>
      <h1 className="t t-cover">
        <span className="thin">¿Puedo construir</span>
        <strong>una carrera en la industria de creación de contenido?</strong>
      </h1>
      <p className="lead">¿Qué oportunidades profesionales existen detrás del contenido?</p>
      <div className="cover-foot">
        <strong>Karla Rodríguez</strong>
        <span>Directora Estratégica de Creadores de Contenido</span>
      </div>
    </div>
    <div className="blob" />
    <Cut src="karla-1.png" />
    <Float className="c1">Estrategia</Float>
    <Float className="c2">Comunidad</Float>
    <Float className="c3">Management &amp; operaciones</Float>
  </Frame>
)


const S_A = () => (
  <Frame theme="light" eyebrow="01 · UN NEGOCIO HUMANO Y EMPRESARIAL" className="sA">
    <div className="sA-left">
      <h1 className="t t-xl">
        Es una industria de <em>operaciones.</em>
      </h1>
      <Lead>
        Pero antes de llegar a las operaciones, quiero que entiendan algo: es un negocio donde se trabaja mucho el lado humano y el lado empresarial.
      </Lead>
    </div>
    <div className="venn v1">
      <b>LO HUMANO</b>
      <span>esencia · confianza · conexión</span>
    </div>
    <div className="venn v2">
      <b>LO EMPRESARIAL</b>
      <span>estrategia · negocio · operaciones</span>
    </div>
    <Float className="vc">Creación de contenido</Float>
    <Remate className="sA-remate">
      Las operaciones llegan después. Primero hay que entender los <em>dos lados.</em>
    </Remate>
  </Frame>
)

const S_B = () => (
  <Frame theme="dark" eyebrow="02 · LA ERA DE LA IA" className="sB">
    <div className="sB-left">
      <h1 className="t t-xl">
        ¿Qué falta en la era de la <em>IA?</em>
      </h1>
      <p className="sB-answer">Justamente lo humano.</p>
      <Lead>Por eso la creación de contenido hoy radica en esto:</Lead>
      <div className="sB-chain">
        <span>Autenticidad</span>
        <i>→</i>
        <span>Conexión</span>
        <i>→</i>
        <span className="hot">Crecimiento</span>
      </div>
      <Remate>
        Cuanto más <em>auténtico</em> eres, más conectas y creces.
      </Remate>
    </div>
    <div className="blob" />
    <Cut src="karla-3.png" />
  </Frame>
)

const S_C = () => (
  <Frame theme="light" eyebrow="03 · PRIMERO LA ESENCIA" className="sC">
    <div className="sC-left">
      <h1 className="t t-lg">
        Partimos de la esencia <em>humana.</em>
      </h1>
      <Lead>Teniendo eso como base, podemos trabajar todo lo demás, incluidas las operaciones.</Lead>
    </div>
    <div className="layers">
      <div className="layer l3">OPERACIONES</div>
      <div className="layer l2">ESTRATEGIA Y COMUNIDAD</div>
      <div className="layer l1">ESENCIA HUMANA</div>
    </div>
    <div className="vs">
      <div className="cmp cmp-old">
        <span className="small-label">UNA EMPRESA TRADICIONAL</span>
        <p>se gestiona como empresa.</p>
      </div>
      <div className="cmp cmp-new">
        <span className="small-label">UNA EMPRESA DE MEDIOS</span>
        <p>
          el activo principal es <em>una persona.</em>
        </p>
      </div>
    </div>
  </Frame>
)

const territorios = [
  ['ESTRATEGIA', 'decidir qué construir'],
  ['GESTIÓN', 'hacer que funcione'],
  ['NEGOCIO', 'capturar valor'],
  ['LECTURA HUMANA', 'proteger la esencia'],
]

const S2 = () => (
  <Frame theme="light" eyebrow="04 · QUIÉN ESTÁ HABLANDO" className="s2">
    <div className="s2-left">
      <h1 className="t t-lg">
        Yo tampoco estudié <em>Creator Economy.</em>
      </h1>
      <Lead>Usé herramientas de gestión para construir una carrera dentro de una industria que estaba naciendo.</Lead>
      <div className="bio">
        <div className="bio-name">Karla Rodríguez</div>
        <div className="bio-role">Directora Estratégica de Creadores de Contenido</div>
        <div className="bio-line">Gestión Empresarial · PUCP</div>
        <div className="bio-line">Experiencia en corporativo, tecnología, operaciones y negocios digitales.</div>
        <div className="bio-line">+8 años trabajando detrás de creadores y marcas personales.</div>
      </div>
      <Remate>
        Mi trabajo no es hacer que un creador publique más. Es construir la <em>estructura</em> que necesita para crecer.
      </Remate>
    </div>
    <div className="blob" />
    <Cut src="karla-2.png" />
    <div className="small-label s2-label">CUATRO TERRITORIOS</div>
    {territorios.map(([a, b], i) => (
      <Float key={a} className={`terr-card t${i}`}>
        <b>{a}</b>
        <span>{b}</span>
      </Float>
    ))}
  </Frame>
)

const S3 = () => (
  <Frame theme="light" eyebrow="05 · UNA MEJOR PREGUNTA" className="s3">
    <div className="s3-left">
      <h1 className="t t-xl">
        Tu carrera te da <em>herramientas.</em>
      </h1>
      <Lead>No siempre te dice dónde vas a terminar aplicándolas.</Lead>
    </div>
    <div className="chips">
      {['Entender personas', 'vender', 'ordenar', 'conectar', 'comunicar', 'convertir ideas en proyectos'].map((c) => (
        <span key={c}>{c}</span>
      ))}
    </div>
    <div className="blob" />
    <Cut src="karla-3.png" />
    <div className="compare">
      <div className="cmp cmp-old">
        <span className="small-label">LA PREGUNTA TRADICIONAL</span>
        <p>¿Qué cargo quiero?</p>
      </div>
      <div className="cmp cmp-new">
        <span className="small-label">LA PREGUNTA QUE ABRE POSIBILIDADES</span>
        <p>
          ¿Qué <em>problemas</em> disfruto resolver?
        </p>
      </div>
    </div>
  </Frame>
)

const S4 = () => (
  <Frame theme="dark" eyebrow="06 · LA OPORTUNIDAD YA EXISTE" className="s4">
    <div className="s4-top">
      <h1 className="t t-xl">
        Esto ya es una <em>industria.</em>
      </h1>
      <Lead>
        La atención, las marcas y el dinero ya se están moviendo hacia este ecosistema. Por eso aparecen nuevas funciones profesionales.
      </Lead>
    </div>
    <div className="small-label stat-label sl1">PERÚ · PUBLICIDAD 2025</div>
    <div className="bub b1">
      <b>53%</b>
      <span>de toda la inversión publicitaria ya fue digital.</span>
    </div>
    <div className="bub b2">
      <b>45%</b>
      <span>de la inversión digital fue Social Ads.</span>
    </div>
    <div className="small-label stat-label sl2">BRASIL · ECOSISTEMA YOUTUBE 2025</div>
    <div className="bub hot b3">
      <b>+R$6B</b>
      <span>de contribución al PIB.</span>
    </div>
    <div className="bub hot b4">
      <b>+150K</b>
      <span>empleos equivalentes a tiempo completo.</span>
    </div>
    <div className="note-row">
      <p className="note">
        No significa que todos esos empleos sean “managers de creadores”. Sí demuestra que el ecosistema ya mueve economía, empresas y trabajo.
      </p>
      <p className="source">Fuente: IAB Perú + PwC (2026) · YouTube / Oxford Economics (2026)</p>
    </div>
  </Frame>
)

const S5 = () => (
  <Frame theme="light" eyebrow="07 · AMPLIAR EL MAPA" className="s5">
    <div className="s5-left">
      <h1 className="t t-lg">
        Trabajar en contenido no significa ser <em>creador.</em>
      </h1>
      <Lead>La parte visible es solo una capa.</Lead>
    </div>
    <div className="grp g-front">
      <div className="small-label">FRENTE AL CONTENIDO</div>
      <div className="grid">
        {['Cámara', 'Edición', 'Producción', 'Publicidad'].map((x) => (
          <div className="item" key={x}>
            {x}
          </div>
        ))}
      </div>
    </div>
    <div className="blob" />
    <Cut src="karla-4.png" />
    <div className="grp g-back">
      <div className="small-label">DETRÁS DEL CONTENIDO</div>
      <div className="stack">
        {['Estrategia', 'Posicionamiento', 'Comunidad', 'Management & operaciones'].map((x) => (
          <div className="item" key={x}>
            {x}
          </div>
        ))}
      </div>
    </div>
    <Remate>
      Cuando el creador crece, aparecen decisiones que ya no son solo <em>creativas.</em>
    </Remate>
  </Frame>
)

const pasos = [
  '¿Qué es?',
  '¿Qué comunica?',
  '¿Para quién?',
  '¿Cómo crece?',
  '¿Cómo crea comunidad?',
  '¿Qué oportunidades toma?',
  '¿Cómo convierte atención en negocio?',
  '¿Cómo hace que todo funcione?',
]

const S6 = () => (
  <Frame theme="dark" eyebrow="08 · LA SLIDE MADRE" className="s6">
    <div className="head">
      <h1 className="t t-xl">
        El sistema detrás del <em>talento.</em>
      </h1>
      <Lead>Un creador no necesita solamente publicaciones. Necesita decisiones que se conecten.</Lead>
    </div>
    <Remate className="remate-top">A medida que esta cadena crece, también crece el espacio para profesionales detrás del creador.</Remate>
    <ol className="grid8">
      {pasos.map((p, i) => (
        <li key={p} className={i === pasos.length - 1 ? 'last' : ''}>
          <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
          <span className="step-t">{p}</span>
        </li>
      ))}
    </ol>
  </Frame>
)

const roles = [
  ['ESTRATEGA', 'ayuda a decidir'],
  ['DIRECTOR EDITORIAL', 'elige conversaciones'],
  ['LOCUTOR / HOST', 'conduce contextos'],
  ['EDUCADOR', 'convierte saber en aprendizaje'],
  ['ENTRETENEDOR', 'convierte atención en experiencia'],
]

const S7 = () => (
  <Frame theme="light" eyebrow="09 · ANTES DE PUBLICAR">
    <div className="s7">
      <div className="s7-left">
        <h1 className="t t-lg">
          Primero: ¿qué es este creador para su <em>audiencia?</em>
        </h1>
        <Lead>Dos personas pueden tener la misma cantidad de seguidores y necesitar estrategias completamente distintas.</Lead>
      </div>
      <ul className="rows">
        {roles.map(([a, b]) => (
          <li key={a}>
            <b className="tag">{a}</b>
            <span className="box">{b}</span>
          </li>
        ))}
      </ul>
    </div>
    <Remate>
      El posicionamiento define qué contenido, formatos, aliados, productos y oportunidades tienen <em>sentido.</em>
    </Remate>
  </Frame>
)

const preguntas = [
  '¿Qué lugar queremos ocupar?',
  '¿Qué debemos comunicar?',
  '¿A quién?',
  '¿Cómo queremos crecer?',
  '¿Qué debería provocar cada pieza?',
]

const S8 = () => (
  <Frame theme="light" eyebrow="10 · DIRIGIR CONTENIDO">
    <div className="s8">
      <div className="s8-left">
        <h1 className="t t-md">
          La estrategia no empieza con <em>“¿qué publicamos hoy?”</em>
        </h1>
        <Lead>Empieza preguntando qué queremos construir y qué función cumple cada pieza.</Lead>
        <ol className="qs">
          {preguntas.map((q, i) => (
            <li key={q}>
              <b className="tag">{String(i + 1).padStart(2, '0')}</b>
              <span className="box">{q}</span>
            </li>
          ))}
        </ol>
      </div>
      <aside className="side-dark">
        <div className="small-label">UNA IDEA ≠ UNA FUNCIÓN</div>
        <ul>
          {['Atención', 'Autoridad', 'Confianza', 'Conversación', 'Acción'].map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </aside>
    </div>
    <Remate>
      El estratega decide qué idea sirve para qué dentro de algo más <em>grande.</em>
    </Remate>
  </Frame>
)

const S9 = () => (
  <Frame theme="dark" eyebrow="11 · COMUNIDAD" className="s9">
    <div className="head">
      <h1 className="t t-lg">
        La comunicación no termina cuando <em>publicas.</em>
      </h1>
      <Lead>Una audiencia mira. Una comunidad participa. Y cuando participa empieza a darte información.</Lead>
    </div>
    <div className="ring r1">
      <b>AUDIENCIA</b>
      <span>mira</span>
    </div>
    <div className="ring r2">
      <b>COMUNIDAD</b>
      <span>participa</span>
    </div>
    <div className="ring r3">
      <b>NEGOCIO</b>
      <span>confía y actúa</span>
    </div>
    <span className="ring-arrow" style={{ left: 478 }}>→</span>
    <span className="ring-arrow" style={{ left: 1052 }}>→</span>
    <Remate className="remate-flow">
      Escuchar → conversar → entender → conectar → <em>activar</em>
    </Remate>
  </Frame>
)

const S10 = () => (
  <Frame theme="light" eyebrow="12 · SINERGIAS">
    <div className="s10">
      <div className="s10-left">
        <h1 className="t t-lg">
          Crecer también es saber con quién <em>conectar.</em>
        </h1>
        <Lead>La creatividad detrás del contenido también consiste en conectar activos.</Lead>
        <Remate>
          Ver combinaciones es una habilidad estratégica: alguien tiene que convertir “podría pasar” en un proyecto real.
        </Remate>
      </div>
      <div className="map">
        <svg viewBox="0 0 900 760" className="map-lines" aria-hidden="true">
          <g stroke="#F47358" strokeWidth="2" opacity="0.6" fill="none" strokeDasharray="2 9" strokeLinecap="round">
            <line x1="450" y1="380" x2="170" y2="130" />
            <line x1="450" y1="380" x2="730" y2="130" />
            <line x1="450" y1="380" x2="170" y2="630" />
            <line x1="450" y1="380" x2="730" y2="630" />
          </g>
        </svg>
        <div className="map-center">
          <b>CREADOR</b>
          <span>posición + audiencia + confianza</span>
        </div>
        <div className="map-node n1"><b>MARCA</b><span>partnership</span></div>
        <div className="map-node n2"><b>OTRO CREADOR</b><span>colaboración</span></div>
        <div className="map-node n3"><b>EXPERTO</b><span>producto</span></div>
        <div className="map-node n4"><b>MEDIO / EVENTO</b><span>nueva audiencia</span></div>
      </div>
    </div>
  </Frame>
)

const S11 = () => (
  <Frame theme="dark" eyebrow="13 · EL TRABAJO INVISIBLE" className="s11">
    <div className="s11-left">
      <h1 className="t t-xl">
        Management &amp; <em>operaciones.</em>
      </h1>
      <Lead>El crecimiento crea complejidad. Gestionar es convertir esa complejidad en decisiones, responsables y proyectos.</Lead>
    </div>
    <blockquote className="quote">
      “El creador no debería administrar personalmente todo lo que su <em>crecimiento</em> genera.”
    </blockquote>
    <div className="blob" />
    <Cut src="karla-4.png" />
    <ul className="verbs">
      {['PRIORIZAR', 'CONECTAR', 'NEGOCIAR', 'ORGANIZAR', 'DIRIGIR'].map((v) => (
        <li key={v}>{v}</li>
      ))}
      <li className="verb-last">CONVERTIR OPORTUNIDADES EN PROYECTOS</li>
    </ul>
  </Frame>
)

const cats = [
  ['ATENCIÓN', 'Publicidad · Brand deals · Afiliados'],
  ['CONOCIMIENTO', 'Cursos · Servicios · Consultoría · Conferencias'],
  ['COMUNIDAD', 'Eventos · Experiencias · Membresías'],
  ['PROPIEDAD', 'Productos · Marcas · Libros / IP'],
]

const S12 = () => (
  <Frame theme="light" eyebrow="14 · MONETIZACIÓN" className="s12">
    <div className="head">
      <h1 className="t t-xl">
        ¿Dónde aparece el <em>negocio?</em>
      </h1>
      <Lead>
        No es “cómo hacer plata siendo influencer”. Es cuántos negocios pueden existir alrededor de atención + confianza.
      </Lead>
    </div>
    <div className="cats">
      {cats.map(([a, b], i) => (
        <div className={`cat c${i}`} key={a}>
          <span className="cat-n">{String(i + 1).padStart(2, '0')}</span>
          <b>{a}</b>
          <p>{b}</p>
        </div>
      ))}
    </div>
    <Remate>
      Cada nueva línea de negocio aumenta la necesidad de estrategia, comunidad, management y <em>operaciones.</em>
    </Remate>
  </Frame>
)

const S13 = () => (
  <Frame theme="light" eyebrow="15 · CASO APLICADO" className="s13">
    <div className="blob" />
    <Cut src="daniel.png" />
    <Float className="d1">Daniel Bonifaz</Float>
    <div className="s13-right">
      <h1 className="t t-md">
        Daniel Bonifaz: lo que se ve vs. lo que hay <em>detrás.</em>
      </h1>
      <Lead>Durante tres años trabajé detrás de su negocio. Mi trabajo nunca fue decirle solamente qué reel grabar.</Lead>
      <div className="duo">
        <div className="duo-col duo-front">
          <div className="small-label">LO QUE LA AUDIENCIA VE</div>
          <ul>
            {['Contenido', 'Voz', 'Comunidad', 'Productos', 'Eventos'].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="duo-col duo-back">
          <div className="small-label">LO QUE EXISTE DETRÁS</div>
          <p>Posicionamiento · estrategia · dirección editorial</p>
          <p>Equipo · oferta · alianzas · procesos · decisiones</p>
        </div>
      </div>
      <div className="result">
        <div className="r-num">
          <b>+350%</b>
          <span>crecimiento de la facturación en 3 años</span>
        </div>
        <div className="became">
          <span className="small-label">EL RESULTADO MÁS IMPORTANTE</span>
          <p>Daniel se convirtió en:</p>
          <strong>content founder, creator, padre y esposo presente.</strong>
        </div>
      </div>
      <Remate>
        El contenido genera oportunidades. Pero las oportunidades por sí solas no construyen una <em>empresa.</em>
      </Remate>
    </div>
  </Frame>
)


const entradas = [
  ['ESTRATEGIA DE CONTENIDO', 'pensar · investigar · posicionar · comunicar · crecer'],
  ['COMUNIDAD', 'escuchar · conversar · entender personas · conectar'],
  ['MANAGEMENT & OPERACIONES', 'priorizar · negociar · organizar · coordinar · dirigir'],
  ['FRENTE AL CONTENIDO', 'cámara · edición · producción · dirección creativa'],
]

const S14 = () => (
  <Frame theme="light" eyebrow="16 · TU ENTRADA A LA INDUSTRIA" className="s14">
    <div className="s14-left">
      <h1 className="t t-xl">
        ¿Dónde podrías entrar <em>tú?</em>
      </h1>
      <Lead>No tienes que querer ser creador para que esta industria sea para ti.</Lead>
    </div>
    <div className="entradas">
      {entradas.map(([a, b]) => (
        <div className="entrada" key={a}>
          <b>{a}</b>
          <p>{b}</p>
        </div>
      ))}
    </div>
    <div className="blob" />
    <Cut src="karla-2.png" />
    <Remate>
      Empieza identificando qué problemas disfrutas resolver. Esa puede ser una mejor <em>brújula</em> que intentar adivinar tu cargo.
    </Remate>
  </Frame>
)

const S15 = () => (
  <Frame theme="dark" className="closing" chrome={false}>
    <div className="close-panel" />
    <div className="blob" />
    <Cut src="karla-1.png" />
    <div className="close-brand">
      <span>KARLA</span> RODRÍGUEZ
    </div>
    <div className="close-body">
      <div className="close-lines">
        <p>
          Creadores van a seguir <em>apareciendo.</em>
        </p>
        <p>
          Audiencias van a seguir <em>creciendo.</em>
        </p>
        <p>
          Nuevos productos van a seguir <em>naciendo.</em>
        </p>
      </div>
      <div className="close-sep" />
      <p className="close-mid">El problema es que alguien tiene que saber administrar todo eso.</p>
      <p className="close-final">
        Tu carrera puede estar frente al contenido o construyendo todo lo que existe <em>detrás.</em>
      </p>
      <div className="close-foot">Karla Rodríguez · @karlarodriguez · karla@matizuno.com</div>
    </div>
  </Frame>
)


const S20 = () => (
  <Frame theme="dark" className="final" chrome={false}>
    <div className="final-panel" />
    <div className="blob" />
    <Cut src="karla-5.png" />
    <div className="close-brand">
      <span>KARLA</span> RODRÍGUEZ
    </div>
    <div className="final-body">
      <h1 className="t t-xl">
        Sigamos en <em>contacto.</em>
      </h1>
      <Lead>Escanea el QR para seguirme en Instagram.</Lead>
      <div className="qr-row">
        <div className="qr-card">
          <img src={img('qr-instagram.png')} alt="QR Instagram" />
        </div>
        <div className="qr-side">
          <span className="small-label">INSTAGRAM</span>
          <p>Escanea y sigue la conversación.</p>
          <div className="close-foot">karla@matizuno.com</div>
        </div>
      </div>
    </div>
  </Frame>
)

export const SLIDES: (() => ReactNode)[] = [S1, S_A, S_B, S_C, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S20]
