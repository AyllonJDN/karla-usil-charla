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


const Socials = () => (
  <span className="socials">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Instagram">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-label="TikTok">
      <path d="M15 3v11a4 4 0 1 1-4-4M15 3c.3 2.6 1.9 4.2 5 4.4" />
    </svg>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="YouTube">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9l5 3-5 3z" fill="currentColor" />
    </svg>
  </span>
)

const Person = ({ src, name, cls, style }: { src?: string; name: string; cls: string; style: CSSProperties }) => (
  <div className={`person ${cls}`} style={style}>
    <div className="p-photo">
      <div className="p-disc" />
      {src && <img src={img(src)} alt={name} />}
    </div>
    {!src && <span className="p-ph">FOTO<br />CYNTHIA</span>}
    <div className="p-name">{name}</div>
  </div>
)

const S_P = () => (
  <Frame theme="light" eyebrow="02 · PRESENTACIÓN" className="sP">
    <div className="sP-left">
      <h1 className="t t-lg">
        Karla <em>Rodríguez.</em>
      </h1>
      <p className="sP-role">Directora Estratégica de Creadores de Contenido</p>
      <p className="sP-p">
        Formada en Gestión Empresarial en la <b>PUCP</b>, pasó por entornos corporativos, tecnología, operaciones y negocios digitales antes de dedicarse, hace más de <b>ocho años</b>, a trabajar de cerca con creadores y marcas personales: transformar talento, autoridad y contenido en negocios más ordenados, sostenibles y escalables.
      </p>
      <div className="sP-card">
        Su enfoque combina estrategia, gestión, monetización, equipos, comunidad y lectura humana. Hoy desarrolla una <b>metodología propia</b> para profesionalizar la Creator Economy en Latinoamérica.
      </div>
      <Remate>
        Hoy busca instalar una conversación más empresarial: cuándo una marca personal deja de ser solo contenido y empieza a necesitar <em>estructura.</em>
      </Remate>
    </div>
    <div className="sP-logos">
      <div className="lg-group">
        <span className="small-label">FORMACIÓN</span>
        <div className="lg-row">
          <img src={img('logo-pucp.png')} alt="PUCP" style={{ height: 46 }} />
          <img src={img('logo-tec.png')} alt="Tecnológico de Monterrey" style={{ height: 44 }} />
        </div>
      </div>
      <div className="lg-group">
        <span className="small-label">6 AÑOS EN LOGÍSTICA</span>
        <div className="lg-row">
          <img src={img('logo-promart.png')} alt="Promart" style={{ height: 52 }} />
          <span className="lg-ph">LOGO GESTNEXT</span>
          <img src={img('logo-telefonica.png')} alt="Telefónica" style={{ height: 38 }} />
        </div>
      </div>
    </div>
    <div className="small-label sP-label">8 AÑOS EN CREACIÓN DE CONTENIDO</div>
    <Person cls="pp1" name="Cynthia · maquilladora" style={{ left: 990, top: 470 }} />
    <Person cls="pp2" src="daniel.png" name="Daniel Bonifaz" style={{ left: 1280, top: 470 }} />
    <Person cls="pp3" src="wendy.png" name="Wendy Wünder" style={{ left: 1570, top: 470 }} />
    <Person cls="pp4" src="flavio-galvez.png" name="Flavio Gálvez" style={{ left: 1135, top: 780 }} />
    <Person cls="pp5" src="flavio-sanchez.png" name="Flavio Sánchez" style={{ left: 1425, top: 780 }} />
  </Frame>
)

const S_D3 = () => (
  <Frame theme="light" eyebrow="03 · QUÉ ES LA CREATOR ECONOMY" className="sD3">
    <div className="sD3-left">
      <h1 className="t t-xl">
        ¿Qué es la <em>Creator Economy?</em>
      </h1>
      <Lead>
        Es el ecosistema económico que se forma cuando una persona convierte su talento, conocimiento, audiencia o reputación en valor económico a través de medios y plataformas digitales.
      </Lead>
      <Remate>
        No es simplemente “gente haciendo <em>contenido.</em>”
      </Remate>
    </div>
    <div className="sD3-disc">
      <b>VALOR</b>
      <span>económico</span>
    </div>
    <Float className="f1">Talento</Float>
    <Float className="f2">Conocimiento</Float>
    <Float className="f3">Audiencia</Float>
    <Float className="f4">Reputación</Float>
  </Frame>
)

