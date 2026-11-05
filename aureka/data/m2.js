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
    prompt: "Lee el siguiente fragmento tomado y adaptado del libro de texto del Módulo \"El lenguaje en la relación del hombre con el mundo\" y responde la siguiente pregunta:<br><br><b>El amor en las redes sociales</b><br><br>Delicada, detallista, amorosa con los animales, divertida, inteligente y con gusto de viajar. La que suscribe estas cualidades es una mujer interesada en conocer personas y, si hay suerte, encontrar en el ciberespacio a su \"media naranja\". Como ella, miles de personas en el mundo ingresan diariamente a diversas redes sociales para crear su perfil y establecer contacto con usuarios de otros lugares ya sea para concertar una cita casual, sexual o crear una relación amistosa o de pareja.<br><br>Con la llegada de las redes sociales y la popularidad adquirida por Internet, millones de personas en el mundo, están en búsqueda del amor, adaptándose a nuevas herramientas para conseguirlo ya sea a través de emails, poemas, canciones, videos, tarjetas virtuales, podcast, entre otros.<br><br>El amor, el ligue y el flirteo utilizan nuevas herramientas y toda persona puede expresarse y mantenerse en contacto, compartir noticias, divertirse, jugar y sobre todo conocer a otras personas. El mundo del ciberespacio provee al usuario de una máscara, atrás del monitor ya no existe espacio para los tímidos. Se amplían las posibilidades.<br><br>Recientes estudios demuestran que la gente sociable en el mundo real también tiene más contactos en páginas virtuales; por ello distintos usuarios inundan las redes sociales, fortalecen y amplían sus amistades o contactos profesionales.<br><br>¿Qué tipo de modo discursivo emplea el autor? Arguméntalo.",
    type: "choice",
    correct: "Descriptivo, trata de dar una visión de las formas afectivas de relacionarse a través de Internet.",
    distractors: [
      "Narrativo, da testimonio de su propia experiencia y las formas que sugiere para entablar relaciones afectivas en Internet.",
      "Narrativo, usa un lenguaje sencillo y coloquial para dar testimonio de su experiencia.",
      "Descriptivo, desarrolla ideas sobre las relaciones afectivas en Internet tratando de convencer al lector."
    ],
    hint: "El texto detalla características, recursos y dinámicas de interacción virtual sin relatar una anécdota personal ni buscar persuadir.",
    explanation: "El autor emplea un modo discursivo descriptivo porque expone y caracteriza objetivamente cómo las plataformas digitales sirven de canal para los vínculos afectivos contemporáneos."
  },
  {
    id: "m02-q03",
    prompt: "¿Cuál de los siguientes sucesos NO corresponde a un fenómeno natural y por qué?",
    type: "choice",
    correct: "La marea negra, porque se produce como resultado del derrame de petróleo.",
    distractors: [
      "El cambio climático, porque ha sufrido cambios a lo largo del tiempo.",
      "La aurora boreal, porque es producto del choque de la energía solar con la ionosfera.",
      "La formación de icebergs, ya que es un fenómeno que ocurre espontáneamente."
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
        right: "Expresa con palabras propias las ideas principales de un texto."
      },
      {
        left: "Resumen",
        right: "Recaba las ideas principales de un texto de forma breve."
      }
    ],
    hint: "El esquema organiza visualmente la jerarquía; la síntesis reelabora con vocabulario personal; el resumen extrae las ideas condensadas del texto original.",
    explanation: "Los esquemas ofrecen una panorámica gráfica y conceptual del contenido; la síntesis interpreta y reconstruye con lenguaje propio; y el resumen sintetiza con fidelidad las proposiciones esenciales del texto fuente."
  },
  {
    id: "m02-q06",
    prompt: "Se estableció un plan de trabajo de 21 días en una universidad para aumentar el dominio de herramientas tecnológicas en los estudiantes, obteniéndose los siguientes resultados.<br><br>A partir de los resultados presentados en la gráfica, identifica la aseveración que NO COINCIDE con los datos.",
    image: "assets/m02_grafica_plan_trabajo.png",
    type: "choice",
    correct: "Predominó una frecuencia de mayor dominio entre las mujeres que entre los hombres.",
    distractors: [
      "El dominio de la tecnología inicial de hombres y mujeres se duplicó al término del proyecto.",
      "Al término del proyecto los hombres obtuvieron resultados ligeramente superiores.",
      "Hombres y mujeres iniciaron las actividades del proyecto con un mismo nivel de dominio."
    ],
    hint: "Analiza qué curva o serie de puntos se ubica por encima durante la mayor parte del periodo de 21 días.",
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
    prompt: "José, responsable de una dirección de la Secretaría de Turismo, está encargado de producir un \"boletín\" informativo sobre los aspectos ambientales y su relación en las actividades turísticas, así como noticias sobre las nuevas leyes ambientales y turísticas, avisos relacionados con el sector y anuncios clasificados. ¿Cuál de las siguientes características es correcta con relación a la elección de este tipo de material informativo?",
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
    correct: "Porque determina el tratamiento de la información.",
    distractors: [
      "Porque genera una visión propia.",
      "Porque mejora la calidad del ensayo.",
      "Porque valida la fuente de información."
    ],
    hint: "La postura política, social o filosófica del autor influye directamente en el ángulo con el que se interpretan y presentan los hechos.",
    explanation: "Reconocer la postura ideológica del emisor permite entender desde qué marco interpretativo selecciona datos, formula argumentos y orienta su mensaje."
  },
  {
    id: "m02-q11",
    prompt: "¿Cómo se llama la ficha de trabajo que repite la idea de un texto, pero en palabras del investigador y sin distorsionar la idea original? ¿Cómo se incluye en el texto?",
    type: "choice",
    correct: "De paráfrasis y sin comillas.",
    distractors: [
      "Mixta y entre comillas.",
      "De comentario y entre comillas.",
      "Textual y entre paréntesis."
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
    prompt: "A partir de la lectura de \"El amor en las redes sociales\", ¿cuál es la postura del autor sobre las relaciones sociales a través de Internet?",
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
    prompt: "A continuación, se presenta una ficha. Indica a qué tipo corresponde y qué información le falta especificar:<br><br><div class=\"bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 p-3 rounded-lg text-xs leading-relaxed font-sans\"><div class=\"flex justify-between font-bold border-b pb-1 mb-2\"><span>El Cid en la épica</span><span>ECelE</span></div>El penúltimo cantar gesta español es el <i>Poema de Mio Cid</i>. Este género de desarrolló durante los siglos X al XIV. El serio carácter castellano no permitía divagaciones; sin exageraciones sobre el personaje histórico, va elevando a éste de la realidad tangible a los altos planos de la grandeza épica.<br>Homero puede inventar batallas inexistentes. Nuestro poeta no puede proceder de la misma manera, hay que hablar con la verdad en la mano, que lo grotesco no sea sarcástico con un héroe histórico, que ha consagrado su vida a alejar al odiado enemigo de los límites de sus villas y ciudades.<br>Las escenas familiares se multiplican, pero ¡con cuánta dignidad están relatadas!. El episodio de las arcas de arena es tópico literario; pero el poeta aleja con cuidado al Cid de compararlo con un vulgar estafador. Martín Antolínez es el encargado de llevar a cabo la negociación del préstamo. Raquel y Vidas parecen los que piden el préstamo, aunque son los que le prestan el dinero al Cid.</div>",
    type: "choice",
    correct: "Ficha de resumen - referencia.",
    distractors: [
      "Ficha técnica - referencia.",
      "Ficha técnica - autor.",
      "Ficha de resumen - autor."
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
      "Buscar bibliografía especializada.",
      "Elaborar un bosquejo del contenido de la investigación.",
      "Realizar fichas bibliográficas y clasificar las obras por orden de importancia."
    ],
    hint: "Inicia con la delimitación temática, continúa con la localización de fuentes y procede al diseño del esquema previo a la catalogación sistemática.",
    explanation: "La metodología documental parte de la delimitación temática (1), búsqueda de fuentes pertinentes (2), organización del esquema preliminar (3) y registro analítico en fichas (4)."
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
    prompt: "Tomando en cuenta el texto \"El amor en las redes sociales\", ¿puede afirmarse que la información presentada por el autor es de actualidad? Justifica la respuesta.",
    type: "choice",
    correct: "Sí, detalla las formas vigentes para comunicarse y establecer relaciones sociales.",
    distractors: [
      "Sí, porque describe el futuro de la comunicación y de las relaciones sociales.",
      "No, describe las formas de actuar cuando entró en boga el uso de las redes sociales.",
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
        left: "Después de todo, al mismo tiempo, pero.",
        right: "Contraste."
      },
      {
        left: "En conclusión, en resumen, por lo tanto.",
        right: "Síntesis."
      },
      {
        left: "Después de, antes de, inmediatamente.",
        right: "Tiempo."
      }
    ],
    hint: "Uno establece oposición o salvedad; otro clausura o resume lo expuesto; y el último sitúa cronológicamente las acciones.",
    explanation: "Los conectores adversativos y concesivos expresan contraste; las locuciones conclusivas estructuran la síntesis; y los adverbios temporales marcan la secuencia cronológica de los hechos."
  },
  {
    id: "m02-q22",
    prompt: "¿En que aspectos se pueden observar los efectos y consecuencias del cambio climatico?",
    type: "multi_select",
    correctAnswers: [
      "Económico.",
      "Social.",
      "Político."
    ],
    distractors: [
      "Cultural."
    ],
    hint: "Afecta los presupuestos estatales, detona migraciones humanas y reconfigura los acuerdos de gobernanza internacional.",
    explanation: "El impacto del cambio climático trasciende lo ecológico al causar severas pérdidas económicas, tensiones políticas y desplazamientos sociales forzados."
  },
  {
    id: "m02-q23",
    prompt: "Completa el siguiente enunciado con la información que corresponda:<br><br>En un texto narrativo existen diversas particularidades lingüísticas entre las que se pueden citar: verbos de acción, marcas lingüísticas y ________.",
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
    prompt: "Analiza la siguiente nota informativa para identificar cuáles de estas preguntas responde:<br><br><b>Intel presentó su prototipo de smartwatch</b><br><br>El director ejecutivo de Intel, Brian Krzanich, anunció que la empresa trabaja en su propio smartwatch. Aunque el accesorio será similar al Pebble o al Samsung Galaxy Gear, éste no dependerá de un smartphone para funcionar, pues contará con conectividad propia. Asimismo, incluirá tecnología de geocercas, lo que le permitirá recibir notificaciones basadas en localización. Intel mostró varios ejemplos de tecnología portátil, lo que nos lleva a pensar que a lo largo de este año, la atención de la compañía se centrará en dispositivos de menor tamaño. \"Lo portátil no está en todos lados hoy, porque no resuelve problemas importantes y porque no ha sido integrado en nuestro estilo de vida\", comentó Krzanich. \"Estamos enfocados en atacar este reto de ingeniería e innovación\", añadió.<br><br>Intel también desarrolló un chip del tamaño de una tarjeta SD que es alimentado por Quark SOC, al que llamó Intel Edison. La compañía quiere que en el futuro, esta tecnología les permita convertir dispositivos como el smartwatch en computadoras inalámbricas.<br><br>¿Cuáles preguntas responde la nota informativa?",
    type: "choice",
    correct: "¿Qué? ¿Quién? ¿Cómo? ¿Por qué?",
    distractors: [
      "¿Qué? ¿Cómo? ¿Cuándo? ¿Dónde?",
      "¿Quién? ¿Cómo? ¿Por qué?",
      "¿Qué? ¿Quién? ¿Cuándo?"
    ],
    hint: "Responde al suceso (presentación del smartwatch), al actor (director de Intel), a la operación técnica y a las razones de innovación tecnológica.",
    explanation: "La nota detalla el hecho (¿Qué?), el protagonista corporativo (¿Quién?), el funcionamiento autónomo del dispositivo (¿Cómo?) y la visión estratégica para solucionar vacíos tecnológicos (¿Por qué?)."
  },
  {
    id: "m02-q27",
    prompt: "Para conocer el impacto que ha tenido la Tecnología de la Información y Comunicación en la enseñanza media superior, ¿qué tipo de investigación debe usarse?",
    type: "choice",
    correct: "1, 3",
    distractors: [
      "Solo 3",
      "Solo 2",
      "2, 3"
    ],
    hint: "Se requiere indagar la bibliografía existente y recopilar evidencias empíricas directamente en las aulas o planteles.",
    explanation: "Se combinan la investigación documental (revisión de literatura previa y marcos curriculares) y la de campo (encuestas y entrevistas a docentes y alumnos en el entorno escolar)."
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
    prompt: "Irma va a preparar un folleto para concientizar a la comunidad sobre las actividades que todos debemos realizar para contribuir a la desaceleración del cambio climático.<br><br>Selecciona las características que debe poseer el folleto:",
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
