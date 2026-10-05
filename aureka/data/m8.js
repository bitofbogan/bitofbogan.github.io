/**
 * Aureka - Banco de Preguntas
 * Módulo 8: Matemáticas y representaciones del sistema natural (Física I)
 */

const moduleInfo = {
  badge: "Módulo 8",
  title: "Física I",
  topicVideos: {
    "poligonos": {
      title: "Área de polígonos.",
      url: "https://www.youtube.com/watch?v=ytQeqAJpXEk"
    },
    "volumen": {
      title: "Volumen de sólidos.",
      url: "https://www.youtube.com/watch?v=jkSVpZsMKtU"
    },
    "notacion_cientifica": {
      title: "Notación científica.",
      url: "https://www.youtube.com/watch?v=WzcEgEa98NU"
    },
    "conversion_unidades": {
      title: "Conversión de unidades.",
      url: "https://www.youtube.com/watch?v=kAkS3K82Iig"
    },
    "densidad": {
      title: "Densidad.",
      url: "https://www.youtube.com/watch?v=LevMSIpImvI"
    },
    "presion": {
      title: "Presión.",
      url: "https://www.youtube.com/watch?v=KQZipLBdQCA"
    },
    "presion_hidrostatica": {
      title: "Presión hidrostática.",
      url: "https://www.youtube.com/watch?v=9iXX68smV94"
    },
    "arquimedes": {
      title: "Principio de Arquímedes.",
      url: "https://www.youtube.com/watch?v=nLx1RqdU7K0"
    },
    "flotacion": {
      title: "Fuerza de flotación.",
      url: "https://www.youtube.com/watch?v=8VqoBCnKUYQ"
    },
    "torricelli": {
      title: "Principio de Torricelli.",
      url: "https://www.youtube.com/watch?v=1WZJabsg7Jk"
    },
    "gasto": {
      title: "Gasto de un fluido.",
      url: "https://www.youtube.com/watch?v=TFrSV__5EJg"
    },
    "coulomb": {
      title: "Principio de Coulomb.",
      url: "https://www.youtube.com/watch?v=q8zsqY3k85E"
    },
    "corriente": {
      title: "Intensidad de corriente eléctrica.",
      url: "https://www.youtube.com/watch?v=tHbtNRDBrfc"
    },
    "watt": {
      title: "Ley de Watt.",
      url: "https://www.youtube.com/watch?v=ORiYhaTAUHo"
    },
    "temperatura": {
      title: "Conversiones de temperatura.",
      url: "https://www.youtube.com/watch?v=fMm1gbEuIEc"
    },
    "calor": {
      title: "Absorción de calor.",
      url: "https://www.youtube.com/watch?v=akao97i6a14"
    },
    "gas_ideal": {
      title: "Ley del gas ideal.",
      url: "https://www.youtube.com/watch?v=-JnBZLafJmg"
    }
  }
};