const S_D4 = () => (
  <Frame theme="light" eyebrow="04 · NO ES LO MISMO" className="sD4">
    <div className="sD4-left">
      <h1 className="t t-xl">
        Influencer marketing <em>≠</em> Creator Economy.
      </h1>
      <Lead>Una es una forma de monetización. La otra es todo el negocio que se construye alrededor del creador.</Lead>
    </div>
    <div className="ring-big">
      <span className="small-label">CREATOR ECONOMY</span>
      <p>Estudia cómo el creador construye un negocio alrededor de su capacidad de generar valor.</p>
    </div>
    <div className="ring-small">
      <span className="small-label">INFLUENCER MARKETING</span>
      <p>Una marca paga por acceder a la influencia o audiencia de un creador.</p>
    </div>
  </Frame>
)

const S_D5 = () => (
  <Frame theme="dark" eyebrow="05 · LA INDUSTRIA" className="sD5">
    <p className="sD5-pre">La Creator Economy es la industria que convierte</p>
    <div className="sD5-words">
      {['talento', 'conocimiento', 'atención', 'confianza'].map((w) => (
        <div key={w}>
          <i />
          <span>{w}</span>
        </div>
      ))}
    </div>
    <div className="sD5-orb">
      <span>en</span>
      <b>activos económicos.</b>
    </div>
  </Frame>
)

const S_D6 = () => (
  <Frame theme="dark" className="sD6" chrome={false}>
    <div className="close-panel" />
    <div className="blob" />
    <Cut src="karla-2.png" />
    <div className="close-brand">
      <span>KARLA</span> RODRÍGUEZ
    </div>
    <div className="eyebrow-r">06 · EL PRINCIPIO BÁSICO</div>
    <div className="sD6-body">
      <span className="sD6-q">?</span>
      <h1 className="t t-xl">
        ¿Cuál es el <em>principio básico</em> de la Creator Economy?
      </h1>
    </div>
  </Frame>
)

const S_D7 = () => (
  <Frame theme="dark" eyebrow="07 · LO PRIMERO ES HUMANO" className="sD7">
    <div className="sD7-left">
      <h1 className="t t-xl">
        El activo principal es <em>una persona.</em>
      </h1>
      <Lead>Antes de gestionar un negocio, tienes que entender al humano que lo sostiene.</Lead>
    </div>
    <div className="sD7-rings" />
    <div className="sD7-card">
      <span className="small-label">LA REGLA</span>
      <p>
        La estructura no debe reemplazar al humano. Debe permitir que su talento genere valor sin que el negocio termine <em>consumiéndolo.</em>
      </p>
    </div>
  </Frame>
)

