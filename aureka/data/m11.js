/**
 * Aureka - Banco de Preguntas
 * Módulo 11: Historia Contemporánea
 */

const moduleInfo = {
  badge: "Módulo 11",
  title: "Historia Contemporánea",
  topicVideos: {}
};

const questionBank = [
  {
    id: "m11-q01",
    prompt: "¿Cómo se clasificó la guerra que inició Estados Unidos en contra de Iraq con el argumento de que disponía de armamento nuclear?",
    type: "choice",
    correct: "Preventiva.",
    distractors: [
      "Civil.",
      "Sucia.",
      "Fría."
    ],
    hint: "El conflicto se justificó atacando con antelación ante una supuesta agresión futura.",
    explanation: "Una guerra preventiva es la ofensiva que inicia un país alegando neutralizar un ataque futuro antes de que este ocurra."
  },
  {
    id: "m11-q02",
    prompt: "¿En que período histórico del siglo XX se desarrollo la guerra de Vietnam?",
    type: "choice",
    correct: "La Guerra Fría.",
    distractors: [
      "La Gran Depresión.",
      "Primera Guerra Mundial.",
      "Segunda Guerra Mundial."
    ],
    hint: "Fue el conflicto geopolítico indirecto entre el bloque capitalista y el bloque comunista.",
    explanation: "La confrontación de Vietnam formó parte de las guerras subsidiarias de la Guerra Fría entre Estados Unidos y la Union Sovietica."
  },
  {
    id: "m11-q03",
    prompt: "¿Cuál fue la principal causa para la victoria de los comunistas en Vietnam?",
    type: "choice",
    correct: "La intervención militar de la URSS en el año 1974.",
    distractors: [
      "La amenaza nuclear declarada por la Unión Soviética.",
      "La retirada de las tropas estadounidenses en 1973.",
      "La muerte del líder de Vietnam del Sur, Ngo Dinh Diem."
    ],
    hint: "Pon atención al apoyo militar decisivo y sostenido que recibió el ejército del norte.",
    explanation: "El respaldo con armamento, asesores y suministros por parte de la URSS fortaleció al norte para conquistar la capital Saigón."
  },
  {
    id: "m11-q04",
    prompt: "Ordena cronológicamente los acontecimientos ocurridos en la descolonizacion de Sudáfrica:",
    type: "drag_order",
    correctOrder: [
      "Fundación del Congreso Nacional Africano (ANC).",
      "Independencia del país e integración a la Commonwealth.",
      "Aplicación de la política apartheid de segregación racial.",
      "Encarcelamiento de Nelson Mandela.",
      "Levantamiento estudiantil en el barrio negro de Soweto."
    ],
    hint: "Inicia con la creación del partido en 1912 y culmina con las revueltas estudiantiles de 1976.",
    explanation: "La secuencia histórica es: fundación del ANC (1912), independencia y Commonwealth (1931/1961), instauración del Apartheid (1948), arresto de Mandela (1962) y protestas de Soweto (1976)."
  },
  {
    id: "m11-q05",
    prompt: "¿Cuál era el objetivo primordial de la Revolución Cubana?",
    type: "choice",
    correct: "Derrocar la dictadura de Fulgencio Batista.",
    distractors: [
      "Obtener el control de las fuerzas militares.",
      "Expulsar a los estadounidenses de la isla.",
      "Tener un país comunista en América Latina."
    ],
    hint: "El levantamiento insurgente nació para terminar con el régimen autoritario instaurado en 1952.",
    explanation: "El Movimiento 26 de Julio se organizó para poner fin al gobierno de facto y la represión de Fulgencio Batista."
  },
  {
    id: "m11-q06",
    prompt: "¿En donde ocurrio el movimiento bélico que puso fin a la dictadura de la familia Somoza conocido como Revolución Sandinista?",
    type: "choice",
    correct: "Nicaragua.",
    distractors: [
      "Costa Rica.",
      "El Salvador.",
      "Guatemala."
    ],
    hint: "País centroamericano donde el FSLN tomó la capital Managua.",
    explanation: "La Revolución Sandinista tuvo lugar en Nicaragua para derrocar a la dinastía de los Somoza."
  },
  {
    id: "m11-q07",
    prompt: "Completa los espacios en blanco del siguiente texto:",
    type: "fill_blanks",
    sentence: "Se conoce como Revolución {0} al proceso en Nicaragua donde se le puso fin a la dictadura de la familia {1} sustituyéndolo por un gobierno progresista de izquierda.",
    correctOrder: [
      "Sandinista",
      "Somoza"
    ],
    distractors: [
      "Popular",
      "Sandino"
    ],
    hint: "El movimiento adoptó el nombre de Augusto C. Sandino y combatió a la dinastía familiar gobernante.",
    explanation: "La lucha encabezada por el Frente Sandinista derrocó a la familia Somoza en julio de 1979."
  },
  {
    id: "m11-q08",
    prompt: "¿Qué fue la perestroika?",
    type: "choice",
    correct: "Proceso de reforma de la Unión Soviética basado en la reestructuración de la economía.",
    distractors: [
      "Concepto que designa el proceso de cambio de régimen en la Unión Soviética.",
      "Periodo histórico de la historia soviética en donde se formó el estado federal plurinacional.",
      "Término que señala el triunfo de la Revolución Rusa ante la debacle del socialismo."
    ],
    hint: "El término en ruso traduce literalmente reestructuración.",
    explanation: "La perestroika, impulsada por Gorbachov, buscaba descentralizar y modernizar la economía soviética."
  },
  {
    id: "m11-q09",
    prompt: "Relaciona las estrategias implementadas en la URSS con sus respectivos objetivos de reforma:",
    type: "match_columns",
    pairs: [
      { left: "Glasnost", right: "Transparencia política" },
      { left: "Perestroika", right: "Restructuración económica" }
    ],
    hint: "La glasnost combate el secreto y la censura; la perestroika reorganiza el modelo productivo.",
    explanation: "La glasnost introdujo libertad de expresión y transparencia institucional; la perestroika reestructuró la economía."
  },
  {
    id: "m11-q10",
    prompt: "Completa los espacios en blanco del siguiente texto:",
    type: "fill_blanks",
    sentence: "El cambio de poderes en Portugal se gestó por una revolución integrada por {0} que cambió al Estado Novo y condujo a la independencia de las colonias portuguesas de {1}.",
    correctOrder: [
      "militares de izquierda",
      "Cabo Verde, Angola y Mozambique"
    ],
    distractors: [
      "militares de derecha",
      "intelectuales de izquierda",
      "intelectuales de derecha",
      "Niger, Mali y Tchad",
        "Cabo Verde, Argelia y Mali"
    ],
    hint: "Fue la Revolución de los Claveles encabezada por oficiales del ejército opuestos a las guerras coloniales africanas.",
    explanation: "Militares progresistas terminaron con el Estado Novo y reconocieron la independencia de sus posesiones en África."
  },
  {
    id: "m11-q11",
    prompt: "Completa el texto sobre el conflicto yugoslavo:",
    type: "fill_blanks",
    sentence: "El motivo principal del conflicto yugoslavo fueron las diferencias {0} que afloraron cuando Eslovenia y Croacia declararon su independencia. Posteriormente se independizó Macedonia. En febrero y marzo del 1992 la mayoría bosnia votó a favor de la secesión con la consiguiente guerra-represión por parte de {1} lo cual incidió en migraciones humanas masivas para huir de los conflictos. En 1995 empieza la llamada \"limpieza étnica\" hacia la población {2}. En 1996 Kosovo decide iniciar el proceso de independencia.",
    correctOrder: [
      "religiosas y étnicas",
      "Serbia",
      "musulmana"
    ],
    distractors: [
      "políticas",
      "económicas y políticas",
      "religiosas",
      "Croacia",
      "católica"
    ],
    hint: "Identifica la naturaleza de las tensiones balcánicas, el gobierno central que reprimió a las repúblicas y el grupo víctima en Srebrenica.",
    explanation: "Las fracturas étnico-religiosas derivaron en la ofensiva de Belgrado (Serbia) y en crímenes contra la población bosnia musulmana."
  },
  {
    id: "m11-q12",
    prompt: "Durante su gobierno en Chile, Eduardo Frei impulsó reformas agrarias, educativas y de salud, además de hacer participar al Estado en las empresas explotadoras de cobre. ¿Por qué en su periodo se generó una polarización sociopolítica entre el proletariado y los empresarios, la cual se agravó con la elección del presidente Salvador Allende?",
    type: "choice",
    correct: "Porque Frei era del partido demócrata cristiano que se planteó como una vía neutral o moderada respecto del socialismo y el capitalismo.",
    distractors: [
      "Porque Allende era marxista y propuso reformas contrarias a Frei para ayudar al proletariado con énfasis en la nacionalización del cobre.",
      "Porque la política monetaria promovida por Allende incidió en un auge económico que contrastó con lo ocurrido en el período del presidente Frei.",
      "Porque Frei era socialista al igual que Allende y la injerencia del Estado en la explotación del cobre incidió en el repudio de los grandes capitales."
    ],
    hint: "La doctrina política de Eduardo Frei buscaba una tercera vía intermedia entre extremos ideológicos.",
    explanation: "Frei encabezó la Democracia Cristiana, una corriente moderada que pretendía evitar el choque entre el libre mercado y el socialismo."
  },
  {
    id: "m11-q13",
    prompt: "¿Cuáles son los medios de comunicación que existen actualmente en la época de la globalización?",
    type: "choice",
    correct: "Radio, televisión e Internet.",
    distractors: [
      "Prensa, Internet y buscadores.",
      "Radio, televisión y prensa.",
      "Periódico, revista y radio."
    ],
    hint: "Son las tres herramientas masivas predominantes a escala planetaria.",
    explanation: "La combinación de radio, televisión y la red de internet conforma la tríada de comunicación masiva contemporánea."
  },
  {
    id: "m11-q14",
    prompt: "Relaciona los medios de comunicación con su descripción tecnológica e histórica:",
    type: "match_columns",
    pairs: [
      { left: "Televisión", right: "Utilizó el iconoscopio basado en el principio de emisión fotoeléctrica emitiendo electrones que originan la señal." },
      { left: "Internet", right: "Es un conjunto descentralizado de redes interconectadas que garantizan un alcance mundial." },
      { left: "Radio", right: "Sus primeras transmisiones aparecieron en la década de los años veinte y treinta." },
      { left: "Cine", right: "Es la técnica de proyectar fotogramas de forma rápida y sucesiva para crear la impresión de movimiento." }
    ],
    hint: "Asocia cada concepto técnico: iconoscopio para TV, fotogramas para cine y redes globales para Internet.",
    explanation: "El iconoscopio permitió la recepción televisiva, los fotogramas en serie dan la animación del cine y las redes conectadas forman Internet."
  },
  {
    id: "m11-q15",
    prompt: "Relaciona a los inventores y científicos con su contribución a la evolución de las telecomunicaciones:",
    type: "match_columns",
    pairs: [
      { left: "Heinrich Hertz", right: "Difusión de impulsos electromagnéticos en el aire." },
      { left: "Nikola Tesla", right: "Comunicación inalámbrica por medio de ondas de radio." },
      { left: "John L. Baird", right: "Invención de la televisión en blanco y negro." },
      { left: "Guillermo Gonzalez Camarena", right: "Invención de la televisión a color." },    
    ],
    hint: "Hertz confirmó físicamente las ondas electromagnéticas, Tesla patentó la radio y Baird desarrolló la televisión mecánica.",
    explanation: "Hertz descubrió la propagación de ondas en el espacio, Tesla logró la transmisión inalámbrica y Baird concibió la televisión."
  },
  {
    id: "m11-q16",
    prompt: "Analiza las gráficas comparativas sobre servicios de comunicación e informática entre 2000 y 2011.<br><br>¿Qué afirmaciones son correctas a partir de la información disponible?",
    image: "assets/m11_servicios_comunicacion.png",
    type: "multi_select",
    correctAnswers: [
      "Internet crece en todo el mundo en el número de usuarios.",
      "El uso de correo postal tiene un crecimiento inferior al de Internet.",
      "Las aplicaciones de software para Internet crecen en forma exponencial a lo largo del tiempo."
    ],
    distractors: [
      "Internet tiene crecimiento exponencial en el número de usuarios en todo el mundo.",
      "Internet crece en forma geométrica en la cantidad de áreas geográficas cubiertas.",
      "Internet crece en la cantidad de áreas geográficas cubiertas.",
      "El correo postal crece de manera similar al de Internet.",
      "Las aplicaciones de software para Internet crecen en forma aritmética a lo largo del tiempo."
    ],
    hint: "Observa el aumento de internautas en cada continente, el estancamiento del correo físico y la curva pronunciada del software.",
    explanation: "Los datos muestran un incremento generalizado de usuarios de Internet, un crecimiento notablemente menor del correo postal y una curva exponencial de software."
  },
  {
    id: "m11-q17",
    prompt: "¿Qué acontecimientos se ligan a la cultura del rock and roll de los años 60 para que se le considere parte de la revolución tecnológica y social del siglo XX?",
    type: "multi_select",
    correctAnswers: [
      "Desarrollo de nuevos medios de grabación en acetato, con discos de 45 rpm y sonido estereofónico.",
      "Promoción de campañas antibélicas contra la guerra de Vietnam.",
      "Inclusión de temas contra el sistema capitalista, antireligiosos, contra la discriminación y con contenido erótico."
    ],
    distractors: [
      "Impulso de la grabación por medio de cintas magnéticas monaurales de alta fidelidad.",
      "Entrada al mercado estadounidense de músicos y bailarines mexicanos.",
      "Difusión de la moda de los \"pachucos\" e incremento de peñas y cafés conciertos con música \"de protesta\".",
      "Nueva propuesta musical de heavy metal y punk rock."
    ],
    hint: "Elige las opciones que combinen mejoras acústicas en vinilo con protesta política y cuestionamiento moral.",
    explanation: "El auge del rock combinó el soporte en 45 rpm y sonido estéreo con el rechazo a la guerra de Vietnam y a las normas conservadoras."
  },
  {
    id: "m11-q18",
    prompt: "En una exhibición en honor a Andy Warhol, ¿a qué corriente artística se hace referencia y qué elementos representativos deben exhibirse?",
    type: "choice",
    correct: "Pop — Objetos cotidianos, botellas de cerveza, latas de alimentos, cuadros de historietas.",
    distractors: [
      "Surrealismo — Objetos cotidianos, botellas de cerveza, latas de alimentos, cuadros de historietas.",
      "Pop — Objetos y animales fantásticos, relojes derritiéndose, ciudades vacías, campos desolados.",
      "Surrealismo — Objetos y animales fantásticos, relojes derritiéndose, ciudades vacías, campos desolados."
    ],
    hint: "Movimiento enfocado en el consumo masivo y la publicidad popular.",
    explanation: "Andy Warhol es el principal referente del Pop Art, famoso por utilizar imágenes comerciales y de consumo cotidiano."
  },
  {
    id: "m11-q19",
    prompt: "La gráfica siguiente presenta información de los costos y precios para un producto que se ofrece al público a $1,000 por unidad, costando $3,000 de inversión inicial para la empresa y $300 adicionales por unidad. ¿Qué nombre recibe la recta <b>1</b>?",
    image: "assets/m11_oferta_demanda_costos.png",
    type: "choice",
    correct: "Oferta.",
    distractors: [
      "Demanda.",
      "Precio de mercado.",
      "Precio de venta."
    ],
    hint: null,
    explanation: "La recta roja presenta los costos por unidad ofrecidos a los clientes, por lo que se interpreta como la <b>oferta</b>."
  },
  {
    id: "m11-q19a",
    prompt: "La gráfica siguiente presenta información de los costos y precios para un producto que se ofrece al público a $1,000 por unidad, costando $3,000 de inversión inicial para la empresa y $300 adicionales por unidad. ¿Qué nombre recibe la recta <b>2</b>?",
    image: "assets/m11_oferta_demanda_costos.png",
    type: "choice",
    correct: "Demanda.",
    distractors: [
      "Oferta.",
      "Precio de mercado.",
      "Precio de venta."
    ],
    hint: null,
    explanation: "La recta azul presenta los costos por unidad que realiza la empresa, por lo que se interpreta como la <b>demanda</b> de producción."
  },
  {
    id: "m11-q19a",
    prompt: "La gráfica siguiente presenta información de los costos y precios para un producto que se ofrece al público a $1,000 por unidad, costando $3,000 de inversión inicial para la empresa y $300 adicionales por unidad. ¿Qué nombre recibe el punto <b>P</b>?",
    image: "assets/m11_oferta_demanda_costos.png",
    type: "choice",
    correct: "Precio de mercado.",
    distractors: [
      "Oferta.",
      "Demanda.",
      "Precio de venta."
    ],
    hint: null,
    explanation: "El punto de intersección entre la oferta y la demanda es el precio de mercado."
  },
  {
    id: "m11-q20",
    prompt: "¿Como se define la migracion?",
    type: "choice",
    correct: "Son los movimientos poblacionales que buscan obtener mejores condiciones de vida.",
    distractors: [
      "Es una alta concentración poblacional en ciertas regiones.",
      "Es un aumento del nivel de marginación entre las clases sociales.",
      "Es el incremento de los niveles de pobreza de ciertos grupos sociales."
    ],
    hint: "Implica el traslado territorial de personas buscando bienestar o seguridad.",
    explanation: "El concepto describe el desplazamiento de grupos humanos orientado a mejorar su calidad de vida."
  },
  {
    id: "m11-q21",
    prompt: "¿Cuál es la explicacion más apropiada para la inmigración?",
    type: "choice",
    correct: "Son desplazamientos de población que conllevan cambios de residencia más o menos permanentes.",
    distractors: [
      "Es la salida de individuos o grupos de personas del lugar de origen o de residencia habitual.",
      "Es el desplazamiento de individuos o grupos de personas para viajar a un lugar distinto del de su residencia habitual.",
      "Es la llegada de individuos o grupos de personas a un lugar diferente al de su origen o residencia habitual."
    ],
    hint: "La respuesta oficial del cuadernillo destaca el establecimiento semipermanente de vivienda.",
    explanation: "Se define como un cambio de residencia estable o prolongado en un nuevo territorio."
  },
  {
    id: "m11-q22",
    prompt: "Identifica a qué tipo de migración corresponde el siguiente caso:\n\nEl 11 de septiembre de 1973 se instaló en Chile una dictadura que acabó con 150 años de historia republicana y provocó la huida de un millón de personas principalmente a Europa y a otros países de América.",
    type: "choice",
    correct: "Política",
    distractors: [
      "Natural",
      "Económica",
      "Guerra"
    ],
    hint: "El exilio masivo fue provocado por el golpe de Estado y la persecución ideológica del régimen militar.",
    explanation: "La salida forzada de personas motivada por golpes de Estado, dictaduras y represión constituye migración política."
  },
  {
    id: "m11-q23",
    prompt: "La tabla muestra estimaciones de residentes indocumentados en Estados Unidos. La tasa de inmigración ilegal se considera constante si la diferencia entre dos años es menor al 0.2%. Siendo así, ¿qué países han mantenido una tasa constante entre 2007 y 2010?",
    image: "assets/m11_tabla_inmigracion.png",
    type: "choice",
    correct: "Brasil, Filipinas e India.",
    distractors: [
      "México, Brasil, Guatemala e India.",
      "Ecuador, Brasil, India, Filipinas y China.",
      "Brasil, India, Corea y China."
    ],
    hint: "Calcula la diferencia porcentual absoluta entre 2007 y 2010 para cada país: debe ser menor a 0.2%.",
    explanation: "En Brasil (1.61% a 1.67% con dif. 0.06%), Filipinas (2.46% a 2.59% con dif. 0.13%) e India (1.87% a 1.85% con dif. 0.02%), las diferencias no superan el 0.2%."
  },
  {
    id: "m11-q24",
    prompt: "¿Cuáles fueron los países que se consolidaron como potencias mundiales al término de la Segunda Guerra Mundial?",
    type: "choice",
    correct: "Estado Unidos y URSS",
    distractors: [
      "Inglaterra y Francia",
      "Francia y Alemania",
      "Alemania y Japón"
    ],
    hint: "Fueron los dos líderes antagónicos del orden bipolar de posguerra.",
    explanation: "Estados Unidos y la Unión Soviética emergieron con la hegemonía global e inauguraron la Guerra Fría."
  },
  {
    id: "m11-q25",
    prompt: "Ordena cronológicamente los siguientes acontecimientos de la Guerra Fría:",
    type: "drag_order",
    correctOrder: [
      "Firma de la carta de la Organización de Estados Americanos",
      "Firma del tratado del Atlántico Norte",
      "La OTAN se convirtió en el principal defensor militar de Europa occidental",
      "Organización del Pacto de Varsovia"
    ],
    hint: "Sigue la línea temporal: OEA (1948), fundación de OTAN (1949), despliegue europeo (inicios de los 50) y alianza soviética (1955).",
    explanation: "El orden correcto es: Carta de la OEA (1948) -> OTAN (1949) -> Consolidación militar europea -> Pacto de Varsovia (1955)."
  },
  {
    id: "m11-q26",
    prompt: "¿Cuál fue la principal potencia económica emergente como resultado de la Guerra Fría y por qué?",
    type: "choice",
    correct: "China. Líder del bloque comunista, con gran desarrollo poblacional, agrícola e industrial, balanceó la bipolaridad mundial y logró anexión de Hong Kong.",
    distractors: [
      "Unión Soviética. Se organizó el bloque socialista con influencia por ejemplo en Angola, Hungría, la República Democrática Alemana, Cuba y Afganistán.",
      "Israel. Recibió protección de Europa y de los Estados Unidos para promover el desarrollo militar y su ámbito de influencia en el medio oriente.",
      "Japón. Recibió protección de los Estados Unidos y apoyo de la política de desarrollo industrial impulsado con el modelo de ingeniería de reversa."
    ],
    hint: "Nación asiática que impulsó reformas de apertura comercial acelerando su productividad industrial y demográfica.",
    explanation: "La apertura y reformas modernizadoras en China la situaron como la principal potencia económica emergente hacia finales del siglo XX."
  },
  {
    id: "m11-q27",
    prompt: "¿A qué países se refiere el término BRIC?",
    type: "choice",
    correct: "China, India, Brasil y Rusia.",
    distractors: [
      "Rusia, Indonesia, Brasil y Corea.",
      "Czechia, Rusia, Brasil e Irán.",
      "Corea, India, Rusia y Brasil."
    ],
    hint: null,
    explanation: "BRIC identifica a las economías emergentes de Brasil, Rusia, India y China."
  },
  {
    id: "m11-q28",
    prompt: "Julio Verne relata en la novela \"El piloto del Danubio\" las actividades de Serge Ladko, un independentista búlgaro cristiano ortodoxo que organiza atentados contra el gobierno turco. A su vez, el gobierno respondió con un grupo paramilitar que abatió a nacionalistas opositores al imperio otomano.\n\n¿Cómo se clasifican respectivamente las actividades terroristas de Serge Ladko y las del grupo paramilitar?",
    type: "choice",
    correct: "Étnico-separatista — de Estado",
    distractors: [
      "Religioso — de Estado",
      "Étnico-separatista — Religioso",
      "Político-ideológico — Político-Religioso"
    ],
    hint: "Ladko busca independizar a su pueblo del dominio imperial; el gobierno combate la disidencia con fuerzas irregulares extrajudiciales.",
    explanation: "La insurgencia por autodeterminación territorial es terrorismo étnico-separatista; la violencia clandestina financiada por el régimen es terrorismo de Estado."
  },
  {
    id: "m11-q29",
    prompt: "Relaciona las dimensiones con las causas que detonaron la revolución en Nicaragua.",
    type: "match_columns",
    pairs: [
      { left: "Económica", right: "Capital controlado por pocas personas y dictadura aliada con la oligarquía." },
      { left: "Ideológico", right: "Surgimiento del movimiento nacionalista de tendencia socialista." },
      { left: "Política", right: "Dictadura desde 1934 en poder de una familia apoyada por Estados Unidos." },
      { left: "Social", right: "Terremoto de 1973 que destruyó Managua, extremos contrastes, desigualdad, desempleo y miseria en las mayorías." }
    ],
    hint: null,
    explanation: "La concentración de capital y oligarquía se refieren a la dimensión económica, el socialismo a la ideológica, la dinastía militar a la política y la miseria y el terremoto a la social."
  },
  {
    id: "m11-q30",
    prompt: "¿Cuál es el compuesto que contiene la información genética de una persona y que forma parte de las células?",
    type: "choice",
    correct: "ADN.",
    distractors: [
      "Timina.",
      "Adenina.",
      "ARN."
    ],
    hint: "Es el ácido desoxirribonucleico que almacena el código hereditario celular.",
    explanation: "El ADN (ácido desoxirribonucleico) es la macromolécula biológica que porta las instrucciones genéticas de los seres vivos."
  }
];

if (typeof window !== "undefined") {
  window.moduleInfo = moduleInfo;
  window.questionBank = questionBank;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { moduleInfo, questionBank };
}
