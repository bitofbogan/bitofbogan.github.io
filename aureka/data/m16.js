/**
 * Aureka - Banco de Preguntas
 * Módulo 16: Hacia un desarrollo sustentable
 */

const moduleInfo = {
  badge: "Módulo 16",
  title: "Ciencias Ambientales II",
  topicVideos: {
    "distribucion-especies": {
      title: "Distribución de especies",
      url: "https://youtu.be/4CYjU9vH69E"
    },
    "redes-troficas": {
      title: "Energía en redes tróficas",
      url: "https://youtu.be/TmrgXGaP1uU"
    },
    "balance-redox": {
      title: "Balance de reacciones redox",
      url: "https://youtu.be/y5zldrwg5O4"
    },
    "intro-redox": {
      title: "Introducción al balance redox",
      url: "https://youtu.be/U1bX9VBycFU"
    },
    "numero-oxidacion": {
      title: "Números de oxidación",
      url: "https://youtu.be/IEAHFmiUREc"
    },
    "dispersiones": {
      title: "Disoluciones, suspensiones y coloides",
      url: "https://youtu.be/_UTHW76Jopo"
    },
    "clasificacion-materia": {
      title: "Clasificación de la materia",
      url: "https://youtu.be/Y86mFkyIz-k"
    }
  }
};

