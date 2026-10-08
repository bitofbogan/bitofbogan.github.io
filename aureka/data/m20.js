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
      { left: "Terciarias", right: "Satisfacen las necesidades que el hombre tiene de realizarse y/o divertirse."}
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
      "Delimitación del tema",
      "Marco teórico",
      "Hipótesis",
      "Comprobación",
      "Conclusiones"
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
    explanation: "Revisando cada afirmación a partir de la gráfica:\n<ul class=\"list-disc pl-5 space-y-1 mt-1\">\n  <li><b>Correcta:</b> Luxemburgo ronda los $43,000\\text{ dls}$ y Dinamarca cerca de $33,000\\text{ dls}$, por lo que la diferencia entre el más alto y el más bajo es de aproximadamente $10,000\\text{ dls}$.</li>\n  <li><b>Incorrecta:</b> Los dos países con mayor PIBC son Luxemburgo y Suiza, los cuales no son países nórdicos.</li>\n  <li><b>Incorrecta:</b> El PIBC de Dinamarca representa más del $75\\%$ del de Luxemburgo, lejos de ser solo el 50%.</li>\n  <li><b>Incorrecta:</b> El PIBC (per cápita) mide el ingreso promedio por habitante, por lo que no permite determinar si un país tiene más o menos población total.</li>\n</ul>"
  },
  {
    id: "m20-q13",
    prompt: "La hoja de cálculo presenta los precios semanales del café de Veracruz aproximados por la función:<br><br>$$y = -0.3x^3 - 0.3x^2 + 0.8x + 0.8$$<br>Determina en qué punto cambia la concavidad de la curva.",
    image: "assets/m20_grafica_cafe.png",
    type: "choice",
    correct: "$y'' = -1.8x - 0.6 = 0; \\quad x = -0.333$",
    distractors: [
      "$y'' = -0.9x - 0.6 = 0; \\quad x = 0.666$",
      "$y'' = 1.8x - 0.6 = 0; \\quad x = 0.333$",
      "$y'' = -0.9x^2 - 0.6x + 0.8 = 0; \\quad x = -1.333$"
    ],
    hint: "El cambio de concavidad se halla igualando la segunda derivada a cero ($y'' = 0$).",
    explanation: "Obtenemos la segunda derivada e igualamos a cero:\n$$\\begin{aligned} y' &= -0.9x^2 - 0.6x + 0.8 \\\\[4pt] y'' &= -1.8x - 0.6 = 0 \\\\[4pt] -1.8x &= 0.6 \\\\[4pt] x &= -\\frac{0.6}{1.8} \\approx -0.333 \\end{aligned}$$"
  },
  {//FROM HERE
    id: "m20-q14",
    prompt: "Susana desarrolla un proyecto de investigación sobre las causas de la escasez de agua en la comunidad de 'Santa Cecilia'. En este momento ella plantea el siguiente enunciado:<br><br><i>'La población de la comunidad no cuenta con una cultura de optimización del agua'</i>.<br><br>¿Cuál es la etapa en la cual trabaja actualmente Susana? Justifica la respuesta.",
    type: "choice",
    correct: "Hipótesis - Porque es una proposición tentativa que puede explicar el problema.",
    distractors: [
      "Justificación - Porque se establece el impacto negativo del desabasto de agua.",
      "Hipótesis - Debido a que se establece un objetivo para solucionar el problema.",
      "Justificación - Porque establece el motivo del desabasto de agua en su comunidad."
    ],
    hint: "Es una respuesta o explicación provisional que debe ser contrastada empíricamente.",
    explanation: "Una hipótesis es una afirmación o respuesta tentativa planteada al inicio de la indagación para explicar la causa de un fenómeno."
  },
  {
    id: "m20-q15",
    prompt: "La región de la Mariposa Monarca ha estado sujeta a problemas ambientales como tala clandestina, aserraderos ilegales, incendios y cambio de uso de suelo. Se requería de un programa de ordenamiento ecológico que conjuntara esfuerzos gubernamentales.<br><br>¿Cuál de las siguientes leyes contempla el establecimiento de ordenamientos ecológicos?",
    type: "choice",
    correct: "General del Equilibrio Ecológico y la Protección al Ambiente.",
    distractors: [
      "Agraria Reglamentaria del Art. 27 Constitucional.",
      "General de Desarrollo Forestal Sostenible.",
      "General de Asentamientos Humanos."
    ],
    hint: "Es la ley marco ambiental en México conocida como LGEEPA.",
    explanation: "La LGEEPA (Ley General del Equilibrio Ecológico y la Protección al Ambiente) es el instrumento legal que norma el ordenamiento ecológico del territorio en México."
  },
  {
    id: "m20-q16",
    prompt: "Para monitorear la preferencia del público por un noticiero matutino, una empresa televisora realiza una investigación en la que pretende aplicar encuestas entre los televidentes, con la finalidad de realizar los cambios pertinentes acordes a las expectativas del público.<br><br>¿A qué etapa corresponde este trabajo de investigación?",
    type: "choice",
    correct: "Recolección de datos por medio de una encuesta para conocer las opiniones del teleauditorio.",
    distractors: [
      "Recolección de datos para tomar decisiones con respecto a las preferencias de los espectadores.",
      "Selección de la muestra para conocer el número total de encuestas que se van a aplicar.",
      "Selección de la muestra conforme al horario y el público a quien va dirigido el noticiero."
    ],
    hint: "El acto de aplicar cuestionarios en campo es la fase empírica de recopilación de información.",
    explanation: "Aplicar cuestionarios o encuestas forma parte directa de la etapa de recolección o levantamiento de datos empíricos de la muestra."
  },
  {
    id: "m20-q17",
    prompt: "La temperatura ambiente puede tomar valores positivos y negativos; dependiendo de la zona geográfica estas variaciones tendrán un rango específico. ¿Cómo se clasifica la variable 'temperatura' en la descripción del fenómeno descrito? Justifica la respuesta.",
    type: "choice",
    correct: "Cuantitativa continua. Por tomar valores reales en el rango.",
    distractors: [
      "Cualitativa discreta. Porque permiten definir intervalos de calor.",
      "Cualitativa ordinal. Porque sus valores indican grados de calor.",
      "Cuantitativa discreta. Por tomar valores enteros en el rango."
    ],
    hint: "Se mide numéricamente y puede adoptar cualquier valor decimal dentro de una escala continua.",
    explanation: "La temperatura es cuantitativa (numérica) y continua porque puede asumir cualquier número real o fracción decimal dentro de un intervalo medible."
  },
  {
    id: "m20-q18",
    prompt: "Relaciona los artículos constitucionales con su contenido de protección ambiental:",
    type: "match_columns",
    pairs: [
      { left: "Artículo 3°", right: "Establece el derecho a recibir educación, la cual incluye el cuidado de los recursos naturales." },
      { left: "Artículo 4°", right: "Señala el derecho a que toda persona disfrute de un ambiente adecuado para su bienestar." },
      { left: "Artículo 25°", right: "Obliga al Estado a apoyar empresas cuidando siempre el medio ambiente." }
    ],
    hint: "3° = Educación ambiental; 4° = Derecho a un medio ambiente sano; 25° = Desarrollo económico sustentable.",
    explanation: "El artículo 3° integra la preservación ambiental en los planes educativos; el 4° consagra el derecho humano a un medio ambiente sano; y el 25° obliga a que la rectoría del desarrollo económico cuide el entorno."
  },
  {
    id: "m20-q19",
    prompt: "Observa la representación del ciclo hidrológico. ¿Cuáles de las siguientes aseveraciones se concluyen de la información de la imagen?<br><br>1. En la fase [3] se realiza una condensación.<br>2. Las fases [3] y [6] son de evaporación.<br>3. En las fases [2] y [4] ocurre una sublimación.<br>4. Las fases [2] y [6] son de evaporación.<br>5. La fase [5] representa una precipitación.<br>6. En la fase [1] se inicia el ciclo hidrológico.",
    image: "img/m20_ciclo_hidrologico.png",
    type: "choice",
    correct: "1, 4, 5, 6",
    distractors: [
      "2, 5, 6",
      "2, 3, 5, 6",
      "1, 3, 4"
    ],
    hint: "[3] forma nubes (condensación), [2] y [6] ascienden como vapor (evaporación) y [5] cae como lluvia (precipitación).",
    explanation: "Analizando las fases: [1] agua oceánica inicial, [2] y [6] evaporación de cuerpos de agua, [3] condensación en nubes y [5] precipitación pluvial."
  },
  {
    id: "m20-q20",
    prompt: "Analiza la siguiente ecuación que representa la reacción entre el trióxido de azufre y el agua para formar ácido sulfúrico (lluvia ácida):<br><br>$$\\mathrm{SO_3 + H_2O \\rightarrow \\text{?}}$$<br>¿Cuál de las opciones representa la estructura y balanceo correctos de esta reacción?",
    type: "choice",
    correct: "2SO₃ + 2H₂O → 2H₂SO₄ | A + B → AB",
    distractors: [
      "2SO₃ + 2H₂O → 2H₂SO₄ + H₂ | A + B → C + D",
      "2SO₃ + 3H₂O → 2H₃SO₄ | A + B → AB",
      "2SO₃ + 2H₂O → 2H₂S + 4O₂ | A + B → C + D"
    ],
    hint: "Dos reactivos se unen para formar un solo producto: es una reacción de síntesis ($A + B \\rightarrow AB$).",
    explanation: "Se trata de una reacción de adición o síntesis ($A + B \\rightarrow AB$): el óxido no metálico se hidrata formando ácido sulfúrico ($\\mathrm{H_2SO_4}$), conservando el balance de átomos."
  },
  {
    id: "m20-q21",
    prompt: "¿Cuáles son las funciones del marco teórico en un proyecto de investigación?<br><br>1. Delimitar el tema a través de antecedentes del problema.<br>2. Establecer el impacto o beneficio que tendrá el proyecto.<br>3. Sustentar el trabajo con bibliografías que den solidez a la investigación.<br>4. Analizar e interpretar datos, investigaciones y teorías.<br>5. Establecer la meta que se pretende lograr.",
    type: "choice",
    correct: "1, 3, 4",
    distractors: [
      "2, 4, 5",
      "2, 3, 5",
      "1, 2, 4"
    ],
    hint: "El impacto corresponde a la justificación (2) y la meta al objetivo (5); descártalas.",
    explanation: "El marco teórico provee antecedentes (1), sustento conceptual/bibliográfico (3) y análisis de teorías previas (4). El impacto pertenece a la justificación y la meta a los objetivos."
  },
  {
    id: "m20-q22",
    prompt: "En la 'Academia de Danza Paulina' se numeran los 150 estudiantes y se sortean 30 números al azar para integrar una muestra. ¿Qué tipo de muestreo se realizó?",
    type: "choice",
    correct: "Aleatorio simple porque cada miembro de la Academia tuvo la misma oportunidad de salir en el sorteo.",
    distractors: [
      "Aleatorio sistemático debido a que la población total se dividió en clases homogéneas.",
      "Aleatorio simple porque se realizó una división de clases con iguales características.",
      "Aleatorio sistemático debido a que se elige uno de ellos al azar y se eligen todos los demás hasta completar la muestra."
    ],
    hint: "Si la selección es mediante sorteo o rifa directa, todos los individuos poseen idéntica probabilidad de ser elegidos.",
    explanation: "Es muestreo aleatorio simple cuando cada elemento de la población posee exactamente la misma probabilidad matemática de ser elegido sin aplicar intervalos."
  },
  {
    id: "m20-q23",
    prompt: "Observa la gráfica de usos del agua por productos y determina la aseveración correcta.",
    image: "img/m20_usos_agua_lineas.png",
    type: "choice",
    correct: "La producción agrícola requiere utilizar mayor cantidad de agua que la industrial.",
    distractors: [
      "El consumo de agua por la industria es mayor que la destinada al riego agrícola.",
      "La ganadería requiere una mayor cantidad de agua que la producción agrícola.",
      "El total de agua consumida por la agricultura ha ido en ascenso en todo el período."
    ],
    hint: "Compara la curva de productos agrícolas (arriba) con la línea de productos industriales (abajo, pegada al eje).",
    explanation: "En la gráfica, la línea de productos agrícolas se ubica entre 10,000 y 17,000 millones de litros, superando por mucho a los productos industriales (cercanos a 2,500)."
  },
  {
    id: "m20-q24",
    prompt: "El sector hídrico es considerado uno de los más vulnerables al cambio climático. Los siguientes son efectos de éste en la calidad del agua, EXCEPTO uno de ellos. Identifícalo.",
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
    prompt: "Analiza la pirámide de población de México (censo 2010). ¿Qué conclusión es correcta a partir de los datos?",
    image: "img/m20_piramide_poblacion.png",
    type: "choice",
    correct: "La población masculina entre 30-34 es mayor que la cantidad de hombres entre 35-39.",
    distractors: [
      "Existe igual cantidad de hombres entre 10-14 años que los de 15-19 años.",
      "La cantidad de mujeres entre 40-44 años es de 3 millones.",
      "El total de niños menores de 4 años es de 5 millones."
    ],
    hint: "Observa las barras horizontales azules del lado izquierdo en los grupos de edad de 30 a 39 años.",
    explanation: "Al comparar las barras del lado izquierdo (hombres), la barra de 30-34 años se extiende más hacia la izquierda que la barra de 35-39 años."
  },
  {
    id: "m20-q26",
    prompt: "Analiza el mapa y gráfica del contraste regional entre desarrollo y disponibilidad de agua en México (2007). ¿Qué se concluye?",
    image: "img/m20_contraste_agua_mexico.png",
    type: "choice",
    correct: "En zonas con mayor disponibilidad de agua, la población es menor y genera poca riqueza.",
    distractors: [
      "La Zona Sureste tiene una menor disponibilidad de agua que la zona Norte-Centro-Noroeste.",
      "Las zonas con mayor disponibilidad de agua, generan la mayor riqueza a nivel nacional.",
      "La zona Norte-Centro-Noroeste es la menos productiva de todas las zonas nacionales."
    ],
    hint: "El Sureste concentra el 69% del agua, pero apenas alberga al 23% de la población y produce el 13% del PIB.",
    explanation: "La paradoja hidrológica mexicana muestra que el Sureste tiene el 69% del agua disponible pero concentra poca población (23%) y genera baja aportación al PIB (13%)."
  },
  {
    id: "m20-q27",
    prompt: "Analiza la gráfica de la evolución de la población activa por sectores económicos en el siglo XX. ¿Qué conclusión es correcta?",
    image: "img/m20_sectores_historico.png",
    type: "choice",
    correct: "El incremento del sector terciario inició a partir de 1960.",
    distractors: [
      "Los sectores primario y secundario eran iguales en 1900.",
      "El sector secundario se ha mantenido estable.",
      "El sector primario está en descenso en todo el período."
    ],
    hint: "Busca el punto de inflexión donde la curva amarilla (terciario) experimenta una pendiente ascendente pronunciada.",
    explanation: "La línea del sector terciario se dispara marcadamente hacia arriba a partir de la década de 1960 (terciarización de la economía)."
  },
  {
    id: "m20-q28",
    prompt: "Ordena cronológicamente los elementos de un reporte formal de investigación:",
    type: "drag_order",
    correctOrder: [
      "Introducción",
      "Contexto",
      "Metodología",
      "Hipótesis",
      "Resultados",
      "Conclusiones",
      "Bibliografía"
    ],
    hint: "Inicia con la introducción y contexto; describe el método e hipótesis; presenta los hallazgos y concluye citando fuentes.",
    explanation: "La estructura formal del informe presenta: Introducción $\\rightarrow$ Contexto $\\rightarrow$ Metodología $\\rightarrow$ Hipótesis $\\rightarrow$ Resultados $\\rightarrow$ Conclusiones $\\rightarrow$ Bibliografía."
  },
  {
    id: "m20-q29",
    prompt: "¿Cuáles de las siguientes acciones complementan una propuesta de hábitos de consumo responsable y ahorro de agua en el hogar?<br><br>1. Utilizar el agua residual del lavado de ropa en el WC.<br>2. Lavarse los dientes utilizando solo un vaso con agua.<br>3. Verter los residuos de aceite en la tarja o fregadero.<br>4. Recolectar en una cubeta el agua de la regadera mientras se espera que se caliente.<br>5. Instalar recolectores pluviales.",
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
    prompt: "La combustión incompleta del metano genera monóxido de carbono según la reacción:<br><br>$$2\\,\\mathrm{CH_4} + 3\\,\\mathrm{O_2} \\rightarrow 2\\,\\mathrm{CO} + 4\\,\\mathrm{H_2O}$$<br>¿Qué cantidad de CO (en gramos) se obtiene por la descomposición de 300 gramos de $\\mathrm{CH_4}$? Considere pesos moleculares: $\\mathrm{CH_4} = 16\\text{ g/mol}$, $\\mathrm{CO} = 28\\text{ g/mol}$.",
    type: "choice",
    correct: "(300 g) [1 mol CH₄ / 16 g] [2 mol CO / 2 mol CH₄] [28 g / 1 mol CO] = 525 g",
    distractors: [
      "(300 g) [14 g / 1 mol CH₄] [2 mol CO / 2 mol CH₄] [28 g / 1 mol CO] = 117600",
      "(300 g) [1 mol CH₄ / 14 g] [2 mol CO / 2 mol CH₄] [44 g / 1 mol CO] = 942.85",
      "(300 g) [38 g / 1 mol CO] [1 mol CH₄ / 14 g] = 814.28"
    ],
    hint: "Aplica los tres factores de conversión: gramos a moles de $\\mathrm{CH_4}$ ($16\\text{ g}$), relación molar ($2:2$) y moles a gramos de $\\mathrm{CO}$ ($28\\text{ g}$).",
    explanation: "El análisis dimensional correcto es:\n$$\\begin{aligned} m_{\\text{CO}} &= (300\\text{ g}) \\cdot \\left(\\frac{1\\text{ mol CH}_4}{16\\text{ g}}\\right) \\cdot \\left(\\frac{2\\text{ mol CO}}{2\\text{ mol CH}_4}\\right) \\cdot \\left(\\frac{28\\text{ g}}{1\\text{ mol CO}}\\right) \\\\[6pt] &= \\frac{300 \\cdot 28}{16} = 525\\text{ g} \\end{aligned}$$"
  }
];
