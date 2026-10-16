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
  safe = true,
}: {
  theme: Theme
  eyebrow?: string
  children: ReactNode
  className?: string
  chrome?: boolean
  safe?: boolean
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
      <div className={`slide-body ${safe ? 'safe' : ''}`}>{children}</div>
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
  <Frame theme="dark" className="cover" chrome={false} safe={false}>
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
      <div className="sP-pills">
        <div className="hot">Gestión Empresarial · PUCP</div>
        <div>+8 años junto a creadores y marcas personales</div>
        <div>Metodología propia para profesionalizar la Creator Economy en Latinoamérica</div>
      </div>
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
      <Lead>Cuando una persona convierte su talento, conocimiento, audiencia o reputación en valor económico a través de plataformas digitales.</Lead>
      <p className="sD3-note">No es simplemente “gente haciendo contenido”.</p>
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
  <Frame theme="light" eyebrow="04 · NO ES LO MISMO" className="sD4n">
    <div className="sD4-left">
      <h1 className="t t-xl">
        Influencer marketing <em>≠</em> Creator Economy.
      </h1>
    </div>
    <div className="sD4-cards">
      <div className="cmp cmp-old">
        <span className="small-label">INFLUENCER MARKETING</span>
        <p>Una forma de monetización.</p>
      </div>
      <div className="cmp cmp-new">
        <span className="small-label">CREATOR ECONOMY</span>
        <p>
          El negocio completo <em>alrededor del creador.</em>
        </p>
      </div>
    </div>
  </Frame>
)

const S_D5 = () => (
  <Frame theme="dark" eyebrow="05 · LA INDUSTRIA" className="stmt">
    <p className="stmt-t">
      La Creator Economy es la industria que convierte <em>talento, conocimiento, atención y confianza</em> en activos económicos.
    </p>
  </Frame>
)

const S_D6 = () => (
  <Frame theme="dark" eyebrow="06 · EL PRINCIPIO BÁSICO" className="stmt q">
    <p className="stmt-t">
      ¿Cuál es el <em>principio básico</em> de la Creator Economy?
    </p>
  </Frame>
)

const S_D7 = () => (
  <Frame theme="dark" eyebrow="07 · LO PRIMERO ES HUMANO" className="sD7n">
    <div className="sD7-left">
      <h1 className="t t-xl">
        El activo principal es <em>una persona.</em>
      </h1>
      <Lead>Antes de gestionar un negocio, entiende al humano que lo sostiene.</Lead>
    </div>
    <div className="bubA">La estructura no debe reemplazar al humano.</div>
    <div className="bubB">Debe permitir que su talento genere valor sin consumirlo.</div>
  </Frame>
)

const S_E1 = () => (
  <Frame theme="light" eyebrow="08 · PRIMERO LA ESENCIA" className="sE1">
    <div className="sE-left">
      <h1 className="t t-xl">
        Partimos de la esencia <em>humana.</em>
      </h1>
      <Lead>Con eso como base, trabajamos todo lo demás.</Lead>
    </div>
    <div className="vn vn1">
      <b>LO HUMANO</b>
      <span>esencia · confianza</span>
    </div>
    <div className="vn vn2">
      <b>LO EMPRESARIAL</b>
      <span>estrategia · negocio</span>
    </div>
    <div className="vn-c">
      MARCA PERSONAL
      <br />
      COMO NEGOCIO
    </div>
  </Frame>
)

const S_E2 = () => (
  <Frame theme="light" eyebrow="09 · EN ORDEN" className="sE2">
    <div className="sE-left">
      <h1 className="t t-xl">
        Primero la esencia. <em>Después las operaciones.</em>
      </h1>
    </div>
    <div className="pyr">
      <div className="py3">OPERACIONES</div>
      <div className="py2">ESTRATEGIA Y COMUNIDAD</div>
      <div className="py1">ESENCIA HUMANA</div>
    </div>
  </Frame>
)

const S_E3 = () => (
  <Frame theme="light" eyebrow="10 · UN ACTIVO DISTINTO" className="sE3">
    <div className="sE-left">
      <h1 className="t t-xl">
        No es lo mismo gestionar una empresa <em>de medios.</em>
      </h1>
    </div>
    <div className="sD4-cards">
      <div className="cmp cmp-old">
        <span className="small-label">UNA EMPRESA TRADICIONAL</span>
        <p>Se gestiona como empresa.</p>
      </div>
      <div className="cmp cmp-new">
        <span className="small-label">UNA EMPRESA DE MEDIOS</span>
        <p>
          El activo principal es <em>una persona.</em>
        </p>
      </div>
    </div>
  </Frame>
)

