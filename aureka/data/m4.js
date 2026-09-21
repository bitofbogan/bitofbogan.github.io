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
    explanation: "Toda sociedad se organiza de acuerdo a su liderazo (política), gestión de recursos y actividades productivas (económica), expectativas del grupo (social) y creencias (religiosa)."
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
    correct: "Heterotomía.",
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
      "Poner en marcha realizaciones materiales (arte, religión, tradiciones).",
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
    id: 13,
    type: "choice",
    prompt: "Analiza el siguiente caso y responde lo que se pregunta más adelante:\n\"Al inicio de la colonia, la actividad económica en la Nueva España se dedicó a la minería y la agricultura, donde los indígenas y negros esclavos realizaban la producción en beneficio de los encomenderos y de la corona española. Al final de la colonia había un poco más de posibilidades para indios y mestizos, pudiendo dedicarse a labores productivas similares a las de los conquistadores, con la ayuda del comercio, la producción de artesanías y alimentos. Estos grupos hablaban español y podían competir en mejores condiciones cuando se vestían y actuaban como los conquistadores, compartiendo valores, costumbres y formas de trabajo, así como la posibilidad de estudiar en escuelas y universidades que se habían puesto a su disposición.\"\n¿A qué fenómeno social hace referencia esta situación?",
    image: null,
    hint: "Describe el proceso donde un sector de la población incorpora y asimila los elementos identitarios de la cultura dominante para integrarse.",
    correct: "Aculturación",
    distractors: [
      "Multiculturalidad",
      "Transculturación",
      "Interculturalismo"
    ],
    explanation: "El caso ilustra la aculturación[cite: 4]: la asimilación paulatina de rasgos culturales (como el idioma, la vestimenta, las costumbres laborales y la religión) por parte de sectores subordinados para desenvolverse en el entorno colonial[cite: 13]."
  },
  {
    id: 14,
    type: "multi_select",
    prompt: "¿Qué fenómenos sociales se han propiciado por el concepto de \"sociedad de conocimiento\"?",
    image: null,
    hint: "Elige las opciones vinculadas con la digitalización de datos, la comercialización de la información y la innovación constante.",
    correctAnswers: [
      "Codificación y almacenamiento de datos.",
      "Conformación de los mercados de la información.",
      "Valoración de la innovación y la competitividad."
    ],
    distractors: [
      "Limitaciones para el desarrollo de destrezas de reflexión y de análisis.",
      "Nuevos descubrimientos biotecnológicos, como el Proyecto Genoma Humano.",
      "Surgimiento de la sociedad del riesgo."
    ],
    explanation: "En la sociedad del conocimiento, el saber científico-tecnológico se convierte en el insumo productivo principal, impulsando el almacenamiento masivo de datos, la venta de información y la competencia basada en la innovación permanente[cite: 13]."
  },
  {
    id: 15,
    type: "choice",
    prompt: "Nuria, joven estudiante de bachillerato de la ciudad de Toluca, capital del Estado de México, lee en el periódico la historia de Lucila:\n\"Lucila vive en una comunidad rural de la sierra de Oaxaca, donde los padres suelen concertar las bodas con amigos y compadres. Por ello Lucila quedó comprometida desde los 10 años con Abel, hijo de unos compadres, dos años mayor que ella. No estaba previsto que Lucila estudiara, por lo que solo trabajó en las labores del hogar preparándose para casarse, mientras los compadres reunían el dinero para la dote a pagar a los papás de Lucila.\nLucila se casó a los 18 años y la joven pareja se quedó viviendo en casa de Abel, compartiendo el único cuarto con el resto de la familia. Lucila y Abel ayudan en las labores del campo. Antes de un año nació Nicolás, el primer hijo.\"\nIndependientemente de que Nuria esté o no de acuerdo con la situación descrita, ¿qué tipo de componentes se distinguen en la historia de Lucila?",
    image: null,
    hint: "Enfócate en cómo se transmiten los acuerdos familiares y ritos comunitarios de generación en generación.",
    correct: "Costumbres que forman parte de las tradiciones y cultura de donde vive Lucila.",
    distractors: [
      "Contexto sociocultural en el que se desarrollan las familias en el estado de Oaxaca.",
      "Necesidades biológicas de alimentarse, casarse y tener hijos a temprana edad.",
      "Particularidades propias de la región o comunidad donde viven Lucila y Abel."
    ],
    explanation: "Los arreglos de matrimonio por dote y los roles asignados desde la niñez son costumbres arraigadas que se reproducen como parte de las tradiciones locales de la comunidad[cite: 13]."
  },
  {
    id: 16,
    type: "choice",
    prompt: "Nelson Mandela, la Madre Teresa de Calcuta y Adolfo Hitler, tienen en común que fueron:",
    image: null,
    hint: "Indica la cualidad que tienen ciertas personas para romper inercias y reorientar el rumbo de las estructuras sociales.",
    correct: "Agentes de cambio social",
    distractors: [
      "Representantes de diversidad cultural",
      "Miembros de instituciones culturales",
      "Agentes de prácticas sociales"
    ],
    explanation: "Se denomina agente a la persona que posee 'agencia'[cite: 13]: la capacidad de influir, desafiar o reconfigurar los valores e instituciones de su entorno, independientemente del juicio ético que merezca el resultado de sus acciones[cite: 13]."
  },
  {
    id: 17,
    type: "choice",
    prompt: "Forma de organización en donde el trabajador no es dueño de su propia tierra, sino del patrón que considera al trabajador como de su propiedad y además debe pagar renta de la tierra que trabaja. Es la sociedad:",
    image: null,
    hint: "Modo de producción medieval sustentado en la relación de vasallaje y la servidumbre campesina.",
    correct: "Feudal",
    distractors: [
      "Primitiva",
      "Moderna",
      "Esclavista"
    ],
    explanation: "El sistema feudal se basaba en la subordinación del campesino convertido en siervo[cite: 13], quien debía pagar tributos o renta en especie y trabajo al señor noble a cambio de protección y el uso precario de la tierra[cite: 13]."
  },
  {
    id: 18,
    type: "choice",
    prompt: "Desde el enfoque del Materialismo histórico, hay un elemento que encuadra en la práctica social y se le define como grandes grupos de personas que se diferencian entre sí, por su desempeño en un sistema de producción históricamente determinado y se le conoce como:",
    image: null,
    hint: "Concepto central de Carlos Marx para agrupar a las personas de acuerdo con su posición frente a los medios de producción.",
    correct: "Clase",
    distractors: [
      "Papel",
      "Ente",
      "Dinámica"
    ],
    explanation: "Para el materialismo histórico, una clase social está formada por grupos que se diferencian según el papel que cumplen en la producción y si poseen o no los medios materiales para generar riqueza[cite: 13]."
  },
  {
    id: 19,
    type: "choice",
    prompt: "Lee los dos fragmentos siguientes y responde la pregunta que aparece más adelante.\n[Texto a] En la famosa Enciclopedia UTEHA se lee acerca de Louis Pasteur que fue un químico y bacteriólogo francés (1822-1895), cuya labor científica se inició con descubrimientos químicos que le llevaron a efectuar investigaciones biológicas. Combatió la teoría de Pouchet acerca de la generación espontánea. Descubrió el bacilo del cólera de las gallinas y descubrió la vacunación antirrábica.\n[Texto b] En el libro de texto del Módulo \"Ser social y sociedad\", se lee que una vacuna contra la influenza representa un avance tecnológico, esta ayuda al ser humano a mantenerse libre de la enfermedad y esto a su vez ayuda a la sociedad a evitar una epidemia.\nDe acuerdo con los Textos [a] y [b], junto con el criterio del libro de texto, ¿cómo se debe catalogar a Louis Pasteur con relación a la vacuna antirrábica?\n1.- Tecnólogo\n2.- Científico\n3.- Tecnocientífico",
    image: null,
    hint: "Pasteur investigó las leyes biológicas en el laboratorio y además creó una solución técnica aplicable para erradicar una enfermedad.",
    correct: "1 y 2",
    distractors: [
      "2 y 3",
      "Solo 3",
      "Solo 1"
    ],
    explanation: "Pasteur reunió ambos perfiles: actuó como científico al investigar los principios biológicos de los microorganismos y como tecnólogo al diseñar la solución práctica de la vacuna antirrábica[cite: 13]."
  },
  {
    id: 20,
    type: "choice",
    prompt: "En Cuba se estableció una empresa refresquera, en donde todos sus trabajadores son parte activa de esta empresa. ¿A qué tipo de modo de producción se refiere?",
    image: null,
    hint: "Modelo económico que busca reemplazar el beneficio de accionistas privados por la gestión colectiva de los trabajadores.",
    correct: "Socialista",
    distractors: [
      "Esclavista",
      "Capitalista",
      "Feudalista"
    ],
    explanation: "En un modo de producción socialista los medios de trabajo no pertenecen a un capitalista particular, sino que los trabajadores gestionan cooperativamente la empresa y comparten los beneficios de su propia producción[cite: 13]."
  },
  {
    id: 21,
    type: "choice",
    prompt: "Analiza el siguiente caso:\nLupe acaba de ingresar a una pandilla llamado \"Los Panchitos\", en una zona cercana a Tacubaya, en la Ciudad de México, después de haber aprobado un ritual tomado de un códice azteca. Generalmente no tienen buenas relaciones con sus familias. Se visten con trajes regionales de zonas indígenas del sur de México y se maquillan como lo hacen los grupos autóctonos de Sonora. Hablan un dialecto tomado del Mazahua que solamente ellos entienden para poder comunicarse sin que los demás comprendan lo que dicen. Salen a caminar en grupo a partir de la 1 de la mañana hasta las 6 de la madrugada, no se meten con nadie, no toman alcohol ni se drogan, solo se sientan en los parques a discutir o cantar algunas canciones acompañados por armónica. Ninguno trabaja. Los que estudian obtienen calificaciones mínimas aprobatorias para no ser expulsados de la escuela.\n¿Qué tipo de organización social se describe en el caso presentado?",
    image: null,
    hint: "Se trata de un agrupamiento juvenil que vive dentro de la ciudad pero construye símbolos, formas de vestir y lenguajes propios.",
    correct: "Subcultura - Tribu urbana",
    distractors: [
      "Subcultura - Grupo antisocial",
      "Cultura - Seres sociales",
      "Cultura - Grupo indígena"
    ],
    explanation: "Las tribus urbanas son subculturas que coexisten dentro del entorno urbano[cite: 13]; sus integrantes crean estilos distintivos y códigos de pertenencia para diferenciarse de la cultura dominante[cite: 13]."
  },
  {
    id: 22,
    type: "choice",
    prompt: "Indica los tipos de organización pertenecientes a la sociedad primitiva.",
    image: null,
    hint: "Recuerda la evolución social temprana desde grupos errantes hasta comunidades unidas por linaje familiar.",
    correct: "Horda, clan o gens y tribu",
    distractors: [
      "Familia, pueblo y tribu",
      "Horda, familia, clan o gens",
      "Horda, tribu y parentesco"
    ],
    explanation: "Las sociedades primitivas atravesaron una secuencia de organización basada en la ayuda mutua: iniciaron con la horda nómada[cite: 13], avanzaron hacia clanes y gens basados en el parentesco común[cite: 13], y formaron tribus mediante la unión cooperativa de varios grupos[cite: 13]."
  },
  {
    id: 23,
    type: "match_columns",
    prompt: "Relaciona los objetos de estudio con las ciencias sociales de la siguiente tabla (No todos los objetos se relacionan):",
    pairs: [
      { left: "Antropología", right: "Forma física del ser humano y su comportamiento aprendido o actuar cultural" },
      { left: "Sociología", right: "El ser humano en relación con sus semejantes e interacciones en grupos y organizaciones" },
      { left: "Economía", right: "Medios empleados por las sociedades para organizar recursos materiales, producción y trabajo" }
    ],
    explanation: "Cada ciencia social aborda una faceta: la antropología estudia la evolución corporal y la cultura humana[cite: 13]; la sociología se enfoca en las relaciones e instituciones grupales[cite: 13]; y la economía en la administración del trabajo y los recursos materiales[cite: 13]."
  },
  {
    id: 24,
    type: "choice",
    prompt: "Lee la siguiente escena tomada de la película \"Los tres huastecos\".\nEn la escena le cae encima a Cuco una cubeta de agua con cal.\nPadre Andrade: Corre a enjuagarte, la cal te va a despellejar.\nMari Toña: ¡Ja, ja, ja! No se apure Señor Cura la cal no le llega al cuero: ¡tiene una cáscarsa de mugre! (Dirigiéndose a Cuco) Hasta que te vas a bañar. No te vaya a dar pulmonía.\nCuco: No seas \"levanta-falsos\" Mari Toña. Me baño todos los meses aunque no me haga falta.\n¿Cómo se denomina el conjunto de acciones relacionadas con este diálogo?",
    image: null,
    hint: "Abarca las conductas y hábitos cotidianos que las personas realizan de manera regular en su vida en comunidad.",
    correct: "Prácticas sociales",
    distractors: [
      "Contexto cultural",
      "Agentes sociales",
      "Subcultura"
    ],
    explanation: "Las rutinas de aseo personal, su periodicidad y las expresiones humorísticas compartidas son ejemplos de prácticas sociales: acciones cotidianas que reflejan las costumbres del entorno en el que se vive[cite: 13]."
  },
  {
    id: 25,
    type: "classification",
    prompt: "Clasifica las siguientes situaciones como características sociales o biológicas según corresponda:",
    image: null,
    hint: "Lo biológico cubre funciones fisiológicas para mantenerse con vida; lo social abarca ritos, convivencia colectiva y juegos comunitarios.",
    categories: ["Biológica", "Social"],
    items: [
      { text: "Juan come una dieta balanceada para mantenerse sano.", correct: "Biológica" },
      { text: "Lila invita a sus amigos a comer tamales, chocolate y rosca el día de Reyes.", correct: "Social" },
      { text: "Tomás es velador y solo duerme 5 horas al día como máximo.", correct: "Biológica" },
      { text: "El 'profe' Ruiz enseña la respiración pausadamente para relajar los músculos.", correct: "Biológica" },
      { text: "Kike y Olga compiten a ver quién aguanta más tiempo sin respirar bajo el agua.", correct: "Social" },
      { text: "Emma está muy triste por la muerte de su abuela, pero era algo que ya se esperaba.", correct: "Social" }
    ],
    explanation: "Procesos como nutrir las células, conciliar el sueño y controlar la respiración responden a la supervivencia corporal (biológica)[cite: 13]; compartir festejos, competir en juegos lúdicos y procesar el duelo en familia son vivencias compartidas (social)[cite: 13]."
  },
  {
    id: 26,
    type: "choice",
    prompt: "¿Cuál autor permite explicar esta opinión?\nNuestra sociedad se puede comprender porque el mexicano se considera honesto y bueno, pero descalifica a todo el orden institucional y del Estado. Por ello no cree en los partidos, desconfía de los políticos y los gobernantes, afirmando que todos los empleados de la burocracia son corruptos.",
    image: null,
    hint: "Sociólogo que estudió cómo las ideas individuales, la burocracia y la búsqueda de sentido explican el comportamiento social.",
    correct: "Max Weber",
    distractors: [
      "Emile Durkheim",
      "Augusto Comte",
      "Carlos Marx"
    ],
    explanation: "Max Weber propuso la teoría comprensiva[cite: 13], la cual sostiene que la sociología debe interpretar los motivos y significados que los individuos le dan a sus acciones y a instituciones como la burocracia[cite: 13], permitiendo entender por qué la gente confía en lo personal pero desconfía de las estructuras públicas[cite: 13]."
  },
  {
    id: 27,
    type: "multi_select",
    prompt: "Identifica todos los factores sociales de la siguiente lista que tienen implicaciones bioéticas:",
    image: null,
    hint: "Busca problemas que amenacen la dignidad de las comunidades, la salud humana o la conservación de otras formas de vida.",
    correctAnswers: [
      "Nuevas tecnologías para aprovechar productos residuales.",
      "Altos niveles de densidad poblacional en pueblos y municipios.",
      "Pérdida de la diversidad de flora y fauna por extensión de las zonas urbanas."
    ],
    distractors: [
      "Aplicación de nuevos métodos agrícolas sin uso de fertilizantes químicos."
    ],
    explanation: "La bioética reflexiona sobre la responsabilidad moral ante la vida[cite: 13]; por ello, el manejo de desechos tecnológicos, la saturación urbana y el desplazamiento de especies por el crecimiento de las ciudades plantean dilemas éticos urgentes[cite: 13]."
  },
  {
    id: 28,
    type: "choice",
    prompt: "¿Cuál de las siguientes opciones guarda relación con el Positivismo?",
    image: null,
    hint: "Corriente que afirma que únicamente la ciencia y los hechos empíricos demostrables conducen a la humanidad al desarrollo.",
    correct: "La Ciencia es la fuerza más poderosa de que dispone el ser humano para progresar.",
    distractors: [
      "La salud física y mental del hombre depende de las fuerzas de la naturaleza.",
      "La realidad social sólo puede ser abordada de forma científica si se analiza tal como es.",
      "Los fenómenos se estudian por sus elementos genéricos cualitativos y cuantitativos."
    ],
    explanation: "El positivismo fundado por Augusto Comte sostiene que el conocimiento científico (basado en la observación y experimentación de leyes naturales) es la herramienta fundamental e indispensable para guiar el orden y progreso social[cite: 13]."
  },
  {
    id: 29,
    type: "choice",
    prompt: "Carlos inicia sus estudios de bachillerato en el Sistema Abierto en Ojuelos, Jalisco. Como resultado de la lectura de los libros de texto se percata de la necesidad de interactuar con las personas de su barrio. Se ha propuesto participar en la organización de un torneo deportivo y apoyar a las actividades que organizan en la iglesia y hasta decidió ir a la próxima ceremonia del Grito de Independencia. Piensa organizar un grupo de estudio con algunos compañeros que asisten a la biblioteca municipal.\n¿Qué puede afirmarse con relación al conjunto de decisiones de Carlos?",
    image: null,
    hint: "Describe la experiencia continua mediante la cual un individuo se incorpora y participa activamente en su comunidad.",
    correct: "Se encuentra en un proceso de socialización.",
    distractors: [
      "Está formando parte de instituciones sociales.",
      "Se dio cuenta de que es un ser social.",
      "Se está integrando a una subcultura urbana."
    ],
    explanation: "La socialización es el proceso dinámico en el que el individuo entra en contacto con otros, asume normas colectivas y participa activamente en espacios deportivos, cívicos y educativos de su entorno comunitario[cite: 13]."
  },
  {
    id: 30,
    type: "choice",
    prompt: "¿A qué término se hace referencia al afirmar que el sujeto moral se determina a sí mismo y su conducta se rige por su propia y libre decisión?",
    image: null,
    hint: "Facultad ética de dictarse a uno mismo las reglas de conducta con plena responsabilidad.",
    correct: "Autonomía",
    distractors: [
      "Heteronomía",
      "Obligatoriedad",
      "Obligación"
    ],
    explanation: "La autonomía ética es la capacidad del sujeto consciente para reflexionar, elegir y autodeterminar sus actos conforme a sus propios principios y valores de libertad[cite: 13]."
  }
];
