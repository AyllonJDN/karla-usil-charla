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
  <Frame theme="light" eyebrow="01 · PRESENTACIÓN" className="sP">
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
    <Person cls="pp1" name="Cynthia · maquilladora" style={{ left: 960, top: 500 }} />
    <Person cls="pp2" src="daniel.png" name="Daniel Bonifaz" style={{ left: 1250, top: 490 }} />
    <Person cls="pp3" src="wendy.png" name="Wendy Wünder" style={{ left: 1540, top: 500 }} />
    <Person cls="pp4" src="flavio-galvez.png" name="Flavio Gálvez" style={{ left: 1105, top: 780 }} />
    <Person cls="pp5" src="flavio-sanchez.png" name="Flavio Sánchez" style={{ left: 1450, top: 790 }} />
  </Frame>
)

const S_D3 = () => (
  <Frame theme="light" eyebrow="02 · QUÉ ES LA CREATOR ECONOMY" className="sD3">
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
  <Frame theme="light" eyebrow="03 · NO ES LO MISMO" className="sD4">
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
  <Frame theme="dark" eyebrow="04 · LA INDUSTRIA" className="sD5">
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
    <div className="eyebrow-r">05 · EL PRINCIPIO BÁSICO</div>
    <div className="sD6-body">
      <span className="sD6-q">?</span>
      <h1 className="t t-xl">
        ¿Cuál es el <em>principio básico</em> de la Creator Economy?
      </h1>
    </div>
  </Frame>
)

const S_D7 = () => (
  <Frame theme="dark" eyebrow="06 · LO PRIMERO ES HUMANO" className="sD7">
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
  <Frame theme="light" eyebrow="07 · PRIMERO LA ESENCIA" className="sE">
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
  <Frame theme="light" eyebrow="09 · QUIÉN ESTÁ HABLANDO" className="s2">
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
  <Frame theme="light" eyebrow="10 · UNA MEJOR PREGUNTA" className="sT">
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
  <Frame theme="dark" eyebrow="08 · LA OPORTUNIDAD YA EXISTE" className="s4">
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
  <Frame theme="light" eyebrow="11 · AMPLIAR EL MAPA" className="s5">
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
  <Frame theme="dark" eyebrow="12 · LA SLIDE MADRE" className="s6">
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
  <Frame theme="light" eyebrow="13 · ANTES DE PUBLICAR">
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
  <Frame theme="light" eyebrow="14 · DIRIGIR CONTENIDO">
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
  <Frame theme="dark" eyebrow="15 · COMUNIDAD" className="s9">
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
  <Frame theme="light" eyebrow="16 · SINERGIAS">
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
  <Frame theme="dark" eyebrow="17 · EL TRABAJO INVISIBLE" className="s11">
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
  <Frame theme="light" eyebrow="18 · MONETIZACIÓN" className="s12">
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
  <Frame theme="light" eyebrow="19 · CASO APLICADO" className="s13">
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
  <Frame theme="light" eyebrow="20 · TU ENTRADA A LA INDUSTRIA" className="s14">
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

export const SLIDES: (() => ReactNode)[] = [S1, S_P, S_D3, S_D4, S_D5, S_D6, S_D7, S_E, S4, S2, S3, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S20]