const S_T1 = () => (
  <Frame theme="light" eyebrow="13 · UNA MEJOR PREGUNTA" className="sT1">
    <div className="sT-left">
      <h1 className="t t-lg">
        Tu carrera no define dónde vas a terminar. <em>Te da herramientas para resolver problemas.</em>
      </h1>
    </div>
    <div className="orbs">
      {['Analizar', 'Ordenar', 'Comunicar', 'Vender', 'Conectar', 'Ejecutar'].map((x, i) => (
        <div key={x} className={i % 2 === 0 ? 'hot' : ''}>
          {x}
        </div>
      ))}
    </div>
  </Frame>
)

const S_T2 = () => (
  <Frame theme="light" eyebrow="14 · UNA MEJOR PREGUNTA" className="sT2">
    <div className="sT2-left">
      <span className="small-label">EN VEZ DE PREGUNTARTE</span>
      <p className="strike">¿Qué cargo quiero?</p>
      <h1 className="t t-xl">
        Pregúntate:
      </h1>
    </div>
    <div className="qlist">
      {['¿Qué problema sé resolver?', '¿Para quién ese problema es importante?', '¿En qué industria esa habilidad tiene valor?'].map((q, i) => (
        <div className="qrow" key={q}>
          <b className="tag">{String(i + 1).padStart(2, '0')}</b>
          <span className="box">{q}</span>
        </div>
      ))}
    </div>
  </Frame>
)

const S_T3 = () => (
  <Frame theme="light" eyebrow="15 · EL CAMINO" className="sT3">
    <div className="sT3-flow">
      {['Habilidad', 'Problema', 'Industria', 'Oportunidad'].map((x, i) => (
        <div key={x} className={`fb fb${i}`}>
          {x}
        </div>
      ))}
    </div>
    <p className="sT3-quote">
      “Mi carrera no me dio el nombre de mi puesto; me dio las herramientas con las que después <em>construí</em> ese puesto.”
    </p>
  </Frame>
)

const ecoN = ['Contenido', 'Comunidad', 'Propiedad intelectual', 'Experiencias', 'Negocio', 'Equipo']

const S6a = () => (
  <Frame theme="dark" eyebrow="17 · EL SISTEMA DETRÁS DEL TALENTO" className="s6a">
    <div className="s6a-left">
      <h1 className="t t-xl">
        El contenido es el motor. <em>El sistema multiplica su valor.</em>
      </h1>
      <Lead>Alrededor de su talento aparece un ecosistema completo que hay que conectar y dirigir.</Lead>
    </div>
    <svg viewBox="0 0 900 700" className="orbit-lines" aria-hidden="true">
      <g stroke="#ffb6a4" strokeWidth="2" opacity="0.5" strokeDasharray="2 9" strokeLinecap="round" fill="none">
        {ecoN.map((_, i) => {
          const a = (i * 60 - 90) * (Math.PI / 180)
          return <line key={i} x1="450" y1="350" x2={450 + 270 * Math.cos(a)} y2={350 + 270 * Math.sin(a)} />
        })}
      </g>
    </svg>
    <div className="orbit-core">
      <b>PERSONA</b>
      <span>talento</span>
    </div>
    {ecoN.map((x, i) => {
      const a = (i * 60 - 90) * (Math.PI / 180)
      return (
        <div key={x} className={`orbit-n ${i === 0 ? 'hot' : ''}`} style={{ left: 1260 + 270 * Math.cos(a) - 85, top: 500 + 270 * Math.sin(a) - 85 }}>
          {x}
        </div>
      )
    })}
  </Frame>
)

