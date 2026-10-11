/**
 * Aureka - Banco de Preguntas
 * Módulo 20: Optimización en Sistemas Naturales y Sociales
 */

const moduleInfo = {
  badge: "Módulo 20",
  title: "Ciencias Ambientales I",
  topicVideos: {}
};

const questionBank = [
  {
    id: "m20-q01",
    prompt: "¿Cuál es el principal factor de amenaza para los ecosistemas de México?",
    type: "choice",
    correct: "El crecimiento poblacional.",
    distractors: [
      "La tala de bosques para obtener madera.",
      "La construcción de viviendas.",
      "La extracción de materia prima para la industria."
    ],
    hint: "Piensa en el factor demográfico raíz que demanda más recursos, espacio y energía.",
    explanation: "El crecimiento poblacional es el factor principal que presiona a los ecosistemas: demanda más suelo, agua, alimentos y energía, desencadenando los demás problemas ambientales."
  },
  {
    id: "m20-q03",
    prompt: "¿Cuáles de las siguientes se clasifican como actividades productivas secundarias?",
    type: "multi_select",
    correctAnswers: [
      "Construcción.",
      "Minería."
    ],
    distractors: [
      "Ganadería.",
      "Avicultura.",
      "Transporte."
    ],
    hint: "Las actividades secundarias involucran la transformación y el aprovechamiento de recursos no renovables dentro de este rubro.",
    explanation: "La construcción y la minería se agrupan en las actividades secundarias pues generan productos. La ganadería y la avicultura pertenecen al sector primario al extraer recursos directos, mientras que el transporte corresponde al sector terciario al ofrecer servicios."
  },
  {
    id: "m20-q04",
    prompt: "¿Cuál es el tipo de migración que ocurre a raíz de fenómenos como sismos, inundaciones o huracanes?",
    type: "choice",
    correct: "Naturales.",
    distractors: [
      "Personales.",
      "Económicas.",
      "Humanas."
    ],
    hint: "Sismos, inundaciones y huracanes pertenecen a fenómenos naturales.",
    explanation: "Los desplazamientos forzados o motivados por sismos, inundaciones, huracanes y sequías corresponden a causas naturales de la migración."
  },
  {
    id: "m20-q05",
    prompt: "Completa el siguiente enunciado:",
    type: "fill_blanks",
    sentence: "La existencia de fábricas que desechan productos químicos sólidos y efluentes líquidos de forma no controlada se clasifica dentro de los factores de {0} al tratarse de actividades humanas {1} que producen residuos industriales que contaminan principalmente {2}.",
    correctOrder: [
      "vulnerabilidad",
      "fuera de normatividad",
      "suelos y aguas"
    ],
    distractors: [
      "desastre ecológico",
      "legales",
      "autorizadas legalmente",
      "sin normatividad",
      "las áreas rurales",
      "las zonas urbanas",
      "la atmósfera"
    ],
    hint: "Las emisiones no reguladas incrementan el riesgo ambiental e impactan directamente la tierra y los mantos acuíferos.",
    explanation: "El mal manejo de desechos químicos representa una vulnerabilidad ecológica derivada de actividades industriales fuera de normatividad que dañan prioritariamente suelos y aguas."
  },
  {
    id: "m20-q06",
    prompt: "Relaciona las actividades económicas con sus características:",
    type: "match_columns",
    pairs: [
      { left: "Primarias", right: "Buscan el aprovechamiento directo de los recursos naturales renovables." },
      { left: "Secundarias", right: "Buscan el aprovechamiento directo de recursos naturales no renovables." },
      { left: "Terciarias", right: "Satisfacen las necesidades que el hombre tiene de realizarse y/o divertirse." }
    ],
    hint: null,
    explanation: "Las actividades primarias aprovechan recursos naturales renovables, las secundarias se vinculan a los no renovables o su transformación y las terciarias cubren servicios, realización y esparcimiento."
  },
  {
    id: "m20-q07",
    prompt: "Completa el siguiente enunciado:",
    type: "fill_blanks",
    sentence: "La población {0} está formada por las personas mayores de 12 años que realizan trabajos por los cuales reciben una remuneración.",
    correctOrder: [
      "económicamente activa"
    ],
    distractors: [
      "económicamente inactiva",
      "urbana",
      "rural"
    ],
    hint: "Se abrevia comúnmente como PEA.",
    explanation: "La población económicamente activa (PEA) comprende a las personas en edad de laborar (mayores de 12 años) que realizan actividades productivas a cambio de una remuneración."
  },
  {
    id: "m20-q08",
    prompt: "Ordena las fases del proceso de investigación:",
    type: "drag_order",
    correctOrder: [
      "Delimitación del tema.",
      "Marco teórico.",
      "Hipótesis.",
      "Comprobación.",
      "Conclusiones."
    ],
    hint: "Primero se define y acota el problema; después se busca la teoría de respaldo, se formula la respuesta tentativa, se prueba y finalmente se cierra el reporte.",
    explanation: "El orden metodológico inicia delimitando el tema, luego revisa el marco teórico, formula la hipótesis, la comprueba con evidencia y concluye."
  },
  {
    id: "m20-q09",
    prompt: "¿Qué fenómeno ocurre cuando se tiene una muy alta concentración de gases que quedan atrapados en la tropósfera generando un incremento en la temperatura en la Tierra?",
    type: "choice",
    correct: "Efecto invernadero.",
    distractors: [
      "Cambio climático.",
      "Evaporación.",
      "Contaminación ambiental."
    ],
    hint: "Es el mecanismo físico concreto de retención de calor atmosférico en la tropósfera.",
    explanation: "El efecto invernadero es el fenómeno térmico específico donde los gases atrapan radiación infrarroja en la tropósfera, calentando la superficie planetaria."
  },
  {
    id: "m20-q10",
    prompt: "¿Por qué se ha presentado principalmente el aumento de la temperatura de la Tierra?",
    type: "choice",
    correct: "Por el cambio climático.",
    distractors: [
      "Por el fenómeno del Niño.",
      "Por la radiación solar.",
      "Por la actividad volcánica."
    ],
    hint: "Es la alteración global del sistema climático atribuible directa e indirectamente a la actividad humana.",
    explanation: "El incremento sostenido en las anomalías de temperatura global es la manifestación central del cambio climático contemporáneo."
  },
  {
    id: "m20-q11",
    prompt: "¿Qué causas inciden principalmente en la migración actual?",
    type: "choice",
    correct: "Económicas: las personas abandonan los lugares con pocas posibilidades de vida.",
    distractors: [
      "Físicas: los terremotos y erupciones volcánicas propician cambios de residencia.",
      "Sanitarias: las plagas inducen enfermedades y arruinan los cultivos, motivando cambios de residencia.",
      "Naturales: las sequías, inundaciones y otros fenómenos son motivo de movimientos migratorios."
    ],
    hint: "La falta de empleo, salarios bajos y búsqueda de mejores condiciones materiales constituyen el mayor motor actual.",
    explanation: "A nivel global, la búsqueda de empleo, mejores ingresos y oportunidades materiales (factores económicos) explican la gran mayoría de los flujos migratorios actuales."
  },
  {
    id: "m20-q12",
    prompt: "Selecciona todas las afirmaciones correctas al observar la gráfica.",
    image: "assets/m20_pibc_barras.png",
    type: "multi_select",
    correctAnswers: [
      "La diferencia entre el país más alto y el más bajo es del orden de 10,000 dólares."
    ],
    distractors: [
      "Los países con mayor PIBC son los países nórdicos.",
      "Dinamarca tiene un PIBC del 50% del PIBC de Luxemburgo.",
      "Luxemburgo es el país más poblado.",
      "Dinamarca y Noruega son los países menos poblados."
    ],
    hint: "Compara el valor de la barra más alta con la más baja y revisa la diferencia numérica entre ambos.",
    explanation: "Revisando cada afirmación a partir de la gráfica:\n<ul class=\"list-disc pl-5 space-y-1 mt-1\">\n  <li>Luxemburgo ronda los 43,000 dólares y Dinamarca cerca de 33,000, por lo que la diferencia entre el más alto y el más bajo es de aproximadamente 10,000 dólares.</li>\n  <li>Los dos países con mayor PIBC son Luxemburgo y Suiza, los cuales no son países nórdicos.</li>\n  <li>El PIBC de Dinamarca representa más del 75% del de Luxemburgo, lejos de ser solo el 50%.</li>\n  <li>El PIB per cápita mide el ingreso promedio por habitante, por lo que no permite determinar si un país tiene más o menos población total.</li>\n</ul>"
  },
  {
    id: "m20-q13",
    prompt: "La hoja de cálculo presenta los precios semanales del café de Veracruz aproximados por la función:<br><br>$${\\small y = -0.3x^3 - 0.3x^2 + 0.8x + 0.8}$$<br>Determina en qué punto cambia la concavidad de la curva.",
    image: "assets/m20_grafica_cafe.png",
    type: "choice",
    correct: "$$y'' = -1.8x - 0.6 = 0$$<br>$$x = -0.333$$",
    distractors: [
      "$$y'' = 1.8x - 0.6 = 0$$<br>$$x = 0.333$$",
      "$$y'' = -0.9x - 0.6 = 0$$<br>$$x = 0.666$$",
      "$$y'' = -0.9x^2 - 0.6x + 0.8 = 0$$<br>$$x = -1.333$$"
    ],
    hint: "El cambio de concavidad se halla igualando la segunda derivada a cero ($y'' = 0$).",
    explanation: "Obtenemos la segunda derivada e igualamos a cero:\n$$\\begin{aligned} y' &= -0.9x^2 - 0.6x + 0.8 \\\\[4pt] y'' &= -1.8x - 0.6 = 0 \\\\[4pt] -1.8x &= 0.6 \\\\[4pt] x &= -\\frac{0.6}{1.8} \\approx -0.333 \\end{aligned}$$"
  },
  {
    id: "m20-q14",
    prompt: "Se desarrolla un proyecto de investigación sobre las causas de escasez de agua en una comunidad, planteando que esto ocurre porque no se tiene una cultura de optimización del agua. ¿A qué etapa del proceso de investigación corresponde el planteamiento?",
    type: "choice",
    correct: "Hipótesis, porque es una proposición tentativa que puede explicar el problema.",
    distractors: [
      "Justificación, porque se establece el impacto negativo del desabasto de agua.",
      "Hipótesis, debido a que se establece un objetivo para solucionar el problema.",
      "Justificación, porque establece el motivo del desabasto de agua en su comunidad."
    ],
    hint: "Es una respuesta o explicación provisional que debe ser contrastada empíricamente.",
    explanation: "Una hipótesis es una afirmación o respuesta tentativa planteada al inicio de la indagación para explicar la causa de un fenómeno."
  },
  {
    id: "m20-q15",
    prompt: "¿Qué ley mexicana contempla el establecimiento de ordenamientos ecológicos?",
    type: "choice",
    correct: "Ley General del Equilibrio Ecológico y Protección al Medio Ambiente.",
    distractors: [
      "Ley Agraria Reglamentaria del Artículo 27 Constitucional.",
      "Ley General de Desarrollo Forestal Sostenible.",
      "Ley General de Asentamientos Humanos."
    ],
    hint: null,
    explanation: "La Ley General del Equilibrio Ecológico y Protección al Medio Ambiente es el instrumento legal que norma el ordenamiento ecológico del territorio en México."
  },
  {
    id: "m20-q16",
    prompt: "Una empresa realiza una investigación aplicando encuestas entre sus usuarios para realizar los cambios acordes a las expectativas del público. ¿A qué etapa del proceso de investigación corresponde esta acción?",
    type: "choice",
    correct: "Recolección de datos por instrumento de encuesta para conocer las opiniones del auditorio.",
    distractors: [
      "Recolección de datos para tomar decisiones con respecto a las preferencias de los espectadores.",
      "Selección de la muestra para conocer el número total de encuestas que se van a aplicar.",
      "Selección de la muestra conforme al horario y el público a quien va dirigido el producto."
    ],
    hint: "El acto de aplicar encuestas en campo es la fase para obtener información del proceso investigativo.",
    explanation: "Aplicar encuestas es parte de la etapa de recolección de datos una vez que ya se seleccionó la muestra."
  },
  {
    id: "m20-q17",
    prompt: "¿Qué tipo de variable es la temperatura?",
    type: "choice",
    correct: "Cuantitativa continua, pues toma valores reales en el rango.",
    distractors: [
      "Cualitativa discreta, pues permite definir intervalos de calor.",
      "Cualitativa ordinal, porque sus valores indican grados de calor.",
      "Cuantitativa discreta, porque toma valores enteros en el rango."
    ],
    hint: "Se mide numéricamente y puede adoptar cualquier valor decimal dentro de una escala continua.",
    explanation: "La temperatura es cuantitativa (numérica) y continua porque puede asumir cualquier número real, es decir, puede ser un valor entero, decimal y/o negativo."
  },
  {
    id: "m20-q18",
    prompt: "Relaciona los artículos constitucionales con su contenido de protección ambiental.",
    type: "match_columns",
    pairs: [
      { left: "Artículo 3°", right: "Establece el derecho a recibir educación que incluya el aprovechamiento y cuidado de los recursos naturales." },
      { left: "Artículo 4°", right: "Señala el derecho a que toda persona disfrute de un ambiente adecuado para su desarrollo y bienestar." },
      { left: "Artículo 25°", right: "Obliga al Estado a apoyar empresas cuidando siempre el medio ambiente." }
    ],
    hint: null,
    explanation: "El artículo 3° integra la preservación ambiental en los planes educativos; el 4° consagra el derecho humano a un medio ambiente sano; y el 25° obliga a que la rectoría del desarrollo económico cuide el entorno."
  },
  {
    id: "m20-q19",
    prompt: "Selecciona todas las afirmaciones correctas respecto al ciclo hidrológico mostrado en la imagen.",
    image: "assets/m20_cicloagua.png",
    type: "multi_select",
    correctAnswers: [
      "En la fase <b>3</b> se realiza una condensación.",
      "Las fases <b>2</b> y <b>6</b> son de evaporación.",
      "La fase <b>5</b> representa una precipitación.",
      "En la fase <b>1</b> es el inicio del ciclo hidrológico."
    ],
    distractors: [
      "Las fases <b>3</b> y <b>6</b> son de evaporación.",
      "En las fases <b>2</b> y <b>4</b> ocurre una sublimación."
    ],
    hint: "Identifica qué proceso físico ocurre en cada etapa: formación de nubes (condensación), ascenso de vapor (evaporación) y caída de lluvia (precipitación).",
    explanation: "Revisando el diagrama:\n<ul class=\"list-disc pl-5 space-y-1 mt-1\">\n  <li>En la fase <b>1</b> comienza el ciclo con el agua acumulada en los océanos; las fases <b>2</b> y <b>6</b> corresponden al paso del agua líquida a vapor (evaporación); en la fase <b>3</b> el vapor se enfría formando nubes (condensación); y en la fase <b>5</b> el agua cae a la superficie (precipitación).</li>\n  <li>La fase <b>3</b> es condensación, no evaporación; y la fase <b>2</b> es evaporación, por lo que no corresponde a sublimación.</li>\n</ul>"
  },
  {
    id: "m20-q20a",
    prompt: "El trióxido de azufre ($\\text{SO}_3$) y el agua ($\\text{H}_2\\text{O}$) reaccionan para formar ácido sulfúrico ($\\text{H}_2\\text{SO}_4$). ¿Cuál de las siguientes opciones representa la ecuación química balanceada correctamente?",
    type: "choice",
    correct: "$$2\\text{SO}_3 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{SO}_4$$",
    distractors: [
      "$$2\\text{SO}_3 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{SO}_4 + \\text{H}_2$$",
      "$$2\\text{SO}_3 + 3\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_3\\text{SO}_4$$",
      "$$2\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{S} + 4\\text{O}_2$$"
    ],
    hint: "Cuenta el número de átomos de cada elemento en reactivos y productos: debe haber la misma cantidad de azufre (S), hidrógeno (H) y oxígeno (O) en ambos lados.",
    explanation: "Contando los átomos en reactivos y productos comprobamos el balance:\n$$\\begin{aligned} \\text{Azufre (S):} &\\quad 2 = 2 \\\\[4pt] \\text{Hidrógeno (H):} &\\quad 2(2) = 2(2) = 4 \\\\[4pt] \\text{Oxígeno (O):} &\\quad 2(3) + 2(1) = 8 \\end{aligned}$$\nAmbos miembros conservan la misma cantidad exacta de materia sin generar subproductos adicionales."
  },
  {
    id: "m20-q20b",
    prompt: "Considerando la formación de ácido sulfúrico a partir de trióxido de azufre y agua ($2\\text{SO}_3 + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{H}_2\\text{SO}_4$), ¿qué tipo de reacción química es y cuál es su estructura general?",
    type: "choice",
    correct: "Reacción de síntesis: $\\text{A} + \\text{B} \\rightarrow \\text{AB}$",
    distractors: [
      "Reacción de descomposición: $\\text{AB} \\rightarrow \\text{A} + \\text{B}$",
      "Reacción de sustitución simple: $\\text{AB} + \\text{C} \\rightarrow \\text{AC} + \\text{B}$",
      "Reacción de sustitución doble: $\\text{AB} + \\text{CD} \\rightarrow \\text{AD} + \\text{CB}$"
    ],
    hint: "Dos sustancias independientes se unen para dar origen a un único compuesto final.",
    explanation: "Dado que dos compuestos se combinan directamente para formar una sola sustancia resultante, el proceso corresponde a una reacción de <b>síntesis</b> de la forma $\\text{A} + \\text{B} \\rightarrow \\text{AB}$."
  },
  {
    id: "m20-q21",
    prompt: "Selecciona todas las funciones del marco teórico en un proyecto de investigación:",
    type: "multi_select",
    correctAnswers: [
      "Delimitar el tema a través de antecedentes del problema.",
      "Sustentar el trabajo con bibliografías que den solidez a la investigación.",
      "Analizar e interpretar datos, investigaciones y teorías."
    ],
    distractors: [
      "Establecer el impacto o beneficio que tendrá el proyecto.",
      "Establecer la meta que se pretende lograr."
    ],
    hint: "El impacto corresponde a la justificación y las metas pertenecen a los objetivos; descarta ambas.",
    explanation: "El marco teórico cumple con revisar antecedentes para <b>delimitar</b> el tema, <b>sustentar</b> la investigación con fuentes bibliográficas y <b>analizar</b> las teorías existentes. Establecer el beneficio o impacto es propio de la justificación, mientras que las metas corresponden al planteamiento de objetivos."
  },
  {
    id: "m20-q22",
    prompt: "En una escuela se numeran 150 estudiantes y se sortean 30 números al azar para integrar una muestra. ¿Qué tipo de muestreo se realizó?",
    type: "choice",
    correct: "Aleatorio simple, pues cada alumno tuvo la misma oportunidad de salir en el sorteo.",
    distractors: [
      "Aleatorio sistemático debido a que la población total se dividió en clases homogéneas.",
      "Aleatorio simple, porque se realizó una división de clases con características idénticas.",
      "Aleatorio sistemático debido a que se elige uno de ellos al azar y se eligen todos los demás hasta completar la muestra."
    ],
    hint: "Si la selección es mediante sorteo o rifa, todos los individuos poseen idéntica probabilidad de ser elegidos.",
    explanation: "Se tiene un muestreo aleatorio simple cuando cada elemento de la población posee exactamente la misma probabilidad de ser elegido."
  },
  {
    id: "m20-q23",
    prompt: "¿Cuál de las siguientes es una conclusión correcta a partir de la gráfica?",
    image: "assets/m20_usodeagua.png",
    type: "choice",
    correct: "La producción agrícola requiere utilizar mayor cantidad de agua que la industrial.",
    distractors: [
      "El consumo de agua por la industria es mayor que la destinada al riego agrícola.",
      "La ganadería requiere una mayor cantidad de agua que la producción agrícola.",
      "El total de agua consumida por la agricultura ha ido en ascenso en todo el período."
    ],
    hint: "Compara la posición de la línea de productos agrícolas frente a la de productos industriales.",
    explanation: "En la gráfica, la línea de productos agrícolas se mantiene entre 10,000 y más de 15,000 unidades, superando a la línea industrial, que permanece en el fondo por debajo de 5,000 a lo largo de todo el periodo."
  },
  {
    id: "m20-q24",
    prompt: "¿Cuál de los siguientes NO es un efecto del cambio climático en la calidad del agua?",
    type: "choice",
    correct: "Conservación de las zonas de biodiversidad.",
    distractors: [
      "Incremento de enfermedades en humanos y animales.",
      "Disminución de tamaño de los glaciares.",
      "Aumento de la evaporación del agua superficial."
    ],
    hint: "Busca la afirmación positiva; el cambio climático degrada los ecosistemas, no los protege.",
    explanation: "El cambio climático deteriora y fragmenta los hábitats acuáticos; por ende, conservar la biodiversidad no es una consecuencia de dicho impacto ambiental."
  },
  {
    id: "m20-q25",
    prompt: "¿Cuál de las siguientes es una conclusión correcta a partir de la gráfica?",
    image: "assets/m20_censo.png",
    type: "choice",
    correct: "La población masculina entre 30 y 34 años es mayor que la cantidad de hombres entre 35 y 39 años.",
    distractors: [
      "Existe igual cantidad de hombres entre 10 y 14 años que los de 15 a 19 años.",
      "La cantidad de mujeres entre 40 y 44 años es de 3 millones.",
      "El total de niños menores de 4 años es de 5 millones."
    ],
    hint: "Observa las barras horizontales azules del lado izquierdo en los grupos de edad de 30 a 39 años.",
    explanation: "Al comparar las barras del lado izquierdo (hombres), la barra de 30 a 34 años se extiende más hacia la izquierda que la barra de 35 a 39 años."
  },
  {
    id: "m20-q26",
    prompt: "¿Cuál de las siguientes es una conclusión correcta a partir de la gráfica?",
    image: "assets/m20_agua_mexico.png",
    type: "choice",
    correct: "En zonas con mayor disponibilidad de agua, la población es menor y genera poca riqueza.",
    distractors: [
      "La zona sureste tiene una menor disponibilidad de agua que la zona norte-centro-noroeste.",
      "Las zonas con mayor disponibilidad de agua generan la mayor riqueza a nivel nacional.",
      "La zona norte-centro-noroeste es la menos productiva de todas las zonas nacionales."
    ],
    hint: "El sureste concentra el 69% del agua, pero apenas alberga al 23% de la población y produce el 13% del PIB.",
    explanation: "El resumen hidrológico del mapa muestra que el sureste tiene el 69% del agua disponible, pero concentra poca población (23%) y genera baja aportación al PIB (13%)."
  },
  {
    id: "m20-q27",
    prompt: "¿Cuál de las siguientes es una conclusión correcta a partir de la gráfica?",
    image: "assets/m20_sectores_economicos.png",
    type: "choice",
    correct: "El incremento del sector terciario inició a partir de 1960.",
    distractors: [
      "Los sectores primario y secundario eran iguales en 1900.",
      "El sector secundario se ha mantenido estable.",
      "El sector primario está en descenso en todo el periodo."
    ],
    hint: "Busca el punto de inflexión donde la curva amarilla experimenta una pendiente ascendente pronunciada.",
    explanation: "La línea del sector terciario se dispara marcadamente hacia arriba a partir de la década de 1960."
  },
  {
    id: "m20-q28",
    prompt: "Ordena cronológicamente los elementos de un reporte formal de investigación:",
    type: "drag_order",
    correctOrder: [
      "Introducción.",
      "Contexto.",
      "Metodología.",
      "Hipótesis.",
      "Resultados.",
      "Conclusiones.",
      "Bibliografía."
    ],
    hint: null,
    explanation: "La estructura formal del reporte de investigación sigue este orden:\n<ol class=\"list-decimal pl-5 space-y-1 mt-1\">\n  <li>Introducción.</li>\n  <li>Contexto.</li>\n  <li>Metodología.</li>\n  <li>Hipótesis.</li>\n  <li>Resultados.</li>\n  <li>Conclusiones.</li>\n  <li>Bibliografía.</li>\n</ol>"
  },
  {
    id: "m20-q29",
    prompt: "¿Cuáles de las siguientes acciones complementan una propuesta de hábitos de consumo responsable y ahorro de agua en el hogar?",
    type: "multi_select",
    correctAnswers: [
      "Utilizar el agua residual del lavado de ropa en el WC.",
      "Lavarse los dientes utilizando solo un vaso con agua.",
      "Recolectar en una cubeta el agua de la regadera mientras se espera que se caliente.",
      "Instalar recolectores pluviales."
    ],
    distractors: [
      "Verter los residuos de aceite en la tarja o fregadero."
    ],
    hint: "El aceite contamina miles de litros de agua dulce; verterlo en el fregadero es una práctica perjudicial que debe descartarse.",
    explanation: "Reutilizar agua gris, recolectar agua fría de regadera, usar vaso y cosechar lluvia son prácticas sostenibles. Tirar aceite al drenaje contamina masivamente los acuíferos."
  },
  {
    id: "m20-q30",
    prompt: "El monóxido de carbono ($\\text{CO}$) se produce por la oxidación del metano ($\\text{CH}_4$) mediante la reacción:<br><br>$$2\\text{CH}_4 + 3\\text{O}_2 \\rightarrow 2\\text{CO} + 4\\text{H}_2\\text{O}$$<br>¿Cuál es la expresión estequiométrica correcta para calcular la cantidad de $\\text{CO}$ (en gramos) obtenida a partir de $300\\text{ g}$ de $\\text{CH}_4$?",
    type: "choice",
    correct: "assets/m20_estequiometria_correcta.png",
    distractors: [
      "assets/m20_estequiometria_incorrecta1.png",
      "assets/m20_estequiometria_incorrecta2.png",
      "assets/m20_estequiometria_incorrecta3.png"
    ],
    hint: "Revisa los tres factores: masa molar de reactivo (16 g/mol), proporción molar (2 a 2) y masa molar de producto (28 g/mol).",
    explanation: "El análisis dimensional requiere multiplicar sucesivamente por los tres factores de conversión:\n$$\\begin{aligned} m_{\\text{CO}} &= (300\\text{ g}) \\cdot \\left(\\frac{1\\text{ mol CH}_4}{16\\text{ g}}\\right) \\cdot \\left(\\frac{2\\text{ mol CO}}{2\\text{ mol CH}_4}\\right) \\cdot \\left(\\frac{28\\text{ g}}{1\\text{ mol CO}}\\right) \\\\[6pt] &= \\frac{300 \\cdot 2 \\cdot 28}{16 \\cdot 2} = 525\\text{ g} \\end{aligned}$$"
  }
];
