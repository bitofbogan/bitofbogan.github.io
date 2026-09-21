// data/m4.js
const moduleInfo = {
  id: 4,
  title: "Ser social y sociedad",
  badge: "Módulo 4"
};

const questionBank = [
  {
    id: 1,
    type: "choice",
    prompt: "¿A qué concepto hace referencia el hecho de que en un país o cultura sea común un alimento mientras que en otro puede estar prohibido por motivos religiosos?",
    image: null,
    hint: "Piensa en cómo las distintas culturas interpretan de forma particular prácticas cotidianas como la alimentación.",
    correct: "Diversidad cultural.",
    distractors: [
      "Jerarquía de valores.",
      "Principios culturales.",
      "Normas morales."
    ],
    explanation: "La diversidad cultural es la manifestación natural de los múltiples contextos socioculturales en el mundo; una práctica común como la preparación y consumo de ciertos alimentos adquiere significados, restricciones o adaptaciones distintas según las creencias de cada comunidad."
  },
  {
    id: 2,
    type: "choice",
    prompt: "¿Cuáles son las 4 formas de organización que posee toda cultura y sociedad?",
    image: null,
    hint: "Toda sociedad suele coordinar cuatro aspectos básicos en relación a los recursos, el liderazgo, las creencias y las expectativas sociales.",
    correct: "Social, económica, política y religiosa.",
    distractors: [
      "Gubernamental, económica, religiosa y relacional.",
      "Financiera, gubernamental, social y religiosa.",
      "Social, eclesiástica, política y económica."
    ],
    explanation: "Toda sociedad se organiza de acuerdo a su liderazgo (política), gestión de recursos y actividades productivas (económica), expectativas del grupo (social) y creencias (religiosa)."
  },
  {
    id: 3,
    type: "choice",
    prompt: "¿Cuál es la característica principal del estado-nación?",
    image: null,
    hint: "Distingue cómo se delimita el espacio geográfico de los países modernos y el alcance de sus leyes sobre los ciudadanos.",
    correct: "Territorio claramente definido y gobierno con límites de poder aplicable a toda la población.",
    distractors: [
      "Territorio limitado por fronteras abiertas al comercio y gobierno centralizado en la república.",
      "Fronteras limitadas por tratados internacionales y gobierno elegido por medio del voto.",
      "Fronteras claramente delimitadas y gobierno democrático."
    ],
    explanation: "El estado-nación se fundamenta en fronteras físicas bien delimitadas y en un aparato de gobierno que ejerce facultades y leyes aplicables a todas las personas dentro de su demarcación."
  },
  {
    id: 4,
    type: "classification",
    prompt: "Clasifica los siguientes enunciados como <b>práctica social</b> o como <b>contexto sociocultural</b>:",
    image: null,
    hint: "Una práctica social es una acción generalizada que llevan a cabo personas en múltiples grupos sociales; el contexto sociocultural es la acción específica en la que un grupo realiza una práctica.",
    categories: ["Práctica social", "Contexto sociocultural"],
    items: [
      { text: "Celebración de las Posadas en diciembre.", correct: "Práctica social" },
      { text: "Fiestas en el santuario del Niño Pá el 2 de febrero en Xochimilco.", correct: "Contexto sociocultural" },
      { text: "Conmemoración de la Pascua entre la comunidad judía de Zacatecas.", correct: "Contexto sociocultural" },
      { text: "Realización de fiestas en relación a la muerte en últimos días de octubre y primeros de noviembre.", correct: "Práctica social" },
      { text: "Fiestas de independencia de México en septiembre como la ceremonia del Grito y la verbena popular.", correct: "Contexto sociocultural" }
    ],
    explanation: "Acciones como pedir calavera o festejar posadas decembrinas son actividades que ocurren en múltiples sociedades de distintas formas; en cambio, las festividades en Xochimilco, la comunidad judía tapatía o los festejos patrios mexicanos representan el entorno social e histórico específico de un solo grupo."
  },
  {
    id: 5,
    type: "choice",
    prompt: "¿A qué término se hace referencia cuando las normas morales se fundan en algo extraño a la persona humana?",
    image: null,
    hint: "Es el concepto que define cuando una persona rige su conducta siguiendo mandatos ajenos en lugar de su propia deliberación.",
    correct: "Heteronomía.",
    distractors: [
      "Autonomía.",
      "Obligación.",
      "Obligatoriedad."
    ],
    explanation: "La heteronomía ocurre cuando las normas y pautas de comportamiento provienen de una fuente externa al individuo (leyes impuestas, dogmas o mandatos familiares) y se acatan sin una reflexión ética ni decisión libre y propia."
  },
  {
    id: 6,
    type: "match_columns",
    prompt: "Relaciona los tipos de sociedad con la institución política que corresponda.",
    pairs: [
      { left: "Recolectores", right: "Forman parte de estados más grandes que los dominan; el jefe gana su puesto por sabiduría o fuerza militar." },
      { left: "Agricultores", right: "Gobierno bien diferenciado bajo la tutela de un rey o emperador; los ancianos o matriarcas conservan gran influencia." },
      { left: "Sociedad industrializada", right: "Democracia o monarquía constitucional con división de poderes en órganos de estado, gobierno y legislación." }
    ],
    explanation: "Las sociedades recolectoras se apoyan en liderazgos por experiencia física o comunitaria; las agrarias consolidan reinos tempranos conservando consejos de ancianos; y las industrializadas establecen marcos constitucionales formales con pesos y contrapesos entre poderes."
  },
  {
    id: 7,
    type: "drag_order",
    prompt: "Organiza los siguientes elementos que ayuden a formar una definición correcta de cultura:",
    correctOrder: [
      "Espacio simbólico o geográfico donde intervienen las personas.",
      "Compartir creencias, representaciones, lenguaje y valores.",
      "Poner en marcha realizaciones materiales (arte, religión y tradiciones).",
      "Realizar manifestaciones humanas producto de interpretaciones comunes."
    ],
    explanation: "La cultura se construye de lo fundacional a lo visible: surge en un entorno geográfico compartido, madura mediante valores y lenguajes comunes, y se exterioriza en obras materiales y celebraciones colectivas."
  },
  {
    id: 8,
    type: "choice",
    prompt: "¿Qué corriente sociológica permite explicar el impacto de la telefonía y el internet en revoluciones y fenómenos sociales como la Primavera Árabe?",
    image: null,
    hint: "Busca la corriente que destaca cómo los flujos comunicativos y el diálogo entre ciudadanos pueden movilizar la acción social frente al poder.",
    correct: "Teoría crítica de Habermas.",
    distractors: [
      "Estructuración de Giddens.",
      "Materialismo histórico de Marx.",
      "Teoría comprensiva de Weber."
    ],
    explanation: "Jürgen Habermas desarrolló la teoría de la acción comunicativa, que subraya cómo el intercambio de información y la interacción dialógica permiten a los ciudadanos coordinarse colectivamente y transformar la esfera pública."
  },
  {
    id: 9,
    type: "match_columns",
    prompt: "Relaciona las corrientes de interpretación de los fenómenos sociales con sus principales características.",
    pairs: [
      { left: "Teoría crítica", right: "Analiza el desarrollo de la sociedad apoyándose en la emancipación y la teoría de la acción comunicativa." },
      { left: "Funcionalismo", right: "Explica las normas, roles e interacciones de las instituciones que mantienen el equilibrio del sistema social." },
      { left: "Marxismo", right: "Explica las transformaciones históricas desde la contradicción económica y la lucha entre clases sociales." }
    ],
    explanation: "La teoría crítica prioriza la comunicación y la crítica al poder; el funcionalismo analiza cómo las instituciones operan como órganos para dar estabilidad a la sociedad; y el marxismo entiende la historia impulsada por los conflictos materiales de clase."
  },
  {
    id: 10,
    type: "choice",
    prompt: "¿Cómo se denominan las reglas internas que un grupo social (como una familia o un grupo de estudio) impone a sus miembros según lo que considera correcto e incorrecto?",
    image: null,
    hint: null,
    correct: "Normas morales.",
    distractors: [
      "Principios éticos.",
      "Jerarquía de valores.",
      "Diversidad cultural."
    ],
    explanation: "Las normas morales son el conjunto de reglas establecidas al interior de una colectividad (como la familia) para regular las conductas de sus integrantes, las cuales con frecuencia expresan expectativas desiguales ligadas a roles de género tradicionales."
  },
  {
    id: 11,
    type: "choice",
    prompt: "¿En qué evento histórico se pueden identificar transiciones de la sociedad agraria a la industrial, lo rural a lo urbano y la manufactura a la maquifactura?",
    image: null,
    hint: "Es el fenómeno originado en el siglo XVIII que sustituyó la producción artesanal por maquinaria y concentró el trabajo en las urbes.",
    correct: "Revolución industrial.",
    distractors: [
      "Desarrollo económico.",
      "Evolución del capitalismo.",
      "Revolución científica."
    ],
    explanation: "Estas transiciones resumen las consecuencias fundamentales de la Revolución Industrial, cuando la mecanización y el vapor reorganizaron la mano de obra campesina en fábricas urbanas dominadas por el capital."
  },
  {
    id: 12,
    type: "choice",
    prompt: "¿Qué interacción cultural ocurrió cuando los indígenas y mestizos de la Nueva España se dedicaban a labores similares a las de los conquistadores además de imitar su lenguaje, vestimenta, valores y costumbres para accesar a mejores condiciones?",
    image: null,
    hint: "Describe el proceso donde un sector de la población incorpora y asimila los elementos de una cultura que percibe dominante para llegar a un punto de equidad con ella.",
    correct: "Transculturación.",
    distractors: [
      "Multiculturalidad.",
      "Aculturación.",
      "Interculturalidad."
    ],
    explanation: "El caso ilustra la transculturación: la asimilación paulatina de rasgos culturales (como el idioma, la vestimenta, las costumbres laborales y la religión) por parte de sectores subordinados para desenvolverse de forma equitativa en el entorno colonial."
  },
  {
    id: 13,
    type: "multi_select",
    prompt: "¿Qué fenómenos sociales se han propiciado por el concepto de <b>sociedad de conocimiento</b>?",
    image: null,
    hint: "Elige las opciones vinculadas con la digitalización de datos, la comercialización de la información y la innovación constante.",
    correctAnswers: [
      "Surgimiento de la sociedad del riesgo.",
      "Conformación de los mercados de la información.",
      "Valoración de la innovación y la competitividad."
    ],
    distractors: [
      "Limitaciones para el desarrollo de destrezas de reflexión y de análisis.",
      "Nuevos descubrimientos biotecnológicos como el Proyecto Genoma Humano.",
      "Codificación y almacenamiento de datos."
    ],
    explanation: "En la sociedad del conocimiento, el saber científico-tecnológico se convierte en el insumo productivo principal, impulsando el almacenamiento masivo de datos, la venta de información y la competencia basada en la innovación permanente."
  },
  {
    id: 14,
    type: "choice",
    prompt: "Lucía vive en una comunidad rural donde los padres suelen arreglar las bodas de los hijos. Por ello, quedó comprometida desde los 10 años. Se contempla que se dedique al hogar sin necesidad de estudios para casarse a los 18 años y vivir en casa de la familia de su pareja. ¿Con qué concepto se puede describir esta situación?",
    image: null,
    hint: "Enfócate en cómo se transmiten los acuerdos familiares y ritos comunitarios de generación en generación.",
    correct: "Contexto sociocultural de las familias de esa localidad.",
    distractors: [
      "Costumbres que forman parte de las tradiciones y cultura de una localidad.",
      "Necesidades biológicas de alimentarse, casarse y tener hijos a temprana edad.",
      "Particularidades propias de la región o comunidad donde vive Lucía."
    ],
    explanation: "El matrimonio, los roles de género y las actividades económicas son prácticas sociales generalizadas que ocurren en muchos lugares. Las particularidades de esta comunidad en particular son el contexto sociocultural en el que ocurren esas prácticas."
  },
  {
    id: 15,
    type: "choice",
    prompt: "¿Qué tienen en común Nelson Mandela, la Madre Teresa y Adolf Hitler?",
    image: null,
    hint: "Indica la cualidad que tienen ciertas personas para romper inercias y reorientar el rumbo de las estructuras sociales.",
    correct: "Son agentes de cambio social.",
    distractors: [
      "Son representantes de diversidad cultural.",
      "Son miembros de instituciones culturales.",
      "Son agentes de prácticas sociales."
    ],
    explanation: "Se denomina agente a la persona que posee agencia: la capacidad de influir, desafiar o reconfigurar los valores e instituciones de su entorno."
  },
  {
    id: 16,
    type: "choice",
    prompt: "¿Cómo se llama la forma de organización donde el trabajador no es dueño de su propia tierra, sino que es propiedad del patrón, quien considera al trabajador como de su propiedad y además le cobra renta de la tierra que trabaja?",
    image: null,
    hint: "Modo de producción medieval sustentado en la relación de vasallaje y la servidumbre campesina.",
    correct: "Feudalismo.",
    distractors: [
      "Sociedad primitiva.",
      "Sociedad moderna.",
      "Esclavismo."
    ],
    explanation: "El sistema feudal se basaba en la subordinación del campesino convertido en siervo, quien debía pagar tributos o renta en especie y trabajo al señor noble a cambio de protección y el uso precario de la tierra."
  },
  {
    id: 17,
    type: "fill_blanks",
    prompt: "Completa los espacios:",
    sentence: "Desde el enfoque del materialismo histórico, se define una {0} como un grupo de personas que se diferencian entre sí por su desempeño en un sistema de producción.",
    image: null,
    hint: "Concepto central de Karl Marx para agrupar a las personas de acuerdo con su posición frente a los medios de producción.",
    correctOrder: [
        "clase social"
    ],
    distractors: [
      "papel económico",
      "rol socioeconómico",
      "dinámica social"
    ],
    explanation: "Para el materialismo histórico, una clase social está formada por grupos que se diferencian según el papel que cumplen en la producción y si poseen o no los medios materiales para generar riqueza."
  },
  {
    id: 18,
    type: "fill_blanks",
    prompt: "Completa los espacios:",
    sentence: "El desarrollo de la vacuna antirrábica de Louis Pasteur es un ejemplo de {0}.",
    image: null,
    hint: null,
    correctOrder: [
        "tecnociencia"
    ],
    distractors: [
      "tecnología",
      "ciencia",
      "progreso"
    ],
    explanation: "Puesto que la vacuna antirrábica conllevó la aplicación de la ciencia pura al desarrollo de una tecnología particular, se clasifica como tecnociencia."
  },
  {
    id: 19,
    type: "choice",
    prompt: "¿Qué modo de producción tiene una empresa donde todos sus trabajadores son parte activa y copropietarios?",
    image: null,
    hint: "Modelo económico que busca reemplazar el beneficio de accionistas privados por la autogestión colectiva de los trabajadores.",
    correct: "Socialista.",
    distractors: [
      "Esclavista.",
      "Capitalista.",
      "Feudalista."
    ],
    explanation: "En un modo de producción socialista los medios de trabajo no pertenecen a un capitalista particular, sino que los trabajadores gestionan cooperativamente la empresa y comparten los beneficios de su propia producción."
  },
  {
    id: 20,
    type: "fill_blanks",
    prompt: "Luis ingresa a una pandilla en la Ciudad de México tras un ritual de iniciación azteca. Los miembros no tienen buenas relaciones familiares, se visten con trajes y maquillaje indígena y hablan un dialecto especial entre ellos. Salen de madrugada a parques para discutir, cantar canciones y filosofar sin consumir sustancias ni agredir a nadie.",
    sentence: "Esta es una {0} catalogada como {1}.",
    image: null,
    hint: null,
    correctOrder: [
        "subcultura",
        "tribu urbana"
    ],
    distractors: [
      "cultura",
      "grupo antisocial",
      "grupo autóctono"
    ],
    explanation: "Las tribus urbanas son subculturas que coexisten dentro del entorno urbano; sus integrantes crean estilos distintivos y códigos de pertenencia para diferenciarse de la cultura dominante."
  },
  {
    id: 21,
    type: "choice",
    prompt: "¿Cuáles son los 4 tipos de organización pertenecientes a la sociedad primitiva?",
    image: null,
    hint: "Recuerda la evolución social temprana desde grupos errantes hasta comunidades unidas por linaje familiar.",
    correct: "Horda, clan, gens y tribu.",
    distractors: [
      "Familia, pueblo, comunidad y tribu.",
      "Horda, familia, clan y gens.",
      "Horda, tribu, clan y parentesco."
    ],
    explanation: "Las sociedades primitivas atravesaron una secuencia de organización basada en la ayuda mutua: iniciaron con la horda nómada, avanzaron hacia clanes y gens basados en el parentesco común y formaron tribus mediante la unión cooperativa de varios grupos."
  },
  {
    id: 22,
    type: "match_columns",
    prompt: "Relaciona las ciencias sociales con su objeto de estudio.",
    pairs: [
      { left: "Antropología", right: "Forma física del ser humano y su comportamiento aprendido o actuar cultural." },
      { left: "Sociología", right: "El ser humano en relación con sus semejantes e interacciones en grupos y organizaciones." },
      { left: "Economía", right: "Medios empleados por las sociedades para organizar recursos materiales, producción y trabajo." }
    ],
    explanation: "Cada ciencia social aborda una faceta: la antropología estudia la evolución corporal y la cultura humana; la sociología se enfoca en las relaciones e instituciones grupales; y la economía en la administración del trabajo y los recursos materiales."
  },
  {
    id: 23,
    type: "choice",
    prompt: "En la película <i>Los Tres Huastecos</i> se escuchan términos como <i>cáscara de mugre</i> o <i>levantafalsos</i>. ¿Cómo se denomina el conjunto de acciones relacionadas con estos diálogos?",
    image: null,
    hint: "Abarca las conductas y hábitos cotidianos que las personas realizan de manera regular en su vida en comunidad.",
    correct: "Contexto cultural.",
    distractors: [
      "Prácticas sociales.",
      "Agencia social.",
      "Subcultura."
    ],
    explanation: "Las rutinas de aseo personal, su periodicidad y las expresiones humorísticas compartidas son ejemplos de contextos socioculturales: acciones cotidianas que reflejan las costumbres del entorno en el que se vive."
  },
  {
    id: 24,
    type: "classification",
    prompt: "Clasifica las siguientes situaciones como características de un ser social o un ser biológico.",
    image: null,
    hint: "Lo biológico cubre funciones fisiológicas para mantenerse con vida; lo social abarca ritos, convivencia colectiva y juegos comunitarios.",
    categories: ["Biológico", "Social"],
    items: [
      { text: "Jaime come una dieta balanceada para mantenerse sano.", correct: "Biológico" },
      { text: "Liliana invita a sus amigos a una fiesta por el día de Reyes.", correct: "Social" },
      { text: "Antonio duerme 5 horas al día.", correct: "Biológico" },
      { text: "Un profesor enseña a respirar pausadamente para relajar los músculos.", correct: "Biológico" },
      { text: "Dos hermanos compiten para ver quién aguanta más tiempo sin respirar.", correct: "Social" },
      { text: "Erika está muy triste por la muerte de su abuela.", correct: "Social" }
    ],
    explanation: "Procesos como nutrir las células, conciliar el sueño y controlar la respiración responden a la supervivencia corporal (biológica); compartir festejos, competir en juegos lúdicos y procesar el duelo en familia son vivencias compartidas (social)."
  },
  {
    id: 25,
    type: "choice",
    prompt: "¿Qué autor explica que la sociedad mexicana se considera honesta y buena, pero al mismo tiempo descalifica a todo el orden institucional y estatal, rechazando partidos políticos, gobernantes y afirmando que todos los empleados de la burocracia son corruptos?",
    image: null,
    hint: "Sociólogo que estudió cómo las ideas individuales, la burocracia y la búsqueda de sentido explican el comportamiento social.",
    correct: "Max Weber.",
    distractors: [
      "Emile Durkheim.",
      "Augusto Comte.",
      "Karl Marx."
    ],
    explanation: "Max Weber propuso la teoría comprensiva, la cual sostiene que la sociología debe interpretar los motivos y significados que los individuos le dan a sus acciones y a instituciones como la burocracia, permitiendo entender por qué la gente confía en lo personal pero desconfía de las estructuras públicas."
  },
  {
    id: 26,
    type: "multi_select",
    prompt: "¿Cuáles de los siguientes factores sociales tienen implicaciones bioéticas?",
    image: null,
    hint: "Busca problemas que amenacen la dignidad de las comunidades, la salud humana o la conservación de otras formas de vida.",
    correctAnswers: [
      "Uso de nuevas tecnologías para aprovechar productos residuales.",
      "Altos niveles de densidad poblacional en pueblos y municipios.",
      "Pérdida de la diversidad de flora y fauna por extensión de las zonas urbanas."
    ],
    distractors: [
      "Aplicación de nuevos métodos agrícolas sin uso de fertilizantes químicos."
    ],
    explanation: "La bioética reflexiona sobre la responsabilidad moral ante la vida; por ello, el manejo de desechos tecnológicos, la saturación urbana y el desplazamiento de especies por el crecimiento de las ciudades plantean dilemas éticos."
  },
  {
    id: 27,
    type: "choice",
    prompt: "¿Qué afirmación se relaciona con el positivismo?",
    image: null,
    hint: "Corriente que afirma que únicamente la ciencia y los hechos empíricos demostrables conducen a la humanidad al desarrollo.",
    correct: "La ciencia es la fuerza más poderosa de que dispone el ser humano para progresar.",
    distractors: [
      "La salud física y mental del hombre depende de las fuerzas de la naturaleza.",
      "La realidad social sólo puede ser abordada de forma científica si se analiza tal como es.",
      "Los fenómenos se estudian por sus elementos genéricos cualitativos y cuantitativos."
    ],
    explanation: "El positivismo fundado por Augusto Comte sostiene que el conocimiento científico (basado en la observación y experimentación de leyes naturales) es la herramienta fundamental e indispensable para guiar el orden y progreso social."
  },
  {
    id: 28,
    type: "choice",
    prompt: "Al transcurrir su bachillerato, César entiende su necesidad de interactuar con otras personas, por lo que se propone colaborar en actividades de su iglesia, ayudar en un torneo deportivo y organizar un grupo de estudio con compañeros de la biblioteca. ¿Qué puede afirmarse respecto a sus decisiones?",
    image: null,
    hint: "Describe la experiencia continua mediante la cual un individuo se incorpora y participa activamente en su comunidad.",
    correct: "Se encuentra en un proceso de socialización.",
    distractors: [
      "Está formando parte de instituciones sociales.",
      "Se dio cuenta de que es un ser social.",
      "Se está integrando a una subcultura urbana."
    ],
    explanation: "La socialización es el proceso dinámico en el que el individuo entra en contacto con otros, asume normas colectivas y participa activamente en espacios deportivos, cívicos y educativos de su entorno comunitario."
  },
  {
    id: 29,
    type: "choice",
    prompt: "¿A qué término se hace referencia al afirmar que el sujeto moral se determina a sí mismo y su conducta se rige por su propia y libre decisión?",
    image: null,
    hint: "Facultad ética de dictarse a uno mismo las reglas de conducta con plena responsabilidad.",
    correct: "Autonomía.",
    distractors: [
      "Heteronomía.",
      "Obligatoriedad.",
      "Obligación."
    ],
    explanation: "La autonomía ética es la capacidad del sujeto consciente para reflexionar, elegir y autodeterminar sus actos conforme a sus propios principios y valores de libertad."
  }
];