const S6b = () => (
  <Frame theme="dark" eyebrow="18 · LA LÓGICA" className="s6b">
    <h1 className="t t-xl s6b-t">
      Tres sistemas <em>ordenan todo.</em>
    </h1>
    <div className="tri">
      {[
        ['GENERAR VALOR', 'Sistema Editorial', 'Talento y conocimiento se vuelven contenido e ideas.'],
        ['CAPTURAR VALOR', 'Sistema de Comunidad', 'La atención se vuelve relación y confianza.'],
        ['ESCALAR VALOR', 'Sistema de Negocio', 'La confianza se vuelve productos, activos y empresa.'],
      ].map(([a, b, c], i) => (
        <div className="tri-w" key={a}>
          {i > 0 && <i>→</i>}
          <div className={`tri-c ${i === 2 ? 'hot' : ''}`}>
            <span className="small-label">{a}</span>
            <strong>{b}</strong>
            <p>{c}</p>
          </div>
        </div>
      ))}
    </div>
  </Frame>
)

const S6c = () => (
  <Frame theme="dark" eyebrow="19 · DE ECOSISTEMA A CARRERAS" className="stmt s6c">
    <p className="stmt-t">
      Mientras más crece el creador, menos puede depender solo de <em>crear contenido.</em>
    </p>
    <p className="stmt-s">Hay una economía completa construyéndose alrededor del talento. Alguien tiene que diseñarla, operarla y hacerla crecer.</p>
    <div className="tagsrow big">
      {['Estrategas', 'Productores', 'Operadores', 'Community leads', 'Comerciales', 'Analistas', 'Managers'].map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  </Frame>
)

const cats = [
  ['ATENCIÓN', 'Monetizar alcance', 'Publicidad · Brand deals · Afiliados'],
  ['CONOCIMIENTO', 'Monetizar expertise', 'Servicios · Consultoría · Cursos'],
  ['COMUNIDAD', 'Monetizar pertenencia', 'Membresías · Eventos · Suscripciones'],
  ['PROPIEDAD', 'Monetizar activos', 'Productos · Marcas · Licencias'],
]

const S12 = () => (
  <Frame theme="light" eyebrow="20 · MONETIZACIÓN" className="s12">
    <div className="head">
      <span className="small-label">¿DÓNDE APARECE EL NEGOCIO?</span>
      <h1 className="t t-lg" style={{ marginTop: 14 }}>
        La atención no es el negocio. <em>Es la materia prima.</em>
      </h1>
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
      Mientras más formas de capturar valor construyes, más necesitas <em>sistemas.</em>
    </Remate>
  </Frame>
)

const SMa = () => (
  <Frame theme="light" eyebrow="21 · DETECTAR VALOR" className="sMa">
    <div className="sMa-left">
      <h1 className="t t-xl">
        Crecer no es aceptar más oportunidades. <em>Es saber cuáles multiplican valor.</em>
      </h1>
      <Lead>Ver conexiones es estrategia. Elegir cuáles construir requiere criterio.</Lead>
    </div>
    <svg viewBox="0 0 1920 1080" className="hubR-lines" aria-hidden="true">
      <g stroke="#F47358" strokeWidth="2" opacity="0.55" strokeDasharray="2 9" strokeLinecap="round" fill="none">
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i * 72 - 90) * (Math.PI / 180)
          return <line key={i} x1="1385" y1="540" x2={1385 + 270 * Math.cos(a)} y2={540 + 270 * Math.sin(a)} />
        })}
      </g>
    </svg>
    <div className="hubR-c">
      <b>CREADOR</b>
    </div>
    {[
      ['MARCA', 'distribución'],
      ['OTRO CREADOR', 'nuevas audiencias'],
      ['EXPERTO', 'producto'],
      ['MEDIO O EVENTO', 'exposición'],
      ['EMPRESA', 'nuevos modelos'],
    ].map(([a, b], i) => {
      const k = [0, 1, 4, 3, 2][i] // orden visual
      const ang = (k * 72 - 90) * (Math.PI / 180)
      return (
        <div key={a} className="hubR-n" style={{ left: 1385 + 270 * Math.cos(ang) - 125, top: 540 + 270 * Math.sin(ang) - 42 }}>
          <b>{a}</b>
          <span>{b}</span>
        </div>
      )
    })}
  </Frame>
)

const pasosM = [
  ['DETECTAR', '¿vale la pena?'],
  ['PRIORIZAR', '¿encaja con la estrategia?'],
  ['NEGOCIAR', '¿qué gana cada parte?'],
  ['DISEÑAR', '¿cómo se vuelve proyecto?'],
  ['OPERAR', '¿quién hace qué y cuándo?'],
  ['MEDIR', '¿generó valor?'],
]

