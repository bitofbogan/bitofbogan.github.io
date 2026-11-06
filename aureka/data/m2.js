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
    prompt: "¿Qué tipo de modo discursivo emplea el autor del siguiente texto? ¿Por qué?<br><br><div class=\"bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-4 rounded-xl text-xs sm:text-sm leading-relaxed font-sans text-justify shadow-2xs\"><div class=\"border-b border-stone-200 dark:border-stone-700 pb-2 mb-3\"><b class=\"text-sm sm:text-base text-auge-dark dark:text-stone-100 font-bold\">El amor en las redes sociales</b></div><p class=\"mb-2.5\">Delicada, detallista, amorosa con los animales, divertida, inteligente y con gusto de viajar. La que suscribe estas cualidades es una mujer interesada en conocer personas y, si hay suerte, encontrar en el ciberespacio a su \"media naranja\". Como ella, miles de personas en el mundo ingresan diariamente a diversas redes sociales para crear su perfil y establecer contacto con usuarios de otros lugares ya sea para concertar una cita casual, sexual o crear una relación amistosa o de pareja.</p><p class=\"mb-2.5\">Con la llegada de las redes sociales y la popularidad adquirida por Internet, millones de personas en el mundo están en búsqueda del amor, adaptándose a nuevas herramientas para conseguirlo ya sea a través de <i>emails</i>, poemas, canciones, videos, tarjetas virtuales, <i>podcast</i>, entre otros.</p><p class=\"mb-2.5\">El amor, el ligue y el flirteo utilizan nuevas herramientas y toda persona puede expresarse y mantenerse en contacto, compartir noticias, divertirse, jugar y sobre todo conocer a otras personas. El mundo del ciberespacio provee al usuario de una máscara, atrás del monitor ya no existe espacio para los tímidos. Se amplían las posibilidades.</p><p>Recientes estudios demuestran que la gente sociable en el mundo real también tiene más contactos en páginas virtuales; por ello distintos usuarios inundan las redes sociales, fortalecen y amplían sus amistades o contactos profesionales.</p></div>",
    type: "choice",
    correct: "Descriptivo, porque da una visión de las formas afectivas de relacionarse por Internet.",
    distractors: [
      "Narrativo, porque el autor cuenta su propia experiencia y sugiere formas para entablar relaciones afectivas en Internet.",
      "Narrativo, porque usa un lenguaje sencillo y coloquial para dar testimonio de su experiencia.",
      "Descriptivo, porque desarrolla ideas sobre las relaciones afectivas en Internet tratando de convencer al lector."
    ],
    hint: "El texto detalla características, recursos y dinámicas de interacción virtual sin relatar una anécdota personal ni buscar persuadir.",
    explanation: "El autor emplea un modo descriptivo porque expone objetivamente cómo las plataformas digitales sirven de canal para los vínculos afectivos, sin intentar convencer al lector."
  },
  {
    id: "m02-q03",
    prompt: "¿Cuál de los siguientes sucesos NO corresponde a un fenómeno natural y por qué?",
    type: "choice",
    correct: "La marea negra, porque se produce como resultado del derrame de petróleo, que es una actividad exclusivamente humana.",
    distractors: [
      "El cambio climático, porque ha sufrido cambios a lo largo del tiempo.",
      "La aurora boreal, porque es producto del choque de la energía solar con la ionosfera.",
      "La formación de icebergs, ya que es un fenómeno que ocurre espontáneamente sin la intervención del hombre."
    ],
    hint: "Identifica el evento que deriva directamente de un accidente o actividad industrial humana y no de las leyes de la naturaleza.",
    explanation: "La marea negra es un desastre causado por el derrame de petróleo, provocado únicamente por seres humanos y no de forma natural."
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
        left: "Síntesis.",
        right: "Recaba las ideas principales de un texto de forma breve."
      },
      {
        left: "Resumen.",
        right: "Expresa con palabras propias las ideas principales de un texto."
      }
    ],
    hint: "El esquema organiza; el resumen reescribe; la síntesis condensa.",
    explanation: "Los esquemas ofrecen una visión gráfica del contenido; el resumen reconstruye con lenguaje propio; y la síntesis abrevia las proposiciones del texto sin cambiar el lenguaje."
  },
  {
    id: "m02-q06",
    prompt: "Se estableció un plan de trabajo en una universidad para aumentar el dominio de herramientas tecnológicas en los estudiantes. De acuerdo con la gráfica de resultados, identifica la afirmación que no coincide con los datos.",
    image: "assets/m02_grafica_plan_trabajo.png",
    type: "choice",
    correct: "El dominio de la tecnología inicial de hombres y mujeres se duplicó al término del proyecto.",
    distractors: [
      "Predominó una frecuencia de mayor dominio entre las mujeres que entre los hombres.",
      "Al término del proyecto los hombres obtuvieron resultados ligeramente superiores.",
      "Hombres y mujeres iniciaron las actividades del proyecto con un mismo nivel de dominio."
    ],
    hint: null,
    explanation: "La gráfica muestra a ambos géneros partiendo del mismo punto y llegando a un nivel mucho mayor que el doble inicial."
  },
  {
    id: "m02-q07",
    prompt: "¿Cómo se denominan las palabras subrayadas en la siguiente frase?<br><br><i>La <u>laptop</u> que opera con el sistema <u>Java</u> tiene dañado el <u>microchip</u>.</i>",
    type: "choice",
    correct: "Tecnicismos, porque son palabras que poseen un significado concreto y específico dentro de algún ámbito.",
    distractors: [
      "Modismos, porque son palabras o términos especializados que toman sentido dentro del área de aplicación.",
      "Anglicismos, porque son palabras adoptadas del idioma inglés ante la falta del vocablo o término específico en español.",
      "Extranjerismos, porque son vocablos o expresiones tomados del inglés para llenar un vacío semántico."
    ],
    hint: "Corresponden a la jerga y vocabulario científico y tecnológico con denotación exacta en la informática.",
    explanation: "Términos como <i>laptop</i>, <i>Java</i> y <i>microchip</i> funcionan como tecnicismos ya que designan conceptos especializados."
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
    explanation: "Los boletines son publicaciones periódicas para divulgar información vigente entre una comunidad."
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
    explanation: "El proceso canónico de redacción textual comprende:<br><br>1. <b>Planear</b>: Definir objetivos y estructura del texto.<br>2. <b>Redactar</b>: Elaboración del primer borrador.<br>3. <b>Revisar</b>: Detección de inconsistencias y errores.<br>4. <b>Reescribir</b>: Edición y versión final pulida."
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
    explanation: "Reconocer la postura ideológica del autor permite entender desde qué punto de vista selecciona datos, realiza argumentos y orienta su mensaje."
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
    explanation: "La ficha de paráfrasis reescribe el contenido con palabras propias preservando el sentido original. Al no ser una cita textual, no lleva comillas."
  },
  {
    id: "m02-q12",
    prompt: "¿Cómo se llama el tratado internacional con el propósito de generar medidas que desaceleren el cambio climático?",
    type: "choice",
    correct: "Protocolo de Kioto.",
    distractors: [
      "Convenio de Estocolmo.",
      "Convenio de Ginebra.",
      "Protocolo de Gotemburgo."
    ],
    hint: "Acuerdo internacional adoptado en Japón en 1997 para reducir las emisiones de gases de efecto invernadero.",
    explanation: "El Protocolo de Kioto es el plan internacional enfocado en fijar metas de reducción de emisiones de gases de efecto invernadero."
  },
  {
    id: "m02-q13",
    prompt: "¿Cómo se define un hecho histórico antropológicamente?",
    type: "choice",
    correct: "Como una construcción intelectual de la realidad social.",
    distractors: [
      "Como una descripción de la realidad libre de interpretaciones.",
      "Como una invención o creación artística de un investigador.",
      "Como una narración objetiva de acontecimientos."
    ],
    hint: "Enfatiza que el hecho histórico no es un dato aislado, sino una interpretación analítica elaborada por el historiador a partir de fuentes.",
    explanation: "De acuerdo con la antropóloga Gloria Delgado, el hecho histórico constituye una construcción intelectual que el historiador edifica al analizar los testimonios del pasado dentro de un contexto."
  },
  {
    id: "m02-q14",
    prompt: "¿Cuáles de las siguientes fuentes son confiables al momento de hacer una investigación documental?",
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
    hint: "Los espacios digitales públicos y salas de conversación carecen de filtros, rigor y autoría.",
    explanation: "Las notas informativas, los textos de divulgación científica y los artículos de opinión firmados por especialistas cuentan con respaldo editorial, a diferencia de los foros abiertos."
  },
  {
    id: "m02-q15",
    prompt: "A partir de la lectura del siguiente texto, ¿cuál es la postura del autor sobre las relaciones sociales a través de Internet?<br><br><div class=\"bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-4 rounded-xl text-xs sm:text-sm leading-relaxed font-sans text-justify shadow-2xs\"><div class=\"border-b border-stone-200 dark:border-stone-700 pb-2 mb-3\"><b class=\"text-sm sm:text-base text-auge-dark dark:text-stone-100 font-bold\">El amor en las redes sociales</b></div><p class=\"mb-2.5\">Delicada, detallista, amorosa con los animales, divertida, inteligente y con gusto de viajar. La que suscribe estas cualidades es una mujer interesada en conocer personas y, si hay suerte, encontrar en el ciberespacio a su \"media naranja\". Como ella, miles de personas en el mundo ingresan diariamente a diversas redes sociales para crear su perfil y establecer contacto con usuarios de otros lugares ya sea para concertar una cita casual, sexual o crear una relación amistosa o de pareja.</p><p class=\"mb-2.5\">Con la llegada de las redes sociales y la popularidad adquirida por Internet, millones de personas en el mundo están en búsqueda del amor, adaptándose a nuevas herramientas para conseguirlo ya sea a través de <i>emails</i>, poemas, canciones, videos, tarjetas virtuales, <i>podcast</i>, entre otros.</p><p class=\"mb-2.5\">El amor, el ligue y el flirteo utilizan nuevas herramientas y toda persona puede expresarse y mantenerse en contacto, compartir noticias, divertirse, jugar y sobre todo conocer a otras personas. El mundo del ciberespacio provee al usuario de una máscara, atrás del monitor ya no existe espacio para los tímidos. Se amplían las posibilidades.</p><p>Recientes estudios demuestran que la gente sociable en el mundo real también tiene más contactos en páginas virtuales; por ello distintos usuarios inundan las redes sociales, fortalecen y amplían sus amistades o contactos profesionales.</p></div>",
    type: "choice",
    correct: "Indica que el ciberespacio permite a las personas sociables ampliar sus contactos.",
    distractors: [
      "Considera que internet es un medio idóneo para que las personas encuentren su media naranja.",
      "Opina que las redes sociales ayudan a los tímidos a establecer relaciones afectivas.",
      "No muestra una postura personal; en cambio, se enfoca a proporcionar datos y hechos."
    ],
    hint: "Observa la conclusión del último párrafo sobre las personas sociables en el entorno físico y digital.",
    explanation: "El texto cita estudios para sostener que los individuos sociables en el mundo real aprovechan los canales digitales para fortalecer y multiplicar sus redes personales."
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
    prompt: "¿Qué tipo de ficha se muestra y qué información le falta especificar?<br><br><div class=\"bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-3 rounded-lg text-xs leading-relaxed font-sans text-justify\"><div class=\"flex justify-between font-bold border-b border-stone-200 dark:border-stone-700 pb-1 mb-2\"><b>El Cid en la épica</b><span>ECelE</span></div>El penúltimo cantar de gesta español es el <i>Poema de Mio Cid</i>. Este género se desarrolló durante los siglos X al XIV. El serio carácter castellano no permitía divagaciones; sin exageraciones sobre el personaje histórico, va elevando a este de la realidad tangible a los altos planos de la grandeza épica.<br><br>Homero puede inventar batallas inexistentes. Nuestro poeta no puede proceder de la misma manera, hay que hablar con la verdad en la mano, que lo grotesco no sea sarcástico con un héroe histórico, que ha consagrado su vida a alejar al odiado enemigo de los límites de sus villas y ciudades.<br><br>Las escenas familiares se multiplican, pero ¡con cuánta dignidad están relatadas! El episodio de las arcas de arena es tópico literario; pero el poeta aleja con cuidado al Cid de compararlo con un vulgar estafador. Martín Antolínez es el encargado de llevar a cabo la negociación del préstamo. Raquel y Vidas parecen los que piden el préstamo, aunque son los que le prestan el dinero al Cid.</div>",
    type: "choice",
    correct: "Ficha de resumen; falta la referencia.",
    distractors: [
      "Ficha técnica; falta la referencia.",
      "Ficha técnica; falta el autor.",
      "Ficha de resumen; falta el autor."
    ],
    hint: "El cuerpo sintetiza ideas centrales de una obra literaria, pero carece de los datos de la fuente editorial o publicación.",
    explanation: "Contiene la condensación de un texto, pero omite la referencia bibliográfica que indica la procedencia de la obra."
  },
  {
    id: "m02-q18",
    prompt: "Ordena los pasos a seguir en una investigación documental:",
    type: "drag_order",
    correctOrder: [
      "Elegir un tema específico.",
      "Elaborar un bosquejo del contenido de la investigación.",
      "Buscar bibliografía especializada.",
      "Realizar fichas bibliográficas y clasificar las obras por orden de importancia."
    ],
    hint: null,
    explanation: "La metodología documental parte de la delimitación del tema, la organización del esquema, la búsqueda de fuentes y el registro en fichas."
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
    explanation: "El análisis histórico gana objetividad y rigor al realizarse posteriormente, cuando se dispone del panorama completo de causas, testimonios e impacto."
  },
  {
    id: "m02-q20",
    prompt: "¿Puede afirmarse que la información presentada por el autor en el siguiente texto es de actualidad? ¿Por qué?<br><br><div class=\"bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-4 rounded-xl text-xs sm:text-sm leading-relaxed font-sans text-justify shadow-2xs\"><div class=\"border-b border-stone-200 dark:border-stone-700 pb-2 mb-3\"><b class=\"text-sm sm:text-base text-auge-dark dark:text-stone-100 font-bold\">El amor en las redes sociales</b></div><p class=\"mb-2.5\">Delicada, detallista, amorosa con los animales, divertida, inteligente y con gusto de viajar. La que suscribe estas cualidades es una mujer interesada en conocer personas y, si hay suerte, encontrar en el ciberespacio a su \"media naranja\". Como ella, miles de personas en el mundo ingresan diariamente a diversas redes sociales para crear su perfil y establecer contacto con usuarios de otros lugares ya sea para concertar una cita casual, sexual o crear una relación amistosa o de pareja.</p><p class=\"mb-2.5\">Con la llegada de las redes sociales y la popularidad adquirida por Internet, millones de personas en el mundo están en búsqueda del amor, adaptándose a nuevas herramientas para conseguirlo ya sea a través de <i>emails</i>, poemas, canciones, videos, tarjetas virtuales, <i>podcast</i>, entre otros.</p><p class=\"mb-2.5\">El amor, el ligue y el flirteo utilizan nuevas herramientas y toda persona puede expresarse y mantenerse en contacto, compartir noticias, divertirse, jugar y sobre todo conocer a otras personas. El mundo del ciberespacio provee al usuario de una máscara, atrás del monitor ya no existe espacio para los tímidos. Se amplían las posibilidades.</p><p>Recientes estudios demuestran que la gente sociable en el mundo real también tiene más contactos en páginas virtuales; por ello distintos usuarios inundan las redes sociales, fortalecen y amplían sus amistades o contactos profesionales.</p></div>",
    type: "choice",
    correct: "Sí, porque detalla las formas vigentes para comunicarse y establecer relaciones sociales.",
    distractors: [
      "Sí, porque describe el futuro de la comunicación y de las relaciones sociales.",
      "No, porque describe las formas de actuar cuando entró en boga el uso de las redes sociales.",
      "No, porque describe un escenario que no refleja la realidad social en el país."
    ],
    hint: "Trata sobre el uso cotidiano de plataformas digitales para el cortejo y las redes profesionales en el presente.",
    explanation: "El texto examina conductas, herramientas y aplicaciones que forman parte de la vida cotidiana actual."
  },
  {
    id: "m02-q21",
    prompt: "Relaciona los ejemplos con el tipo de conjunción o nexo al que corresponden:",
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
    explanation: "Los conectores de contraste realizan comparaciones; los de síntesis proveen una compresión del texto; y los temporales marcan una secuencia cronológica."
  },
  {
    id: "m02-q22",
    prompt: "¿En qué aspectos se pueden observar los efectos y consecuencias del cambio climático?",
    type: "multi_select",
    correctAnswers: [
      "Económico.",
      "Social.",
      "Político.",
      "Cultural."
    ],
    distractors: [
      "Tecnológico.",
      "Geográfico.",
      "Legal."
    ],
    hint: null,
    explanation: "El impacto del cambio climático trasciende lo ecológico al causar pérdidas económicas, tensiones políticas y desplazamientos sociales y culturales forzados."
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
    hint: "Son elementos gramaticales indispensables para ordenar la cronología de un relato.",
    explanation: "Los conectores temporales son marcas gramaticales del discurso narrativo para marcar la progresión de las acciones en el tiempo."
  },
  {
    id: "m02-q24",
    prompt: "¿Qué es un fenómeno natural?",
    type: "choice",
    correct: "Es todo cambio que sucede por sí solo sin la intervención del hombre.",
    distractors: [
      "Es el suceso en el cual las sustancias cambian al combinarse entre sí.",
      "Es un hecho provocado por el hombre susceptible de interpretación científica.",
      "Es aquel que no cambia la composición de ninguna sustancia y es reversible."
    ],
    hint: "Se define por su origen ajeno a la acción humana.",
    explanation: "Un fenómeno natural es cualquier proceso que se produce en la naturaleza sin intervención del hombre."
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
    hint: "Es el entorno sociohistórico que rodea la creación de una obra.",
    explanation: "El contexto de producción abarca el conjunto de condiciones políticas, económicas y culturales que influyen en el autor al momento de concebir su texto."
  },
  {
    id: "m02-q26",
    prompt: "A partir de la siguiente nota informativa, selecciona las preguntas a las que el texto da respuesta. <div class=\"bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-4 rounded-xl text-xs sm:text-sm leading-relaxed font-sans text-justify shadow-2xs\"><div class=\"border-b border-stone-200 dark:border-stone-700 pb-2 mb-3\"><b class=\"text-sm sm:text-base text-auge-dark dark:text-stone-100 font-bold\">Intel presentó su prototipo de smartwatch</b></div><p class=\"mb-2.5\">El director ejecutivo de Intel, Brian Krzanich, anunció que la empresa trabaja en su propio <i>smartwatch</i>. Aunque el accesorio será similar al Pebble o al Samsung Galaxy Gear, este no dependerá de un <i>smartphone</i> para funcionar, pues contará con conectividad propia. Asimismo, incluirá tecnología de geocercas, lo que le permitirá recibir notificaciones basadas en localización. Intel mostró varios ejemplos de tecnología portátil, lo que nos lleva a pensar que a lo largo de este año, la atención de la compañía se centrará en dispositivos de menor tamaño. \"Lo portátil no está en todos lados hoy, porque no resuelve problemas importantes y porque no ha sido integrado en nuestro estilo de vida\", comentó Krzanich. \"Estamos enfocados en atacar este reto de ingeniería e innovación\", añadió.</p><p>Intel también desarrolló un chip del tamaño de una tarjeta SD que es alimentado por Quark SOC, al que llamó Intel Edison. La compañía quiere que en el futuro, esta tecnología les permita convertir dispositivos como el <i>smartwatch</i> en computadoras inalámbricas.</p></div>",
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
    hint: null,
    explanation: "La nota informativa responde a las siguientes preguntas:<br><br>• <i>¿Qué?</i>: Presentación del prototipo de <i>smartwatch</i> y del chip Quark SOC.<br>• <i>¿Quién?</i>: Brian Krzanich, director ejecutivo de Intel.<br>• <i>¿Cómo?</i>: Mediante funcionamiento autónomo con conectividad propia y geocercas.<br>• <i>¿Por qué?</i>: Para resolver problemas de integración en el estilo de vida mediante innovación tecnológica.<br><br>En cambio, el texto no menciona fechas precisas (<i>¿Cuándo?</i>) ni la sede o lugar geográfico del anuncio (<i>¿Dónde?</i>)."
  },
  {
    id: "m02-q27",
    prompt: "Para conocer el impacto que ha tenido la tecnología de la información y comunicación en la enseñanza media superior, ¿qué tipos de investigación deben usarse?",
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
    explanation: "Se combinan la investigación documental para fundamentar antecedentes y teorías, y la de campo para recopilar información directa."
  },
  {
    id: "m02-q28",
    prompt: "¿Qué criterios deben seguirse para garantizar la confiabilidad de fuentes o referencias electrónicas?",
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
    hint: "La validez requiere autoría identificable, respaldo editorial de expertos y plataformas no editables por usuarios anónimos.",
    explanation: "La confiabilidad digital requiere sitios con arbitraje, autoría y restricción de edición colaborativa abierta para buscar la integridad académica."
  },
  {
    id: "m02-q29",
    prompt: "¿Cuáles son las características principales de los textos narrativos?",
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
    hint: "Todo relato requiere participantes, secuencia, lugar y momento.",
    explanation: "La narración es la secuencia temporal y espacial donde intervienen personajes situados en un contexto."
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
    explanation: "Un folleto utiliza recursos gráficos, estructura con encabezados claros y datos accesibles, evitando la complejidad de los tecnicismos."
  }
];

if (typeof window !== "undefined") {
  window.moduleInfo = moduleInfo;
  window.questionBank = questionBank;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { moduleInfo, questionBank };
}
