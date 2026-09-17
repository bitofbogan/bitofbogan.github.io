// questions.js
const questionBank = [
  {
    id: 1,
    type: "choice",
    prompt: "Científicos como Stephen Hawking y Roger Penrose forman parte de la ________________ al trabajar con un equipo interdisciplinario e internacional en proyectos de física gravitacional.",
    image: null,
    hint: "Piensa en el modelo de investigación científica de proyectos como el LHC o el Genoma Humano.",
    correct: "Gran Ciencia.",
    distractors: [
      "Pequeña Ciencia.",
      "Tecnociencia."
    ],
    explanation: "La Gran Ciencia se define por proyectos a gran escala donde colaboran equipos interdisciplinarios difundiendo sus hallazgos en publicaciones y congresos internacionales."
  },
  {
    id: 2,
    type: "choice",
    prompt: "Las teorías de la Gran Ciencia se difunden a nivel internacional a través de:",
    image: null,
    hint: null,
    correct: "Publicaciones, congresos y charlas científicas.",
    distractors: [
      "Registros de autor y patentes.",
      "Registros de autor, publicaciones y congresos.",
      "Investigaciones, publicaciones divulgativas y exposiciones."
    ],
    explanation: "Al tratarse de proyectos financiados con fondos públicos, sus resultados se socializan mediante conferencias, congresos y artículos arbitrados, no por patentes comerciales."
  },
  {
    id: 3,
    type: "choice",
    prompt: "¿A qué se refiere el Proyecto Internacional del Genoma Humano?",
    image: null,
    hint: null,
    correct: "Al mapeo completo de los genes del ser humano, incluyendo ubicación, estructura y funciones.",
    distractors: [
      "Al mapeo de todas las mutaciones que le han ocurrido a los genes de los seres humanos.",
      "A la modificación de la estructura molecular del conjunto de los genes de los seres humanos.",
      "Al directorio de la evolución y genealogía del ser humano en todas las regiones del mundo."
    ],
    explanation: "El Proyecto Genoma Humano secuenció las bases nitrogenadas del ADN para identificar la posición cromosómica, estructura química y función de cada gen."
  },
  {
    id: 4,
    type: "choice",
    prompt: "Cuando la ciencia básica se dirige al mejoramiento del medio ambiente, o a la invención, producción y manufactura de bienes materiales y culturales, se convierte en ciencia:",
    image: null,
    hint: "Es la categoría de la ciencia orientada a resolver problemas concretos y producir artefactos o procesos útiles más allá de sólo producir conocimiento nuevo.",
    correct: "Aplicada.",
    distractors: [
      "Técnica.",
      "Tecnológica.",
      "Dirigida."
    ],
    explanation: "La ciencia básica busca comprender las leyes naturales por mera curiosidad; en cuanto ese acervo se orienta a solucionar necesidades materiales o ambientales, se transforma en ciencia aplicada."
  },
  {
    id: 5,
    type: "choice",
    prompt: "¿Cuál es la definición más apropiada del efecto invernadero?",
    image: null,
    hint: "Considera el mecanismo físico de absorción y reemisión de radiación térmica terrestre por parte de los gases atmosféricos.",
    correct: "Es un fenómeno inducido principalmente por gases como el CO$_2$ que retienen la energía radiante de la superficie de la Tierra que se emite como resultado del calentamiento de la radiación solar.",
    distractors: [
      "Es un efecto inducido por los residuos de los gases industriales que producen un incremento de la temperatura de la atmósfera por pérdida de calor de la superficie de la Tierra, generando mayor contaminación.",
      "Es el proceso que atrapa la energía del Sol en los gases de la atmósfera, del mismo modo en que se absorbe calor en los vidrios de un invernadero, contaminando la superficie de la Tierra.",
      "Es el producto de reacciones químicas entre los gases contaminantes en la atmósfera, generando incremento de CO$_2$, metano y ozono, produciendo la lluvia ácida y el calentamiento terrestre."
    ],
    explanation: "El efecto invernadero es un proceso donde gases como el $CO_2$ y el vapor de agua atrapan la radiación infrarroja emitida por la superficie del planeta tras ser calentada por el Sol, evitando que escape al espacio exterior."
  },
  {
    id: 6,
    type: "multi_select",
    prompt: "Selecciona los elementos de la siguiente lista que representan un riesgo para la salud humana.",
    image: null,
    hint: null,
    correctAnswers: [
      "Alimentación animal o humana con plantas transgénicas sin pruebas.",
      "Uso de plantas no probadas respecto a su toxicidad y alergenidad.",
      "Plantas cuya descomposición requiere el doble de tiempo que las naturales."
    ],
    distractors: [
      "Cultivos agrícolas de varias cosechas anuales y gran productividad.",
      "Desarrollo de especies vegetales resistentes a plagas sin pesticidas."
    ],
    explanation: "El peligro real de los organismos modificados genéticamente radica en la falta de ensayos sobre toxicidad, el riesgo de alergias imprevistas y alteraciones en los ciclos de degradación biológica."
  },
  {
    id: 7,
    type: "classification",
    prompt: "Clasifica cada enunciado según corresponda a una práctica autosustentable o tradicional.",
    image: null,
    hint: "Distingue entre el uso de combustibles fósiles y el aprovechamiento de recursos locales o reciclaje.",
    categories: ["Autosustentable", "Tradicional"],
    items: [
      { text: "Utilizar gas natural que es ecológico y barato.", correct: "Tradicional" },
      { text: "Cocinar utilizando gas LP no renovable.", correct: "Tradicional" },
      { text: "Purificar el agua usada para poder utilizarla varias veces.", correct: "Autosustentable" },
      { text: "Utilizar el agua usada para riego de un jardín u hortaliza casera.", correct: "Autosustentable" },
      { text: "Regular la temperatura con materiales aislantes o con celdas solares.", correct: "Autosustentable" },
      { text: "Calentar el agua con un calentador solar de tuberías y depósito aislado.", correct: "Autosustentable" }
    ],
    explanation: "Cualquier uso de combustible es una práctica tradicional. El reciclaje de aguas residuales, el aislamiento térmico y el aprovechamiento solar directo son prácticas autosustentables."
  },
  {
    id: 8,
    type: "multi_select",
    prompt: "¿Cuáles de los siguientes gases de efecto invernadero son producidos por la ganadería?",
    image: null,
    hint: null,
    correctAnswers: [
      "Dióxido de carbono.",
      "Metano."
    ],
    distractors: [
      "Monóxido de carbono.",
      "Butano."
    ],
    explanation: "La ganadería produce metano ($CH_4$) por la fermentación digestiva y manejo de estiércol, además de dióxido de carbono ($CO_2$) por respiración y transporte asociado. El monóxido de carbono proviene de combustiones incompletas en motores."
  },
  {
    id: 9,
    type: "multi_select",
    prompt: "¿Cuáles de los siguientes gases de efecto invernadero son producidos por la combustión en motores?",
    image: null,
    hint: null,
    correctAnswers: [
      "Dióxido de carbono.",
      "Monóxido de carbono."
    ],
    distractors: [
      "Metano.",
      "Butano."
    ],
    explanation: "La quema de gasolina en motores vehiculares libera dióxido de carbono ($CO_2$) y monóxido de carbono ($CO$) debido a la combustión de los hidrocarburos."
  },
  {
    id: 10,
    type: "choice",
    prompt: "¿En qué se centra la atención de analistas, investigadores y políticos respecto al uso de la biotecnología aplicada a los alimentos?",
    image: null,
    hint: null,
    correct: "Riesgo del uso de los alimentos transgénicos para el consumo humano.",
    distractors: [
      "Argumentación de los diferentes participantes respecto a las ventajas y desventajas de estos alimentos.",
      "Desarrollo de tecnología necesaria para la producción masiva de estos alimentos a bajo costo.",
      "Conjunto de conocimientos que deben desarrollarse para dominar la tecnología."
    ],
    explanation: "La mayor controversia social y regulatoria gira en torno a la bioseguridad y a evaluar si el consumo prolongado de transgénicos genera efectos adversos o alergias en la salud humana."
  },
  {
    id: 11,
    type: "choice",
    prompt: "¿En qué caso interviene legalmente el derecho de patente?",
    image: null,
    hint: "Las patentes protegen la propiedad intelectual de una invención práctica antes de que terceros la exploten sin autorización.",
    correct: "En el caso de que un inventor desee registrar su desarrollo antes de que alguien quiera apropiárselo.",
    distractors: [
      "Cuando un científico quiera registrar su investigación antes de que otro haga un descubrimiento similar.",
      "Cuando un inventor decida registrar un desarrollo tecnológico después de que alguien le robe una idea.",
      "En un desarrollo científico, como el caso de la producción de perforaciones en las películas de celuloide."
    ],
    explanation: "Una patente protege invenciones o desarrollos tecnológicos aplicados frente a apropiaciones indebidas."
  },
  {
    id: 12,
    type: "choice",
    prompt: "¿Qué tipo de energía se genera cuando se unen o separan partículas del núcleo atómico?",
    image: null,
    hint: "Es la fuerza liberada directamente desde el núcleo del átomo.",
    correct: "Nuclear.",
    distractors: [
      "Química.",
      "Eléctrica.",
      "Atómica."
    ],
    explanation: "La energía nuclear es aquella almacenada en el núcleo atómico y liberada mediante procesos nucleares (fisión o fusión)."
  },
  {
    id: 13,
    type: "choice",
    prompt: "¿Qué ocurre en la fisión nuclear?",
    image: null,
    hint: "El término 'fisión' proviene de dividir.",
    correct: "Se desintegra el núcleo de un elemento pesado.",
    distractors: [
      "Dos núcleos de átomos ligeros se unen para formar un átomo más pesado.",
      "Dos núcleos atómicos se unen para formar un compuesto químico.",
      "Un átomo pierde electrones para completar el octeto de otro."
    ],
    explanation: "La fisión nuclear consiste en fragmentar el núcleo de un átomo pesado e inestable (como el uranio-235) al ser bombardeado por neutrones, liberando gran cantidad de calor."
  },
  {
    id: 14,
    type: "choice",
    prompt: "¿Qué ocurre en la fusión nuclear?",
    image: null,
    hint: "Es el proceso que alimenta la energía del interior del Sol y las estrellas.",
    correct: "Dos núcleos de átomos ligeros se unen para formar un átomo más pesado.",
    distractors: [
      "Se desintegra el núcleo de un elemento pesado.",
      "Dos núcleos atómicos se unen para formar un compuesto químico.",
      "Un átomo pierde electrones para completar el octeto de otro."
    ],
    explanation: "En la fusión nuclear dos núcleos ligeros (isótopos de hidrógeno como deuterio y tritio) se combinan a temperaturas y presiones extremas para formar un núcleo más pesado."
  },
  {
    id: 15,
    type: "choice",
    prompt: "¿A qué campo corresponde la aplicación del genoma humano para diagnóstico genético, detección de patologías mediante ADN y prevención personalizada de enfermedades?",
    image: null,
    hint: "Busca la disciplina médica que utiliza los datos de ADN individual para predecir riesgos y tratamientos.",
    correct: "Medicina genómica.",
    distractors: [
      "Producción de transgénicos.",
      "Tecnología nutrigenómica.",
      "Clonación humana."
    ],
    explanation: "La medicina genómica aplica la secuenciación del ADN para identificar mutaciones patológicas, evaluar predisposiciones genéticas y diseñar intervenciones terapéuticas preventivas."
  },
  {
    id: 16,
    type: "choice",
    prompt: "¿Cuál es el fin de la ciencia?",
    image: null,
    hint: "Su meta primordial nace del afán de saber y curiosidad por comprender el universo.",
    correct: "El progreso del conocimiento.",
    distractors: [
      "La transformación de la sociedad.",
      "La mejora de la calidad de vida humana.",
      "La construcción de un conjunto de verdades absolutas."
    ],
    explanation: "El propósito de la ciencia radica en expandir el conocimiento humano y comprender los fenómenos naturales sin perseguir obligatoriamente un fin utilitario."
  },
  {
    id: 17,
    type: "choice",
    prompt: "¿Cuál es el fin de la tecnología?",
    image: null,
    hint: "A diferencia de la ciencia pura, busca crear artefactos para intervenir en el entorno social y productivo.",
    correct: "La transformación de la sociedad.",
    distractors: [
      "El progreso del conocimiento.",
      "La mejora de la calidad de vida humana.",
      "La construcción de un conjunto de verdades absolutas."
    ],
    explanation: "La tecnología toma los principios científicos para desarrollar técnicas, herramientas y procesos dirigidos a modificar el entorno material y la vida humana."
  },
  {
    id: 18,
    type: "choice",
    prompt: "¿Cuál fue el nombre del esfuerzo del gobierno estadounidense entre 1942 y 1944 para lograr la fisión del uranio-235 y plutonio-239?",
    image: null,
    hint: "Fue el proyecto científico-militar que culminó con el desarrollo de las primeras armas atómicas.",
    correct: "Proyecto Manhattan.",
    distractors: [
      "Proyecto ENIAC.",
      "Gran Colisionador de Hadrones (LHC).",
      "Proyecto Genoma Humano."
    ],
    explanation: "El Proyecto Manhattan fue el plan estratégico coordinado en Los Álamos para diseñar y detonar los primeros artefactos atómicos durante la Segunda Guerra Mundial."
  },
  {
    id: 19,
    type: "choice",
    prompt: "¿En qué escala científica se clasifica el Proyecto Manhattan?",
    image: null,
    hint: "Describe la integración entre ciencia, ingeniería e intereses militares e industriales.",
    correct: "Tecnociencia.",
    distractors: [
      "Gran Ciencia.",
      "Pequeña Ciencia."
    ],
    explanation: "El Proyecto Manhattan es el ejemplo por excelencia de la tecnociencia al ser un proyecto con un fin tecnológico específico financiado por el Estado."
  },
  {
    id: 20,
    type: "choice",
    prompt: "¿Cuál de las siguientes opciones contiene un ejemplo de ciencia aplicada con implicaciones éticas?",
    image: null,
    hint: "Las leyes abstractas de la física son neutrales; manipular deliberadamente la biología alimentaria no lo es.",
    correct: "Desarrollo y producción de productos transgénicos.",
    distractors: [
      "Construcción de las leyes de la termodinámica.",
      "Desarrollo de la teoría unificada de la física cuántica.",
      "Identificación de las leyes de conducción eléctrica."
    ],
    explanation: "Las leyes físicas son formulaciones teóricas neutrales, mientras que la producción de organismos modificados genéticamente involucra debates sobre bioseguridad, patentes alimentarias y soberanía sanitaria."
  },
  {
    id: 21,
    type: "choice",
    prompt: "¿Puede afirmarse que actualmente Internet permite consolidar una sociedad plenamente justa en nuestro país?",
    image: null,
    hint: "Reflexiona sobre si toda la población tiene la misma conectividad, recursos y equipo para acceder a la red.",
    correct: "No, porque aún existe la necesidad de que toda la población tenga acceso equitativo, libre y gratuito.",
    distractors: [
      "Sí, porque ha propiciado que los grupos de poder puedan difundir sus ideas y principios a toda la población.",
      "Sí, porque ha integrado a toda la población en las redes sociales con el uso de herramientas de ofimática.",
      "No, porque falta conseguir que todas las personas tengan cuidado con el uso del Internet, de páginas seguras sin virus."
    ],
    explanation: "La persistencia de la brecha digital y la disparidad socioeconómica impiden que la red garantice justicia social si amplios sectores carecen de acceso libre y equitativo."
  },
  {
    id: 22,
    type: "choice",
    prompt: "El neutrón está formado por partículas fundamentales denominadas:",
    image: null,
    hint: "Los hadrones se componen de tríos de partículas elementales con cargas fraccionarias.",
    correct: "Quarks.",
    distractors: [
      "Electrones.",
      "Protones.",
      "Neutrinos."
    ],
    explanation: "Los neutrones son hadrones no elementales constituidos internamente por tres quarks (un quark up y dos quarks down) unidos por la fuerza nuclear fuerte."
  },
  {
    id: 23,
    type: "choice",
    prompt: "¿Qué se espera obtener de una empresa que asume como valor la responsabilidad social?",
    image: null,
    hint: "Involucra un compromiso integral con la sustentabilidad y el cuidado integral de su impacto operativo.",
    correct: "Minimizar el impacto negativo y maximizar el impacto positivo de las acciones o de la tecnología que utiliza.",
    distractors: [
      "Intervenir en proyectos con comunidades a fin de realizar obras educativas para mejorar su calidad de vida.",
      "Trabajar con grupos a fin de apoyar la comercialización de los productos de la empresa o de la misma comunidad.",
      "Trabajar con grupos a fin de proveerles ayuda para reducir el impacto social y reducir la violencia en las comunidades."
    ],
    explanation: "La responsabilidad social empresarial implica evaluar el ciclo integral del negocio para mitigar daños ambientales o laborales e impulsar activamente beneficios para la sociedad."
  },
  {
    id: 24,
    type: "choice",
    prompt: "¿Qué tipo de generación de energía ocurre en la planta de Laguna Verde, Veracruz?",
    image: null,
    hint: "Es el único método nuclear que puede replicar la humanidad actualmente al fracturar núcleos de uranio enriquecido.",
    correct: "Fisión nuclear.",
    distractors: [
      "Fusión nuclear.",
      "Quema de combustibles fósiles.",
      "Aprovechamiento de paneles solares."
    ],
    explanation: "Laguna Verde opera reactores de agua en ebullición basados en la fisión controlada de uranio enriquecido para producir vapor y mover turbinas generadoras."
  },
  {
    id: 25,
    type: "choice",
    prompt: "¿En qué otro reactor se utiliza la misma técnica de generación de energía que en Laguna Verde, Veracruz?",
    image: null,
    hint: "Corresponde al reactor japonés involucrado en un accidente en marzo de 2011.",
    correct: "Fukushima.",
    distractors: [
      "Chernobyl.",
      "Tokamak.",
      "Manhattan."
    ],
    explanation: "Tanto Laguna Verde como las unidades accidentadas en Fukushima corresponden a reactores de fisión nuclear."
  },
  {
    id: 26,
    type: "choice",
    prompt: "¿Cuál de las siguientes opciones NO consultarías para estudiar ciencia y tecnología por ser considerada irrelevante y poco confiable?",
    image: null,
    hint: "Identifica las plataformas que carecen de revisión editorial o respaldo académico.",
    correct: "Wikis o chats públicos que asesoran con las tareas.",
    distractors: [
      "Publicaciones sobre el tema realizadas por instituciones educativas.",
      "Publicaciones de pequeños institutos científicos y tecnológicos.",
      "Bibliografía o revistas científicas y tecnológicas."
    ],
    explanation: "Los foros de tareas abiertos y chats sin moderación carecen de arbitraje científico, validación de fuentes y rigor metodológico."
  },
  {
    id: 27,
    type: "choice",
    prompt: "¿Para qué se desarrolló el Gran Colisionador de Hadrones (LHC)?",
    image: null,
    hint: "Fue construido en el CERN para poner a prueba la teoría física más fundamental.",
    correct: "Para acelerar y colisionar hadrones y verificar la validez del modelo de la física de partículas.",
    distractors: [
      "Para acelerar protones y verificar las leyes de fisión del átomo y la física de partículas.",
      "Para acelerar y colisionar electrones y demostrar la utilidad de la generación de energía nuclear.",
      "Para colisionar partículas subatómicas por medio de un campo magnético y generar energía eléctrica."
    ],
    explanation: "El LHC hace chocar haces de protones a velocidades cercanas a la de la luz para recrear condiciones primordiales y validar las partículas predichas por el Modelo Estándar."
  },
  {
    id: 28,
    type: "multi_select",
    prompt: "Los medios de comunicación pueden apoyar a la construcción de cultura científica entre el público en general. Selecciona las 3 acciones que tienen su énfasis principal en la difusión científica.",
    image: null,
    hint: "Prioriza los canales de comunicación rigurosa de avances en ciencias puras, centros académicos y tecnologías emergentes.",
    correctAnswers: [
      "Ofrecer noticias acerca de experimentos y resultados en química, física y biología en la actualidad.",
      "Señalar nuevos conocimientos de universidades y centros de investigación con lenguaje técnico y formalidad.",
      "Destacar las aplicaciones de las TIC que están produciendo las empresas más avanzadas."
    ],
    distractors: [
      "Divulgar aplicaciones que han modificado movimientos sociales a través de redes sociales e Internet.",
      "Proponer notas sobre cuentos y novelas de anticipación de futuros imaginarios.",
      "Producir programas sobre productos para generación de energía, distribución de agua potable y cosechas."
    ],
    explanation: "La divulgación científica en medios prioriza el reporte de experimentos en ciencias fundamentales, el rigor metodológico institucional y la innovación de frontera en telecomunicaciones y cómputo."
  },
  {
    id: 29,
    type: "choice",
    prompt: "¿Cómo se denomina a una fuente energética obtenida de recursos naturales inagotables por su abundancia o capacidad de reposición?",
    image: null,
    hint: "Son recursos energéticos que se regeneran de forma constante mediante ciclos naturales.",
    correct: "Renovable.",
    distractors: [
      "No renovable.",
      "Alternativa.",
      "Biomasa."
    ],
    explanation: "Las fuentes renovables (como la energía solar, eólica o geotérmica) dependen de ciclos biofísicos perpetuos que no se agotan con el aprovechamiento humano."
  },
  {
    id: 30,
    type: "choice",
    prompt: "Más allá de los organismos e instituciones ambientalistas, ¿qué se debe reconocer respecto a la conservación ambiental?",
    image: null,
    hint: "Enfoca la solución ambiental como una responsabilidad moral compartida.",
    correct: "Que la población debe tomar conciencia de no seguir degradando el medio ambiente.",
    distractors: [
      "Que la población en general es la responsable de la degradación del medio ambiente.",
      "Que la ciudadanía debe exigir que ya no se siga contaminando el medio ambiente.",
      "Que la contaminación ambiental debe ser resuelto exclusivamente por los gobernantes y ecologistas."
    ],
    explanation: "La ética ambiental plantea que la preservación de los ecosistemas no es un asunto exclusivo de especialistas, sino un deber colectivo que exige conciencia social cotidiana."
  },
  {
    id: 31,
    type: "choice",
    prompt: "¿En qué circunstancia el uso de Internet podría constituir causa legal de baja laboral?",
    image: null,
    hint: "Se refiere a la condición médica que permitiría equiparar la conducta a una incapacidad o patología clínica.",
    correct: "Si se llegara a calificar la adicción al Internet como un trastorno psiquiátrico.",
    distractors: [
      "En ninguno, porque las personas son libres de usar la herramienta.",
      "Si el empleado pasa parte de su horario haciendo consultas o navegando.",
      "Si las personas utilizan la red para enviar correos electrónicos personales."
    ],
    explanation: "Según la postura de Roberto Balaguer, si la ciberadicción se clasifica formalmente como patología en manuales psiquiátricos, adquiere reconocimiento laboral y legal vinculante."
  },
  {
    id: 32,
    type: "multi_select",
    prompt: "Selecciona los enunciados que integran correctamente la definición de ciencia.",
    image: null,
    hint: "Busca los principios sobre patrones repetibles y refutabilidad por experimentación.",
    correctAnswers: [
      "Estudia regularidades en los fenómenos que ocurren en la realidad.",
      "Puede probarse por experimentación.",
      "Puede refutarse por experimentación."
    ],
    distractors: [
      "Genera conocimiento sobre saberes existentes sin modificar las bases anteriores o disponibles.",
      "Debe construirse por medio del diálogo y el acuerdo entre la comunidad científica y el público en general.",
      "Debe constituirse por conocimientos nuevos y desechar los saberes actuales."
    ],
    explanation: "La ciencia es objetiva y falseable: observa regularidades en la naturaleza y somete sus explicaciones a contrastación empírica, sin depender de opiniones populares o dogmas estáticos."
  },
  {
    id: 33,
    type: "choice",
    prompt: "La reacción de ________ nuclear permite que los núcleos de dos átomos formen un núcleo nuevo con un átomo más pesado.",
    image: null,
    hint: "Recuerda la palabra que alude a 'fundir' elementos.",
    correct: "Fusión.",
    distractors: [
      "Energía.",
      "Fisión.",
      "Atomización."
    ],
    explanation: "La fusión nuclear es el proceso físico en el que dos núcleos atómicos se integran para dar origen a un nuevo elemento de mayor masa."
  },
  {
    id: 34,
    type: "choice",
    prompt: "En la fusión nuclear se unen dos átomos para formar un núcleo nuevo _______ pesado.",
    image: null,
    hint: null,
    correct: "Más.",
    distractors: [
      "Menos."
    ],
    explanation: "Al integrarse dos núcleos ligeros, la masa atómica resultante es mayor que la de los componentes individuales de partida."
  },
  {
    id: 35,
    type: "choice",
    prompt: "Los isótopos de ________________ son los más utilizados para las reacciones de fusión nuclear.",
    image: null,
    hint: "Es el elemento químico más ligero y abundante del cosmos (utilizando deuterio y tritio).",
    correct: "Hidrógeno.",
    distractors: [
      "Helio.",
      "Plutonio.",
      "Uranio."
    ],
    explanation: "Los isótopos de hidrógeno (deuterio y tritio) son los candidatos preferidos para la fusión debido a su ligereza y a la energía que liberan al fusionarse en helio."
  }
];