const SMb = () => (
  <Frame theme="light" eyebrow="22 · CONVERTIR VALOR" className="sMb">
    <div className="sMb-left">
      <h1 className="t t-xl">
        Una oportunidad todavía no es <em>un proyecto.</em>
      </h1>
      <Lead>Alguien tiene que convertirla en decisión, acuerdo, presupuesto y ejecución.</Lead>
      <Remate>Management es transformar oportunidades dispersas en proyectos que sí construyen negocio.</Remate>
    </div>
    <div className="steps6">
      {pasosM.map(([a, b], i) => (
        <div key={a} className={`st ${i === 5 ? 'hot' : ''}`}>
          <b className="tag">{a}</b>
          <span className="box">{b}</span>
        </div>
      ))}
    </div>
  </Frame>
)

const caminos = [
  ['DIRECCIÓN ESTRATÉGICA DE NEGOCIO', 'Decidir qué construir y hacia dónde crecer.', 'Business Strategist · Growth · Partnerships'],
  ['MANAGEMENT & OPERACIONES', 'Convertir oportunidades en proyectos que sí funcionan.', 'Talent Manager · Project Manager · Chief of Staff'],
  ['PRODUCCIÓN', 'Convertir una idea en una experiencia que la audiencia consuma.', 'Producer · Creative Producer · Director'],
  ['ESTRATEGIA DE CONTENIDO', 'Convertir talento e ideas en atención y autoridad.', 'Content Strategist · Copywriter · Scriptwriter'],
]

const S14 = () => (
  <Frame theme="light" eyebrow="24 · TU ENTRADA A LA INDUSTRIA" className="s14">
    <div className="s14-top">
      <h1 className="t t-lg">
        ¿Dónde podrías construir carrera <em>tú?</em>
      </h1>
      <Lead>No todas las carreras de esta industria ocurren frente a una cámara.</Lead>
    </div>
    <div className="paths">
      {caminos.map(([a, b, d], i) => (
        <div className="path" key={a}>
          <span className="path-n">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <b>{a}</b>
            <p className="p-solve">{b}</p>
            <p className="p-roles">{d}</p>
          </div>
        </div>
      ))}
    </div>
    <Remate>
      Tu lugar puede estar en <em>generar valor, capturarlo o hacer que escale.</em>
    </Remate>
  </Frame>
)


const territorios = [
  ['ESTRATEGIA', 'decidir qué construir'],
  ['GESTIÓN', 'hacer que funcione'],
  ['NEGOCIO', 'capturar valor'],
  ['LECTURA HUMANA', 'proteger la esencia'],
]

const S2 = () => (
  <Frame theme="light" eyebrow="12 · QUIÉN ESTÁ HABLANDO" className="s2" safe={false}>
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


const S4 = () => (
  <Frame theme="dark" eyebrow="11 · LA OPORTUNIDAD YA EXISTE" className="s4">
    <div className="s4-top">
      <h1 className="t t-xl">
        Esto ya es una <em>industria.</em>
      </h1>
      <Lead>Se estima que el mercado global pasaría de US$250 mil millones a US$480 mil millones entre 2023 y 2027.</Lead>
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
      <p className="note">Perú aún no mide públicamente el tamaño total de su Creator Economy. La inversión digital y social indica hacia dónde se mueven la atención y los presupuestos.</p>
      <p className="source">Fuentes: Goldman Sachs · IAB Spain · IAB Perú + PwC</p>
    </div>
  </Frame>
)


const S5 = () => (
  <Frame theme="light" eyebrow="16 · AMPLIAR EL MAPA" className="s5">
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


const S13 = () => (
  <Frame theme="light" eyebrow="23 · CASO APLICADO" className="s13" safe={false}>
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



const S15 = () => (
  <Frame theme="dark" className="closing" chrome={false} safe={false}>
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
  <Frame theme="dark" className="final" chrome={false} safe={false}>
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


export const SLIDES: (() => ReactNode)[] = [S1, S_P, S_D3, S_D4, S_D5, S_D6, S_D7, S_E1, S_E2, S_E3, S4, S2, S_T1, S_T2, S_T3, S5, S6a, S6b, S6c, S12, SMa, SMb, S13, S14, S15, S20]
