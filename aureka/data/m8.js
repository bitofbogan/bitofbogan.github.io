/**
 * Aureka - Banco de Preguntas
 * Módulo 8: Matemáticas y representaciones del sistema natural (Física I)
 */

const moduleInfo = {
  badge: "Módulo 8",
  title: "Matemáticas y representaciones del sistema natural",
  topicVideos: {
    "poligonos": {
      title: "MÓDULO 8: Área de polígonos",
      url: "https://www.youtube.com/watch?v=ytQeqAJpXEk"
    },
    "volumen": {
      title: "MÓDULO 8: Volumen de sólidos",
      url: "https://www.youtube.com/watch?v=jkSVpZsMKtU"
    },
    "notacion_cientifica": {
      title: "MÓDULO 8: Notación científica",
      url: "https://www.youtube.com/watch?v=WzcEgEa98NU"
    },
    "conversion_unidades": {
      title: "MÓDULO 8: Conversión de unidades",
      url: "https://www.youtube.com/watch?v=kAkS3K82Iig"
    },
    "densidad": {
      title: "MÓDULO 8: Densidad",
      url: "https://www.youtube.com/watch?v=LevMSIpImvI"
    },
    "presion": {
      title: "MÓDULO 8: Presión",
      url: "https://www.youtube.com/watch?v=KQZipLBdQCA"
    },
    "presion_hidrostatica": {
      title: "MÓDULO 8: Presión hidrostática",
      url: "https://www.youtube.com/watch?v=9iXX68smV94"
    },
    "arquimedes": {
      title: "MÓDULO 8: Principio de Arquímedes",
      url: "https://www.youtube.com/watch?v=nLx1RqdU7K0"
    },
    "flotacion": {
      title: "MÓDULO 8: Fuerza de flotación",
      url: "https://www.youtube.com/watch?v=8VqoBCnKUYQ"
    },
    "torricelli": {
      title: "MÓDULO 8: Principio de Torricelli",
      url: "https://www.youtube.com/watch?v=1WZJabsg7Jk"
    },
    "gasto": {
      title: "MÓDULO 8: Gasto de un fluido",
      url: "https://www.youtube.com/watch?v=TFrSV__5EJg"
    },
    "coulomb": {
      title: "MÓDULO 8: Principio de Coulomb",
      url: "https://www.youtube.com/watch?v=q8zsqY3k85E"
    },
    "corriente": {
      title: "MÓDULO 8: Intensidad de corriente eléctrica",
      url: "https://www.youtube.com/watch?v=tHbtNRDBrfc"
    },
    "watt": {
      title: "MÓDULO 8: Ley de Watt y potencia",
      url: "https://www.youtube.com/watch?v=ORiYhaTAUHo"
    },
    "temperatura": {
      title: "MÓDULO 8: Conversiones de temperatura",
      url: "https://www.youtube.com/watch?v=fMm1gbEuIEc"
    },
    "calor": {
      title: "MÓDULO 8: Absorción de calor",
      url: "https://www.youtube.com/watch?v=akao97i6a14"
    },
    "gas_ideal": {
      title: "MÓDULO 8: Ley del gas ideal y leyes de los gases",
      url: "https://www.youtube.com/watch?v=-JnBZLafJmg"
    }
  }
};

