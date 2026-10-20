/**
 * Aureka - Banco de Preguntas
 * Módulo 19: Dinámica en la Naturaleza. El Movimiento
 */

const moduleInfo = {
  badge: "Módulo 19",
  title: "Dinámica en la Naturaleza. El Movimiento",
  topicVideos: {}
};

const questionBank = [
  {
    id: "m19-q01",
    prompt: "¿Qué haces con la información que aprendes en el tema de fricción?",
    type: "choice",
    correct: "La aplicas en tu vida diaria cada vez que hay oportunidad.",
    distractors: [
      "Te gustaría aplicarla en tu vida pero no le encuentras relación.",
      "Solo la empleas en la escuela porque no le ves aplicación.",
      "La consideras parte de tus estudios, a ver si sirve algún día."
    ],
    hint: "Identifica la postura que refleja un aprendizaje significativo orientado a la aplicación cotidiana.",
    explanation: "El modelo por competencias promueve que el conocimiento adquirido se aplique de forma práctica en situaciones de la vida cotidiana."
  },
  {
    id: "m19-q02",
    prompt: "Elige la opción que completa la definición:<br><br>El movimiento ________ (llamado también movimiento circunferencial) dispone de un eje de giro y radio constante describiendo una trayectoria en forma de circunferencia. Cuando la velocidad ________ es constante se tiene el movimiento ________.",
    type: "choice",
    correct: "circular — angular — circular uniforme",
    distractors: [
      "circular uniforme — angular — armónico simple",
      "circular — tangencial — armónico simple",
      "armónico simple — centrípeta — circular uniforme"
    ],
    hint: "La trayectoria circular con rapidez de giro constante da origen al MCU.",
    explanation: "Una trayectoria circular con velocidad angular $\\omega$ constante define al movimiento circular uniforme (MCU)."
  },
  {
    id: "m19-q03",
    prompt: "Se tienen los tres vectores de fuerza siguientes:<br>$V_1$ de $25\\text{ N}$, en dirección Este, $V_2$ de $10\\text{ N}$ en dirección Oeste y $V_3$ de $-5\\text{ N}$ en dirección Este.<br>¿Cuál es el módulo del vector resultante?",
    type: "choice",
    correct: "10.0 N",
    distractors: [
      "-10.0 N",
      "22.4 N",
      "27.4 N"
    ],
    hint: "Toma el Este como positivo (+). Un vector de $-5\\text{ N}$ al Este en realidad apunta hacia el Oeste.",
    explanation: "Sumando sobre el eje horizontal con el Este positivo:\n$$\\begin{aligned} R &= 25\\text{ N} - 10\\text{ N} + (-5\\text{ N}) \\\\[2pt] &= 10.0\\text{ N} \\end{aligned}$$"
  },
  {
    id: "m19-q04",
    prompt: "Una cadena sostiene una polea que tiene un peso de $30\\text{ N}$. Si se conectan dos pesos idénticos de $80\\text{ N}$ con una cuerda que pasa por la polea, ¿cuál es la tensión en la cadena?",
    type: "choice",
    correct: "190 N",
    distractors: [
      "200 N",
      "100 N",
      "160 N"
    ],
    hint: "La cadena debe equilibrar hacia arriba tanto el peso de la polea como las dos ramas de la cuerda que sostienen las cargas.",
    explanation: "En equilibrio vertical, la cadena soporta la polea y ambos extremos de la cuerda cargada:\n$$\\begin{aligned} T &= W_{\\text{polea}} + 2W \\\\[2pt] &= 30\\text{ N} + 2(80\\text{ N}) = 190\\text{ N} \\end{aligned}$$"
  },
  {
    id: "m19-q05",
    prompt: "Cuando se dice que un vector apunta hacia el sur, ¿a qué característica vectorial se refiere?",
    type: "choice",
    correct: "Al sentido",
    distractors: [
      "A la dirección",
      "A la magnitud",
      "Al origen"
    ],
    hint: "La recta sobre la que descansa es la dirección; la punta de la flecha que indica hacia dónde va es el sentido.",
    explanation: "La recta define la dirección (eje norte-sur), mientras que la orientación específica indicada por la flecha es el <b>sentido</b> (hacia el sur)."
  },
  {
    id: "m19-q06",
    prompt: "¿Cuál es el nombre con el que se conocen los resultados de acuerdos internacionales alcanzados en las conferencias generales de pesas y medidas, en las que participan científicos de casi todos los países del mundo?",
    type: "choice",
    correct: "Patrones de medidas",
    distractors: [
      "Pesos estándares",
      "Magnitudes físicas",
      "Leyes de la física"
    ],
    hint: "Son las referencias materiales o definiciones oficiales que sirven para calibrar y unificar las unidades.",
    explanation: "Las convenciones internacionales establecen los <b>patrones de medida</b> oficiales para definir con precisión las unidades del Sistema Internacional."
  },
  {
    id: "m19-q07",
    prompt: "¿Cuál de las siguientes afirmaciones es correcta?",
    type: "choice",
    correct: "El período de un péndulo, depende de la aceleración de la gravedad.",
    distractors: [
      "El período de un péndulo, no depende de la aceleración de la gravedad.",
      "El período de oscilación de un péndulo es dependiente de su masa.",
      "El período es inversamente proporcional a la longitud del péndulo."
    ],
    hint: "Revisa la fórmula $T = 2\\pi\\sqrt{L/g}$ y nota qué variables intervienen.",
    explanation: "De acuerdo con $T = 2\\pi\\sqrt{\\frac{L}{g}}$, el período $T$ depende de la longitud $L$ y de la gravedad $g$, y es completamente independiente de la masa."
  },
  {
    id: "m19-q08",
    prompt: "¿Cuál de las opciones contiene una magnitud escalar que solo te indica la longitud recorrida?",
    type: "choice",
    correct: "Distancia",
    distractors: [
      "Desplazamiento",
      "Longitud",
      "Rapidez"
    ],
    hint: "No confundir la trayectoria escalar acumulada con el cambio vectorial de posición.",
    explanation: "La <b>distancia</b> es la longitud escalar del camino recorrido, a diferencia del desplazamiento, que es un vector que une la posición inicial con la final."
  },
  {
    id: "m19-q09",
    prompt: "Se te pide integrar un equipo para preparar una exposición donde explicarán los pasos para realizar despejes de fórmulas. Todos en el equipo se conocen bien y se llevan como amigos.<br>A cada quien asignan una actividad, en particular Andrés tiene que preparar el resumen introductorio.<br>Al terminar de asignar funciones, Andrés les pregunta: \"¿Me pueden explicar de nuevo qué me toca hacer?\".<br><br>¿Cuáles de los siguientes comentarios son aceptables que realices para contender con esta pregunta de Andrés?",
    type: "multi_select",
    correctAnswers: [
      "Tienes que preparar el resumen, basta con que sigas el ejemplo de este libro que te paso... mira aquí...",
      "En el material de ayer te entregamos una muestra. Si no la tienes búscala en tu correo electrónico.",
      "Busca en el Internet como \"resumen de ponencia\" o \"resumen de investigación\"."
    ],
    distractors: [
      "Tenía que ser Andrés, siempre preguntando lo que todos ya entendimos.",
      "¿Por qué no dejamos a Andrés que haga algo en la medida de sus capacidades?",
      "Mejor déjalo, yo lo hago, no te preocupes.",
      "¿Ni eso captas? no rebuznas porque... ¡qué bárbaro!"
    ],
    hint: "Elige las respuestas constructivas, empáticas y de apoyo pedagógico para el trabajo colaborativo.",
    explanation: "Los comentarios 2, 6 y 7 ofrecen alternativas constructivas y material de apoyo sin caer en descalificaciones ni exclusiones."
  },
  {
    id: "m19-q10",
    prompt: "Elige la opción que completa este enunciado:<br><br>La fracción de circunferencia contenida en un sector circular de radio $r$ y ángulo $\\theta$ se denomina ________ y se calcula con la expresión ________ con el ángulo en ________.",
    type: "choice",
    correct: "longitud de arco — $r\\theta$ — radianes",
    distractors: [
      "longitud de arco — $2r\\pi\\theta/360$ — radianes",
      "sector circular — $r\\pi\\theta/180$ — radianes",
      "sector circular — $2r^{2}\\theta$ — grados"
    ],
    hint: "La fórmula más directa para la longitud de arco $s$ requiere que el ángulo central esté expresado en radianes.",
    explanation: "La porción de curva es la <b>longitud de arco</b> y su relación directa es $s = r\\theta$, donde $\\theta$ debe expresarse forzosamente en radianes."
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
    prompt: "Una camioneta se desplaza $8\\text{ km}$ en línea horizontal y gira hacia el norte, en esta dirección recorre $13\\text{ km}$.<br>¿Cuál es el desplazamiento resultante del automóvil en km?",
    type: "choice",
    correct: "$$R = \\sqrt{8^{2} + 13^{2}} = 15.2$$",
    distractors: [
      "$$R = 8 + 13 = 21$$",
      "$$R = -8 + 13 = 5$$",
      "$$R = \\sqrt{8^{2} + 13^{2}} = 4.58$$"
    ],
    hint: "Los dos trayectos forman un triángulo rectángulo: aplica el teorema de Pitágoras.",
    explanation: "Al ser trayectorias perpendiculares, la magnitud del desplazamiento resultante es la hipotenusa:\n$$R = \\sqrt{8^2 + 13^2} = \\sqrt{64 + 169} = \\sqrt{233} \\approx 15.26\\text{ km}$$"
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
    prompt: "Analiza la gráfica de la función seno $y = \\text{sen }\\alpha$ y selecciona los enunciados verdaderos:<br><br>1. El período se representa con la letra N<br>2. El segmento N es recíproco de la frecuencia<br>3. El segmento P representa la amplitud<br>4. El segmento M representa la amplitud<br>5. La variación de $\\text{sen }\\alpha$ es entre 1 y -1<br>6. La variación de $\\text{sen }\\alpha$ es entre 10 y -10",
    image: "assets/m19_grafica_seno.png",
    type: "multi_select",
    correctAnswers: [
      "El período se representa con la letra N",
      "El segmento N es recíproco de la frecuencia",
      "El segmento M representa la amplitud",
      "La variación de sen α es entre 1 y -1"
    ],
    distractors: [
      "El segmento P representa la amplitud",
      "La variación de sen α es entre 10 y -10"
    ],
    hint: "N es la longitud de onda/período ($T = 1/f$), M es la cresta o amplitud desde el eje, y la función oscila en $[-1, 1]$.",
    explanation: "El período corresponde a un ciclo completo N ($T = 1/f$), la amplitud vertical es la altura M y el rango de la función seno va de $-1$ a $1$."
  },
  {
    id: "m19-q15",
    prompt: "Clasifica como Verdadero (V) o Falso (F) cada uno de los enunciados referentes a los supuestos involucrados en el modelo del movimiento rectilíneo uniforme (MRU):<br><br>1. Solo describe el movimiento de un objeto que no cambia de dirección.<br>2. La distancia, el tiempo y la velocidad son independientes entre sí.<br>3. La velocidad del movimiento siempre es constante.<br>4. La variable tiempo es independiente de cualquier factor externo.<br>5. Permite describir la caída libre de un objeto.<br>6. Permite determinar el tiempo de recorrido de una pelota que se lanza hacia arriba.",
    type: "choice",
    correct: "V, F, V, V, F, F",
    distractors: [
      "F, F, V, V, V, V",
      "C, V, V, F, V, V",
      "V, V, F, V, V, F"
    ],
    hint: "En el MRU la velocidad no cambia (no hay aceleración); la caída libre y el tiro vertical tienen aceleración de la gravedad.",
    explanation: "El MRU exige velocidad constante y trayectoria rectilínea; distancia, tiempo y rapidez están vinculados ($d = vt$), y no aplica a caída libre por tener aceleración gravitacional."
  },
  {
    id: "m19-q16",
    prompt: "Una caja de masa $M_1 = 4\\text{ kg}$, amarrada a una caja de menor masa $M_2 = 2\\text{ kg}$, es jalada con una fuerza $F_1$.<br><br>Calcula la intensidad de la fuerza $F_1$ si se logra mover a ambos bloques con una aceleración de $5\\text{ m/s}^{2}$ en la dirección de dicha fuerza.",
    image: "assets/m19_bloques_fuerza.png",
    type: "choice",
    correct: "$$F = (M_1 + M_2)a = (4 + 2)5 = 30\\text{ N}$$",
    distractors: [
      "$$F = (M_1)a = (4)5 = 20\\text{ N}$$",
      "$$F = (M_1 - M_2)a = (2)5 = 10\\text{ N}$$",
      "$$F = (M_2)a = (2)5 = 10\\text{ N}$$"
    ],
    hint: "La fuerza aplicada acelera la masa total del conjunto.",
    explanation: "Por la segunda ley de Newton aplicada al sistema completo:\n$$F = m_{\\text{total}} \\cdot a = (4\\text{ kg} + 2\\text{ kg})(5\\text{ m/s}^2) = 30\\text{ N}$$"
  },
  {
    id: "m19-q17",
    prompt: "Una partícula con movimiento circular da una vuelta completa en 3 segundos. Determina el ángulo descrito en un segundo en radianes.",
    type: "choice",
    correct: "$$\\theta = \\frac{120 \\times \\pi}{180} = 2.09\\text{ rad}$$",
    distractors: [
      "$$\\theta = \\frac{180 \\times 3}{120 \\times \\pi} = 1.43\\text{ rad}$$",
      "$$\\theta = \\frac{180}{120 \\times \\pi} = 0.474\\text{ rad}$$",
      "$$\\theta = \\frac{120 \\times 180}{360 \\times \\pi} = 19.09\\text{ rad}$$"
    ],
    hint: "En 1 segundo recorre la tercera parte de la circunferencia ($360^\\circ / 3 = 120^\\circ$): conviértelo a radianes.",
    explanation: "Una tercera parte de vuelta equivale a $120^\\circ$. Convirtiendo a radianes:\n$$\\theta = 120^\\circ \\left(\\frac{\\pi\\text{ rad}}{180^\\circ}\\right) = \\frac{2\\pi}{3} \\approx 2.09\\text{ rad}$$"
  },
  {
    id: "m19-q18",
    prompt: "Citlalli sale de su casa a tomar su clase de inglés al centro de idiomas. El trayecto lo realiza caminando y recorre $50\\text{ m/min}$ en línea recta.<br>¿A cuántos metros se encuentra el centro de idiomas al que asiste Citlalli, si el tiempo que tarda en llegar es de 9.2 minutos?",
    type: "choice",
    correct: "460",
    distractors: [
      "230",
      "59.2",
      "4232"
    ],
    hint: "Aplica la relación de velocidad constante $d = v \\cdot t$.",
    explanation: "Multiplicando la rapidez constante por el tiempo transcurrido:\n$$d = (50\\text{ m/min})(9.2\\text{ min}) = 460\\text{ m}$$"
  },
  {
    id: "m19-q19",
    prompt: "Para ir a la tienda más cercana, Diana debe caminar aproximadamente $340\\text{ m}$ por Carranza y $200\\text{ m}$ por Madero.<br>Si se asigna el origen de coordenadas en la casa de Diana, ¿cuáles de los siguientes enunciados se concluyen de la información disponible?<br><br>1. Diana caminó primero hacia el este y después hacia el norte.<br>2. Diana caminó primero hacia el norte y después hacia el este.<br>3. El vector desplazamiento se traza a $30^{\\circ}$ en dirección noroeste.<br>4. El vector desplazamiento se traza a $30^{\\circ}$ en dirección noreste.<br>5. El vector desplazamiento mide $400\\text{ m}$ aproximadamente.<br>6. El vector desplazamiento mide $540\\text{ m}$ aproximadamente.",
    image: "assets/m19_croquis_diana.png",
    type: "multi_select",
    correctAnswers: [
      "Diana caminó primero hacia el este y después hacia el norte.",
      "El vector desplazamiento se traza a 30° en dirección noreste.",
      "El vector desplazamiento mide 400 m aproximadamente."
    ],
    distractors: [
      "Diana caminó primero hacia el norte y después hacia el este.",
      "El vector desplazamiento se traza a 30° en dirección noroeste.",
      "El vector desplazamiento mide 540 m aproximadamente."
    ],
    hint: "El recorrido va a la derecha (este) y luego arriba (norte). La magnitud resultante es $\\sqrt{340^2 + 200^2} \\approx 394\\text{ m}$.",
    explanation: "Diana avanza primero al este y luego al norte (cuadrante noreste, $\\theta \\approx 30.5^\\circ$ respecto al este) con un desplazamiento total $\\sqrt{340^2 + 200^2} \\approx 394.4\\text{ m} \\approx 400\\text{ m}$."
  },
  {
    id: "m19-q20",
    prompt: "Se muestra una gráfica en la que se representan la relación altura-tiempo que realiza un globo aerostático durante su trayecto.<br>A partir de la información disponible, ¿cuál es el valor de la velocidad promedio del globo (en $\\text{m/s}$) al desplazarse de las coordenadas C a E?",
    image: "assets/m19_grafica_globo.png",
    type: "choice",
    correct: "6.0",
    distractors: [
      "12.5",
      "3.5",
      "8.0"
    ],
    hint: "Calcula la pendiente entre los puntos $C(2, 4)$ y $E(4, 16)$: $v = \\frac{\\Delta d}{\\Delta t}$.",
    explanation: "La velocidad promedio es la razón de cambio entre los puntos C y E:\n$$v_m = \\frac{16\\text{ m} - 4\\text{ m}}{4\\text{ s} - 2\\text{ s}} = \\frac{12}{2} = 6.0\\text{ m/s}$$"
  },
  {
    id: "m19-q21",
    prompt: "Una pelota se deja caer desde la parte más alta de un edificio y tarda 7 segundos en llegar al nivel del piso.<br>¿Cuál es la altura del edificio en metros?<br>Información física: La aceleración de la gravedad $g = 9.81\\text{ m/s}^{2}$.",
    type: "choice",
    correct: "240",
    distractors: [
      "137",
      "343",
      "480"
    ],
    hint: "En caída libre partiendo del reposo, $h = \\frac{1}{2}gt^2$.",
    explanation: "Aplicando la ecuación de caída libre:\n$$h = \\frac{1}{2}(9.81)(7)^2 = \\frac{1}{2}(9.81)(49) \\approx 240.3\\text{ m}$$"
  },
  {
    id: "m19-q22",
    prompt: "Se tienen tres vectores en un mismo plano, cuyas magnitudes son las siguientes:<br>$V_1$ de $50\\text{ N}$, en dirección Este<br>$V_2$ de $20\\text{ N}$ en dirección Oeste<br>$V_3$ de $-5\\text{ N}$ en dirección Este.<br>¿Cuál es la resultante de estos vectores en N en la dirección Este?",
    type: "choice",
    correct: "$$R = 50 - 20 - 5 = 25$$",
    distractors: [
      "$$R = 50 + 20 - 5 = 65$$",
      "$$R = \\sqrt{(50)^{2} + (20)^{2} + (-5)^{2}} = 53.6$$",
      "$$R = \\sqrt{(50)^{2} + (20)^{2} + (-5)^{2}} = 54.1$$"
    ],
    hint: "Al ser colineales, los vectores hacia el oeste o con signo negativo en dirección este se restan algebraicamente.",
    explanation: "Sumando algebraicamente con sentido positivo hacia el Este:\n$$R = 50\\text{ N} - 20\\text{ N} - 5\\text{ N} = 25\\text{ N}$$"
  },
  {
    id: "m19-q23",
    prompt: "El libro del Módulo \"Dinámica en la naturaleza: el movimiento\" sugiere trabajar con el software GeoGebra, en el cual se construyó esta figura. ¿Cuáles son las coordenadas de los puntos Q, R, T, U?",
    image: "assets/m19_geogebra_puntos.png",
    type: "choice",
    correct: "$$Q(-1.5,-1) \\quad R(-3.5,-1.5) \\quad T(-5.5,-2) \\quad U(-4,3)$$",
    distractors: [
      "$$Q(-1,-1.5) \\quad R(-1.5,-3.5) \\quad T(-2,-5.5) \\quad U(3,-4)$$",
      "$$Q(2,-3) \\quad R(-3.5,3.5) \\quad T(-5,-2) \\quad U(3,3.5)$$",
      "$$Q(-3,2) \\quad R(-3.5,-3.5) \\quad T(-2,-5) \\quad U(2.5,4)$$"
    ],
    hint: "Lee primero el eje horizontal (x) y después el eje vertical (y) de cada punto.",
    explanation: "Revisando el plano cartesiano en GeoGebra, el orden de cada par $(x,y)$ es $Q(-1.5, -1)$, $R(-3.5, -1.5)$, $T(-5.5, -2)$ y $U(-4, 3)$."
  },
  {
    id: "m19-q24",
    prompt: "Analiza la siguiente imagen que representa una grúa sosteniendo una pila de bloques de concreto y las diferentes fuerzas que se ejercen sobre ambos objetos.<br>¿Qué se concluye a partir de la información disponible?<br><br>1. $F_2$ es la fuerza de atracción que la tierra ejerce sobre los bloques.<br>2. $F_3$ es la fuerza normal entre los bloques y la grúa.<br>3. La reacción de la grúa $F_1$ es igual al peso de los bloques.<br>4. $F_4$ es la fuerza de atracción o gravedad.<br>5. La fuerza de contacto $F_1$ es igual en magnitud al peso de los bloques.",
    image: "assets/m19_grua_fuerzas.png",
    type: "multi_select",
    correctAnswers: [
      "F2 es la fuerza de atracción que la tierra ejerce sobre los bloques.",
      "La reacción de la grúa F1 es igual al peso de los bloques.",
      "La fuerza de contacto F1 es igual en magnitud al peso de los bloques."
    ],
    distractors: [
      "F3 es la fuerza normal entre los bloques y la grúa.",
      "F4 es la fuerza de atracción o gravedad."
    ],
    hint: "F2 es el peso hacia el centro de la Tierra; F1 equilibra verticalmente todo el peso sostenido.",
    explanation: "F2 representa el peso (fuerza gravitacional terrestre) y F1 equilibra el peso de la carga tanto en reacción como en magnitud de soporte estático."
  },
  {
    id: "m19-q25",
    prompt: "Francisco arranca su automóvil con una aceleración constante de $5\\text{ m/s}^{2}$. ¿Qué velocidad $v$ tendrá a los 30 segundos de haber iniciado el movimiento? ¿Cuál es la distancia $d$ que habrá recorrido en ese tiempo?",
    type: "choice",
    correct: "$$v_f = 5 \\times 30 = 150\\text{ m/s} \\quad ; \\quad d = \\frac{5 \\times 30^{2}}{2} = 2250\\text{ m}$$",
    distractors: [
      "$$v_f = 5 \\times 30 = 150\\text{ m/s} \\quad ; \\quad d = 5 \\times 30^{2} = 4500\\text{ m}$$",
      "$$v_f = 5 \\times 30^{2} = 4500\\text{ m/s} \\quad ; \\quad d = \\frac{5 \\times 30^{2}}{2} = 2250\\text{ m}$$",
      "$$v_f = 5 \\times 30^{2} = 4500\\text{ m/s} \\quad ; \\quad d = 5 \\times 30 = 150\\text{ m}$$"
    ],
    hint: "Al partir del reposo ($v_0 = 0$): $v_f = a \\cdot t$ y $d = \\frac{1}{2}at^2$.",
    explanation: "Aplicando las fórmulas de aceleración constante:\n$$\\begin{aligned} v_f &= a \\cdot t = (5)(30) = 150\\text{ m/s} \\\\[4pt] d &= \\frac{1}{2}at^2 = \\frac{5(900)}{2} = 2250\\text{ m} \\end{aligned}$$"
  },
  {
    id: "m19-q26",
    prompt: "Las ruedas de una bicicleta tienen 30 rayos distribuidos uniformemente. ¿Cuánto mide el ángulo entre cada uno de los rayos en grados y en radianes?",
    type: "choice",
    correct: "$$\\frac{360^{\\circ}}{30} = 12^{\\circ} \\implies 12^{\\circ}\\left(\\frac{\\pi\\text{ rad}}{180^{\\circ}}\\right) = \\frac{\\pi\\text{ rad}}{15}$$",
    distractors: [
      "$$\\frac{180^{\\circ}}{30} = 6^{\\circ} \\implies 6^{\\circ}\\left(\\frac{\\pi\\text{ rad}}{180^{\\circ}}\\right) = \\frac{\\pi\\text{ rad}}{30}$$",
      "$$\\frac{30}{360} = 0.083^{\\circ} \\implies 0.083^{\\circ}\\left(\\frac{2\\pi\\text{ rad}}{360^{\\circ}}\\right) = 2.89 \\times 10^{-3}\\text{ rad}$$",
      "$$\\frac{30}{180} = 0.16^{\\circ} \\implies 0.16^{\\circ}\\left(\\frac{2\\pi\\text{ rad}}{180^{\\circ}}\\right) = 1.1 \\times 10^{-2}\\text{ rad}$$"
    ],
    hint: "Divide el círculo completo ($360^\\circ$) entre los 30 sectores y simplifica la fracción en radianes.",
    explanation: "Cada división mide $360^\\circ / 30 = 12^\\circ$. Convirtiendo a radianes:\n$$12^\\circ \\left(\\frac{\\pi}{180^\\circ}\\right) = \\frac{12\\pi}{180} = \\frac{\\pi}{15}\\text{ rad}$$"
  },
  {
    id: "m19-q27",
    prompt: "Miguel jala la caja con sus juguetes cuyo peso es de $10\\text{ kg}$ y la fuerza que ejerce es de $1\\text{ N}$, ¿cuánto vale el coeficiente de fricción entre la caja y el piso?",
    image: "assets/m19_caja_friccion.png",
    type: "choice",
    correct: "$$\\mu_s = \\frac{F}{W} = 0.1000$$",
    distractors: [
      "$$\\mu_s = \\frac{F}{WN} = 0.0100$$",
      "$$\\mu_s = \\frac{FN}{W} = 0.102$$",
      "$$\\mu_s = \\frac{F}{W} = 0.0102$$"
    ],
    hint: "El examen asume directamente el cociente $\\mu = F / W$ usando los valores numéricos dados (1 / 10).",
    explanation: "El modelo del examen calcula la relación directa entre la fuerza horizontal aplicada y el peso reportado en el enunciado:\n$$\\mu = \\frac{F}{W} = \\frac{1}{10} = 0.1000$$"
  },
  {
    id: "m19-q28",
    prompt: "La maestra Margarita aborda el tema de rapidez angular en clase y los alumnos calculan el período del minutero, el segundero y la manecilla de las horas de un reloj de pared. Posteriormente, con estos datos deben calcular la rapidez angular del segundero y del minutero.<br><br>Conforme a los cálculos que deben realizarse, ¿cuál de las siguientes conclusiones es verdadera?",
    image: "assets/m19_caso_reloj.png",
    type: "choice",
    correct: "La mayor rapidez angular de los valores obtenidos es la del segundero.",
    distractors: [
      "El periodo del minutero es mayor que el periodo de la manecilla de las horas.",
      "La rapidez angular del minutero es mayor que el valor de rapidez angular del segundero.",
      "El periodo del segundero es mayor que el periodo del minutero."
    ],
    hint: "La manecilla que da una vuelta completa en menor tiempo es la que gira con mayor velocidad angular ($\\\\omega = 2\\\\pi / T$).",
    explanation: "El segundero tiene el menor período ($T = 60\\text{ s}$), por lo que al ser $\\omega = \\frac{2\\pi}{T}$, posee la mayor rapidez angular de todas las manecillas."
  },
  {
    id: "m19-q29",
    prompt: "La densidad de una sustancia es de $0.525\\text{ kg/L}$. ¿A cuánto equivale este valor en $\\text{mg/ml}$?",
    type: "choice",
    correct: "525.0",
    distractors: [
      "52.5",
      "0.000525",
      "525000.0"
    ],
    hint: "1 kg equivale a $10^6\\text{ mg}$ y 1 L equivale a $10^3\\text{ ml}$. Multiplica por $10^6 / 10^3 = 1000$.",
    explanation: "Efectuando el análisis de conversión dimensional:\n$$0.525\\frac{\\text{kg}}{\\text{L}} \\times \\frac{10^6\\text{ mg}}{1\\text{ kg}} \\times \\frac{1\\text{ L}}{10^3\\text{ ml}} = 0.525 \\times 10^3 = 525.0\\text{ mg/ml}$$"
  },
  {
    id: "m19-q30",
    prompt: "Un ventilador tiene una hélice de $40\\text{ cm}$ de diámetro que se mueve en trayectoria circular con una rapidez angular de $648\\text{ rad/s}$. ¿Cuál es la velocidad lineal de la hélice del ventilador?",
    type: "choice",
    correct: "$$v = \\left(648\\frac{\\text{rad}}{\\text{s}}\\right)(0.20\\text{ m}) = 129.6\\frac{\\text{m}}{\\text{s}}$$",
    distractors: [
      "$$v = \\frac{648\\frac{\\text{rad}}{\\text{s}}}{0.4\\text{ m}} = 1620\\frac{\\text{m}}{\\text{s}}$$",
      "$$v = \\left(648\\frac{\\text{rad}}{\\text{s}}\\right)(0.40\\text{ m}) = 259.2\\frac{\\text{m}}{\\text{s}}$$",
      "$$v = \\frac{648\\frac{\\text{rad}}{\\text{s}}}{0.2\\text{ m}} = 3240\\frac{\\text{m}}{\\text{s}}$$"
    ],
    hint: "Cuidado: el diámetro es $40\\text{ cm}$, por lo que el radio es la mitad ($r = 20\\text{ cm} = 0.20\\text{ m}$).",
    explanation: "La relación lineal-angular se calcula con el radio ($r = D/2 = 0.20\\text{ m}$):\n$$v = \\omega r = \\left(648\\frac{\\text{rad}}{\\text{s}}\\right)(0.20\\text{ m}) = 129.6\\text{ m/s}$$"
  }
];

if (typeof window !== "undefined") {
  window.moduleInfo = moduleInfo;
  window.questionBank = questionBank;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { moduleInfo, questionBank };
}