const questionBank = [
  {
    id: "m16-q01",
    topicId: "intro-redox",
    prompt: "¿Cuál es la ecuación química para la glucosa?",
    type: "choice",
    correct: "$$\\text{C}_6\\text{H}_{12}\\text{O}_6$$",
    distractors: [
      "$$2\\text{C}_6\\text{H}_{12}\\text{O}_6$$",
      "$$4\\text{C}_6\\text{H}_{12}\\text{O}_6$$",
      "$$3\\text{C}_6\\text{H}_{12}\\text{O}_6$$"
    ],
    hint: null,
    explanation: "En los reactivos hay $6\\text{ C}$, $12\\text{ H}$ y $18\\text{ O}$. Al restar los $12\\text{ O}$ de las $6\\text{ O}_2$, el compuesto resultante debe contener exactamente $\\text{C}_6\\text{H}_{12}\\text{O}_6$ con coeficiente $1$."
  },
  {
    id: "m16-q02",
    prompt: "Completa la oración seleccionando el término correspondiente:",
    type: "fill_blanks",
    sentence: "En la biomasa natural se encuentran productos como el petróleo, el gas natural y los minerales que son recursos energéticos {0}.",
    correctOrder: [
      "no renovables"
    ],
    distractors: [
      "renovables",
      "artificiales",
      "finitos"
    ],
    hint: "Se trata de recursos cuyos depósitos tardaron millones de años en formarse y no se regeneran a escala humana.",
    explanation: "El petróleo, el gas natural y los minerales requieren escalas de tiempo geológicas para formarse, por lo que su tasa de consumo excede su reposición natural y se clasifican como no renovables."
  },
  {
    id: "m16-q03",
    prompt: "¿Cómo se le llama a los beneficios que los seres humanos obtienen del medio ambiente, sean económicos o culturales?",
    type: "choice",
    correct: "Ecosistémicos.",
    distractors: [
      "Apoyo.",
      "Regulación.",
      "Aprovisionamiento."
    ],
    hint: "Es el concepto general que agrupa a los servicios de aprovisionamiento, regulación, soporte y culturales.",
    explanation: "Los servicios ecosistémicos engloban todas las contribuciones directas e indirectas de los ecosistemas al bienestar humano."
  },
  {
    id: "m16-q04",
    prompt: "Relaciona los conceptos referentes a los recursos naturales con sus características:",
    type: "match_columns",
    pairs: [
      {
        left: "Recursos naturales.",
        right: "Los materiales de la tierra que se usan para sostener la vida."
      },
      {
        left: "Recursos no renovables.",
        right: "Son recursos que no pueden reponerse."
      },
      {
        left: "Servicios ecosistémicos.",
        right: "Son los beneficios que las personas obtienen de los ecosistemas."
      },
      {
        left: "Recursos renovables.",
        right: "Son recursos que pueden reponerse en un nuevo ciclo natural."
      }
    ],
    hint: "Asocia cada categoría con su capacidad de regeneración o el tipo de beneficio brindado.",
    explanation: "Los recursos naturales sostienen las necesidades biológicas y sociales; los renovables se regeneran cíclicamente; los no renovables existen en reservas finitas; y los servicios ecosistémicos representan los beneficios ecológicos obtenidos."
  },
  {
    id: "m16-q06",
    prompt: "¿Qué opción forma parte de un desarrollo sustentable de acuerdo a los límites de los recursos naturales?",
    type: "choice",
    correct: "Ningún contaminante debe producirse a un ritmo superior al que pueda ser reciclado, neutralizado o absorbido por el medio ambiente.",
    distractors: [
      "Ningún contaminante debe ser producto de la utilización de combustibles fósiles porque puede ser absorbido por el medio ambiente.",
      "Ningún recurso no renovable debe aprovecharse hasta sustituirlo por un recurso renovable utilizado de manera sustentable.",
      "Todos los recursos naturales deben utilizarse a un ritmo que corresponda con el que necesita la naturaleza para producirlos."
    ],
    hint: null,
    explanation: "El principio de sustentabilidad ecológica estipula que la emisión de desechos y contaminantes debe mantenerse por debajo de la capacidad de asimilación y depuración natural del entorno."
  },
  {
    id: "m16-q07",
    prompt: "Completa la oración seleccionando la práctica correspondiente:",
    type: "fill_blanks",
    sentence: "Un ejemplo del concepto de sustentabilidad corresponde con {0}.",
    correctOrder: [
      "cultivos agrícolas diversificados según ciclos naturales"
    ],
    distractors: [
      "la conversión de superficies para el cultivo agrícola",
      "la manipulación genética de especies agrícolas",
      "la tala de los bosques en superficies amplias"
    ],
    hint: "Busca la práctica agrícola que respeta los tiempos ecológicos del suelo sin degradarlo.",
    explanation: "La rotación y diversificación de cultivos respeta los ciclos biogeoquímicos del suelo, evitando la erosión y preservando la fertilidad a largo plazo."
  },
  {
    id: "m16-q08",
    prompt: "Relaciona las características de los indicadores ambientales con su respectivo concepto:",
    type: "match_columns",
    pairs: [
      {
        left: "Indicador integrador del impacto humano sobre el entorno, evaluando recursos necesarios y residuos generados.",
        right: "Huella ecológica."
      },
      {
        left: "Indicador que cuantifica el valor de los recursos naturales y el costo de restauración ecológica y contaminación.",
        right: "PIB verde."
      }
    ],
    hint: "Uno mide el área bioproductiva demandada y el otro ajusta las cuentas macroeconómicas con el costo ecológico.",
    explanation: "La huella ecológica mide la demanda de biósfera requerida para sostener un estilo de vida, mientras que el PIB verde descuenta del producto interno el agotamiento ambiental y los costos de remediación."
  },
  {
    id: "m16-q09",
    prompt: "Selecciona las acciones que se consideran éticas en la investigación si surgen dudas del tema de desarrollo sustentable:",
    type: "multi_select",
    correctAnswers: [
      "Revisar publicaciones científicas.",
      "Citar a los autores cuando se haga una investigación.",
      "Parafrasear citas o textos para integrarlos a una investigación."
    ],
    distractors: [
      "Preguntar a personas del mismo nivel de conocimiento para usar sus ideas.",
      "Usar una tesis o trabajo ajeno como propio."
    ],
    hint: "La ética académica exige rigor en las fuentes consultadas y honestidad intelectual al reconocer créditos.",
    explanation: "Consultar fuentes arbitradas, dar crédito explícito mediante citas y sintetizar respetando la autoría son los pilares éticos de la investigación científica."
  },
  {
    id: "m16-q12",
    prompt: "¿Qué es la bioética?",
    type: "choice",
    correct: "La investigación de la forma en que las decisiones humanas afectan al medio ambiente.",
    distractors: [
      "El estudio de los seres vivos y sus interacciones con el entorno físico.",
      "El esfuerzo de la ciencia y la tecnología para tratar enfermedades contagiosas.",
      "La aplicación de conocimientos biológicos para realizar experimentos en seres vivos."
    ],
    hint: "Analiza el puente moral entre las intervenciones humanas y la preservación de la vida en el planeta.",
    explanation: "La bioética reflexiona sobre la responsabilidad de los actos tecnológicos y humanos sobre la vida, los seres vivos y los ecosistemas."
  },
  {
    id: "m16-q13",
    topicId: "intro-redox",
    prompt: "Completa la ecuación química arrastrando o seleccionando los coeficientes estequiométricos correspondientes:",
    type: "fill_blanks",
    sentence: "{0} $\\text{CO}_2$ + {1} $\\text{H}_2\\text{O} \\rightarrow$ {2} $\\text{C}_6\\text{H}_{12}\\text{O}_6$ + {3} $\\text{O}_2$",
    correctOrder: [
      "6",
      "6",
      "1",
      "6"
    ],
    distractors: [
      "2",
      "3",
      "12"
    ],
    hint: "Se requieren $6\\text{ C}$ a la izquierda para formar una molécula de glucosa y $12\\text{ H}$ provenientes del agua.",
    explanation: "La reacción balanceada de fotosíntesis es:\n$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow 1\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$\nQuedando $6\\text{ C}$, $12\\text{ H}$ y $18\\text{ O}$ en ambos lados."
  },
  {
    id: "m16-q14",
    topicId: "dispersiones",
    prompt: "De acuerdo al tamaño de partículas, las dispersiones presentan características diferentes. Clasifica las siguientes sustancias:",
    type: "classification",
    categories: ["Coloide", "Disolución", "Suspensión"],
    items: [
      { text: "Acero inoxidable.", correct: "Disolución" },
      { text: "Leche.", correct: "Coloide" },
      { text: "Refresco.", correct: "Disolución" },
      { text: "Jugo de frutas.", correct: "Suspensión" },
      { text: "Muestra de sangre.", correct: "Coloide" },
      { text: "Latón.", correct: "Disolución" },
      { text: "Aderezo para ensalada.", correct: "Suspensión" }
    ],
    hint: "Las aleaciones y bebidas sin sedimentos son disoluciones; las mezclas lechosas con efecto Tyndall son coloides; las mezclas con partículas visibles que sedimentan son suspensiones.",
    explanation: "El acero y el latón son disoluciones sólidas (aleaciones) y el refresco es una disolución líquida. La leche y la sangre son coloides con partículas intermedias que no sedimentan fácilmente. El jugo y el aderezo sedimentan al reposar, siendo suspensiones."
  },
  {
    id: "m16-q15",
    topicId: "balance-redox",
    prompt: "Se requiere balancear la siguiente ecuación química por el método de oxidación-reducción:<br>$$\\_\\text{Al} + \\_\\text{Fe}_2\\text{O}_3 \\rightarrow \\_\\text{Al}_2\\text{O}_3 + \\_\\text{Fe}$$<br>Selecciona las aseveraciones que son verdaderas:",
    type: "multi_select",
    correctAnswers: [
      "El Fe se reduce porque gana 3 electrones.",
      "El elemento que se oxida es Aluminio.",
      "El Al cambió su número de oxidación de 0 a +3."
    ],
    distractors: [
      "El agente reductor es el Fe.",
      "El Fe cambió su número de oxidación de +3 a +2.",
      "El agente oxidante es el Al."
    ],
    hint: "El hierro pasa de $+3$ a $0$ y el aluminio pasa de $0$ a $+3$.",
    explanation: "El $\\text{Al}$ pasa de $0$ a $+3$ (pierde electrones, se oxida, agente reductor). El $\\text{Fe}$ pasa de $+3$ a $0$ (gana 3 electrones por átomo, se reduce, proviene del agente oxidante)."
  },
  {
    id: "m16-q16",
    prompt: "¿Cuál de las leyes de la termodinámica hace referencia a la dirección de las transformaciones energéticas?",
    type: "choice",
    correct: "Segunda Ley de la Termodinámica.",
    distractors: [
      "Ley Cero de la Termodinámica.",
      "Primera Ley de la Termodinámica.",
      "Tercera Ley de la Termodinámica."
    ],
    hint: "Establece que el calor fluye espontáneamente de los cuerpos calientes a los fríos y que la entropía del universo tiende a aumentar.",
    explanation: "La segunda ley de la termodinámica determina el sentido espontáneo de los procesos y la degradación irreversible de la energía en forma de entropía."
  },
  {
    id: "m16-q17",
    prompt: "Clasifica los siguientes ciclos biogeoquímicos según su reservorio principal:",
    type: "classification",
    categories: ["Gaseoso", "Sedimentario", "Mixto"],
    items: [
      { text: "Carbono", correct: "Gaseoso" },
      { text: "Azufre", correct: "Sedimentario" },
      { text: "Nitrógeno", correct: "Gaseoso" },
      { text: "Oxígeno", correct: "Gaseoso" },
      { text: "Agua", correct: "Mixto" },
      { text: "Fósforo", correct: "Sedimentario" }
    ],
    hint: "Los elementos con reservorio atmosférico son gaseosos; los de la litosfera son sedimentarios; el ciclo hidrológico transita ampliamente por litosfera, hidrosfera y atmósfera.",
    explanation: "El carbono, nitrógeno y oxígeno tienen su depósito principal en la atmósfera (gaseosos). El fósforo y el azufre descansan en la corteza terrestre y rocas (sedimentarios). El agua circula dinámicamente entre todos los medios (mixto)."
  },
  {
    id: "m16-q18",
    topicId: "redox-troficas",
    prompt: "Considerando la productividad neta en la relación trófica representada en la imagen, ¿qué cantidad de energía $[X]$ tendrá a su disposición un herbívoro si el vegetal elabora $6800\\text{ kcal}$ de tejido?",
    image: "assets/m16_cadena_energia.png",
    type: "choice",
    correct: "$$X = 6800 \\times 20\\% = 1360\\text{ kcal}$$",
    distractors: [
      "$$X = 6800 \\times 70\\% = 4760\\text{ kcal}$$",
      "$$X = 6800 \\times 10\\% = 680\\text{ kcal}$$",
      "$$X = 6800 \\times 80\\% = 5440\\text{ kcal}$$"
    ],
    hint: "El $70\\%$ se gasta en respiración y el $10\\%$ en desechos; únicamente el porcentaje restante pasa al tejido disponible para el consumidor.",
    explanation: "De las $6800\\text{ kcal}$, se disipa el $70\\% + 10\\% = 80\\%$. El $20\\%$ remanente se almacena como biomasa disponible:\n$$\\begin{aligned} X &= 6800 \\times 0.20 \\\\[3pt] &= 1360\\text{ kcal} \\end{aligned}$$"
  },
  {
    id: "m16-q19",
    topicId: "redox-troficas",
    prompt: "¿Cuáles de los siguientes animales pueden completar la red trófica de la imagen?",
    image: "assets/m16_red_trofica.png",
    type: "multi_select",
    correctAnswers: [
      "Pantera.",
      "Tigre.",
      "León."
    ],
    distractors: [
      "Búfalo.",
      "Elefante.",
      "Cebra."
    ],
    hint: "El eslabón debe ser ocupado por grandes carnívoros que consuman a los consumidores previos.",
    explanation: "El búfalo, el elefante y la cebra son herbívoros (consumidores primarios). Los felinos como la pantera, el tigre y el león son depredadores carnívoros que cierran la cadena trófica."
  },
  {
    id: "m16-q20",
    prompt: "¿En cuáles de los siguientes ciclos biogeoquímicos se lleva a cabo el proceso de lixiviación?",
    type: "multi_select",
    correctAnswers: [
      "Nitrógeno.",
      "Fósforo."
    ],
    distractors: [
      "Carbono.",
      "Oxígeno.",
      "Azufre."
    ],
    hint: "La lixiviación ocurre cuando el agua de lluvia disuelve y arrastra nutrientes del suelo hacia capas profundas o mantos acuíferos.",
    explanation: "Los iones de nitrato $(\\text{NO}_3^-)$ y fosfato $(\\text{PO}_4^{3-})$ en el suelo son altamente solubles y suelen ser transportados por el agua mediante lixiviación hacia ríos o mantos freáticos."
  },
  {
    id: "m16-q21",
    prompt: "Con ayuda de una hoja de cálculo se construye la gráfica que representa la influencia de la temperatura en el crecimiento de dos especies vegetales. ¿Cuál de las siguientes aseveraciones se concluye a partir de la información gráfica?",
    image: "assets/m16_grafica_temperatura_cultivos.png",
    type: "choice",
    correct: "La cereza es una planta que no tiene crecimiento a los $30^{\\circ}\\text{C}$.",
    distractors: [
      "Para que la sandía llegue al crecimiento total su temperatura debe ser de $45^{\\circ}\\text{C}$.",
      "El mayor crecimiento de la sandía se logra a los $18^{\\circ}\\text{C}$.",
      "La cereza llega al 50% de su crecimiento con una temperatura de $10^{\\circ}\\text{C}$."
    ],
    hint: "Observa en qué valor de temperatura la curva de la cereza toca el eje horizontal ($0\\%$ de crecimiento).",
    explanation: "La curva de la cereza desciende hasta tocar el $0\\%$ aproximadamente a los $27^{\\circ}\\text{C}$, por lo que a $30^{\\circ}\\text{C}$ su tasa de crecimiento es nula."
  },
  {
    id: "m16-q22",
    topicId: "distribucion-especies",
    prompt: "El lince ibérico es un mamífero propio de la península Ibérica que no se encuentra de forma natural en ninguna otra parte del mundo. ¿A qué categoría pertenece esta especie?",
    type: "choice",
    correct: "Especie endémica.",
    distractors: [
      "Especie nativa.",
      "Especie invasora.",
      "Especie exótica."
    ],
    hint: "Se refiere a una especie cuya distribución geográfica está restringida de forma exclusiva a una región específica.",
    explanation: "Una especie endémica es aquella confinada exclusivamente a un área geográfica determinada y que no habita de manera silvestre en ningún otro lugar."
  },
  {
    id: "m16-q23",
    prompt: "Clasifica los siguientes recursos naturales según su disponibilidad y regeneración:",
    type: "classification",
    categories: ["Renovable", "No renovable", "Inagotable"],
    items: [
      { text: "Cobre", correct: "No renovable" },
      { text: "Aire", correct: "Inagotable" },
      { text: "Aluminio", correct: "No renovable" },
      { text: "Madera", correct: "Renovable" },
      { text: "Azufre", correct: "No renovable" },
      { text: "Agua", correct: "Renovable" },
      { text: "Energía solar", correct: "Inagotable" },
      { text: "Petróleo", correct: "No renovable" }
    ],
    hint: "La radiación solar y la atmósfera son inagotables; la biomasa y el agua dulce tienen ciclos de renovación biológica; los minerales y combustibles fósiles son finitos.",
    explanation: "La madera y el agua dulce se regeneran mediante ciclos biológicos (renovables). Los metales, azufre y combustibles fósiles no se reponen en escalas humanas (no renovables). La radiación solar y el aire están permanentemente disponibles (inagotables)."
  },
  {
    id: "m16-q24",
    prompt: "¿Qué es la huella ecológica?",
    type: "choice",
    correct: "El impacto que ejerce una comunidad, como una familia o una empresa, sobre su entorno.",
    distractors: [
      "El procedimiento que regula la ejecución de obras o actividades para evitar o reducir efectos ambientales negativos.",
      "El procedimiento para identificar, cuantificar y caracterizar los diferentes impactos ambientales potenciales.",
      "La comunicación previa exigida por las leyes ambientales, sobre consecuencias en el ambiente predichas por una evaluación."
    ],
    hint: "Mide el área biológicamente productiva necesaria para proveer los recursos y absorber los residuos generados.",
    explanation: "La huella ecológica mide la superficie ecológicamente productiva requerida para sostener las actividades de una población humana y neutralizar sus desechos."
  },
  {
    id: "m16-q25",
    prompt: "¿Cuáles son las principales actividades humanas que generan gases de efecto invernadero?",
    type: "multi_select",
    correctAnswers: [
      "Combustión de petróleo y carbón.",
      "Tala de bosques.",
      "Uso de transporte público o privado.",
      "Mayor actividad industrial."
    ],
    distractors: [
      "Reforestación.",
      "Incremento en el consumo de agua."
    ],
    hint: "La combustión de hidrocarburos, la pérdida de sumideros de carbono forestales y las chimeneas fabriles emiten $\\text{CO}_2$ y $\\text{CH}_4$.",
    explanation: "La quema de combustibles fósiles, la deforestación (que libera carbono retenido) y la combustión en motores e industrias incrementan la concentración de $\\text{CO}_2$ atmosférico."
  },
  {
    id: "m16-q26",
    prompt: "En 2009 se modificó la ley para prohibir que comercios regalaran bolsas de plástico, aplicando multas a infractores. Atendiendo a que existen argumentos a favor y en contra, ¿cuál concepto involucra la reacción de los consumidores y de los comercios afectados? Justifica la respuesta.",
    type: "choice",
    correct: "Responsabilidad social $\\rightarrow$ Se deben realizar acciones y tomar decisiones que conduzcan a impactos positivos.",
    distractors: [
      "Bioética $\\rightarrow$ Porque se relaciona con las dimensiones éticas de la ciencia y las acciones en la salud humana.",
      "Bioética $\\rightarrow$ Considera la distribución de bienes y servicios entre los miembros de la sociedad en un momento dado.",
      "Responsabilidad social $\\rightarrow$ Se refiere a las formas con las cuales el ser humano se relaciona con su entorno."
    ],
    hint: "Evalúa el compromiso de organizaciones y ciudadanos con el impacto ambiental derivado de sus decisiones.",
    explanation: "La responsabilidad social implica que tanto los comercios como los ciudadanos adecuen sus prácticas cotidianas para generar beneficios colectivos y mitigar el daño ecológico."
  },
  {
    id: "m16-q27",
    prompt: "Analiza la gráfica de sectores sobre el uso doméstico del agua potable. ¿Qué conclusión es correcta a partir de la información?",
    image: "assets/m16_uso_domestico_agua.png",
    type: "choice",
    correct: "El consumo de agua en ducha, lavabo y lavado de ropa equivale al uso total en el excusado.",
    distractors: [
      "Se puede ahorrar más de 50% del agua si se cuida el consumo en cocina, riego y lavado de ropa.",
      "El consumo de agua por baño y aseo personal supera lo que se utilizada en cocina, riego y lavado de ropa.",
      "Si se cambian los muebles de baño por depósitos de 6 litros, se genera un ahorro total del 50%."
    ],
    hint: "Compara los porcentajes: Ducha y lavabo ($25\\%$) más Lavado de ropa ($15\\%$) suman exactamente el porcentaje del inodoro.",
    explanation: "Al sumar el $25\\%$ (ducha y lavabo) y el $15\\%$ (lavado de ropa) se obtiene un $40\\%$, valor exactamente idéntico al porcentaje consumido en el excusado ($40\\%$)."
  },
  {
    id: "m16-q28",
    prompt: "¿Qué acciones han incrementado los problemas de contaminación ambiental?",
    type: "multi_select",
    correctAnswers: [
      "Uso de productos de corta duración.",
      "Mayor uso del transporte privado.",
      "Uso de productos consumidores de energía.",
      "Incremento en el uso de combustibles fósiles."
    ],
    distractors: [
      "Fomento de la educación ambiental.",
      "Uso racional de recursos."
    ],
    hint: "Identifica los factores vinculados con el consumismo, la obsolescencia programada y las emisiones vehiculares.",
    explanation: "La obsolescencia rápida, el abuso vehicular particular y el alto consumo eléctrico fósil generan acumulación acelerada de residuos y contaminantes atmosféricos."
  },
  {
    id: "m16-q29",
    prompt: "¿Cuál es el propósito de la capa de ozono?",
    type: "choice",
    correct: "Proteger la Tierra de las radiaciones ultravioleta provenientes del Sol.",
    distractors: [
      "Regular la temperatura terrestre impidiendo cambios bruscos.",
      "Transmitir el calor, la luz y permitir la formación de nubes.",
      "Absorber y reflejar la energía solar en la corteza terrestre."
    ],
    hint: "El gas triatómico de oxígeno ($\\text{O}_3$) estratosférico filtra las ondas UV nocivas.",
    explanation: "La capa de ozono en la estratosfera absorbe entre el $97\\%$ y el $99\\%$ de la radiación ultravioleta de alta frecuencia (UV-B y UV-C), evitando daños genéticos y celulares en los seres vivos."
  },
  {
    id: "m16-q30",
    prompt: "¿Qué medidas pueden ayudar a reducir el impacto del cambio climático?",
    type: "multi_select",
    correctAnswers: [
      "Promover el uso y fabricación de biogás.",
      "Plantar árboles.",
      "Colocación de paneles de energía solar.",
      "Fomentar la educación ambiental."
    ],
    distractors: [
      "Incrementar la producción de energía eléctrica.",
      "Evitar la erosión del suelo."
    ],
    hint: "Favorecen la captura de carbono, el uso de energías limpias y la concientización ciudadana.",
    explanation: "El biogás aprovecha desechos orgánicos; los árboles fijan carbono; la energía solar reduce la dependencia de termoeléctricas; y la educación promueve hábitos sustentables colectivos."
  }
];

if (typeof window !== "undefined") {
  window.moduleInfo = moduleInfo;
  window.questionBank = questionBank;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { moduleInfo, questionBank };
}
