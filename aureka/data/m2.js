/**
 * Aureka - Banco de Preguntas
 * Módulo 2: El lenguaje en la relación del hombre con el mundo
 */

const moduleInfo = {
  badge: "Módulo 2",
  title: "Lectura & Redacción I",
  topicVideos: {}
};

const questionBank = [
  {
    id: "m02-q01",
    prompt: "¿Cuál es la principal función de un texto periodístico?",
    type: "choice",
    correct: "Informar.",
    distractors: [
      "Educar.",
      "Entretener.",
      "Persuadir."
    ],
    hint: "Su propósito central radica en transmitir hechos de actualidad e interés colectivo con objetividad.",
    explanation: "La función primordial del texto periodístico es la informativa, orientada a dar a conocer acontecimientos verídicos y recientes a la sociedad."
  },
  {
    id: "m02-q02",
    prompt: "¿Qué tipo de modo discursivo emplea el autor del siguiente texto? ¿Por qué?",
    image: "assets/m02_amor_en_redes.png",
    type: "choice",
    correct: "Descriptivo, porque da una visión de las formas afectivas de relacionarse por Internet.",
    distractors: [
      "Narrativo, porque el autor cuenta su propia experiencia y sugiere formas para entablar relaciones afectivas en Internet.",
      "Narrativo, porque usa un lenguaje sencillo y coloquial para dar testimonio de su experiencia.",
      "Descriptivo, porque desarrolla ideas sobre las relaciones afectivas en Internet tratando de convencer al lector."
    ],
    hint: "El texto detalla características, recursos y dinámicas de interacción virtual sin relatar una anécdota personal ni buscar persuadir.",
    explanation: "El autor emplea un modo discursivo descriptivo porque expone y caracteriza objetivamente cómo las plataformas digitales sirven de canal para los vínculos afectivos contemporáneos."
  },
  {
    id: "m02-q03",
    prompt: "¿Cuál de los siguientes sucesos NO corresponde a un fenómeno natural y por qué?",
    type: "choice",
    correct: "La marea negra, porque se produce como resultado del derrame de petróleo, que es una actividad exclusivamente humana.",
    distractors: [
      "El cambio climático, porque ha sufrido cambios a lo largo del tiempo.",
      "La aurora boreal, porque es producto del choque de la energía solar con la ionósfera.",
      "La formación de icebergs, ya que es un fenómeno que ocurre espontáneamente sin la intervención del hombre."
    ],
    hint: "Identifica el evento que deriva directamente de un accidente o actividad industrial humana y no de las leyes de la naturaleza.",
    explanation: "La marea negra es un desastre antropogénico causado por el vertido accidental o negligente de hidrocarburos, a diferencia de los procesos geológicos o atmosféricos propios de la Tierra."
  },
  {
    id: "m02-q05",
    prompt: "Relaciona los tipos de estrategias didácticas con su definición correspondiente:",
    type: "match_columns",
    pairs: [
      {
        left: "Esquema.",
        right: "Presenta visualmente las ideas principales de un texto y la relación entre ellas."
      },
      {
        left: "Síntesis",
        right: "Recaba las ideas principales de un texto de forma breve."          
      },
      {
        left: "Resumen",
        right: "Expresa con palabras propias las ideas principales de un texto."
      }
    ],
    hint: "El esquema organiza visualmente la jerarquía; el resumen reelabora con vocabulario personal; la síntesis extrae las ideas condensadas del texto original.",
    explanation: "Los esquemas ofrecen una panorámica gráfica y conceptual del contenido; el resumen interpreta y reconstruye con lenguaje propio; y la síntesis abrevia las proposiciones esenciales del texto fuente sin cambiar el lenguaje."
  },
  {
    id: "m02-q06",
    prompt: "Se estableció un plan de trabajo en una universidad para aumentar el dominio de herramientas tecnológicas en los estudiantes. De acuerdo a la gráfica de resultados, identifica la afirmación que no coincide con los datos.",
    image: "assets/m02_grafica_plan_trabajo.png",
    type: "choice",
    correct: "El dominio de la tecnología inicial de hombres y mujeres se duplicó al término del proyecto.",
    distractors: [
      "Predominó una frecuencia de mayor dominio entre las mujeres que entre los hombres.",
      "Al término del proyecto los hombres obtuvieron resultados ligeramente superiores.",
      "Hombres y mujeres iniciaron las actividades del proyecto con un mismo nivel de dominio."
    ],
    hint: null,
    explanation: "La gráfica muestra que la trayectoria de los hombres superó de forma consistente a la de las mujeres en la mayor parte del seguimiento, por lo que es falso afirmar que predominó un mayor dominio en el grupo femenino."
  },
  {
    id: "m02-q07",
    prompt: "¿Como se denominan las palabras subrayadas en la siguiente frase?<br><br><i>La <u>laptop</u> que opera con el sistema <u>Java</u> tiene dañado el <u>microchip</u>.</i>",
    type: "choice",
    correct: "Tecnicismos, porque son palabras que poseen un significado concreto y específico dentro de algun ámbito.",
    distractors: [
      "Modismos, porque son palabras o términos especializados que toman sentido dentro del área de aplicación.",
      "Anglicismos, porque son palabras adoptadas del idioma inglés ante la falta del vocablo o término específico en español.",
      "Extranjerismos, porque son vocablos o expresiones tomados del inglés para llenar un vacío semántico."
    ],
    hint: "Corresponden a la jerga y vocabulario científico y tecnológico con denotación exacta en la informática.",
    explanation: "Términos como laptop, Java y microchip funcionan como tecnicismos ya que designan conceptos y herramientas especializadas de la computación y la ingeniería."
  },
  {
    id: "m02-q08",
    prompt: "¿Cuál de las siguientes características es correcta respecto al boletín como material informativo?",
    type: "choice",
    correct: "Se debe publicar en forma periódica y tener una vigencia.",
    distractors: [
      "No tiene que ser autorizado ni avalado por la institución.",
      "Su contenido es especializado y técnico, para investigadores.",
      "Está dirigido al público en general sin una temática específica."
    ],
    hint: "Un boletín se caracteriza por su distribución regular en intervalos definidos y por tratar temas de actualidad temporal.",
    explanation: "Los boletines institucionales son publicaciones periódicas estructuradas para divulgar información oportuna con una vigencia determinada entre los miembros de una comunidad o sector."
  },
  {
    id: "m02-q09",
    prompt: "Ordena los pasos para redactar un suceso histórico:",
    type: "drag_order",
    correctOrder: [
      "Planear.",
      "Redactar.",
      "Revisar.",
      "Reescribir."
    ],
    hint: "Inicia con la delimitación y recopilación de ideas, plasma el borrador, examina errores y genera la versión final pulida.",
    explanation: "El proceso canónico de redacción textual comprende: 1) Planear (definir objetivos y estructura), 2) Redactar (elaboración del primer borrador), 3) Revisar (detección de inconsistencias) y 4) Reescribir (edición final)."
  },
  {
    id: "m02-q10",
    prompt: "¿Por qué es importante distinguir la expresión ideológica del autor en un material de consulta?",
    type: "choice",
    correct: "Porque genera una visión propia.",
    distractors: [
      "Porque determina el tratamiento de la información.",
      "Porque mejora la calidad del ensayo.",
      "Porque valida la fuente de información."
    ],
    hint: null,
    explanation: "Reconocer la postura ideológica del emisor permite entender desde qué marco interpretativo selecciona datos, formula argumentos y orienta su mensaje."
  },
  {
    id: "m02-q11",
    prompt: "¿Cómo se llama la ficha de trabajo que repite la idea de un texto en palabras del investigador y sin distorsionar la idea original? ¿Cómo se incluye en el texto?",
    type: "choice",
    correct: "Ficha de paráfrasis y sin comillas.",
    distractors: [
      "Ficha mixta y entre comillas.",
      "Ficha de comentario y entre comillas.",
      "Ficha textual y entre paréntesis."
    ],
    hint: "Cuando se reproduce con vocabulario propio no se usan comillas, a diferencia de la cita textual literal.",
    explanation: "La ficha de paráfrasis reescribe el contenido fuente con redacción propia preservando el sentido original; al no ser una cita textual, no lleva comillas."
  },
  {
    id: "m02-q12",
    prompt: "¿Como se llama el tratado internacional con el propósito de generar medidas que desaceleren el cambio climático?",
    type: "choice",
    correct: "Protocolo de Kioto.",
    distractors: [
      "Convenio de Estocolmo.",
      "Convenio de Ginebra.",
      "Protocolo de Gotemburgo."
    ],
    hint: "Acuerdo internacional adoptado en Japón en 1997 para reducir las emisiones de gases de efecto invernadero.",
    explanation: "El Protocolo de Kioto es el instrumento internacional enfocado en fijar metas vinculantes de reducción de emisiones de gases de efecto invernadero para los países firmantes."
  },
  {
    id: "m02-q13",
    prompt: "¿Cómo define se define un hecho histórico antropologicamente?",
    type: "choice",
    correct: "Como una construcción intelectual de la realidad social.",
    distractors: [
      "Como una descripción de la realidad libre de interpretaciones.",
      "Como una invención o creación artística de un investigador.",
      "Como una narración objetiva de acontecimientos."
    ],
    hint: "Enfatiza que el hecho histórico no es un dato aislado, sino una interpretación analítica elaborada por el historiador a partir de fuentes.",
    explanation: "De acuerdo a la antropologa Gloria Delgado, el hecho histórico constituye una construcción intelectual que el especialista edifica al analizar críticamente los testimonios del pasado dentro de un contexto social."
  },
  {
    id: "m02-q14",
    prompt: "¿Cuales de las siguientes fuentes son confiables al momento de hacer una investigacion documental?",
    type: "multi_select",
    correctAnswers: [
      "Notas informativas.",
      "Textos de divulgación.",
      "Artículos de opinión."
    ],
    distractors: [
      "Salas de chat.",
    "Foros de opinión."
    ],
    hint: "Los foros y salas de conversación carecen de filtro editorial y rigor académico de autoría verificada.",
    explanation: "Las notas informativas, los textos de divulgación científica y los artículos de opinión firmados por especialistas cuentan con respaldo editorial, a diferencia de los foros abiertos donde prima la especulación anónima."
  },
  {
    id: "m02-q15",
    prompt: "A partir de la lectura del texto, ¿cuál es la postura del autor sobre las relaciones sociales a través de Internet?",
    image: "assets/m02_amor_en_redes.png",
    type: "choice",
    correct: "Indica que el ciberespacio permite a las personas sociables ampliar sus contactos.",
    distractors: [
      "Considera que internet es un medio idóneo para que las personas encuentren su media naranja.",
      "Opina que las redes sociales ayudan a los tímidos a establecer relaciones afectivas.",
      "No muestra una postura personal; en cambio, se enfoca a proporcionar datos y hechos."
    ],
    hint: "Observa la conclusión del último párrafo sobre las personas sociables en el entorno físico y digital.",
    explanation: "El texto cita estudios para sostener que los individuos sociables en el mundo real aprovechan los canales digitales para potenciar, fortalecer y multiplicar sus redes personales y profesionales."
  },
  {
    id: "m02-q16",
    prompt: "¿Cuál de las siguientes opciones NO sirve para refutar la siguiente idea planteada?<br><br><i>Con el uso de la tecnología se afecta la convivencia del ser humano con el medio natural y se altera el funcionamiento de los ecosistemas.</i>",
    type: "choice",
    correct: "La actividad tecnológica favorece el crecimiento del consumismo dentro de la sociedad, al brindar productos que cubren nuevos estándares de bienestar.",
    distractors: [
      "La humanidad, de manera directa o indirecta, es la causa principal del creciente agotamiento y degradación de los recursos naturales del planeta, no la tecnología.",
      "Los bienes y servicios que permite crear y diseñar la tecnología facilitan la adaptación del hombre al medio ambiente y la satisfacción de sus necesidades esenciales.",
      "La tecnología puede ser utilizada para la protección del medio ambiente, evitando que las crecientes necesidades humanas agoten o degraden los recursos naturales."
    ],
    hint: "Refutar exige contradecir la tesis; la opción correcta apoya o confirma el daño ecológico y social en lugar de rebatirlo.",
    explanation: "Mencionar que la tecnología estimula el consumismo refuerza la crítica contra el impacto ambiental negativo en vez de desmentirla, por lo que no funciona como contraargumento."
  },
  {
    id: "m02-q17",
    prompt: "¿Qué tipo de ficha se muestra y qué información le falta especificar?<br><br><div class=\"bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-3 rounded-lg text-xs leading-relaxed font-sans\"><div class=\"flex justify-between font-bold border-b pb-1 mb-2\"><span>El Cid en la épica</span><span>ECelE</span></div>El penúltimo cantar gesta español es el <i>Poema de Mio Cid</i>. Este género de desarrolló durante los siglos X al XIV. El serio carácter castellano no permitía divagaciones; sin exageraciones sobre el personaje histórico, va elevando a éste de la realidad tangible a los altos planos de la grandeza épica.<br>Homero puede inventar batallas inexistentes. Nuestro poeta no puede proceder de la misma manera, hay que hablar con la verdad en la mano, que lo grotesco no sea sarcástico con un héroe histórico, que ha consagrado su vida a alejar al odiado enemigo de los límites de sus villas y ciudades.<br>Las escenas familiares se multiplican, pero ¡con cuánta dignidad están relatadas!. El episodio de las arcas de arena es tópico literario; pero el poeta aleja con cuidado al Cid de compararlo con un vulgar estafador. Martín Antolínez es el encargado de llevar a cabo la negociación del préstamo. Raquel y Vidas parecen los que piden el préstamo, aunque son los que le prestan el dinero al Cid.</div>",
    type: "choice",
    correct: "Ficha de resumen; falta la referencia.",
    distractors: [
      "Ficha técnica; falta la referencia.",
      "Ficha técnica; falta el autor.",
      "Ficha de resumen; falta el autor."
    ],
    hint: "El cuerpo sintetiza ideas centrales de una obra literaria, pero carece de los datos de la fuente editorial o publicación.",
    explanation: "Contiene la condensación conceptual de un texto crítico (ficha de resumen), pero omite la referencia bibliográfica completa que respalda la procedencia de la obra."
  },
  {
    id: "m02-q18",
    prompt: "Ordena los pasos a seguir en una investigación documental.",
    type: "drag_order",
    correctOrder: [
      "Elegir un tema específico.",
      "Elaborar un bosquejo del contenido de la investigación.",
      "Buscar bibliografía especializada.",      
      "Realizar fichas bibliográficas y clasificar las obras por orden de importancia."
    ],
    hint: "Inicia con la delimitación temática, continúa con la localización de fuentes y procede al diseño del esquema previo a la catalogación sistemática.",
    explanation: "La metodología documental parte de la delimitación temática, la organización del esquema preliminar, la búsqueda de fuentes pertinentes y el registro analítico en fichas."
  },
  {
    id: "m02-q19",
    prompt: "De acuerdo con los historiadores, ¿en qué momento es preferible hacer la interpretación de un suceso histórico?",
    type: "choice",
    correct: "Tiempo después, porque se tienen más elementos para ser interpretados.",
    distractors: [
      "Inmediatamente, porque el tiempo puede alterar el hecho histórico.",
      "Tiempo después, con el objeto de no alterar el curso de los acontecimientos.",
      "Ambos son idóneos, porque debe aislarse el hecho histórico al estudiarlo."
    ],
    hint: "La distancia temporal otorga perspectiva analítica y permite que emerjan documentos, testimonios y consecuencias a largo plazo.",
    explanation: "El análisis histórico gana objetividad y rigor al realizarse a posteriori, cuando se dispone del panorama completo de causas, testimonios cruzados e impacto social."
  },
  {
    id: "m02-q20",
    prompt: "¿Puede afirmarse que la información presentada por el autor de este texto es de actualidad? ¿Por qué?",
    image: "assets/m02_amor_en_redes.png",
    type: "choice",
    correct: "Sí, porque detalla las formas vigentes para comunicarse y establecer relaciones sociales.",
    distractors: [
      "Sí, porque describe el futuro de la comunicación y de las relaciones sociales.",
      "No, porque describe las formas de actuar cuando entró en boga el uso de las redes sociales.",
      "No, porque describe un escenario que no refleja la realidad social en el país."
    ],
    hint: "Trata sobre el uso cotidiano de plataformas digitales para el cortejo y las redes profesionales en el presente.",
    explanation: "El texto examina conductas, herramientas y aplicaciones que forman parte de la vida cotidiana contemporánea, manteniendo plena vigencia temática."
  },
  {
    id: "m02-q21",
    prompt: "Relaciona los ejemplos con el tipo de conjunción o nexo al que corresponden.",
    type: "match_columns",
    pairs: [
      {
        left: "<i>Después de todo</i>, <i>al mismo tiempo</i>, <i>pero</i>.",
        right: "Contraste."
      },
      {
        left: "<i>En conclusión</i>, <i>en resumen</i>, <i>por lo tanto</i>.",
        right: "Síntesis."
      },
      {
        left: "<i>Después de</i>, <i>antes de</i>, <i>inmediatamente</i>.",
        right: "Tiempo."
      }
    ],
    hint: "Uno establece oposición o comparación; otro clausura o resume lo expuesto; y el último sitúa cronológicamente las acciones.",
    explanation: "Los conectores adversativos y concesivos expresan contraste; las locuciones conclusivas estructuran la síntesis; y los adverbios temporales marcan la secuencia cronológica de los hechos."
  },
  {
    id: "m02-q22",
    prompt: "¿En que aspectos se pueden observar los efectos y consecuencias del cambio climatico?",
    type: "multi_select",
    correctAnswers: [
      "Económico.",
      "Social.",
      "Político.",
      "Cultural."
    ],
    distractors: [
      "Tecnológico.",
      "Geográfico",
      "Legal."
    ],
    hint: "Afecta los presupuestos estatales, detona migraciones humanas y reconfigura los acuerdos de gobernanza internacional.",
    explanation: "El impacto del cambio climático trasciende lo ecológico al causar severas pérdidas económicas, tensiones políticas y desplazamientos sociales forzados."
  },
  {
    id: "m02-q23",
    prompt: "Además de los verbos de acción y las marcas lingüísticas, ¿qué otras particularidades lingüísticas existen en los textos narrativos?",
    type: "choice",
    correct: "Conectores temporales.",
    distractors: [
      "Formas narrativas.",
      "Relaciones causales.",
      "Autores de los hechos."
    ],
    hint: "Son elementos gramaticales indispensables para ordenar la cronología del relato (primero, luego, más tarde).",
    explanation: "Los conectores temporales son marcas gramaticales esenciales en el discurso narrativo para articular la progresión de las acciones en el tiempo."
  },
  {
    id: "m02-q24",
    prompt: "¿Qué es un fenómeno natural?",
    type: "choice",
    correct: "Es todo cambio que sucede por sí solo sin la intervención del hombre.",
    distractors: [
      "Es el suceso en el cual las sustancias cambian al combinarse entre sí.",
      "Es un hecho provocado por el hombre susceptible de interpretación científica.",
      "Es aquél que no cambia la composición de ninguna sustancia y es reversible."
    ],
    hint: "Se define por su origen espontáneo y ajeno a la acción o manufactura humana.",
    explanation: "Un fenómeno natural es cualquier manifestación, cambio o proceso que se produce en la naturaleza sin que medie la voluntad o actividad antropogénica."
  },
  {
    id: "m02-q25",
    prompt: "¿Cómo se denomina al mundo social, económico, político y cultural en el que se desenvuelven los autores al momento de escribir la historia?",
    type: "choice",
    correct: "Contexto de producción.",
    distractors: [
      "Situación comunicativa.",
      "Segmento histórico.",
      "Modalidad narrativa."
    ],
    hint: "Es el entorno sociohistórico particular que rodea la creación de la obra o discurso.",
    explanation: "El contexto de producción abarca el conjunto de condiciones políticas, económicas y culturales que influyen en el autor al momento de concebir su texto."
  },
{
    id: "m02-q26",
    prompt: "A partir de la siguiente nota informativa, selecciona las preguntas a las que el texto da respuesta.",
    image: "assets/m02_intel.png",
    type: "multi_select",
    correctAnswers: [
      "¿Qué?",
      "¿Quién?",
      "¿Cómo?",
      "¿Por qué?"
    ],
    distractors: [
      "¿Cuándo?",
      "¿Dónde?"
    ],
    hint: "El texto detalla el suceso, el protagonista, el funcionamiento técnico y los motivos de diseño, pero omite fechas exactas y sedes de presentación.",
    explanation: "La nota responde a: <i>¿Qué?</i> (presentación del prototipo de smartwatch y chip Quark SOC), <i>¿Quién?</i> (Brian Krzanich, CEO de Intel), <i>¿Cómo?</i> (funcionamiento autónomo con geocercas y conectividad propia) y <i>¿Por qué?</i> (para resolver problemas de integración cotidiana mediante innovación tecnológica). En cambio, no menciona fechas precisas (<i>¿Cuándo?</i>) ni el lugar geográfico del anuncio (<i>¿Dónde?</i>)."
  },
  {
    id: "m02-q27",
    prompt: "Para conocer el impacto que ha tenido la Tecnología de la Información y Comunicación en la enseñanza media superior, ¿qué tipos de investigación deben usarse?",
    type: "multi_select",
    correctAnswers: [
      "De campo.",
      "Documental."
    ],
    distractors: [
      "Experimental.",
      "Científica.",
      "De laboratorio."
    ],
    hint: "Se requiere tanto revisar fuentes bibliográficas existentes como recabar datos directamente en el entorno escolar.",
    explanation: "Se combinan la investigación documental (para fundamentar antecedentes, teorías y estadísticas previas) y la de campo (para recopilar información directamente de alumnos y docentes en los planteles escolares)."
  },
  {
    id: "m02-q28",
    prompt: "¿Que criterios deben seguirse para garantizar la confiabilidad de fuentes o referencias electrónicas?",
    type: "multi_select",
    correctAnswers: [
      "Origen de sitios especializados.",
      "No debe permitir la edición por los lectores.",
      "Debe acreditar la identidad del autor."
    ],
    distractors: [
      "Debe ser producido por instituciones internacionales.",
      "No debe ser antiguos u obsoletos.",
      "Debe ser producido por instituciones públicas nacionales."
    ],
    hint: "La validez exige autoría identificable, respaldo editorial de expertos y plataformas no editables por usuarios anónimos.",
    explanation: "La confiabilidad digital demanda sitios especializados con arbitraje, autoría reconocida y restricción de edición colaborativa abierta para garantizar la integridad académica."
  },
  {
    id: "m02-q29",
    prompt: "¿Cuales son las características principales de los textos narrativos?",
    type: "multi_select",
    correctAnswers: [
      "Tiempo y espacio.",
      "Contexto histórico.",
      "Actores históricos.",
      "Relaciones causales."
    ],
    distractors: [
      "Tipo de fuentes."
    ],
    hint: "Todo relato requiere coordenadas cronotópicas, participantes que ejecutan la trama y un encadenamiento de causa-efecto.",
    explanation: "La narración se cimenta en la secuencia temporal y espacial donde intervienen personajes situados en un contexto y articulados mediante vínculos causales."
  },
  {
    id: "m02-q30",
    prompt: "¿Qué características debe poseer un folleto?",
    type: "multi_select",
    correctAnswers: [
      "Imágenes explicativas.",
      "Hechos y opiniones.",
      "Títulos y subtítulos sencillos."
    ],
    distractors: [
      "Lenguaje formal y técnico."
    ],
    hint: "Un material de divulgación comunitaria debe ser accesible, visualmente atractivo y fácil de comprender para el público general.",
    explanation: "Un folleto de concientización social utiliza recursos gráficos, estructura segmentada con encabezados claros y datos factuales accesibles, evitando la complejidad de los tecnicismos especializados."
  }
];

if (typeof window !== "undefined") {
  window.moduleInfo = moduleInfo;
  window.questionBank = questionBank;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { moduleInfo, questionBank };
}