const S_E = () => (
  <Frame theme="light" eyebrow="08 · PRIMERO LA ESENCIA" className="sE">
    <div className="sE-left">
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
    <div className="venn v1">
      <b>LO HUMANO</b>
      <span>esencia · confianza · conexión</span>
    </div>
    <div className="venn v2">
      <b>LO EMPRESARIAL</b>
      <span>estrategia · negocio · operaciones</span>
    </div>
    <Float className="vc">Marca personal como negocio</Float>
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
  <Frame theme="light" eyebrow="10 · QUIÉN ESTÁ HABLANDO" className="s2">
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
  <Frame theme="light" eyebrow="11 · UNA MEJOR PREGUNTA" className="sT">
    <div className="sT-left">
      <h1 className="t t-lg">
        Tu carrera no define dónde vas a terminar. <em>Te da herramientas para resolver problemas.</em>
      </h1>
      <Lead>La oportunidad aparece cuando conectas lo que sabes hacer con un problema que alguien necesita resolver.</Lead>
      <div className="chips">
        {['Analizar', 'ordenar', 'comunicar', 'vender', 'conectar', 'ejecutar'].map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </div>
    <div className="sT-right">
      <div className="cmp cmp-old">
        <span className="small-label">EN VEZ DE PREGUNTARTE</span>
        <p>¿Qué cargo quiero?</p>
      </div>
      <div className="cmp cmp-new">
        <span className="small-label">PREGÚNTATE</span>
        <ol>
          <li>
            ¿Qué <em>problema</em> sé resolver?
          </li>
          <li>¿Para quién ese problema es importante?</li>
          <li>¿En qué industria esa habilidad tiene valor?</li>
        </ol>
      </div>
    </div>
    <div className="frame-flow">
      {['Habilidad', 'Problema', 'Industria', 'Oportunidad'].map((x, i) => (
        <span key={x} className={i === 3 ? 'hot' : ''}>
          {x}
        </span>
      ))}
    </div>
    <Remate className="sT-quote">
      “Mi carrera no me dio el nombre de mi puesto; me dio las herramientas con las que después <em>construí</em> ese puesto.”
    </Remate>
  </Frame>
)

const S4 = () => (
  <Frame theme="dark" eyebrow="09 · LA OPORTUNIDAD YA EXISTE" className="s4">
    <div className="s4-top">
      <h1 className="t t-xl">
        Esto ya es una <em>industria.</em>
      </h1>
      <Lead>
        La Creator Economy dejó de ser un fenómeno de redes para convertirse en una industria. Se estima que el mercado global pasaría de US$250 mil millones a US$480 mil millones entre 2023 y 2027.
      </Lead>
    </div>
    <div className="bub b1">
      <span className="small-label">MUNDO · 2027</span>
      <b>US$480B</b>
      <span>mercado potencial de la Creator Economy.</span>
    </div>
    <div className="bub b2">
      <span className="small-label">EE. UU. · 2025</span>
      <b>US$37.1B</b>
      <span>invertidos directamente en publicidad con creadores.</span>
    </div>
    <div className="bub hot b3">
      <span className="small-label">ESPAÑA · 2025</span>
      <b>≈ US$179M</b>
      <span>invertidos en influencers. +100% vs. 2023.</span>
    </div>
    <div className="bub hot b4">
      <span className="small-label">PERÚ · 2025</span>
      <b>≈ US$147M</b>
      <span>invertidos en Social Ads (US$326M en publicidad digital total).</span>
    </div>
    <div className="note-row">
      <p className="note">
        Perú todavía no cuenta con una medición pública del tamaño total de su Creator Economy. La inversión digital y social funciona aquí como indicador de hacia dónde se están desplazando la atención y los presupuestos.
      </p>
      <p className="source">Fuentes: Goldman Sachs · IAB Spain · IAB Perú + PwC</p>
    </div>
  </Frame>
)

const S5 = () => (
  <Frame theme="light" eyebrow="12 · AMPLIAR EL MAPA" className="s5">
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

const eco = [
  ['COMUNIDAD', 'Discord · WhatsApp · membresías · eventos · lives'],
  ['PROPIEDAD INTELECTUAL', 'formatos · metodologías · cursos · libros · workshops'],
  ['EXPERIENCIAS', 'charlas · conferencias · eventos · meet & greets'],
  ['NEGOCIO', 'servicios · productos · marcas · licencias · ecommerce'],
  ['COMERCIAL', 'brand deals · sponsors · partnerships · afiliados'],
  ['EQUIPO', 'estrategia · producción · edición · ventas · operaciones · finanzas · management'],
]

const logica = [
  ['GENERAR VALOR', 'Sistema Editorial', 'Transforma talento y conocimiento en contenido, formatos, ideas y propiedad intelectual.'],
  ['CAPTURAR VALOR', 'Sistema de Comunidad', 'Convierte atención en relación, confianza, conversación y pertenencia.'],
  ['ESCALAR VALOR', 'Sistema de Negocio', 'Convierte esa confianza en productos, servicios, experiencias, activos y empresa.'],
]

const S6 = () => (
  <Frame theme="dark" eyebrow="13 · EL SISTEMA DETRÁS DEL TALENTO" className="s6">
    <div className="s6-left">
      <h1 className="t t-lg">
        El contenido es el motor. <em>El sistema multiplica su valor.</em>
      </h1>
      <Lead>
        Un creador puede empezar publicando en una plataforma. Cuando crece, alrededor de su talento aparece un ecosistema completo que hay que conectar y dirigir.
      </Lead>
      <div className="s6-quote">
        Mientras más crece el creador, menos puede depender solo de crear contenido. Necesita un <em>sistema</em> que conecte todo lo que ocurre alrededor de su talento.
      </div>
      <div className="s6-bridge">
        Y cada uno de esos bloques necesita personas: estrategas, productores, operadores, community leads, comerciales, analistas, managers, financieros, abogados, especialistas en partnerships. <b>Ahí aparecen las carreras dentro de la Creator Economy.</b>
      </div>
    </div>
    <div className="eco-rings" />
    {eco.map(([a, b], i) => (
      <div key={a} className={`eco-node en${i}`}>
        <b>{a}</b>
        <span>{b}</span>
      </div>
    ))}
    <div className="eco-core">
      <b>PERSONA / TALENTO</b>
      <span>conocimiento · creatividad · reputación · confianza</span>
    </div>
    <div className="eco-content">
      <b>CONTENIDO</b>
      <span>YouTube · TikTok · Instagram · LinkedIn · Podcast · Newsletter · Streaming</span>
    </div>
    <div className="logic">
      {logica.map(([a, b, c], i) => (
        <div className="lg-wrap" key={a}>
          {i > 0 && <i>→</i>}
          <div className={`lg-card ${i === 2 ? 'hot' : ''}`}>
            <span className="small-label">{a}</span>
            <strong>{b}</strong>
            <p>{c}</p>
          </div>
        </div>
      ))}
    </div>
  </Frame>
)

const pasosM = [
  ['DETECTAR', '¿vale la pena?'],
  ['PRIORIZAR', '¿encaja con la estrategia?'],
  ['NEGOCIAR', '¿qué gana cada parte?'],
  ['DISEÑAR', '¿cómo se convierte en proyecto?'],
  ['OPERAR', '¿quién hace qué y cuándo?'],
  ['MEDIR', '¿generó valor?'],
]

const SM = () => (
  <Frame theme="light" eyebrow="15 · DETECTAR Y CONVERTIR VALOR" className="sM">
    <h1 className="t t-lg sM-title">
      Las oportunidades <em>no se ejecutan solas.</em>
    </h1>
    <div className="sM-l">
      <span className="small-label">PARTE 1 · DETECTAR VALOR</span>
      <p className="sM-h">Crecer no es aceptar más oportunidades. Es aprender a reconocer cuáles multiplican valor.</p>
      <p className="sM-c">Ver conexiones es estrategia. Elegir cuáles construir requiere criterio.</p>
    </div>
    <div className="hub">
      <svg viewBox="0 0 820 340" className="hub-lines" aria-hidden="true">
        <g stroke="#F47358" strokeWidth="2" opacity="0.6" strokeDasharray="2 9" strokeLinecap="round" fill="none">
          <line x1="410" y1="195" x2="135" y2="60" />
          <line x1="410" y1="195" x2="685" y2="60" />
          <line x1="410" y1="195" x2="135" y2="285" />
          <line x1="410" y1="195" x2="685" y2="285" />
          <line x1="410" y1="195" x2="410" y2="45" />
        </g>
      </svg>
      <div className="hub-c">
        <b>CREADOR</b>
        <span>audiencia · confianza · posicionamiento</span>
      </div>
      <div className="hub-n h1"><b>MARCA</b><span>distribución / partnership</span></div>
      <div className="hub-n h2"><b>OTRO CREADOR</b><span>nuevas audiencias / formatos</span></div>
      <div className="hub-n h3"><b>EXPERTO</b><span>conocimiento / producto</span></div>
      <div className="hub-n h4"><b>MEDIO O EVENTO</b><span>reputación / exposición</span></div>
      <div className="hub-n h5"><b>EMPRESA</b><span>nuevos modelos de negocio</span></div>
    </div>
    <div className="sM-r">
      <span className="small-label">PARTE 2 · CONVERTIR VALOR</span>
      <p className="sM-h">Una oportunidad todavía no es un proyecto.</p>
      <p className="sM-b">Alguien tiene que convertir el “podríamos hacer algo juntos” en una decisión, un acuerdo, un presupuesto, responsables y ejecución.</p>
    </div>
    <div className="seq">
      {pasosM.map(([a, b], i) => (
        <div key={a} className={`seq-i ${i === 5 ? 'hot' : ''}`}>
          <em>{String(i + 1).padStart(2, '0')}</em>
          <div>
            <b>{a}</b>
            <span>{b}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="sM-strip">
      <p className="s1">Management es transformar oportunidades dispersas en proyectos que sí construyen negocio.</p>
      <p className="s2">
        No todas las carreras dentro de la Creator Economy ocurren frente a una cámara. Algunas consisten en ver posibilidades que otros no ven y <em>convertirlas en realidad.</em>
      </p>
      <div className="tagsrow">
        {['Partnerships', 'Business Development', 'Talent Management', 'Project Management', 'Operaciones', 'Comercial', 'Producción ejecutiva', 'Estrategia'].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  </Frame>
)

const cats = [
  ['ATENCIÓN', 'Monetizar alcance', 'Publicidad · Brand deals · Afiliados · Revenue de plataformas'],
  ['CONOCIMIENTO', 'Monetizar expertise', 'Servicios · Consultoría · Cursos · Conferencias · Workshops'],
  ['COMUNIDAD', 'Monetizar pertenencia y acceso', 'Membresías · Eventos · Experiencias · Suscripciones'],
  ['PROPIEDAD', 'Monetizar activos', 'Productos · Marcas · Formatos · Libros · Licencias · IP'],
]

const S12 = () => (
  <Frame theme="light" eyebrow="14 · MONETIZACIÓN" className="s12">
    <div className="head">
      <h1 className="t t-lg">
        ¿Dónde aparece el negocio? <em>La atención no es el negocio. Es la materia prima.</em>
      </h1>
      <Lead>El negocio aparece cuando el valor, la confianza y el conocimiento encuentran una forma de capturarse.</Lead>
    </div>
    <div className="cats">
      {cats.map(([a, s, b], i) => (
        <div className={`cat c${i}`} key={a}>
          <span className="cat-n">{String(i + 1).padStart(2, '0')}</span>
          <b>{a}</b>
          <i>{s}</i>
          <p>{b}</p>
        </div>
      ))}
    </div>
    <Remate>
      Mientras más formas de capturar valor construyes, más necesitas <em>sistemas</em> para sostenerlas.
      <span className="rem-tags">Estrategia · Editorial · Comunidad · Comercial · Finanzas · Operaciones · Management</span>
    </Remate>
  </Frame>
)

const S13 = () => (
  <Frame theme="light" eyebrow="16 · CASO APLICADO" className="s13">
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


const caminos = [
  ['DIRECCIÓN ESTRATÉGICA DE NEGOCIO', 'Decidir qué construir y hacia dónde crecer.', 'Modelo de negocio · monetización · nuevas líneas · partnerships · posicionamiento · crecimiento', 'Business Strategist · Growth · Business Development · Partnerships · Creator Business Director'],
  ['MANAGEMENT & OPERACIONES', 'Convertir oportunidades en proyectos que sí funcionan.', 'Priorizar · negociar · coordinar · presupuestar · organizar equipos · procesos · ejecución', 'Talent Manager · Project Manager · Operations Manager · Account Manager · Chief of Staff'],
  ['PRODUCCIÓN', 'Convertir una idea en una experiencia que la audiencia pueda consumir.', 'Producción audiovisual · dirección creativa · edición · fotografía · sonido · eventos · streaming', 'Producer · Creative Producer · Director · Editor · Production Manager'],
  ['ESTRATEGIA DE CONTENIDO', 'Convertir conocimiento, talento e ideas en atención y autoridad.', 'Investigación · narrativa · formatos · guiones · distribución · análisis · posicionamiento editorial', 'Content Strategist · Editorial Strategist · Copywriter · Scriptwriter · Social Media Strategist'],
]

const S14 = () => (
  <Frame theme="light" eyebrow="17 · TU ENTRADA A LA INDUSTRIA" className="s14">
    <div className="s14-top">
      <h1 className="t t-lg">
        ¿Dónde podrías construir carrera <em>tú?</em>
      </h1>
      <Lead>No necesitas ser creador para trabajar en esta industria. Puedes construir carrera haciendo que el talento se convierta en negocio.</Lead>
    </div>
    <div className="paths">
      {caminos.map(([a, b, c, d], i) => (
        <div className="path" key={a}>
          <span className="path-n">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <b>{a}</b>
            <p className="p-solve">{b}</p>
            <p className="p-does">{c}</p>
            <p className="p-roles">
              <u>Roles posibles</u> {d}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Remate>
      No empieces preguntándote qué cargo quieres. Identifica qué parte del sistema disfrutas construir: tu lugar puede estar en <em>generar valor, capturarlo o hacer que escale.</em>
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
      <div className="close-foot">
        <Socials /> @karlarodrik · karla@matizuno.com
      </div>
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

export const SLIDES: (() => ReactNode)[] = [S1, S_P, S_D3, S_D4, S_D5, S_D6, S_D7, S_E, S4, S2, S3, S5, S6, S12, SM, S13, S14, S15, S20]
