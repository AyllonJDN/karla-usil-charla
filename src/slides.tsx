import type { ReactNode } from 'react'

export type Theme = 'dark' | 'light'

/* ---------- Primitivas ---------- */

function Ornament({ theme }: { theme: Theme }) {
  const c = theme === 'dark' ? '#C4D3F7' : '#F47358'
  return (
    <svg className="ornament" viewBox="0 0 1920 1080" aria-hidden="true">
      <g fill="none" stroke={c} strokeWidth="1.4" opacity="0.22">
        <ellipse cx="1700" cy="120" rx="460" ry="300" transform="rotate(-18 1700 120)" />
        <ellipse cx="1760" cy="190" rx="360" ry="220" transform="rotate(-18 1760 190)" />
        <path d="M-80 1010 C 300 860, 640 1140, 1000 1000" />
      </g>
    </svg>
  )
}

export function PhotoPlaceholder({
  label = 'FOTO KARLA',
  className = '',
  monogram,
}: {
  label?: string
  className?: string
  monogram?: string
}) {
  return (
    <div className={`photo ${className}`}>
      <div className="photo-mass photo-mass-a" />
      <div className="photo-mass photo-mass-b" />
      {monogram && <span className="photo-mono">{monogram}</span>}
      <span className="photo-label">{label}</span>
    </div>
  )
}

function Frame({
  theme,
  eyebrow,
  children,
  className = '',
}: {
  theme: Theme
  eyebrow?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`slide ${theme} ${className}`}>
      <Ornament theme={theme} />
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <div className="slide-body">{children}</div>
    </section>
  )
}

function Lead({ children }: { children: ReactNode }) {
  return <p className="lead">{children}</p>
}
function Remate({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`remate ${className}`}>{children}</p>
}

/* ---------- Slides ---------- */