const questionBank = [
  {
    id: "m8-q01",
    topicId: "presion_hidrostatica",
    prompt: "La superficie del agua en un tanque está a una altura de 30 m. ¿Qué presión experimenta una llave en el fondo del tanque?",
    type: "choice",
    correct: "$2.9\\times10^{5}$ Pa.",
    distractors: [
      "$2.9\\times10^{3}$ Pa.",
      "$2.9\\times10^{6}$ Pa.",
      "$2.9\\times10^{4}$ Pa."
    ],
    hint: "Aplica la ecuación para la presión hidrostática: $P = \\rho g h$. Considera $\\rho_{agua} = 1,000\\text{ kg/m}^3$ y $g = 9.81\\text{ m/s}^2$.",
    explanation: "Multiplicamos $\\rho g h = (1000)(9.81)(30) = 294,300\\text{ Pa}$. Al convertirlo a notación científica recorriendo 5 lugares el punto decimal, obtenemos $2.9\\times10^{5}\\text{ Pa}$."
  },
  {
    id: "m8-q02",
    topicId: "presion",
    prompt: "Si la presión atmosférica tiene un valor aproximado de 101,300 Pa, ¿qué fuerza ejerce el aire de un cuarto sobre un bloque de 40 cm $\\times$ 80 cm de superficie?",
    type: "choice",
    correct: "32,416 N.",
    distractors: [
      "324,160,000 N.",
      "32,416 Pa.",
      "316,526.5 Pa."
    ],
    hint: "Despeja la fuerza de la presión: $F = P \\cdot A$. Recuerda pasar primero los centímetros a metros antes de obtener el área.",
    explanation: "Convertimos las dimensiones a metros y calculamos el área y la fuerza resultante:\n$$\\begin{aligned} A &= (0.40\\text{ m})(0.80\\text{ m}) = 0.32\\text{ m}^2 \\\\[6pt] F &= P \\cdot A \\\\[6pt] &= (101,300\\text{ Pa})(0.32\\text{ m}^2) \\\\[6pt] &= 32,416\\text{ N} \\end{aligned}$$"
  },
  {
    id: "m8-q03",
    topicId: "arquimedes",
    prompt: "Cuando un cuerpo se sumerge total o parcialmente en un fluido...",
    type: "choice",
    correct: "...es empujado hacia arriba con una fuerza igual al peso del fluido desplazado.",
    distractors: [
      "...recibe un empuje que actúa en todas direcciones por lo que oscilando en la superficie.",
      "...es empujado hacia arriba porque se le aplica una fuerza menor al peso del fluido.",
      "...experimenta una fuerza boyante que actúa en dirección contraria a la gravedad del fluido."
    ],
    hint: "Recuerda la definición del principio de Arquímedes.",
    explanation: "Por definición del principio de Arquímedes, todo cuerpo sumergido recibe un empuje vertical hacia arriba equivalente exactamente al peso del volumen de fluido que desplaza."
  },
  {
    id: "m8-q04",
    topicId: "gasto",
    prompt: "Calcula el gasto de agua por una tubería con un diámetro de 26.20 cm cuando la velocidad del agua es de 8 m/s.",
    type: "choice",
    correct: "$0.431\\text{ m}^{3}/\\text{s}$.",
    distractors: [
      "$4310.8\\text{ m}^{3}/\\text{s}$.",
      "$0.0067\\text{ m}^{3}/\\text{s}$.",
      "$43.10\\text{ m}^{3}/\\text{s}$."
    ],
    hint: "El gasto es $Q = A \\cdot v$. Obtén el radio en metros ($r = d/2$), calcula el área circular $A = \\pi r^2$ y multiplica por la velocidad.",
    explanation: "Calculamos el radio, el área y el gasto en unidades fundamentales:\n$$\\begin{aligned} r &= \\frac{26.20\\text{ cm}}{2} = 0.131\\text{ m} \\\\[4pt] A &= \\pi(0.131\\text{ m})^2 \\approx 0.0539\\text{ m}^2 \\\\[4pt] Q &= A \\cdot v \\\\[4pt] &= (0.0539)(8) \\approx 0.431\\text{ m}^3/\\text{s} \\end{aligned}$$"
  },
  {
    id: "m8-q05",
    topicId: "gasto",
    prompt: "El paso del agua en una tubería es un ejemplo del principio de:",
    type: "choice",
    correct: "Bernoulli.",
    distractors: [
      "Pascal.",
      "Torricelli.",
      "Arquímedes."
    ],
    hint: "Relaciona la dinámica de fluidos en movimiento continuo y diferencias de presión/velocidad en tuberías.",
    explanation: "El principio de Bernoulli rige el comportamiento de fluidos en movimiento a lo largo de conductos cerrados o tuberías, relacionando presión y velocidad."
  },
  {
    id: "m8-q06",
    topicId: "coulomb",
    prompt: "El modelo matemático que explica la fuerza de atracción o repulsión entre dos cargas es el principio de:",
    type: "choice",
    correct: "Coulomb.",
    distractors: [
      "Ampère.",
      "Gauss.",
      "Faraday."
    ],
    hint: "Es el principio fundamental de la electrostática que describe la interacción entre cargas puntuales.",
    explanation: "El principio de Coulomb formula matemáticamente la fuerza electrostática."
  },
  {
    id: "m8-q07",
    topicId: "watt",
    prompt: "Una consola opera a 120V con una potencia de 25W. ¿Cuál es su corriente de operación?",
    type: "choice",
    correct: "0.208 A.",
    distractors: [
      "1.0 A.",
      "0.057 A.",
      "0.113 A."
    ],
    hint: "Aplica la Ley de Watt: $P = V \\cdot I$. Despeja la corriente $I$.",
    explanation: "Despejando corriente: $I = \\frac{P}{V} = \\frac{25\\text{ W}}{120\\text{ V}} \\approx 0.208\\text{ A}$."
  },
  {
    id: "m8-q08",
    topicId: "corriente",
    prompt: "Un conductor transporta una carga de 300 C en 20 segundos. ¿Qué intensidad de corriente lo atraviesa?",
    type: "choice",
    correct: "15 A.",
    distractors: [
      "6000 A.",
      "60 A.",
      "150 A."
    ],
    hint: "La intensidad de corriente es carga por unidad de tiempo: $I = \\frac{Q}{t}$.",
    explanation: "Aplicando la definición de intensidad de corriente eléctrica: $$I = \\frac{Q}{t} = \\frac{300\\text{ C}}{20\\text{ s}} = 15\\text{ A}$$"
  },
  {
    id: "m8-q09",
    topicId: "calor",
    prompt: "Completa la oración:",
    type: "fill_blanks",
    sentence: "El calor se transmite de los cuerpos de {0} temperatura a los de {1} temperatura.",
    correctOrder: ["mayor", "menor"],
    distractors: ["igual", "constante"],
    hint: "Recuerda la segunda ley de la termodinámica: el calor fluye de forma natural hacia las zonas más frías hasta alcanzar el equilibrio térmico.",
    explanation: "Por la segunda ley de la termodinámica, la transferencia calor siempre fluye desde el cuerpo con mayor temperatura hacia el de menor temperatura."
  },
  {
    id: "m8-q10a",
    prompt: "¿Cuáles son las coordenadas del punto señalado en el plano cartesiano si cada división mostrada es unitaria?",
    image: "assets/m8_cartplane1.png",
    type: "choice",
    correct: "$(-3, -1)$",
    distractors: [
      "$(-3, 1)$",
      "$(1, 3)$",
      "$(1, -3)$"
    ],
    hint: "Inicia desde el origen y cuenta el movimiento horizontal (coordenada $x$) y luego el movimiento vertical (coordenada $y$).",
    explanation: "El punto $P$ está en 3 a la izquierda y 1 abajo: $(-3, -1)$."
  },
  {
    id: "m8-q10b",
    prompt: "¿Cuáles son las coordenadas del punto señalado en el plano cartesiano si cada división mostrada es unitaria?",
    image: "assets/m8_cartplane2.png",
    type: "choice",
    correct: "$(-1, 2)$",
    distractors: [
      "$(1, -2)$",
      "$(-2, 1)$",
      "$(2, -1)$"
    ],
    hint: "Inicia desde el origen y cuenta el movimiento horizontal (coordenada $x$) y luego el movimiento vertical (coordenada $y$).",
    explanation: "El punto $R$ está en 1 a la izquierda y 2 arriba: $(-1, 2)$."
  },
  {
    id: "m8-q10c",
    prompt: "¿Cuáles son las coordenadas del punto señalado en el plano cartesiano si cada división mostrada es unitaria?",
    image: "assets/m8_cartplane3.png",
    type: "choice",
    correct: "$(0, 4)$",
    distractors: [
      "$(4, 0)$",
      "$(0, -4)$",
      "$(-4, 0)$"
    ],
    hint: "Inicia desde el origen y cuenta el movimiento horizontal (coordenada $x$) y luego el movimiento vertical (coordenada $y$).",
    explanation: "El punto $Q$ está en 0 a la izquierda/derecha y 4 arriba: $(-1, 2)$."
  },
  {
    id: "m8-q11",
    topicId: "gas_ideal",
    prompt: "Los gases se expanden al aumentar su temperatura, variando de manera directamente proporcional a su:",
    type: "choice",
    correct: "Volumen.",
    distractors: [
      "Presión.",
      "Temperatura.",
      "Masa."
    ],
    hint: "Revisa la ley de Charles: a presión constante, el volumen de un gas y su temperatura son directamente proporcionales.",
    explanation: "La ley de Charles establece que, a presión constante, el aumento de temperatura de un gas produce una expansión directamente proporcional en su volumen."
  },
  {
    id: "m8-q12",
    prompt: "Relaciona cada magnitud física con su unidad fundamental correspondiente en el Sistema Internacional de Unidades.",
    type: "match_columns",
    pairs: [
      { left: "Temperatura.", right: "Kelvin (K)." },
      { left: "Masa.", right: "Kilogramo (kg)." },
      { left: "Longitud.", right: "Metro (m)." },
      { left: "Intensidad de corriente.", right: "Ampère (A)." },
      { left: "Cantidad de sustancia.", right: "Mol (mol)" }
    ],
    hint: "Revisa las unidades básicas del SI.",
    explanation: "En el Sistema Internacional: temperatura en Kelvin, masa en kilogramo, longitud en metro, corriente en ampère y cantidad de sustancia en mol."
  },
  {
    id: "m8-q13",
    prompt: "Relaciona los estados de agregación con sus características:",
    type: "match_columns",
    pairs: [
      { left: "Líquido.", right: "Incompresible y fluido a temperatura ambiente." },
      { left: "Gas.", right: "Altamente compresible y fluido a temperatura ambiente." },
      { left: "Sólido.", right: "Forma y volumen definidos, incompresible y el estado de mayor densidad." }
    ],
    hint: "Los sólidos tienen forma fija y mayor densidad; los líquidos fluyen pero no se comprimen; los gases se comprimen con facilidad.",
    explanation: "Líquidos como el agua son incompresibles y fluidos; gases como el oxígeno son altamente compresible y fluidos; y sólidos como el mármol tienen forma fija, son incompresibles y tienen la mayor densidad de los tres estados."
  },
  {
    id: "m8-q14",
    prompt: "Se define una relación entre los conjuntos $A$ y $B$ tal que cada elemento del dominio se relaciona con su raíz cuadrada en el contradominio. ¿Se puede afirmar que $B$ es una función de $A$?",
    image: "assets/m8_domain.png",
    type: "choice",
    correct: "No, porque uno de los elementos del dominio se relaciona con dos elementos del contradominio.",
    distractors: [
      "Sí, porque todos los elementos del dominio están relacionados con los elementos del contradominio.",
      "Sí, porque la relación se forma con un elemento del dominio con al menos un elemento del contradominio.",
      "No, porque existen dos elementos del dominio asociados a un elemento del contradominio."
    ],
    hint: "Para que una relación sea función, a cada elemento del dominio le debe corresponder un solo elemento del contradominio.",
    explanation: "En el diagrama se observa que el número 4 del dominio apunta a dos valores distintos (+2 y -2) en el contradominio. Al no estar relacionado un elemento del dominio con un solo elemento del contradominio, no se cumple la definición de función."
  },
  {
    id: "m8-q15",
    topicId: "densidad",
    prompt: "¿Qué volumen ocupan 25 kg de cobre considerando que su densidad es de 8,960 kg/m$^{3}$?",
    type: "choice",
    correct: "$2.79\\times10^{-3}\\text{ m}^{3}$.",
    distractors: [
      "$8985\\text{ m}^{3}$.",
      "$358.4\\text{ m}^{3}$.",
      "$2.24\\times10^{3}\\text{ m}^{3}$."
    ],
    hint: "Del triángulo de densidad: $V = \\frac{m}{\\rho}$.",
    explanation: "Dividiendo masa entre densidad: $$V = \\frac{25}{8960} \\approx 0.00279\\text{ m}^3$$En notación científica esto equivale a $2.79\\times10^{-3}\\text{ m}^3$."
  },
  {
    id: "m8-q16",
    topicId: "flotacion",
    prompt: "Se introduce en agua un cubo de madera de 6 cm de lado y densidad de 830 kg/m$^3$. ¿Cuál es la secuencia de pasos para encontrar la fuerza necesaria para sumergir el cubo?",
    type: "drag_order",
    correctOrder: [
      "Volumen: $V = (6\\text{ cm})^3 = 216\\text{ cm}^3 = 2.16\\times10^{-4}\\text{ m}^3$",
      "Fuerza de flotación: $F_f = (1,000)(9.8)(2.16\\times10^{-4}) = 2.1168\\text{ N}$",
      "Peso propio: $W = \\rho g V = (830)(9.8)(2.16\\times10^{-4}) = 1.7569\\text{ N}$",
      "Fuerza requerida: $F = F_f - W = 0.3599\\text{ N}$"
    ],
    hint: "Primero se obtiene el volumen, luego el empuje del agua y el peso del cubo para al final restar ambas fuerzas.",
    explanation: "La secuencia lógica es:\n<ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n  <li>Calcular el volumen del cubo.</li>\n  <li>Calcular la fuerza de flotación que empuja hacia arriba ($F_f$).</li>\n  <li>Calcular el peso propio hacia abajo ($W$).</li>\n  <li>Restar ambas fuerzas ($F = F_f - W$) para determinar el empuje manual necesario.</li>\n</ol>"
  },
    {
    id: "m8-q17",
    prompt: "¿Cuál es la ecuación correspondiente a la siguiente parábola?",
    image: "assets/m8_parabola.png",
    type: "choice",
    correct: "$3x^{2}+2x-5=0$",
    distractors: [
      "$3x^{2}+2x-1=0$",
      "$x^{2}+2x-3=0$",
      "$2x^{2}+3x-5=0$"
    ],
    hint: "Fíjate en dónde cruza al eje $Y$ (cuando $x = 0$, $y = -5$) y prueba con las raíces visibles en la gráfica (por ejemplo, cuando $x = 1$, $y = 0$).",
    explanation: "Al evaluar $x = 1$ en $3(1)^2 + 2(1) - 5 = 3 + 2 - 5 = 0$, la gráfica cruza exactamente el eje en $(1, 0)$ y tiene su ordenada al origen en $(0, -5)$, lo que identifica a la opción correcta."
  },
  {
    id: "m8-q18",
    topicId: "gasto",
    prompt: "El contenedor de la figura se llena de agua. ¿Cuál es la expresión correcta para calcular el gasto de su tubería?",
    image: "assets/m8_gasto.png",
    type: "choice",
    correct: "$Q=A\\sqrt{2gh}$",
    distractors: [
      "$Q=2\\sqrt{Agh}$",
      "$Q=\\sqrt{2AgH}$",
      "$Q=\\frac{A\\sqrt{2gH}}{kL}$"
    ],
    hint: "Combina el gasto $Q = A \\cdot v$ con el principio de Torricelli $v = \\sqrt{2gh}$.",
    explanation: "La velocidad de salida por el principio de Torricelli es $v = \\sqrt{2gh}$, por lo que el gasto total es $Q = A v = A\\sqrt{2gh}$."
  },
  {
    id: "m8-q19",
    prompt: "Selecciona todos los enunciados que describan el funcionamiento de una planta hidroeléctrica.",
    type: "multi_select",
    correctAnswers: [
      "Transforma la energía potencial contenida en el agua en energía eléctrica.",
      "Al acumularse agua en la presa se incrementa su altura y por tanto su energía potencial.",
      "La energía potencial se transforma en energía cinética que actúa sobre las turbinas.",
      "En el cuarto de máquinas los generadores transforman energía mecánica en eléctrica."
    ],
    distractors: [
      "La presión del agua se mide utilizando el teorema de Torricelli.",
      "La planta transforma la energía cinética del agua en energía térmica."
    ],
    hint: "Identifica qué tipo de energía se aprovecha y qué produce la planta (descarta medir presión con Torricelli y generar calor).",
    explanation: "Una hidroeléctrica aprovecha la altura del agua para mover turbinas y generar energía eléctrica, no térmica. El principio de Torricelli calcula velocidad de salida de orificios, no presión."
  },
  {
    id: "m8-q20",
    topicId: "coulomb",
    prompt: "Dos esferas con una carga de $2\\times10^{-5}$ C están separadas 45 mm. ¿Cuál es la fuerza de repulsión entre ellas?",
    type: "choice",
    correct: "$1.77\\times10^{3}$ N.",
    distractors: [
      "0.162 N.",
      "0.08 N.",
      "$8.8\\times10^{-11}$ N."
    ],
    hint: "Convierte 45 mm a metros ($0.045\\text{ m} = 4.5\\times10^{-2}\\text{ m}$) y sustituye en el principio de Coulomb.",
    explanation: "Sustituyendo los valores en el principio de Coulomb:\n$$\\begin{aligned} F &= k \\frac{q_1 q_2}{r^2} \\\\[6pt] &= (9\\times10^9) \\frac{(2\\times10^{-5})^2}{(0.045)^2} \\\\[6pt] &= (9\\times10^9) \\frac{4\\times10^{-10}}{2.025\\times10^{-3}} \\\\[6pt] &= 1,777.7\\text{ N} \\approx 1.77\\times10^3\\text{ N} \\end{aligned}$$"
  },
  {
    id: "m8-q21",
    topicId: "watt",
    prompt: "Se tiene una bomba de agua que opera a una potencia de 1/2 hp. Si funciona con 127 V, ¿cuál es la corriente que consume la bomba sabiendo que 1 hp = 746 W?",
    type: "choice",
    correct: "$I = P/V = 2.93\\text{ A}$",
    distractors: [
      "$I = V/(2*P) = 0.68\\text{ A}$",
      "$I = V/P = 0.34\\text{ A}$",
      "$I = P*V = 4.7\\times10^{4}\\text{ A}$"
    ],
    hint: "Medio caballo de fuerza equivale a $746 / 2 = 373\\text{ W}$. Luego divide entre el voltaje: $I = P / V$.",
    explanation: "La potencia de medio caballo de fuerza es $373\\text{ W}$. Por la ley de Watt, la corriente es $$I = \\frac{P}{V} = \\frac{373\\text{ W}}{127\\text{ V}} \\approx 2.93\\text{ A}$$"
  },
  {
    id: "m8-q22",
    prompt: "Selecciona todas las características de un campo magnético.",
    type: "multi_select",
    correctAnswers: [
      "Tiene como unidad de medida el tesla (T).",
      "Se mide con un galvanómetro.",
      "Un campo magnético variable permite inducir un campo eléctrico.",
      "La cantidad de líneas del campo magnético que atraviesan una superficie se denomina flujo magnético."
    ],
    distractors: [
      "Tiene como unidad el coulomb (C).",
      "La fuerza de atracción entre dos polos de un campo magnético en un área determinada se denomina flujo magnético."
    ],
    hint: "El coulomb mide carga eléctrica (no magnetismo) y el flujo magnético se define por las líneas que atraviesan una superficie, no por una fuerza de atracción entre polos.",
    explanation: "Un campo magnético se mide en teslas (T) con un galvanómetro. Cuando se hace variar, induce electricidad y el flujo magnético representa la cantidad de líneas de campo que atraviesan una superficie."
  },
  {
    id: "m8-q23",
    topicId: "gas_ideal",
    prompt: "¿Cómo se denomina la ley que relaciona las variables de volumen y temperatura y cómo se interpreta?",
    type: "choice",
    correct: "Ley de Boyle-Mariotte: a temperatura constante, la presión de un gas es inversamente proporcional al volumen que ocupa.",
    distractors: [
      "Ley de Gay-Lussac: a volumen constante, la presión de un gas ideal es directamente proporcional a la temperatura.",
      "Ley de Gay-Lussac: a temperatura constante, la presión de un gas es inversamente proporcional al volumen que ocupa.",
      "Ley de Boyle-Mariotte: a volumen constante, la presión de un gas ideal es directamente proporcional a la temperatura."
    ],
    hint: "La gráfica es una curva hiperbólica decreciente entre Presión ($P$) y Volumen ($V$), lo que representa una relación inversamente proporcional.",
    explanation: "En la Ley de Boyle-Mariotte establecemos que al comprimir el volumen, la presión se incrementa de forma inversamente proporcional, como en un globo que se aprieta."
  },
  {
    id: "m8-q24",
    topicId: "gas_ideal",
    prompt: "Una muestra de oxígeno ocupa 12 m$^{3}$ a temperatura ambiente bajo una presión de 740 mm Hg. Determina el volumen de la misma masa de gas a una presión de 760 mm Hg en la misma condición de temperatura.",
    type: "choice",
    correct: "11.68$\\text{ m}^{3}.$",
    distractors: [
      "12.32$\\text{ m}^{3}.$",
      "12.0$\\text{ m}^{3}.$",
      "4.6$\\times10^{4}\\text{ m}^{3}.$"
    ],
    hint: "Aplica la Ley de Boyle: $P_1 V_1 = P_2 V_2$. Despeja $V_2$.",
    explanation: "Despejando el volumen final: $$V_2 = \\frac{P_1 V_1}{P_2} = \\frac{(740)(12)}{760} \\approx 11.68\\text{ m}^3$$. Como la presión aumentó ligeramente, el volumen debió disminuir."
  },
  {
    id: "m8-q25",
    topicId: "gas_ideal",
    prompt: "En un laboratorio se tiene nitrógeno gaseoso a 180 K bajo una presión de 1,000 Pa en un volumen de 600 m$^{3}$. Posteriormente se reduce su volumen a 500 m$^{3}$ y se incrementa la temperatura a 210 K. Calcula la presión del nitrógeno al final del proceso asumiendo un gas ideal.",
    type: "choice",
    correct: "$P_{2}=\\frac{P_{1}V_{1}T_{2}}{V_{2}T_{1}}=1,400\\text{ Pa}$",
    distractors: [
      "$P_{2}=\\frac{P_{1}V_{1}T_{2}}{(V_{2}-V_{1})T_{1}}=1,400\\text{ Pa}$",
      "$P_{2}=\\frac{P_{1}V_{1}T_{1}}{V_{2}T_{2}}=1,028\\text{ Pa}$",
      "$P_{2}=\\frac{P_{1}V_{2}T_{1}}{V_{1}T_{2}}=257\\text{ Pa}$"
    ],
    hint: "Aplica la ley general del gas ideal: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$ y despeja $P_2$.",
    explanation: "Despejamos la presión final en la ley del gas ideal y sustituimos datos:\n$$\\begin{aligned} \\frac{P_1 V_1}{T_1} &= \\frac{P_2 V_2}{T_2} \\\\[6pt] P_2 &= \\frac{P_1 V_1 T_2}{T_1 V_2} \\\\[6pt] &= \\frac{(1,000\\text{ Pa})(600\\text{ m}^3)(210\\text{ K})}{(180\\text{ K})(500\\text{ m}^3)} \\\\[6pt] &= \\frac{126,000,000}{90,000} \\\\[6pt] &= 1,400\\text{ Pa} \\end{aligned}$$"
  },
  {
    id: "m8-q27",
    topicId: "poligonos",
    prompt: "27. Analiza la siguiente gráfica e identifica los enunciados que presenten conclusiones verdaderas:<br><br>1. La velocidad promedio más alta del viento se presentó entre las 13-14 hrs.<br>2. Los vientos más fuertes a las 13 hrs. fueron de una velocidad promedio de $30\\text{ km/h}$.<br>3. La dirección de los vientos a las 17 hrs. fue SO.<br>4. Todos los vientos tienen una dirección SO.<br>5. La velocidad de los vientos decrece a las 15 hrs.",
    image: "img/m8_grafica_viento.png",
    type: "choice",
    correct: "3, 5",
    distractors: [
      "2, 4, 5",
      "1, 2",
      "1, 2, 4"
    ],
    hint: "Observa los puntos azules para la dirección (a las 17 hrs está en la línea SO) y la curva naranja/rosa después de las 15:00 hrs (que cae continuamente).",
    explanation: "El enunciado 3 es verdadero porque el punto azul a las 17:00 marca la coordenada SO. El enunciado 5 es verdadero porque la gráfica desciende pronunciadamente a partir de las 15:00. Las demás son falsas por lectura visual directa."
  },
  {
    id: "m8-q28",
    topicId: "temperatura",
    prompt: "¿A cuántos grados Fahrenheit corresponde una medida de 5$^{\\circ}$ C?",
    type: "choice",
    correct: "$F = 1.8 T + 32 = 41^{\\circ}\\text{F}$.",
    distractors: [
      "$F = 32 - 1.8T = 23^{\\circ}\\text{F}$.",
      "$F = 32 + 0.8T = 36^{\\circ}\\text{F}$.",
      "$F = 32 - 0.8T = 28^{\\circ}\\text{F}$."
    ],
    hint: "La fórmula de conversión es $T_F = 1.8 \\cdot T_C + 32$.",
    explanation: "Sustituyendo los $5^{\\circ}\\text{C}$ en la relación de conversión:\n$$\\begin{aligned} T_F &= 1.8 \\cdot T_C + 32 \\\\ &= 1.8(5) + 32 \\\\ &= 9 + 32 \\\\ &= 41^{\\circ}\\text{F} \\end{aligned}$$"
  },
  {
    id: "m8-q29",
    topicId: "calor",
    prompt: "Una sustancia metálica a 90$^{\\circ}$C se coloca en un calorímetro con 325 g de agua a 20$^{\\circ}$C. La temperatura final del agua termina siendo de 25$^{\\circ}$C. ¿Cuántas calorías absorbió el agua?",
    type: "choice",
    correct: "1625 cal.",
    distractors: [
      "6500 cal.",
      "29250 cal.",
      "8125 cal."
    ],
    hint: "Aplica $Q = m \\cdot c \\cdot \\Delta T$. Recuerda que para el agua $c = 1\\text{ cal/g}^{\\circ}\\text{C}$ y el cambio de temperatura es $\\Delta T = 25 - 20 = 5^{\\circ}\\text{C}$.",
    explanation: "Solo importa la masa y el incremento de temperatura del agua:\n$$\\begin{aligned} Q &= m \\cdot c \\cdot \\Delta T \\\\[6pt] &= (325\\text{ g})(1\\text{ cal/g}^{\\circ}\\text{C})(25^{\\circ}\\text{C} - 20^{\\circ}\\text{C}) \\\\[6pt] &= (325)(1)(5) \\\\[6pt] &= 1,625\\text{ cal} \\end{aligned}$$"
  },
  {
    id: "m8-q30",
    topicId: "calor",
    prompt: "Uno de los gases de efecto invernadero es el CO$_{2}$. A mayor cantidad de este gas, hay un mayor incremento de temperatura. ¿Por qué ocurre este efecto?",
    type: "choice",
    correct: "El CO$_{2}$ no permite que la radiación emitida por la superficie terrestre salga de regreso al espacio.",
    distractors: [
      "El CO$_{2}$ desencadena una serie de reacciones químicas que catalizan la formación de contaminantes.",
      "El CO$_{2}$ incrementa el acceso a la superficie terrestre de la radiación del espacio.",
      "El CO$_{2}$ impide la total absorción de radiaciones del exterior por lo que vuelven al exterior."
    ],
    hint: "El efecto invernadero funciona atrapando la radiación infrarroja térmica que la Tierra reemite hacia el espacio.",
    explanation: "Las moléculas de dióxido de carbono absorben y reemiten la radiación infrarroja emitida por la superficie del planeta, reteniendo la energía térmica en la atmósfera e impidiendo que escape al espacio exterior."
  }
];
