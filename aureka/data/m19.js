/**
 * Aureka - Banco de Preguntas
 * Módulo 19: Dinámica en la Naturaleza. El Movimiento
 */

const moduleInfo = {
  badge: "Módulo 19",
  title: "Física II",
  topicVideos: {}
};

const questionBank = [
  {
    id: "m19-q02",
    prompt: "Completa la definición:",
    type: "fill_blanks",
    sentence: "El movimiento {0} (llamado también movimiento circunferencial) dispone de un eje de giro y radio constante describiendo una trayectoria en forma de circunferencia. Cuando la velocidad {1} es constante se tiene el movimiento {2}.",
    correctOrder: [
      "circular",
      "angular",
      "circular uniforme"
    ],
    distractors: [
      "armónico simple",
      "tangencial",
      "centrípeta"
    ],
    hint: "La trayectoria circular con rapidez de giro constante da origen al MCU.",
    explanation: "Una trayectoria circular con velocidad angular $\\omega$ constante define al movimiento circular uniforme (MCU)."
  },
  {
    id: "m19-q03",
    prompt: "Se tienen los tres vectores de fuerza siguientes:<br><ul class=\"list-disc pl-5 my-2 space-y-1\">\n  <li>$V_1 = 25\\text{ N}$ en dirección este.</li>\n  <li>$V_2 = 10\\text{ N}$ en dirección oeste.</li>\n  <li>$V_3 = -5\\text{ N}$ en dirección este.</li>\n</ul>¿Cuál es el módulo del vector resultante?",
    type: "choice",
    correct: "10.0 N",
    distractors: [
      "-10.0 N",
      "22.4 N",
      "27.4 N"
    ],
    hint: "Toma el este como positivo. Un vector de $-5\\text{ N}$ al este en realidad apunta hacia el oeste.",
    explanation: "Sumando sobre el eje horizontal con el este como dirección positiva:\n$$\\begin{aligned} R &= 25\\text{ N} - 10\\text{ N} + (-5\\text{ N}) \\\\[2pt] &= 10.0\\text{ N} \\end{aligned}$$"
  },
  {
    id: "m19-q04",
    prompt: "Una cadena sostiene una polea que tiene un peso de 30 N. Si se conectan dos pesos idénticos de 80 N con una cuerda que pasa por la polea, ¿cuál es la tensión en la cadena?",
    type: "choice",
    correct: "190 N.",
    distractors: [
      "200 N.",
      "100 N.",
      "160 N."
    ],
    hint: "La cadena debe equilibrar hacia arriba tanto el peso de la polea como las dos ramas de la cuerda que sostienen las cargas.",
    explanation: "En equilibrio vertical, la cadena soporta la polea y ambos extremos de la cuerda cargada:\n$$\\begin{aligned} T &= W_{\\text{polea}} + 2W \\\\[2pt] &= 30\\text{ N} + 2(80\\text{ N}) = 190\\text{ N} \\end{aligned}$$"
  },
  {
    id: "m19-q05",
    prompt: "Al decir que un vector apunta hacia el sur, ¿qué característica vectorial se está mencionando?",
    type: "choice",
    correct: "Dirección.",
    distractors: [
      "Sentido.",
      "Magnitud.",
      "Origen."
    ],
    hint: null,
    explanation: "Todos los vectores se definen a partir de qué tan grandes son (magnitud) y hacia dónde apuntan (dirección)."
  },
  {
    id: "m19-q06",
    prompt: "¿Cómo se conocen los acuerdos internacionales de pesos y medidas en las que participan científicos de todo el mundo?",
    type: "choice",
    correct: "Patrones de medidas.",
    distractors: [
      "Pesos estándares.",
      "Magnitudes físicas.",
      "Leyes de la física."
    ],
    hint: "Son las referencias materiales o definiciones oficiales que sirven para calibrar y unificar las unidades.",
    explanation: "Las convenciones internacionales establecen los <b>patrones de medida</b> oficiales para definir con precisión las unidades del Sistema Internacional."
  },
  {
    id: "m19-q07",
    prompt: "¿Cuál de las siguientes afirmaciones es correcta?",
    type: "choice",
    correct: "El periodo de un péndulo depende de la aceleración de la gravedad.",
    distractors: [
      "El periodo de un péndulo no depende de la aceleración de la gravedad.",
      "El periodo de oscilación de un péndulo es dependiente de su masa.",
      "El periodo es inversamente proporcional a la longitud del péndulo."
    ],
    hint: "Revisa la ecuación $T = 2\\pi\\sqrt{L/g}$ y nota qué variables intervienen.",
    explanation: "De acuerdo con $T = 2\\pi\\sqrt{\\frac{L}{g}}$, el periodo $T$ depende de la longitud $L$ y de la gravedad $g$, y es completamente independiente de la masa."
  },
  {
    id: "m19-q08",
    prompt: "¿Cuál de las siguientes es una magnitud <b>escalar</b> que solo indica la longitud recorrida?",
    type: "choice",
    correct: "Distancia.",
    distractors: [
      "Desplazamiento.",
      "Longitud.",
      "Rapidez."
    ],
    hint: null,
    explanation: "La <b>distancia</b> es la longitud escalar del camino recorrido, a diferencia del desplazamiento, que es un vector que une la posición inicial con la final."
  },
  {
    id: "m19-q10",
    prompt: "Completa el enunciado seleccionando los términos y fórmulas correspondientes:",
    type: "fill_blanks",
    sentence: "La fracción de circunferencia contenida en un sector circular de radio $r$ y ángulo $\\theta$ se denomina {0} y se calcula con la expresión {1} con el ángulo en {2}.",
    correctOrder: [
      "longitud de arco",
      "$r\\theta$",
      "radianes"
    ],
    distractors: [
      "sector circular",
      "$2r\\pi\\theta/360$",
      "$r\\pi\\theta/180$",
      "grados"
    ],
    hint: "La ecuación para la longitud de arco $s$ requiere que el ángulo central esté expresado en radianes.",
    explanation: "La porción de curva es la <b>longitud de arco</b> y su relación directa es $L = r\\theta$, donde $\\theta$ debe expresarse en radianes."
  },
  {
    id: "m19-q11",
    prompt: "Analiza el siguiente caso y contesta lo que se pregunta.<br><br>Dos corredoras olímpicas corren en la pista y al llegar a la curva Laura se ubica en el último carril en el punto B y Vanesa ocupa el primer carril en el punto A.<br>Si ambas recorren la curva en 4 segundos, ¿qué se puede afirmar respecto de este caso?<br><br>Información física y geométrica:<br>Radio $A = 20\\text{ m}$<br>Radio $B = 30\\text{ m}$",
    image: "assets/m19_pista_corredoras.png",
    type: "choice",
    correct: "Laura y Vanesa corren con la misma velocidad angular.",
    distractors: [
      "La velocidad angular de Laura es mayor que la de Vanesa.",
      "La rapidez angular de ambas es proporcional al radio.",
      "Laura y Vanesa corren con la misma velocidad lineal."
    ],
    hint: "Ambas barren el mismo ángulo (media vuelta) en exactamente el mismo intervalo de tiempo.",
    explanation: "Al barrer el mismo ángulo de la curva en el mismo lapso (4 s), su rapidez angular $\\omega = \\frac{\\Delta\\theta}{\\Delta t}$ es idéntica; la que tiene mayor radio solo tiene mayor rapidez lineal ($v = \\omega r$)."
  },
      {
    id: "m19-q12",
    prompt: "Una camioneta se desplaza 8 km en línea horizontal y luego gira hacia el norte recorriendo 13 km. ¿Cuál es su desplazamiento resultante?",
    type: "choice",
    correct: "$$R = \\sqrt{8^{2} + 13^{2}} = 15.2\\text{ km}$$",
    distractors: [
      "$$R = 8 + 13 = 21\\text{ km}$$",
      "$$R = -8 + 13 = 5\\text{ km}$$",
      "$$R = \\sqrt{8^{2} + 13^{2}} = 4.58\\text{ km}$$"
    ],
    hint: "Los dos trayectos forman un triángulo rectángulo: aplica el teorema de Pitágoras.",
    explanation: "Al ser trayectorias perpendiculares, la magnitud del desplazamiento resultante es la hipotenusa:\n$$\\begin{aligned} R &= \\sqrt{8^2 + 13^2} \\\\[3pt] &= \\sqrt{64 + 169} \\\\[3pt] &= \\sqrt{233} \\\\[3pt] &\\approx 15.26\\text{ km} \\end{aligned}$$"
  },
  {
    id: "m19-q13",
    prompt: "¿Cuál de las siguientes gráficas representa correctamente la ecuación cuadrática: $y = -x^{2} + 2x - 8$?",
    type: "choice",
    correct: "<img src='assets/m19_parabola_c.png'>",
    distractors: [
      "<img src='assets/m19_parabola_a.png'>",
      "<img src='assets/m19_parabola_b.png'>",
      "<img src='assets/m19_parabola_d.png'>"
    ],
    hint: "El coeficiente de $x^2$ es negativo (abre hacia abajo), corta al eje Y en $(0,-8)$ y su vértice está en $x = 1$.",
    explanation: "Como $a = -1$, la parábola es cóncava hacia abajo. Su vértice es $x_v = -\\frac{b}{2a} = 1$, dando $y(1) = -7$, y su ordenada al origen es $y(0) = -8$."
  },
  {
    id: "m19-q14",
    prompt: "De acuerdo a la gráfica de la función seno, ¿cuáles de las siguientes afirmaciones son correctas?",
    image: "assets/m19_grafica_seno.png",
    type: "multi_select",
    correctAnswers: [
      "El periodo se representa como $N$.",
      "El segmento $N$ es recíproco de la frecuencia.",
      "El segmento $M$ representa la amplitud.",
      "La variación de $\\sin(x)$ es entre $1$ y $-1$."
    ],
    distractors: [
      "El segmento $M$ representa la mitad de la amplitud.",
      "La variación de $\\sin(x)$ es entre $10$ y $-10$."
    ],
    hint: null,
    explanation: "El periodo $N$ corresponde a un ciclo completo, la amplitud vertical es la altura $M$ y el rango de la función seno va de $-1$ a $1$."
  },
  {
    id: "m19-q15",
    prompt: "Selecciona las afirmaciones correctas respecto al modelo del movimiento rectilíneo uniforme.",
    type: "multi_select",
    correctAnswers: [
      "Solo describe el movimiento de un objeto que no cambia de dirección.",
      "La velocidad del movimiento siempre es constante.",
      "La variable temporal es independiente de cualquier factor externo."
    ],
    distractors: [
      "La distancia, el tiempo y la velocidad son independientes entre sí.",
      "Permite describir la caída libre de un objeto.",
      "Permite determinar el tiempo de recorrido de una pelota que se lanza hacia arriba."
    ],
    hint: "En el MRU la velocidad no cambia pues no existe aceleración; la caída libre y el tiro vertical son movimientos acelerados por la gravedad.",
    explanation: "El MRU exige velocidad constante y trayectoria en línea recta sin cambio de dirección. La distancia, velocidad y tiempo dependen entre sí ($d = vt$), mientras que la caída libre y el tiro vertical poseen aceleración gravitacional y no corresponden a este modelo."
  },
    {
    id: "m19-q16",
    prompt: "Dos cajas de masa $M_1 = 4\\text{ kg}$ y $M_2 = 2\\text{ kg}$ se amarran y se jalan con una fuerza $F$. ¿Cuál es la magnitud de la fuerza si las cajas se mueven con una aceleración de $5\\text{ m/s}^{2}$?",
    image: "assets/m19_bloques_fuerza.png",
    type: "choice",
    correct: "$$F = (M_1 + M_2)a = (4 + 2)5 = 30\\text{ N}$$",
    distractors: [
      "$$F = (M_1)a = (4)5 = 20\\text{ N}$$",
      "$$F = (M_1 - M_2)a = (2)5 = 10\\text{ N}$$",
      "$$F = (M_2)a = (2)5 = 10\\text{ N}$$"
    ],
    hint: "La fuerza aplicada acelera la masa total del conjunto.",
    explanation: "Por la segunda ley de Newton aplicada al sistema completo:\n$$\\begin{aligned} F &= m_{\\text{total}} \\cdot a \\\\[3pt] &= (4\\text{ kg} + 2\\text{ kg})(5\\text{ m/s}^2) \\\\[3pt] &= 30\\text{ N} \\end{aligned}$$"
  },
  {
    id: "m19-q17",
    prompt: "Una partícula con movimiento circular da una vuelta completa en 3 segundos. Determina el ángulo descrito en un segundo en radianes.",
    type: "choice",
    correct: "$$\\theta = \\frac{120\\pi}{180} = 2.09\\text{ rad}$$",
    distractors: [
      "$$\\theta = \\frac{180 \\cdot 3}{120 \\pi} = 1.43\\text{ rad}$$",
      "$$\\theta = \\frac{180}{120 \\pi} = 0.474\\text{ rad}$$",
      "$$\\theta = \\frac{120 \\times 180}{360 \\pi} = 19.09\\text{ rad}$$"
    ],
    hint: "En 1 segundo recorre la tercera parte de la circunferencia ($360^\\circ / 3 = 120^\\circ$): conviértelo a radianes.",
    explanation: "Una tercera parte de vuelta equivale a $120^\\circ$. Convirtiendo a radianes:\n$$\\theta = 120^\\circ \\left(\\frac{\\pi\\text{ rad}}{180^\\circ}\\right) = \\frac{2\\pi}{3} \\approx 2.09\\text{ rad}$$"
  },
  {
    id: "m19-q18",
    prompt: "Sitlali sale de su casa caminando hacia la escuela y recorre 50 m/min en línea recta. ¿A cuántos metros se encuentra su escuela si se tarda 9.2 minutos en llegar?",
    type: "choice",
    correct: "460 m.",
    distractors: [
      "230 m.",
      "59.2 m.",
      "4232 m."
    ],
    hint: "Aplica la relación de velocidad constante $d = v \\cdot t$.",
    explanation: "Multiplicando la rapidez constante por el tiempo transcurrido:\n$$d = (50\\text{ m/min})(9.2\\text{ min}) = 460\\text{ m}$$"
  },
  {
    id: "m19-q19",
    prompt: "Una persona viaja desde su casa hasta un despacho caminando 340 m sobre Avenida Estrella y 200 m sobre la Calle Principal. ¿Cuáles de las siguientes afirmaciones son correctas a partir de la imagen?",
    image: "assets/m19_croquis.png",
    type: "multi_select",
    correctAnswers: [
      "Se caminó primero hacia el este y después hacia el norte.",
      "El vector desplazamiento se traza a 30° en dirección noreste.",
      "El vector desplazamiento mide aproximadamente 400 m."
    ],
    distractors: [
      "Se caminó primero hacia el norte y después hacia el este.",
      "El vector desplazamiento se traza a 30° en dirección noroeste.",
      "El vector desplazamiento mide aproximadamente 540 m."
    ],
    hint: "El recorrido va a la derecha (este) y luego arriba (norte). La magnitud resultante es $\\sqrt{340^2 + 200^2} \\approx 394\\text{ m}$.",
    explanation: "Se avanza primero al este y luego al norte (cuadrante noreste, $\\theta \\approx 30.5^\\circ$ respecto al este) con un desplazamiento total $\\sqrt{340^2 + 200^2} \\approx 394.4\\text{ m} \\approx 400\\text{ m}$."
  },
  {
    id: "m19-q20",
    prompt: "En la siguiente gráfica se muestra la relación entre la altura y el tiempo de recorrido de un globo aerostático. ¿Cuál es la velocidad promedio del globo al desplazarse del punto $C$ al $E$?",
    image: "assets/m19_grafica_globo.png",
    type: "choice",
    correct: "6.0 m/s.",
    distractors: [
      "12.5 m/s.",
      "3.5 m/s.",
      "8.0 m/s."
    ],
    hint: "Calcula la pendiente entre los puntos $C(2, 4)$ y $E(4, 16)$: $v = \\frac{\\Delta d}{\\Delta t}$.",
    explanation: "La velocidad promedio es la razón de cambio entre los puntos C y E:\n$$v_m = \\frac{16\\text{ m} - 4\\text{ m}}{4\\text{ s} - 2\\text{ s}} = \\frac{12}{2} = 6.0\\text{ m/s}$$"
  },
  {
    id: "m19-q21",
    prompt: "Una pelota se deja caer desde un edificio y tarda 7 segundos en llegar al piso. ¿Cuál es la altura del edificio en metros?",
    type: "choice",
    correct: "240 m.",
    distractors: [
      "137 m.",
      "343 m.",
      "480 m."
    ],
    hint: "En caída libre partiendo del reposo, $h = \\frac{1}{2}gt^2$.",
    explanation: "Aplicando la ecuación de caída libre:\n$$\\begin{aligned} h &= \\frac{1}{2}(9.81)(7)^2 \\\\[3pt] &= \\frac{1}{2}(9.81)(49) \\\\[3pt] &\\approx 240.3\\text{ m} \\end{aligned}$$"
  },
  {
    id: "m19-q22",
    prompt: "Se tienen tres magnitudes de vectores en un plano:<br><ul class=\"list-disc pl-5 my-2 space-y-1\">\n  <li>$V_1 = 50\\text{ N}$ en dirección este.</li>\n  <li>$V_2 = 20\\text{ N}$ en dirección oeste.</li>\n  <li>$V_3 = -5\\text{ N}$ en dirección este.</li>\n</ul>¿Cuál es la resultante de estos vectores en dirección este?",
    type: "choice",
    correct: "$$R = 50 - 20 - 5 = 25$$",
    distractors: [
      "$$R = 50 + 20 - 5 = 65$$",
      "$$R = \\sqrt{(50)^{2} + (20)^{2} + (-5)^{2}} = 53.6$$",
      "$$R = \\sqrt{(50)^{2} + (20)^{2} + (-5)^{2}} = 54.1$$"
    ],
    hint: "Al ser colineales, los vectores hacia el oeste o con signo negativo en dirección este se restan.",
    explanation: "Sumando algebraicamente con sentido positivo hacia el este:\n$$R = 50\\text{ N} - 20\\text{ N} - 5\\text{ N} = 25\\text{ N}$$"
  },
{
    id: "m19-q23a",
    prompt: "¿Cuáles son las coordenadas del punto $Q$?",
    image: "assets/m19_geogebra_puntoQ.png",
    type: "choice",
    correct: "$$(-1.5, -1)$$",
    distractors: [
      "$$(-1, -1.5)$$",
      "$$(2, -3)$$",
      "$$(-3, 2)$$"
    ],
    hint: "Ubica primero la posición en el eje horizontal $x$ y luego en el eje vertical $y$.",
    explanation: "El punto $Q$ se encuentra en $x = -1.5$ y desciende a $y = -1$, por lo que sus coordenadas son $(-1.5, -1)$."
  },
  {
    id: "m19-q23b",
    prompt: "¿Cuáles son las coordenadas del punto $R$?",
    image: "assets/m19_geogebra_puntoR.png",
    type: "choice",
    correct: "$$(-3.5, -1.5)$$",
    distractors: [
      "$$(-1.5, -3.5)$$",
      "$$(-3.5, 3.5)$$",
      "$$(-3.5, -3.5)$$"
    ],
    hint: "Revisa con atención cuál valor corresponde al eje horizontal $x$ y cuál al eje vertical $y$.",
    explanation: "El punto $R$ se proyecta en $x = -3.5$ y en $y = -1.5$, dando el par ordenado $(-3.5, -1.5)$."
  },
  {
    id: "m19-q23c",
    prompt: "¿Cuáles son las coordenadas del punto $T$?",
    image: "assets/m19_geogebra_puntoT.png",
    type: "choice",
    correct: "$$(-2, -5.5)$$",
    distractors: [
      "$$(-5.5, -2)$$",
      "$$(-5, -2)$$",
      "$$(-2, -5)$$"
    ],
    hint: "Observa que se encuentra a la izquierda en $x = -5.5$ y baja dos unidades sobre el eje $y$.",
    explanation: "El punto $T$ tiene un avance horizontal en $x = -5.5$ y una altura negativa de $y = -2$, formando $(-5.5, -2)$."
  },
  {
    id: "m19-q23d",
    prompt: "¿Cuáles son las coordenadas del punto $U$?",
    image: "assets/m19_geogebra_puntoU.png",
    type: "choice",
    correct: "$$(-4, 3)$$",
    distractors: [
      "$$(3, -4)$$",
      "$$(3, 3.5)$$",
      "$$(2.5, 4)$$"
    ],
    hint: "Es el único punto en el segundo cuadrante: $x$ es negativo e $y$ es positivo.",
    explanation: "Al ubicarse en el segundo cuadrante, el punto $U$ cruza con $x = -4$ y sube hasta $y = 3$, resultando en $(-4, 3)$."
  },
  {
    id: "m19-q24",
    prompt: "De acuerdo al diagrama de fuerzas de la imagen, ¿cuáles de las siguientes afirmaciones son correctas?",
    image: "assets/m19_grua_fuerzas.png",
    type: "multi_select",
    correctAnswers: [
      "$F_2$ es la fuerza de atracción que la Tierra ejerce sobre los bloques.",
      "La reacción de la grúa $F_1$ es igual al peso total que carga.",
      "La fuerza $F_1$ es igual en magnitud al peso de los bloques y el gancho de carga."
    ],
    distractors: [
      "$F_3$ es la fuerza normal entre los bloques y la grúa.",
      "$F_4$ es la fuerza de atracción gravitacional."
    ],
    hint: "$F_2$ es el peso hacia el centro de la Tierra; $F_1$ equilibra verticalmente todo el peso sostenido.",
    explanation: "$F_2$ representa el peso (fuerza gravitacional terrestre) y $F_1$ equilibra el peso de la carga tanto en reacción como en magnitud de soporte estático."
  },
   {
    id: "m19-q25a",
    prompt: "Fernando acelera su automóvil a $5\\text{ m/s}^{2}$. ¿Qué velocidad $v$ tendrá a los 30 segundos de haber iniciado el movimiento?",
    type: "choice",
    correct: "$$v_f = 5 \\times 30 = 150\\text{ m/s}$$",
    distractors: [
      "$$v_f = 5 \\times 30^{2} = 4500\\text{ m/s}$$",
      "$$v_f = \\frac{5 \\times 30}{2} = 75\\text{ m/s}$$",
      "$$v_f = \\frac{30}{5} = 6\\text{ m/s}$$"
    ],
    hint: "Al partir del reposo ($v_0 = 0$), la velocidad final es el producto de la aceleración por el tiempo ($v_f = a \\cdot t$).",
    explanation: "Aplicando la fórmula de cinemática con aceleración constante:\n$$\\begin{aligned} v_f &= a \\cdot t \\\\[3pt] &= (5\\text{ m/s}^2)(30\\text{ s}) \\\\[3pt] &= 150\\text{ m/s} \\end{aligned}$$"
  },
  {
    id: "m19-q25b",
    prompt: "Fernando acelera su automóvil a $5\\text{ m/s}^{2}$. ¿Cuál es la distancia $d$ que habrá recorrido en ese tiempo?",
    type: "choice",
    correct: "$$d = \\frac{5 \\times 30^{2}}{2} = 2250\\text{ m}$$",
    distractors: [
      "$$d = 5 \\times 30^{2} = 4500\\text{ m}$$",
      "$$d = 5 \\times 30 = 150\\text{ m}$$",
      "$$d = \\frac{5 \\times 30}{2} = 75\\text{ m}$$"
    ],
    hint: "Partiendo del reposo ($v_0 = 0$), la distancia recorrida es $d = \\frac{1}{2}at^2$.",
    explanation: "Calculando la distancia recorrida desde el reposo:\n$$\\begin{aligned} d &= \\frac{1}{2}at^2 \\\\[3pt] &= \\frac{5(30)^2}{2} \\\\[3pt] &= \\frac{5(900)}{2} = 2250\\text{ m} \\end{aligned}$$"
  },
    {
    id: "m19-q26",
    prompt: "Las ruedas de una bicicleta tienen 30 rayos distribuidos uniformemente. ¿Cuánto mide el ángulo entre cada uno de los rayos en grados y en radianes?",
    type: "choice",
    correct: "$$\\small\\begin{gathered} \\frac{360^{\\circ}}{30} = 12^{\\circ} \\\\[3pt] \\implies 12^{\\circ}\\left(\\frac{\\pi\\text{ rad}}{180^{\\circ}}\\right) = \\frac{\\pi\\text{ rad}}{15} \\end{gathered}$$",
    distractors: [
      "$$\\small\\begin{gathered} \\frac{180^{\\circ}}{30} = 6^{\\circ} \\\\[3pt] \\implies 6^{\\circ}\\left(\\frac{\\pi\\text{ rad}}{180^{\\circ}}\\right) = \\frac{\\pi\\text{ rad}}{30} \\end{gathered}$$",
      "$$\\small\\begin{gathered} \\frac{30}{360} = 0.083^{\\circ} \\\\[3pt] \\implies 0.083^{\\circ}\\left(\\frac{2\\pi\\text{ rad}}{360^{\\circ}}\\right) = 2.89 \\times 10^{-3}\\text{ rad} \\end{gathered}$$",
      "$$\\small\\begin{gathered} \\frac{30}{180} = 0.16^{\\circ} \\\\[3pt] \\implies 0.16^{\\circ}\\left(\\frac{2\\pi\\text{ rad}}{180^{\\circ}}\\right) = 1.1 \\times 10^{-2}\\text{ rad} \\end{gathered}$$"
    ],
    hint: "Divide el círculo completo ($360^\\circ$) entre los 30 sectores y simplifica la fracción en radianes.",
    explanation: "Cada sector mide $360^\\circ / 30 = 12^\\circ$. Convirtiendo a radianes:\n$$\\small\\begin{aligned} 12^\\circ \\left(\\frac{\\pi}{180^\\circ}\\right) &= \\frac{12\\pi}{180} \\\\[3pt] &= \\frac{\\pi}{15}\\text{ rad} \\end{aligned}$$"
  },
  {
    id: "m19-q27",
    prompt: "Se jala una caja con juguetes que pesan $10\\text{ kg}$ con una fuerza de $1\\text{ N}$. ¿Cuál es el coeficiente de fricción entre la caja y el piso?",
    image: "assets/m19_caja_friccion.png",
    type: "choice",
    correct: "$$\\mu_s = \\frac{F}{W} = 0.1000$$",
    distractors: [
      "$$\\mu_s = \\frac{F}{WN} = 0.0100$$",
      "$$\\mu_s = \\frac{FN}{W} = 0.102$$",
      "$$\\mu_s = \\frac{F}{W} = 0.0102$$"
    ],
    hint: null,
    explanation: "Se calcula la relación directa entre la fuerza horizontal aplicada y el peso de los juguetes, obtenido al multiplicar su masa por la aceleración gravitacional:\n$$\\mu = \\frac{F}{W} = \\frac{1}{10} = 0.1000$$"
  },
  {
    id: "m19-q28",
    prompt: "Considerando el periodo del minutero y segundero en un reloj, ¿qué conclusión es correcta respecto a su rapidez angular?",
    type: "choice",
    correct: "La mayor rapidez angular de los valores obtenidos es la del segundero.",
    distractors: [
      "El periodo del minutero es mayor que el periodo de la manecilla de las horas.",
      "La rapidez angular del minutero es mayor que el valor de rapidez angular del segundero.",
      "El periodo del segundero es mayor que el periodo del minutero."
    ],
    hint: "La manecilla que da una vuelta completa en menor tiempo es la que gira con mayor velocidad angular ($\\\\omega = 2\\\\pi / T$).",
    explanation: "El segundero tiene el menor periodo al dar una vuelta en 60 segundos, por lo que posee la mayor rapidez angular de las manecillas."
  },
    {
    id: "m19-q29",
    prompt: "La densidad de una sustancia es de 0.525 kg/L. ¿Cuál es la conversión en miligramos por mililitro (mg/mL)?",
    type: "choice",
    correct: "525.0 mg/mL.",
    distractors: [
      "52.5 mg/mL.",
      "0.000525 mg/mL.",
      "525000.0 mg/mL."
    ],
    hint: "1 kg equivale a $10^6\\text{ mg}$ y 1 L equivale a $10^3\\text{ ml}$. Multiplica por $10^6 / 10^3 = 1000$.",
    explanation: "Realizando la conversión dimensional:\n$$\\begin{aligned} 0.525\\,\\frac{\\text{kg}}{\\text{L}} &= 0.525\\,\\frac{\\text{kg}}{\\text{L}} \\times \\frac{10^6\\text{ mg}}{1\\text{ kg}} \\times \\frac{1\\text{ L}}{10^3\\text{ mL}} \\\\[4pt] &= 0.525 \\times 10^3 \\\\[4pt] &= 525.0\\text{ mg/mL} \\end{aligned}$$"
  },

  {
    id: "m19-q30",
    prompt: "Un ventilador tiene una hélice de 40 cm de diámetro que se mueve en trayectoria circular con una rapidez angular de 648 rad/s. ¿Cuál es la velocidad lineal de la hélice del ventilador?",
    type: "choice",
    correct: "$$v = \\left(648\\frac{\\text{rad}}{\\text{s}}\\right)(0.20\\text{ m}) = 129.6\\frac{\\text{m}}{\\text{s}}$$",
    distractors: [
      "$$v = \\frac{648\\frac{\\text{rad}}{\\text{s}}}{0.4\\text{ m}} = 1620\\frac{\\text{m}}{\\text{s}}$$",
      "$$v = \\left(648\\frac{\\text{rad}}{\\text{s}}\\right)(0.40\\text{ m}) = 259.2\\frac{\\text{m}}{\\text{s}}$$",
      "$$v = \\frac{648\\frac{\\text{rad}}{\\text{s}}}{0.2\\text{ m}} = 3240\\frac{\\text{m}}{\\text{s}}$$"
    ],
    hint: "El diámetro es $40\\text{ cm}$, por lo que el radio es la mitad ($r = 20\\text{ cm} = 0.20\\text{ m}$).",
    explanation: "La relación se calcula con el radio en metros ($r = D/2 = 0.20\\text{ m}$):\n$$\\begin{aligned} v &= \\omega r \\\\[3pt] &= \\left(648\\frac{\\text{rad}}{\\text{s}}\\right)(0.20\\text{ m}) \\\\[3pt] &= 129.6\\text{ m/s} \\end{aligned}$$"
  }
];

if (typeof window !== "undefined") {
  window.moduleInfo = moduleInfo;
  window.questionBank = questionBank;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { moduleInfo, questionBank };
}