const S1 = () => (
  <Frame theme="dark" className="cover">
    <div className="cover-grid">
      <div className="cover-left">
        <div className="eyebrow-inline">USIL × GLOBAL LEADERS CLUB</div>
        <h1 className="t t-xl">
          ¿Puedo construir una carrera en la industria de <em>creación de contenido?</em>
        </h1>
        <p className="lead">¿Qué oportunidades profesionales existen detrás del contenido?</p>
        <div className="cover-foot">
          <div>
            <strong>Karla Rodríguez</strong>
            <span>Directora Estratégica de Creadores de Contenido</span>
          </div>
          <div className="cover-meta">USIL × Global Leaders Club · 16 OCT 2026 · 4:00 PM</div>
        </div>
      </div>
      <PhotoPlaceholder className="photo-arch" label="FOTO KARLA" monogram="KR" />
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
  <Frame theme="light" eyebrow="01 · QUIÉN ESTÁ HABLANDO">
    <div className="cols s2">
      <div>
        <h1 className="t t-lg">
          Yo tampoco estudié <em>Creator Economy.</em>
        </h1>
        <Lead>
          Usé herramientas de gestión para construir una carrera dentro de una industria que estaba naciendo.
        </Lead>
        <div className="bio">
          <div className="bio-name">Karla Rodríguez</div>
          <div className="bio-role">Directora Estratégica de Creadores de Contenido</div>
          <div className="bio-line">Gestión Empresarial · PUCP</div>
          <div className="bio-line">Experiencia en corporativo, tecnología, operaciones y negocios digitales.</div>
          <div className="bio-line">+8 años trabajando detrás de creadores y marcas personales.</div>
        </div>
      </div>
      <div className="s2-right">
        <div className="small-label">CUATRO TERRITORIOS</div>
        <ul className="terr">
          {territorios.map(([a, b]) => (
            <li key={a}>
              <b>{a}</b>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Remate>
          Mi trabajo no es hacer que un creador publique más. Es construir la <em>estructura</em> que necesita para crecer.
        </Remate>
      </div>
    </div>
  </Frame>
)

const S3 = () => (
  <Frame theme="light" eyebrow="02 · UNA MEJOR PREGUNTA">
    <div className="cols s3">
      <div>
        <h1 className="t t-xl">
          Tu carrera te da <em>herramientas.</em>
        </h1>
        <Lead>No siempre te dice dónde vas a terminar aplicándolas.</Lead>
      </div>
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
    </div>
    <div className="chips">
      {['Entender personas', 'vender', 'ordenar', 'conectar', 'comunicar', 'convertir ideas en proyectos'].map((c) => (
        <span key={c}>{c}</span>
      ))}
    </div>
  </Frame>
)

const S4 = () => (
  <Frame theme="dark" eyebrow="03 · LA OPORTUNIDAD YA EXISTE">
    <div className="s4-top">
      <h1 className="t t-xl">
        Esto ya es una <em>industria.</em>
      </h1>
      <Lead>
        La atención, las marcas y el dinero ya se están moviendo hacia este ecosistema. Por eso aparecen nuevas funciones profesionales.
      </Lead>
    </div>
    <div className="stats">
      <div className="stat-group">
        <div className="small-label">PERÚ · PUBLICIDAD 2025</div>
        <div className="stat-row">
          <div className="stat">
            <b>53%</b>
            <span>de toda la inversión publicitaria ya fue digital.</span>
          </div>
          <div className="stat">
            <b>45%</b>
            <span>de la inversión digital fue Social Ads.</span>
          </div>
        </div>
      </div>
      <div className="stat-group">
        <div className="small-label">BRASIL · ECOSISTEMA YOUTUBE 2025</div>
        <div className="stat-row">
          <div className="stat">
            <b>+R$6B</b>
            <span>de contribución al PIB.</span>
          </div>
          <div className="stat">
            <b>+150K</b>
            <span>empleos equivalentes a tiempo completo.</span>
          </div>
        </div>
      </div>
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
  <Frame theme="light" eyebrow="04 · AMPLIAR EL MAPA">
    <div className="cols s5">
      <div>
        <h1 className="t t-lg">
          Trabajar en contenido no significa ser <em>creador.</em>
        </h1>
        <Lead>La parte visible es solo una capa.</Lead>
      </div>
      <div className="duo">
        <div className="duo-col duo-front">
          <div className="small-label">FRENTE AL CONTENIDO</div>
          <ul>
            {['Cámara', 'Edición', 'Producción', 'Publicidad'].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="duo-col duo-back">
          <div className="small-label">DETRÁS DEL CONTENIDO</div>
          <ul>
            {['Estrategia', 'Posicionamiento', 'Comunidad', 'Management & operaciones'].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
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
  <Frame theme="dark" eyebrow="05 · LA SLIDE MADRE">
    <div className="head">
      <h1 className="t t-xl">
        El sistema detrás del <em>talento.</em>
      </h1>
      <Lead>Un creador no necesita solamente publicaciones. Necesita decisiones que se conecten.</Lead>
    </div>
    <ol className="steps">
      {pasos.map((p, i) => (
        <li key={p}>
          <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
          <span className="step-t">{p}</span>
        </li>
      ))}
    </ol>
    <Remate>A medida que esta cadena crece, también crece el espacio para profesionales detrás del creador.</Remate>
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
  <Frame theme="light" eyebrow="06 · ANTES DE PUBLICAR">
    <div className="cols s7">
      <div>
        <h1 className="t t-lg">
          Primero: ¿qué es este creador para su <em>audiencia?</em>
        </h1>
        <Lead>
          Dos personas pueden tener la misma cantidad de seguidores y necesitar estrategias completamente distintas.
        </Lead>
      </div>
      <ul className="roles">
        {roles.map(([a, b]) => (
          <li key={a}>
            <b>{a}</b>
            <span>{b}</span>
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
  <Frame theme="light" eyebrow="07 · DIRIGIR CONTENIDO">
    <div className="cols s8">
      <div>
        <h1 className="t t-md">
          La estrategia no empieza con <em>“¿qué publicamos hoy?”</em>
        </h1>
        <Lead>Empieza preguntando qué queremos construir y qué función cumple cada pieza.</Lead>
        <ol className="qs">
          {preguntas.map((q, i) => (
            <li key={q}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {q}
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
  <Frame theme="dark" eyebrow="08 · COMUNIDAD">
    <div className="head">
      <h1 className="t t-lg">
        La comunicación no termina cuando <em>publicas.</em>
      </h1>
      <Lead>Una audiencia mira. Una comunidad participa. Y cuando participa empieza a darte información.</Lead>
    </div>
    <div className="flow">
      {[
        ['AUDIENCIA', 'mira'],
        ['COMUNIDAD', 'participa'],
        ['NEGOCIO', 'confía y actúa'],
      ].map(([a, b], i) => (
        <div className="flow-wrap" key={a}>
          {i > 0 && <span className="flow-arrow">→</span>}
          <div className="flow-node">
            <b>{a}</b>
            <span>{b}</span>
          </div>
        </div>
      ))}
    </div>
    <Remate className="remate-flow">
      Escuchar → conversar → entender → conectar → <em>activar</em>
    </Remate>
  </Frame>
)

const S10 = () => (
  <Frame theme="light" eyebrow="09 · SINERGIAS">
    <div className="cols s10">
      <div>
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
          <g stroke="#F47358" strokeWidth="1.5" opacity="0.55" fill="none">
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
  <Frame theme="dark" eyebrow="10 · EL TRABAJO INVISIBLE">
    <div className="cols s11">
      <div>
        <h1 className="t t-xl">
          Management &amp; <em>operaciones.</em>
        </h1>
        <Lead>
          El crecimiento crea complejidad. Gestionar es convertir esa complejidad en decisiones, responsables y proyectos.
        </Lead>
      </div>
      <ul className="verbs">
        {['PRIORIZAR', 'CONECTAR', 'NEGOCIAR', 'ORGANIZAR', 'DIRIGIR'].map((v) => (
          <li key={v}>{v}</li>
        ))}
        <li className="verb-last">CONVERTIR OPORTUNIDADES EN PROYECTOS</li>
      </ul>
    </div>
    <blockquote className="quote">
      “El creador no debería administrar personalmente todo lo que su <em>crecimiento</em> genera.”
    </blockquote>
  </Frame>
)

const cats = [
  ['ATENCIÓN', 'Publicidad · Brand deals · Afiliados'],
  ['CONOCIMIENTO', 'Cursos · Servicios · Consultoría · Conferencias'],
  ['COMUNIDAD', 'Eventos · Experiencias · Membresías'],
  ['PROPIEDAD', 'Productos · Marcas · Libros / IP'],
]

const S12 = () => (
  <Frame theme="light" eyebrow="11 · MONETIZACIÓN">
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
        <div className="cat" key={a}>
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
  <Frame theme="light" eyebrow="12 · CASO APLICADO">
    <div className="s13">
      <PhotoPlaceholder className="photo-tall" label="FOTO CASO" />
      <div className="s13-right">
        <h1 className="t t-md">
          Daniel Bonifaz: lo que se ve vs. lo que hay <em>detrás.</em>
        </h1>
        <Lead>Durante tres años trabajé detrás de su negocio. Mi trabajo nunca fue decirle solamente qué reel grabar.</Lead>
        <div className="duo duo-small">
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
        <Remate>
          El contenido genera oportunidades. Pero las oportunidades por sí solas no construyen una <em>empresa.</em>
        </Remate>
      </div>
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
  <Frame theme="light" eyebrow="13 · TU ENTRADA A LA INDUSTRIA">
    <div className="head">
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
    <Remate>
      Empieza identificando qué problemas disfrutas resolver. Esa puede ser una mejor <em>brújula</em> que intentar adivinar tu cargo.
    </Remate>
  </Frame>
)

const S15 = () => (
  <Frame theme="dark" className="closing">
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
    </div>
    <div className="close-foot">Karla Rodríguez · @karlarodriguez · karla@matizuno.com</div>
  </Frame>
)

export const SLIDES: (() => ReactNode)[] = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15]
