// questions.js
const questionBank = [
  {
    id: 1,
    type: "choice",
    prompt: "Stephen Hawking y Roger Penrose forman parte de la ________ al trabajar con un equipo interdisciplinario en Cambridge. Sus teorías se difunden a nivel internacional tanto en el ámbito científico como en el divulgativo por medio de ________ y ________ de alto nivel.",
    image: null,
    hint: "Piensa en el modelo de investigación a escala industrial que requiere equipos masivos y cuyos hallazgos se debaten en congresos internacionales[cite: 2].",
    correct: "Gran ciencia - publicaciones - congresos",
    distractors: [
      "Gran ciencia - registros de autor - patentes",
      "Tecnociencia - registros de autor - patentes",
      "Tecnociencia - publicaciones - congresos"
    ],
    explanation: "La Gran Ciencia se caracteriza por proyectos a gran escala y equipos interdisciplinarios cuyos resultados se difunden mediante publicaciones, charlas y congresos internacionales de alto nivel."
  },
  {
    id: 2,
    type: "choice",
    prompt: "Te piden que elabores un análisis sobre la democracia participativa, sociedad del conocimiento y sociedad del riesgo. ¿Qué proceso emplearías para recabar información?",
    image: null,
    correct: "Seguirías un orden conforme un método previamente establecido.",
    distractors: [
      "Tratarías de seguir un orden, aunque siempre terminas rompiéndolo.",
      "No llevarías orden, pero al final siempre tratas de ajustar la información.",
      "No tienes método, irías trabajando y decidirías cambios sobre la marcha."
    ],
    explanation: "El trabajo y la investigación académica demandan rigor metodológico: seguir un orden planificado y sistemático para recopilar y analizar la información."
  },
  {
    id: 3,
    type: "choice",
    prompt: "De acuerdo con el mapa y las condiciones descritas (límites de viento, insolación a 50 km de Prosperidad y criterio de suministro menor a 100 km), ¿qué tipo de fuente de energía conviene explotar en este estado?",
    image: null,
    correct: "Eólica. Es energía limpia. Los generadores pueden ubicarse cerca de Progreso y distribuir energía a la capital y a las ciudades Agrícola, Unión y Patriotismo.",
    distractors: [
      "Petróleo. Es energía eficiente. La planta puede ubicarse cerca de Sindicalismo para llevar energía a la capital y a las ciudades Prosperidad, Agrícola y Unión.",
      "Gas. Es energía limpia que siempre se encuentra junto a un pozo petrolero. La planta puede ubicarse en Sindicalismo y llevar energía a la capital y Ciudad Prosperidad.",
      "Solar. Es energía limpia. Los generadores pueden ubicarse en Prosperidad y distribuir energía a la capital y a Ciudad Sindicalismo."
    ],
    explanation: "La zona costera cercana a Progreso cuenta con vientos de alta velocidad (hasta 60 km/h) y se encuentra a una distancia viable (menos de 100 km) para abastecer a la capital y poblaciones vecinas con energía limpia y renovable."
  },
  {
    id: 4,
    type: "choice",
    prompt: "¿A qué se refiere el Proyecto Internacional del Genoma Humano?",
    image: null,
    correct: "Mapeo completo de los genes del ser humano, incluyendo ubicación, estructura y funciones.",
    distractors: [
      "Mapeo de todas las mutaciones que le han ocurrido a los genes de los seres humanos.",
      "Modificación de la estructura molecular del conjunto de los genes de los seres humanos.",
      "Directorio de la evolución y genealogía del ser humano en todas las regiones del mundo."
    ],
    explanation: "El Proyecto Genoma Humano tuvo como meta secuenciar el ADN humano completo: determinando la ubicación cromosómica, estructura química y función biológica de cada gen."
  },
  {
    id: 5,
    type: "choice",
    prompt: "Cuando la ciencia básica se dirige al mejoramiento del medio ambiente, o a la invención, producción y manufactura de bienes materiales y culturales, se convierte en ciencia:",
    image: null,
    correct: "Aplicada",
    distractors: [
      "Técnica",
      "Tecnociencia",
      "Tecnología"
    ],
    explanation: "La ciencia básica busca entender los principios de la naturaleza; en el momento en que dicho conocimiento se orienta a resolver problemas prácticos o generar bienes tangibles, pasa a ser ciencia aplicada."
  },
  {
    id: 6,
    type: "choice",
    prompt: "Identifica la definición más apropiada del efecto invernadero:",
    image: null,
    correct: "Fenómeno inducido principalmente por gases como el CO2 que retienen la energía radiante de la superficie de la Tierra que se emite como resultado del calentamiento de la radiación solar.",
    distractors: [
      "Efecto inducido por los residuos de los gases industriales que producen un incremento de la temperatura de la atmósfera por pérdida de calor de la superficie de la Tierra, generando mayor contaminación.",
      "Es el proceso que atrapa la energía del Sol en los gases de la atmósfera, del mismo modo en que se absorbe calor en los vidrios de un invernadero, contaminando la superficie de la Tierra.",
      "Es el producto de reacciones químicas entre los gases contaminantes en la atmósfera, generando incremento de CO2, metano y ozono, produciendo la lluvia ácida y el calentamiento terrestre."
    ],
    explanation: "El efecto invernadero es un fenómeno físico-químico donde gases como el dióxido de carbono ($CO_2$) absorben y retienen la radiación infrarroja térmica que la superficie terrestre refleja tras ser calentada por el Sol."
  },
  {
    id: 7,
    type: "choice",
    prompt: "De la siguiente lista sobre ingeniería genética:\n1. Alimentación animal o humana con plantas transgénicas.\n2. Cultivos agrícolas de varias cosechas anuales y gran productividad.\n3. Uso de plantas que no han sido probadas respecto de su toxicidad y alergenidad.\n4. Desarrollo de especies vegetales resistentes a plagas sin requerir pesticidas.\n5. Plantas cuya desintegración o descomposición requiere el doble de tiempo de las plantas naturales.\n\n¿Cuáles representan un riesgo para la salud humana?",
    image: null,
    correct: "1, 3, 5",
    distractors: [
      "2, 3, 4",
      "2, 4, 5",
      "1, 2, 4"
    ],
    explanation: "El consumo de transgénicos no evaluados (1), la falta de pruebas sobre toxicidad o alergias (3) y la alteración en los tiempos de biodegradación biológica (5) son los factores directos de alerta para la salud y el entorno."
  },
  {
    id: 8,
    type: "choice",
    prompt: "Si un amigo te pregunta tu opinión sobre el derecho de todos a no verse afectados por los desarrollos tecnológicos y la ciencia en el marco de la bioética, ¿cómo actúas?",
    image: null,
    correct: "Expresas tus opiniones y respetas las de tu amigo aun cuando no coincidan.",
    distractors: [
      "Tratas de contar con el mayor número de argumentos para obtener su aprobación sobre tu postura.",
      "Expresas tu opinión, pero si adviertes que hay diferencias con tu amigo, entonces prefieres dejar el tema para evitar problemas.",
      "No te gusta platicar sobre temas bioéticos porque te entusiasmas al grado de ser intolerante con las diferencias."
    ],
    explanation: "La deliberación bioética y científica se basa en el diálogo democrático, fundamentando posturas con tolerancia y respeto a la pluralidad de opiniones."
  },
  {
    id: 9,
    type: "choice",
    prompt: "Clasifica con Autosustentable (A) o Tradicional (T) cada práctica de construcción:\n1. Utiliza gas natural que es ecológico y barato.\n2. Para cocinar utiliza gas LP que es no renovable.\n3. Purifica el agua usada para poder utilizarla varias veces.\n4. Utiliza el agua usada para riego de un jardín u hortaliza.\n5. Regula la temperatura con materiales aislantes o celdas solares.\n6. Calienta el agua con un calentador solar.",
    image: null,
    correct: "T - T - A - A - A - A",
    distractors: [
      "T - A - T - A - T - T",
      "A - T - A - T - A - A",
      "A - T - T - T - A - T"
    ],
    explanation: "El gas natural y el gas LP son combustibles fósiles (tradicionales). El reciclaje de agua gris, el diseño bioclimático aislante y los colectores solares son tecnologías autosustentables."
  },
  {
    id: 10,
    type: "choice",
    prompt: "Relaciona las causas con los gases de efecto invernadero emitidos:\n1. Fotosíntesis\n2. Ganadería\n3. Combustión en motores de gasolina\n(a. Bióxido de carbono | b. Metano | c. Monóxido de carbono)",
    image: null,
    correct: "[2-a, b] [3-a, c]",
    distractors: [
      "[1-a] [2-a, b]",
      "[1-a] [3-c]",
      "[2-b] [3-a, b]"
    ],
    explanation: "La ganadería produce metano (digestión entérica) y $CO_2$. Los motores de combustión emiten dióxido de carbono ($CO_2$) y monóxido de carbono ($CO$) por combustión incompleta. (La fotosíntesis absorbe $CO_2$, no lo emite como contaminante)."
  },
  {
    id: 11,
    type: "choice",
    prompt: "¿En qué se centra la atención de analistas y políticos respecto al uso de la biotecnología aplicada a los alimentos?",
    image: null,
    correct: "Riesgo del uso de los alimentos transgénicos para el consumo humano.",
    distractors: [
      "Argumentación de los diferentes participantes respecto a las ventajas y desventajas de estos alimentos.",
      "Desarrollo de tecnología necesaria para la producción masiva de estos alimentos a bajo costo.",
      "Conjunto de conocimientos que deben desarrollarse para dominar la tecnología."
    ],
    explanation: "La mayor preocupación regulatoria y de bioética se enfoca en evaluar y mitigar los posibles riesgos toxicológicos, alergénicos y a largo plazo del consumo de alimentos genéticamente modificados."
  },
  {
    id: 12,
    type: "choice",
    prompt: "¿Cuál es el elemento destacable para este módulo sobre el papel de las redes sociales en la revolución de Egipto y los movimientos del siglo XXI?",
    image: null,
    correct: "Uso de las redes sociales en Internet durante un movimiento político de masas en el siglo XXI.",
    distractors: [
      "Incremento de relaciones político-económicas a través de Twitter con países de Oriente Medio.",
      "Democratización política alcanzada por los países árabes al usar Internet durante la revolución.",
      "Poca difusión de los medios occidentales respecto de fuentes locales de páginas de Internet."
    ],
    explanation: "El caso ilustra el impacto de la tecnociencia y las TIC en la sociedad civil: cómo las redes digitales se transforman en herramientas de autoorganización ciudadana y movilización colectiva."
  },
  {
    id: 13,
    type: "choice",
    prompt: "¿En qué caso interviene legalmente el derecho de patente?",
    image: null,
    correct: "En el caso de que un inventor desee registrar su desarrollo antes de que alguien quiera apropiárselo.",
    distractors: [
      "Cuando un científico quiera registrar su investigación antes de que otro haga un descubrimiento similar.",
      "Cuando un inventor decida registrar un desarrollo tecnológico después de que alguien le robe una idea.",
      "En un desarrollo científico, como el caso de la producción de perforaciones en las películas de celuloide."
    ],
    explanation: "Las patentes protegen invenciones y desarrollos aplicados, garantizando derechos de explotación al titular frente a apropiaciones indebidas. La ciencia básica (descubrimientos o leyes naturales) no se patenta."
  },
  {
    id: 14,
    type: "choice",
    prompt: "Cuando se unen o separan partículas del núcleo atómico se genera energía. Identifica el tipo y un ejemplo correcto:",
    image: null,
    correct: "Nuclear. Ocurre la fisión cuando se desintegra el núcleo de un elemento.",
    distractors: [
      "Nuclear. Se denomina fusión cuando se desintegra el núcleo de un elemento.",
      "Química. Se presenta la fusión cuando dos núcleos de un átomo ligero se unen para formar un átomo más pesado.",
      "Química. Se realiza la fisión cuando se unen dos núcleos de un átomo ligero para formar un átomo más pesado."
    ],
    explanation: "Se trata de energía nuclear. La fisión consiste en dividir o desintegrar un núcleo pesado inestable (como el uranio), mientras que la fusión es la unión de núcleos ligeros."
  },
  {
    id: 15,
    type: "choice",
    prompt: "¿A qué campo corresponde la aplicación del genoma humano para diagnóstico genético, detección de patologías mediante ADN y prevención personalizada de enfermedades?",
    image: null,
    correct: "Medicina genómica.",
    distractors: [
      "Producción de transgénicos.",
      "Tecnología nutrigenómica.",
      "Clonación humana."
    ],
    explanation: "La medicina genómica utiliza los datos de secuenciación del ADN para diagnosticar predisposiciones genéticas y aplicar tratamientos médicos preventivos y personalizados."
  },
  {
    id: 16,
    type: "choice",
    prompt: "Completa el enunciado: «El fin de la ciencia es ________, mientras que la tecnología tiene como fin la ________».",
    image: null,
    correct: "El progreso del conocimiento — transformación de la sociedad.",
    distractors: [
      "Un conjunto de verdades definitivas — transformación de la sociedad.",
      "El progreso del conocimiento — manifestación de dichas verdades.",
      "Un conjunto de verdades definitivas — manifestación de dichas verdades."
    ],
    explanation: "La ciencia busca expandir el conocimiento humano sobre el universo sin perseguir necesariamente una aplicación utilitaria; la tecnología traduce o crea herramientas para alterar el entorno y las condiciones humanas."
  },
  {
    id: 17,
    type: "choice",
    prompt: "El esfuerzo financiado de 1942 a 1944 por el gobierno estadounidense para lograr la fisión del uranio-235 y plutonio-239 se clasifica como y se conoce con el nombre de:",
    image: null,
    correct: "Tecnocientífico - Proyecto Manhattan",
    distractors: [
      "Tecnocientífico - Proyecto ENIAC",
      "Macrocientífico - Proyecto ENIAC",
      "Macrocientífico - Proyecto Manhattan"
    ],
    explanation: "El Proyecto Manhattan es el ejemplo histórico paradigmático de tecnociencia: fusionó ciencia básica, ingeniería aplicada e industria bajo objetivos estratégicos directos."
  },
  {
    id: 18,
    type: "choice",
    prompt: "¿Cuál de las siguientes opciones contiene un ejemplo claro de ciencia aplicada con implicaciones éticas directas?",
    image: null,
    correct: "Desarrollo y producción de productos transgénicos.",
    distractors: [
      "Construcción de las leyes de la termodinámica.",
      "Desarrollo de la teoría unificada de la física cuántica.",
      "Identificación de las leyes de conducción eléctrica."
    ],
    explanation: "Las leyes físicas son descripciones teóricas fundamentales neutras; intervenir y comercializar organismos genéticamente alterados implica decisiones ecológicas, alimentarias y éticas."
  },
  {
    id: 19,
    type: "choice",
    prompt: "¿Puede afirmarse que actualmente Internet permite consolidar una sociedad plenamente justa en nuestro país?",
    image: null,
    correct: "No. Se plantea todavía la necesidad de permitir que toda la población tenga acceso equitativo, libre y gratuito.",
    distractors: [
      "Sí. Porque ha propiciado que los grupos de poder puedan difundir sus ideas y principios a toda la población.",
      "Sí, porque ha integrado a toda la población en las redes sociales con el uso de herramientas de ofimática.",
      "No. Falta conseguir que todas las personas tengan cuidado con el uso del Internet, de páginas seguras sin virus."
    ],
    explanation: "La brecha digital subsiste como forma de desigualdad social: para lograr una sociedad del conocimiento justa, es indispensable garantizar el acceso universal, equitativo y libre a las redes."
  },
  {
    id: 20,
    type: "choice",
    prompt: "El neutrón está formado por partículas fundamentales denominadas:",
    image: null,
    correct: "Quarks",
    distractors: [
      "Electrones",
      "Protones",
      "Neutrinos"
    ],
    explanation: "Los hadrones como los neutrones y protones no son indivisibles: están integrados internamente por quarks (específicamente, un neutrón posee un quark up y dos quarks down)."
  },
  {
    id: 21,
    type: "choice",
    prompt: "¿Qué se espera obtener de una empresa que asume como valor la responsabilidad social?",
    image: null,
    correct: "Minimizar el impacto negativo y maximizar el impacto positivo de las acciones o de la tecnología que utiliza.",
    distractors: [
      "Intervenir en proyectos con comunidades a fin de realizar obras educativas para mejorar su calidad de vida.",
      "Trabajar con grupos a fin de apoyar la comercialización de los productos de la empresa o de la misma comunidad.",
      "Trabajar con grupos a fin de proveerles ayuda para reducir el impacto social y reducir la violencia en las comunidades."
    ],
    explanation: "La responsabilidad social corporativa exige evaluar todo el ciclo de producción para reducir al mínimo daños ecológicos y laborales, impulsando a la par beneficios tangibles en la comunidad."
  },
  {
    id: 22,
    type: "choice",
    prompt: "¿Qué tipo de energía se aprovecha en la planta de Laguna Verde, Veracruz, y en cuál otro reactor se utiliza este mismo principio?",
    image: null,
    correct: "Fisión – Fukushima",
    distractors: [
      "Fusión - Chernobyl",
      "Fisión - ITER",
      "Fusión - Tokamak"
    ],
    explanation: "Las centrales nucleares comerciales operan por fisión de uranio enriquecido. Tanto Laguna Verde como la central de Fukushima emplean reactores nucleares de fisión."
  },
  {
    id: 23,
    type: "choice",
    prompt: "¿Cuál de las siguientes opciones NO consultarías para estudiar ciencia y tecnología por ser considerada irrelevante y poco confiable?",
    image: null,
    correct: "Wikis o chats públicos que asesoran con las tareas.",
    distractors: [
      "Publicaciones sobre el tema realizadas por instituciones educativas.",
      "Publicaciones de pequeños institutos científicos y tecnológicos.",
      "Bibliografía o revistas científicas y tecnológicas."
    ],
    explanation: "Los foros de tareas abiertos o chats informales carecen de arbitraje, fuentes acreditadas o revisión por pares, a diferencia de las publicaciones institucionales o académicas."
  },
  {
    id: 24,
    type: "choice",
    prompt: "¿Para qué se desarrolló el Gran Colisionador de Hadrones (LHC)?",
    image: null,
    correct: "Para acelerar y colisionar hadrones y verificar la validez del modelo de la física de partículas.",
    distractors: [
      "Para acelerar protones y verificar las leyes de fisión del átomo y la física de partículas.",
      "Para acelerar y colisionar electrones y demostrar la utilidad de la generación de energía nuclear.",
      "Para colisionar partículas subatómicas por medio de un campo magnético y generar energía eléctrica."
    ],
    explanation: "El LHC en el CERN fue diseñado para hacer chocar haces de hadrones a energías extremas y poner a prueba los postulados del Modelo Estándar (como la confirmación del bosón de Higgs)."
  },
  {
    id: 25,
    type: "choice",
    prompt: "¿Cuáles de las siguientes acciones de comunicación tienen un énfasis principal en la difusión científica?\n1. Noticias de experimentos y resultados en química, física y biología.\n2. Divulgar modificaciones sociales por uso de redes sociales.\n3. Notas de literatura o ciencia ficción especulativa.\n4. Comunicar formalmente avances de universidades con lenguaje técnico especializado.\n5. Destacar avances de empresas TIC.\n6. Programas de tecnologías aplicadas al agua y cosechas.",
    image: null,
    correct: "1, 3, 4",
    distractors: [
      "2, 5, 6",
      "1, 4, 5",
      "2, 3, 6"
    ],
    explanation: "La difusión del quehacer científico abarca el reporte riguroso de ciencias puras (1), el diálogo con la imaginación y anticipación reflexiva (3) y la comunicación formal entre especialistas (4)."
  },
  {
    id: 26,
    type: "choice",
    prompt: "¿Cómo se denomina a una fuente energética obtenida de recursos naturales inagotables por su abundancia o capacidad de reposición?",
    image: null,
    correct: "Renovable",
    distractors: [
      "No renovable",
      "Alternativa",
      "Biomasa"
    ],
    explanation: "Las fuentes renovables (solar, eólica, mareomotriz, etc.) se sustentan en ciclos naturales permanentes o en reservas virtualmente inagotables frente al consumo humano."
  },
  {
    id: 27,
    type: "choice",
    prompt: "«El problema ambiental no es solo competencia institucional, sino una responsabilidad y deber moral». ¿Cuál enunciado explica mejor esta afirmación?",
    image: null,
    correct: "La población debe tomar conciencia de no seguir degradando el medio ambiente.",
    distractors: [
      "La población en general es la responsable de la degradación del medio ambiente.",
      "La ciudadanía debe exigir que ya no se siga contaminando el medio ambiente.",
      "La contaminación ambiental deben ser resuelto por los gobernantes y ecologistas."
    ],
    explanation: "Plantea la ética ambiental como un compromiso ciudadano compartido: la transformación requiere conciencia activa en las decisiones individuales y comunitarias."
  },
  {
    id: 28,
    type: "choice",
    prompt: "Según el texto respecto a la postura de Balaguer Prestes, ¿en qué circunstancia el uso de Internet podría constituir causa legal de baja laboral?",
    image: null,
    correct: "Si se llegara a calificar la adicción al Internet como trastorno psiquiátrico.",
    distractors: [
      "En ninguno, porque las personas son libres de usar la herramienta.",
      "Si el empleado pasa parte de su horario haciendo consultas o navegando.",
      "Si las personas utilizan la red para enviar correos electrónicos personales."
    ],
    explanation: "La tipificación legal o médica de una adicción no controlada como trastorno psiquiátrico formal abriría el marco normativo laboral en materia de incapacidades o rescisiones justificadas."
  },
  {
    id: 29,
    type: "choice",
    prompt: "Identifica cuáles enunciados integran adecuadamente la definición de ciencia:\n1. Estudia regularidades en los fenómenos observables.\n2. Genera saberes sin modificar conocimientos previos.\n3. Puede probarse experimentalmente.\n4. Puede refutarse experimentalmente.\n5. Se basa en consenso de opinión con el público general.\n6. Desecha por completo el saber acumulado.",
    image: null,
    correct: "1, 3, 4",
    distractors: [
      "2, 3, 5",
      "2, 4, 6",
      "1, 5, 6"
    ],
    explanation: "La ciencia es empírica y falible: detecta patrones en la realidad observable (1) y sus modelos deben ser tanto verificables (3) como falsables/refutables ante la evidencia experimental (4)."
  },
  {
    id: 30,
    type: "choice",
    prompt: "Completa el texto: «La reacción de ________ nuclear permite que los núcleos de dos átomos formen un núcleo nuevo con un átomo ________ pesado; los isótopos de ________ son los más utilizados para estas reacciones».",
    image: null,
    correct: "Fusión - más - hidrógeno",
    distractors: [
      "Fusión - menos – helio",
      "Fisión - más - helio",
      "Fusión - menos - hidrógeno"
    ],
    explanation: "En la fusión nuclear, dos núcleos atómicos ligeros (comúnmente isótopos de hidrógeno: deuterio y tritio) se unen para generar un elemento más pesado (helio) liberando gran cantidad de energía."
  }
];