const questionBank = [
  {
    id: "m8-q01",
    topicId: "presion_hidrostatica",
    prompt: "1. La superficie del agua en un tanque de almacenamiento está a una altura de 30 m sobre una llave de agua en la cocina de una casa. Calcula la presión del agua en la llave en Pa.",
    type: "choice",
    correct: "$2.9\\times10^{5}$",
    distractors: [
      "$2.9\\times10^{3}$",
      "$2.9\\times10^{6}$",
      "$2.9\\times10^{4}$"
    ],
    hint: "Aplica la presión hidrostática: $P = \\rho g h$. Considera $\\rho_{agua} = 1,000\\text{ kg/m}^3$ y $g = 9.81\\text{ m/s}^2$.",
    explanation: "Multiplicas $\\rho g h = (1000)(9.81)(30) = 294,300\\text{ Pa}$. Al convertirlo a notación científica recorriendo 5 lugares el punto decimal, obtienes $2.9\\times10^{5}\\text{ Pa}$."
  },
  {
    id: "m8-q02",
    topicId: "presion",
    prompt: "2. La presión atmosférica tiene un valor aproximado de 101,300 Pa. ¿Qué fuerza ejerce el aire confinado en un cuarto sobre un bloque de $40\\times80\\text{ cm}$?",
    type: "choice",
    correct: "32,416 N",
    distractors: [
      "324,160,000 N",
      "32,416 Pa",
      "316,526.5 Pa"
    ],
    hint: "Despeja la fuerza de la presión: $F = P \\cdot A$. Recuerda pasar primero los centímetros a metros antes de sacar el área.",
    explanation: "Primero conviertes las dimensiones a metros: $0.40\\text{ m}\\times0.80\\text{ m} = 0.32\\text{ m}^2$. Luego calculas la fuerza: $F = P \\cdot A = (101,300)(0.32) = 32,416\\text{ N}$ (ojo: te piden fuerza, la unidad debe ser newtons, no pascales)."
  },
  {
    id: "m8-q03",
    topicId: "arquimedes",
    prompt: "3. Completa el siguiente enunciado:<br><br>Puede demostrarse que cuando un cuerpo se sumerge total o parcialmente en un fluido:",
    type: "choice",
    correct: "Es empujado hacia arriba con una fuerza igual al peso del fluido desplazado.",
    distractors: [
      "Recibe un empuje que actúa en todas direcciones por lo que oscilando en la superficie.",
      "Es empujado hacia arriba porque se le aplica una fuerza menor al peso del fluido.",
      "Experimenta una fuerza boyante que actúa en dirección contraria a la gravedad del fluido."
    ],
    hint: "Recuerda la definición literal del principio de Arquímedes.",
    explanation: "Por definición del principio de Arquímedes, todo cuerpo sumergido recibe un empuje vertical hacia arriba equivalente exactamente al peso del volumen de fluido que desplaza."
  },
  {
    id: "m8-q04",
    topicId: "gasto",
    prompt: "4. Calcula el gasto de agua por una tubería de diámetro igual a 26.20 cm, cuando la velocidad del líquido es de $8\\text{ m/s}$.",
    type: "choice",
    correct: "$0.431\\text{ m}^{3}/\\text{s}$",
    distractors: [
      "$4310.8\\text{ m}^{3}/\\text{s}$",
      "$0.0067\\text{ m}^{3}/\\text{s}$",
      "$43.10\\text{ m}^{3}/\\text{s}$"
    ],
    hint: "El gasto es $Q = A \\cdot v$. Saca el radio en metros ($r = d/2$), calcula el área circular $A = \\pi r^2$ y multiplica por la velocidad.",
    explanation: "El radio es $13.10\\text{ cm} = 0.131\\text{ m}$. El área circular es $A = \\pi(0.131)^2 \\approx 0.0539\\text{ m}^2$. Multiplicando por la velocidad: $Q = (0.0539)(8) \\approx 0.431\\text{ m}^3/\\text{s}$."
  },
  {
    id: "m8-q05",
    topicId: "gasto",
    prompt: "5. El paso del agua en las tuberías de tu casa es un ejemplo del principio de:",
    type: "choice",
    correct: "Bernoulli",
    distractors: [
      "Pascal",
      "Torricelli",
      "Arquímedes"
    ],
    hint: "Relaciona la dinámica de fluidos en movimiento continuo y diferencias de presión/velocidad en tuberías.",
    explanation: "El principio de Bernoulli rige el comportamiento de fluidos en movimiento a lo largo de conductos cerrados o tuberías, relacionando presión y velocidad."
  },
  {
    id: "m8-q06",
    topicId: "coulomb",
    prompt: "6. El modelo matemático que explica la fuerza de atracción o repulsión entre dos cargas es llamado Ley de:",
    type: "choice",
    correct: "Coulomb",
    distractors: [
      "Ampere",
      "Gauss",
      "Faraday"
    ],
    hint: "Es la ley fundamental de la electrostática que describe la interacción entre cargas puntuales.",
    explanation: "La Ley de Coulomb formula matemáticamente la fuerza electrostática: $F = k \\frac{q_1 q_2}{r^2}$."
  },
  {
    id: "m8-q07",
    topicId: "watt",
    prompt: "7. Una consola xbox en su etiqueta tiene los datos: 120V, 25W ¿cuál es la corriente de operación de esta consola?",
    type: "choice",
    correct: "0.208 A",
    distractors: [
      "1.0 A",
      "0.057 A",
      "0.113 A"
    ],
    hint: "Aplica la Ley de Watt: $P = V \\cdot I$. Despeja la corriente $I$.",
    explanation: "Despejando corriente: $I = \\frac{P}{V} = \\frac{25\\text{ W}}{120\\text{ V}} \\approx 0.208\\text{ A}$."
  },
  {
    id: "m8-q08",
    topicId: "corriente",
    prompt: "8. Por un conductor circula una corriente eléctrica, de modo que transporta una carga de 300 C, durante 20 segundos. ¿Cuál es la intensidad de corriente que pasa por el conductor?",
    type: "choice",
    correct: "15 A",
    distractors: [
      "6000 A",
      "60 A",
      "150 A"
    ],
    hint: "La intensidad de corriente es carga por unidad de tiempo: $I = \\frac{Q}{t}$.",
    explanation: "Aplicando la fórmula directa: $I = \\frac{Q}{t} = \\frac{300\\text{ C}}{20\\text{ s}} = 15\\text{ A}$."
  },
  {
    id: "m8-q09",
    topicId: "calor",
    prompt: "9. El calor se transmite en los cuerpos de",
    type: "choice",
    correct: "mayor a menor temperatura",
    distractors: [
      "menor a mayor temperatura",
      "menor movimiento molecular",
      "mayor punto de fusión"
    ],
    hint: "Recuerda la segunda ley de la termodinámica y el equilibrio térmico.",
    explanation: "Por la segunda ley de la termodinámica, la transferencia espontánea de energía térmica (calor) siempre fluye desde el cuerpo con mayor temperatura hacia el de menor temperatura."
  },
  {
    id: "m8-q10",
    topicId: "poligonos",
    prompt: "10. Dado el plano cartesiano, y tomando en cuenta que los ejes XY tienen divisiones unitarias, identifica correctamente las coordenadas de los puntos ubicados en el gráfico.",
    image: "img/m8_plano_cartesiano.png",
    type: "choice",
    correct: "$P(-3,-1)$, $R(-1,2)$, $Q(0,4)$",
    distractors: [
      "$P(-3,1)$, $R(-1,2)$, $Q(-4,0)$",
      "$P(-3,1)$, $R(1,2)$, $Q(4,0)$",
      "$P(-3,-1)$, $R(-1,2)$, $Q(4,0)$"
    ],
    hint: "Primero lee el avance horizontal en el eje $X$ y luego el vertical en el eje $Y$ para cada punto $(x, y)$.",
    explanation: "Revisando cada coordenada: $P$ está en 3 a la izquierda y 1 abajo $(-3, -1)$; $R$ está en 1 a la izquierda y 2 arriba $(-1, 2)$; y $Q$ se ubica sobre el eje vertical en $x = 0$, $y = 4$ $(0, 4)$."
  },
  {
    id: "m8-q11",
    topicId: "gas_ideal",
    prompt: "11. Los gases se expanden al aumentar su temperatura, variando de manera directamente proporcional a su",
    type: "choice",
    correct: "volumen",
    distractors: [
      "presión",
      "temperatura",
      "masa"
    ],
    hint: "Revisa la Ley de Charles: a presión constante, el volumen de un gas y su temperatura son directamente proporcionales.",
    explanation: "La Ley de Charles establece que, a presión constante, el aumento de temperatura de un gas produce una expansión directamente proporcional en su volumen ($\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$)."
  },
  {
    id: "m8-q12",
    topicId: "conversion_unidades",
    prompt: "12. En el Sistema Internacional de Medidas, ¿cuáles son respectivamente las unidades fundamentales de las siguientes cantidades?<br><br>$$\\text{Temperatura} \\rightarrow \\text{masa} \\rightarrow \\text{longitud} \\rightarrow \\text{intensidad de corriente} \\rightarrow \\text{cantidad de sustancia}$$",
    type: "choice",
    correct: "$^{\\circ}\\text{K} \\rightarrow \\text{Kg} \\rightarrow \\text{m} \\rightarrow \\text{amperio} \\rightarrow \\text{mol}$",
    distractors: [
      "$^{\\circ}\\text{K} \\rightarrow \\text{Kg} \\rightarrow \\text{yarda} \\rightarrow \\text{V} \\rightarrow \\text{mol}$",
      "$^{\\circ}\\text{C} \\rightarrow \\text{libra} \\rightarrow \\text{m} \\rightarrow \\text{amperio} \\rightarrow \\text{Kg}$",
      "$^{\\circ}\\text{C} \\rightarrow \\text{libra} \\rightarrow \\text{yarda} \\rightarrow \\text{V} \\rightarrow \\text{Kg}$"
    ],
    hint: "Identifica las unidades estándar del SI: el kelvin, el kilogramo, el metro, el ampere y el mol.",
    explanation: "En el Sistema Internacional, la temperatura se mide en Kelvin, la masa en kilogramos (Kg), la longitud en metros (m), la corriente en amperios (A) y la sustancia en moles (mol)."
  },
  {
    id: "m8-q13",
    topicId: "densidad",
    prompt: "13. Relaciona las siguientes sustancias con sus características de estado de agregación correspondientes:",
    type: "match_columns",
    pairs: [
      { left: "1. Agua (Líquido)", right: "Incompresible y fluido a temperatura ambiente" },
      { left: "2. Oxígeno (Gas)", right: "Altamente compresible y fluido a temperatura ambiente" },
      { left: "3. Mármol (Sólido)", right: "Forma y volumen definidos, incompresible y el de mayor densidad" }
    ],
    hint: "Los sólidos tienen forma fija y mayor densidad; los líquidos fluyen pero no se comprimen; los gases se comprimen con facilidad.",
    explanation: "El agua es líquida (incompresible y fluida); el oxígeno es un gas (altamente compresible y fluido); el mármol es un sólido (forma fija, incompresible y con la mayor densidad de los tres)."
  },
  {
    id: "m8-q14",
    topicId: "poligonos",
    prompt: "14. Se tienen el conjunto $A = \\{1, 4, 9\\}$ y el conjunto $B = \\{1, +2, -2, 3\\}$. Se define una relación con todos los elementos del dominio que son el cuadrado de los elementos del contradominio (o donde el dominio se relaciona con sus raíces).<br><br>¿Es correcto afirmar que $B$ es función de $A$?",
    image: "img/m8_diagrama_flechas.png",
    type: "choice",
    correct: "No $\\Rightarrow$ Porque uno de los elementos del dominio se relaciona con dos elementos del contradominio.",
    distractors: [
      "Sí $\\Rightarrow$ Debido a que todos los elementos del dominio están relacionados con los elementos del contradominio.",
      "Sí $\\Rightarrow$ Porque la relación se forma con un elemento del dominio con al menos un elemento del contradominio.",
      "No $\\Rightarrow$ Debido a que existen dos elementos del dominio asociados a un elemento del contradominio."
    ],
    hint: "Para que una relación sea función, a cada elemento del dominio le debe corresponder UN SOLO elemento del contradominio.",
    explanation: "En el diagrama se observa que el número 4 del dominio apunta a dos valores distintos (+2 y -2) en el contradominio. Al no existir unicidad, no cumple la definición de función."
  },
  {
    id: "m8-q15",
    topicId: "densidad",
    prompt: "15. ¿Cuál es el volumen que ocupan 25 Kg de cobre considerando que la densidad del cobre es de $8,960\\text{ kg/m}^{3}$?",
    type: "choice",
    correct: "$2.79\\times10^{-3}\\text{ m}^{3}$",
    distractors: [
      "$8985\\text{ m}^{3}$",
      "$358.4\\text{ m}^{3}$",
      "$2.24\\times10^{3}\\text{ m}^{3}$"
    ],
    hint: "Del triángulo de densidad: $V = \\frac{m}{\\rho}$.",
    explanation: "Dividiendo masa entre densidad: $V = \\frac{25}{8960} \\approx 0.00279\\text{ m}^3$. En notación científica esto equivale a $2.79\\times10^{-3}\\text{ m}^3$."
  },
  {
    id: "m8-q16",
    topicId: "flotacion",
    prompt: "16. Selecciona y ordena la secuencia lógica de pasos para resolver el problema de sumergir un cubo de madera de 6 cm de lado ($830\\text{ kg/m}^3$) en agua ($1000\\text{ kg/m}^3$):",
    type: "drag_order",
    correctOrder: [
      "1. Calcular volumen: V = 6 × 6 × 6 = 216 cm³ = 2.16 × 10⁻⁴ m³",
      "2. Fuerza de flotación: F_f = (1000 kg/m³)(9.8 m/s²)(2.16 × 10⁻⁴ m³) = 2.1168 N",
      "3. Peso del cuerpo: W = (830 kg/m³)(9.8 m/s²)(2.16 × 10⁻⁴ m³) = 1.7569 N",
      "4. Fuerza requerida: F = F_f - W = 0.3599 N"
    ],
    hint: "Primero obtienes el volumen geométrico, luego el empuje del agua, luego el peso del cubo y al final restas ambas fuerzas.",
    explanation: "La secuencia física obligada es: 1) Calcular el volumen del cuerpo; 2) Calcular la fuerza de flotación que empuja hacia arriba; 3) Calcular el peso propio hacia abajo; 4) Restar ambas fuerzas ($F = F_f - W$) para obtener el empuje manual necesario."
  },
  {
    id: "m8-q17",
    topicId: "poligonos",
    prompt: "17. ¿Cuál es la ecuación correspondiente a la siguiente parábola?",
    image: "img/m8_grafica_parabola.png",
    type: "choice",
    correct: "$3x^{2}+2x-5=0$",
    distractors: [
      "$3x^{2}+2x-1=0$",
      "$x^{2}+2x-3=0$",
      "$2x^{2}+3x-5=0$"
    ],
    hint: "Fíjate en dónde cruza al eje Y (cuando $x = 0$, $y = -5$) y prueba con las raíces visibles en la gráfica (por ejemplo, cuando $x = 1$, $y = 0$).",
    explanation: "Al evaluar $x = 1$ en $3(1)^2 + 2(1) - 5 = 3 + 2 - 5 = 0$, la gráfica cruza exactamente el eje en $(1, 0)$ y tiene su ordenada al origen en $(0, -5)$, lo que identifica a la opción correcta."
  },
  {
    id: "m8-q18",
    topicId: "gasto",
    prompt: "18. El contenedor con orificio que se muestra en la figura se llena de agua. Calcula el gasto que sale del contenedor a partir de los datos dados ($h=1.5\\text{ m}$, $A=0.00785\\text{ m}^{2}$, $H=1.8\\text{ m}$, $g=9.81\\text{ m/s}^{2}$):",
    image: "img/m8_contenedor_orificio.png",
    type: "choice",
    correct: "$Q=A\\sqrt{2gh}=0.043\\text{ m}^{3}/\\text{s}$",
    distractors: [
      "$Q=2\\sqrt{Agh}=0.680\\text{ m}^{3}/\\text{s}$",
      "$Q=\\sqrt{2AgH}=0.527\\text{ m}^{3}/\\text{s}$",
      "$Q=\\frac{A\\sqrt{2gH}}{kL}=0.117\\text{ m}^{3}/\\text{s}$"
    ],
    hint: "Combina el gasto $Q = A \\cdot v$ con el principio de Torricelli $v = \\sqrt{2gh}$.",
    explanation: "La velocidad de salida por Torricelli se formula como $v = \\sqrt{2gh}$, por lo que el gasto total es $Q = A v = A\\sqrt{2gh}$. Con los valores del examen oficial, la clave marcada corresponde a $0.043\\text{ m}^3/\\text{s}$."
  },
  {
    id: "m8-q19",
    topicId: "torricelli",
    prompt: "19. De la siguiente presentación electrónica sobre una planta hidroeléctrica, ¿cuáles enunciados son verdaderos?<br><br>1. Transforma la energía potencial del agua en energía eléctrica.<br>2. Al acumularse agua en la presa se incrementa su altura y su energía potencial.<br>3. La presión del agua se mide utilizando el teorema de Torricelli.<br>4. La energía potencial se transforma en energía cinética sobre las turbinas.<br>5. En el cuarto de máquinas los generadores transforman energía mecánica en eléctrica.<br>6. La planta transforma la energía cinética del agua en energía térmica.",
    image: "img/m8_presentacion_hidroelectrica.png",
    type: "choice",
    correct: "1, 2, 4, 5",
    distractors: [
      "1, 3, 5, 6",
      "2, 3, 4, 6",
      "2, 3, 4, 5"
    ],
    hint: "Descarta el 3 (Torricelli describe velocidad de salida, no mide presión) y el 6 (las hidroeléctricas no buscan generar calor).",
    explanation: "Los enunciados correctos son 1, 2, 4 y 5. El 3 es falso porque Torricelli mide velocidad de descarga de orificios, no presión; y el 6 es falso porque la meta de una hidroeléctrica es generar electricidad, no energía térmica."
  },
  {
    id: "m8-q20",
    topicId: "coulomb",
    prompt: "20. Dos esferas, cada una con una carga de $2\\times10^{-5}\\text{ C}$, están separadas 45 mm. ¿Cuál es la fuerza de repulsión entre ellas? ($k=9\\times10^{9}\\text{ N}\\cdot\\text{m}^{2}/\\text{C}^{2}$)",
    type: "choice",
    correct: "$1.77\\times10^{3}\\text{ N}$",
    distractors: [
      "0.162 N",
      "0.08 N",
      "$8.8\\times10^{-11}\\text{ N}$"
    ],
    hint: "Pasa 45 mm a metros ($0.045\\text{ m} = 4.5\\times10^{-2}\\text{ m}$) y sustituye en $F = k \\frac{q^2}{r^2}$.",
    explanation: "Calculando: $F = (9\\times10^9) \\frac{(2\\times10^{-5})^2}{(0.045)^2} = (9\\times10^9) \\frac{4\\times10^{-10}}{2.025\\times10^{-3}} = 1,777.7\\text{ N} \\approx 1.77\\times10^3\\text{ N}$."
  },
  {
    id: "m8-q21",
    topicId: "watt",
    prompt: "21. Se compra una bomba de agua de $1/2\\text{ hp}$ para suministro doméstico. La placa indica que funciona con 127 V. Calcula la corriente (en A) que consume la bomba ($1\\text{ hp} = 746\\text{ W}$).",
    type: "choice",
    correct: "$I = P/V = 2.93\\text{ A}$",
    distractors: [
      "$I = V/(2*P) = 0.68\\text{ A}$",
      "$I = V/P = 0.34\\text{ A}$",
      "$I = P*V = 4.7\\times10^{4}\\text{ A}$"
    ],
    hint: "Medio caballo equivale a $746 / 2 = 373\\text{ W}$. Luego divide entre el voltaje: $I = P / V$.",
    explanation: "La potencia de medio caballo es $373\\text{ W}$. De la Ley de Watt, la corriente es $I = \\frac{P}{V} = \\frac{373\\text{ W}}{127\\text{ V}} \\approx 2.93\\text{ A}$."
  },
  {
    id: "m8-q22",
    topicId: "watt",
    prompt: "22. ¿Cuáles de las siguientes aseveraciones corresponden con las características de un campo magnético?<br><br>1. Tiene como unidad de medida el tesla (T).<br>2. Tiene como unidad el coulomb (C).<br>3. El instrumento con el que se mide es el galvanómetro.<br>4. Un campo magnético variable permite inducir un campo eléctrico.<br>5. La cantidad de líneas del campo magnético que atraviesan una superficie se denomina flujo magnético.<br>6. La fuerza de atracción entre dos polos de un campo magnético en un área determinada se denomina flujo magnético.",
    type: "choice",
    correct: "1, 3, 4, 5",
    distractors: [
      "2, 3, 4, 6",
      "1, 3, 5",
      "2, 4, 6"
    ],
    hint: "El coulomb mide carga, no campo magnético (descarta 2). El flujo magnético se define por la cantidad de líneas que cruzan una superficie (5 es correcta, 6 es falsa).",
    explanation: "Las opciones 1, 3, 4 y 5 son los enunciados correctos. La 2 es errónea (el campo magnético no se mide en coulombs) y la 6 describe erróneamente el concepto de flujo magnético."
  },
  {
    id: "m8-q23",
    topicId: "gas_ideal",
    prompt: "23. La gráfica muestra una curva que relaciona valores de presión y volumen de un gas. ¿Cómo se denomina la ley que relaciona estas variables y cómo se interpreta?",
    image: "img/m8_grafica_boyle.png",
    type: "choice",
    correct: "Boyle-Mariotte $\\Rightarrow$ A temperatura constante, la presión de un gas es inversamente proporcional al volumen que ocupa.",
    distractors: [
      "Gay-Lussac $\\Rightarrow$ A volumen constante, la presión de un gas ideal es directamente proporcional a la temperatura.",
      "Gay-Lussac $\\Rightarrow$ A temperatura constante, la presión de un gas es inversamente proporcional al volumen que ocupa.",
      "Boyle-Mariotte $\\Rightarrow$ A volumen constante, la presión de un gas ideal es directamente proporcional a la temperatura."
    ],
    hint: "La gráfica es una curva hiperbólica decreciente entre Presión ($P$) y Volumen ($V$), lo que representa una relación inversamente proporcional.",
    explanation: "Una curva decreciente en un plano Presión-Volumen representa una isoterma regida por la Ley de Boyle-Mariotte: al comprimir el volumen, la presión se incrementa de forma inversamente proporcional ($P_1 V_1 = P_2 V_2$)."
  },
  {
    id: "m8-q24",
    topicId: "gas_ideal",
    prompt: "24. Una muestra de oxígeno ocupa $12\\text{ m}^{3}$ a temperatura ambiente bajo una presión de 740 mm Hg. Determina el volumen de la misma masa de gas a una presión de 760 mm Hg, en la misma condición de temperatura.",
    type: "choice",
    correct: "$V_{2}=(P_{1}*V_{1})/P_{2}=11.68\\text{ m}^{3}$",
    distractors: [
      "$V_{2}=(V_{1}/P_{1})*P_{2}=12.32\\text{ m}^{3}$",
      "$V_{2}=(T_{1}*V_{1})/T_{2}=12.0\\text{ m}^{3}$",
      "$V_{2}=(P_{1}*P_{2})/V_{1}=4.6\\times10^{4}\\text{ m}^{3}$"
    ],
    hint: "Aplica la Ley de Boyle: $P_1 V_1 = P_2 V_2$. Despeja $V_2$.",
    explanation: "Despejando el volumen final: $V_2 = \\frac{P_1 V_1}{P_2} = \\frac{(740)(12)}{760} \\approx 11.68\\text{ m}^3$. Como la presión aumentó ligeramente, el volumen debió disminuir."
  },
  {
    id: "m8-q25",
    topicId: "gas_ideal",
    prompt: "25. En el laboratorio se coloca nitrógeno gaseoso a 180 °K a una presión de 1,000 Pa en un volumen de $600\\text{ m}^{3}$. Enseguida se reduce su volumen a $500\\text{ m}^{3}$ y se incrementa la temperatura a 210 °K. Calcula la presión del nitrógeno al final del proceso, suponiendo que se comporta como un gas ideal.",
    type: "choice",
    correct: "$P_{2}=\\frac{P_{1}V_{1}T_{2}}{V_{2}T_{1}}=1,400\\text{ Pa}$",
    distractors: [
      "$P_{2}=\\frac{P_{1}V_{1}T_{2}}{(V_{2}-V_{1})T_{1}}=1,400\\text{ Pa}$",
      "$P_{2}=\\frac{P_{1}V_{1}T_{1}}{V_{2}T_{2}}=1,028\\text{ Pa}$",
      "$P_{2}=\\frac{P_{1}V_{2}T_{1}}{V_{1}T_{2}}=257\\text{ Pa}$"
    ],
    hint: "Aplica la ley general del gas ideal: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$ y despeja $P_2$.",
    explanation: "Despejando: $P_2 = \\frac{P_1 V_1 T_2}{T_1 V_2} = \\frac{(1000)(600)(210)}{(180)(500)} = \\frac{126,000,000}{90,000} = 1,400\\text{ Pa}$."
  },
  {
    id: "m8-q26",
    topicId: "poligonos",
    prompt: "26. En la investigación de fenómenos meteorológicos es importante analizar tanto la intensidad como la dirección de los vientos, considerando los puntos cardinales. ¿Cuál es el valor del ángulo que forma la dirección del viento NNO (Nor-Noroeste) con la horizontal?",
    image: "img/m8_rosa_vientos.png",
    type: "choice",
    correct: "$67.5^{\\circ}$",
    distractors: [
      "$22.5^{\\circ}$",
      "$90^{\\circ}$",
      "$45^{\\circ}$"
    ],
    hint: "La rosa de los vientos divide el cuadrante de 90° en 4 partes de 22.5° cada una: Oeste (0°), ONO (22.5°), NO (45°) y NNO (67.5° respecto a la horizontal).",
    explanation: "Cada subdivisión de la rosa de los vientos equivale a $22.5^\\circ$. NNO se ubica entre el Noroeste ($45^\\circ$) y el Norte ($90^\\circ$). Su elevación angular medida desde el eje horizontal Oeste es $45^\\circ + 22.5^\\circ = 67.5^\\circ$."
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
    prompt: "28. Se midió la temperatura de un refrigerador de uso doméstico con un termómetro en escala Celsius y fue de $5^{\\circ}\\text{C}$. ¿A cuántos grados corresponde en escala Fahrenheit?",
    type: "choice",
    correct: "$F = 1.8 T + 32 = 41$",
    distractors: [
      "$F = 32 - 1.8T = 23$",
      "$F = 32 + 0.8T = 36$",
      "$F = 32 - 0.8T = 28$"
    ],
    hint: "La fórmula de conversión es $T_F = 1.8 \\cdot T_C + 32$.",
    explanation: "Sustituyendo los $5^\\circ\\text{C}$: $T_F = 1.8(5) + 32 = 9 + 32 = 41^\\circ\\text{F}$."
  },
  {
    id: "m8-q29",
    topicId: "calor",
    prompt: "29. Una sustancia metálica cuya temperatura es de $90^{\\circ}\\text{C}$ se coloca en un calorímetro con 325 g de agua cuya temperatura es de $20^{\\circ}\\text{C}$. La temperatura final del agua es $25^{\\circ}\\text{C}$. Determine el calor absorbido por el agua en calorías.",
    type: "choice",
    correct: "1625 cal",
    distractors: [
      "6500 cal",
      "29250 cal",
      "8125 cal"
    ],
    hint: "Aplica $Q = m \\cdot c \\cdot \\Delta T$. Recuerda que para el agua $c = 1\\text{ cal/g}^{\\circ}\\text{C}$ y el cambio de temperatura es $\\Delta T = 25 - 20 = 5^{\\circ}\\text{C}$.",
    explanation: "Solo importa la masa y el incremento de temperatura del agua: $Q = (325\\text{ g})(1\\text{ cal/g}^{\\circ}\\text{C})(25^{\\circ}\\text{C} - 20^{\\circ}\\text{C}) = 325 \\times 5 = 1,625\\text{ cal}$."
  },
  {
    id: "m8-q30",
    topicId: "calor",
    prompt: "30. Uno de los gases de efecto invernadero es el $\\text{CO}_{2}$; cuando existe mayor cantidad de este gas se incrementa la temperatura. ¿Cuál es el motivo por el cual se desencadena este efecto?",
    type: "choice",
    correct: "El $\\text{CO}_{2}$ no permite que la radiación emitida por la superficie terrestre salga de regreso al espacio.",
    distractors: [
      "El $\\text{CO}_{2}$ desencadena una serie de reacciones químicas que catalizan la formación de contaminantes.",
      "Este gas incrementa el acceso a la superficie terrestre de la radiación del espacio.",
      "Este gas impide la total absorción de radiaciones del exterior por lo que vuelven al exterior."
    ],
    hint: "El efecto invernadero funciona atrapando la radiación infrarroja térmica que la Tierra reemite hacia el espacio.",
    explanation: "Las moléculas de dióxido de carbono absorben y reemiten la radiación infrarroja emitida por la superficie del planeta, reteniendo la energía térmica en la atmósfera e impidiendo que escape al espacio exterior."
  }
];
