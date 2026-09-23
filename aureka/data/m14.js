// data/m14.js
var moduleInfo = {
  id: 14,
  title: "Variación en procesos sociales",
  badge: "Módulo 14",
  topicVideos: {
    "series": {
      title: "Series analíticas y geométricas",
      url: "https://youtu.be/5GMPvHO4SjU?si=ss-g1Hr3m0TgYR3I"
    },
    "porcentajes": {
      title: "Porcentajes",
      url: "https://youtu.be/qF3nlTRlUk8?si=2JS7tJksA4kb_wrJ"
    },
    "interes_simple_dinero": {
      title: "Interés simple: cálculo de dinero",
      url: "https://youtu.be/w_b_zGAf3XA?si=uCeTCd7a5KbFYECK"
    },
    "interes_simple_tiempo": {
      title: "Interés simple: cálculo de tiempo",
      url: "https://youtu.be/HAs6ZFLjtjA?si=NaWwP_IQ0IQrO_jR"
    },
    "interes_compuesto": {
      title: "Interés compuesto",
      url: "https://youtu.be/PORxQYDxOJk?si=nxCP9Oox1C9hPRw8"
    },
    "ingreso_base_mensual": {
      title: "Ingreso base mensual",
      url: "https://youtu.be/y42N2mMkxU8?si=RTw0Pbj13bd6sYui"
    },
    "riesgos_inversion": {
      title: "Riesgos de inversión",
      url: "https://youtu.be/J8X8-RLvvHQ?si=iRMQnGZue5IVibGw"
    }
  }
};

var questionBank = [
  {
    id: 1,
    topicId: "series",
    type: "choice",
    prompt: "¿Qué es un modelo matemático?",
    image: null,
    hint: "Piensa en el instrumento formal que recurre a ecuaciones y variables para describir o anticipar el comportamiento de la realidad.",
    correct: "Una representación de la realidad mediante conceptos, símbolos o relaciones matemáticas.",
    distractors: [
      "Un planteamiento gráfico de un fenómeno natural sin apoyo cuantitativo.",
      "Un algoritmo estadístico que sustituye la recolección empírica de datos.",
      "Un esquema conceptual abstracto que prescinde de formulaciones numéricas."
    ],
    explanation: "Un modelo matemático es una construcción abstracta que expresa relaciones observables mediante símbolos y ecuaciones para simular fenómenos y realizar predicciones verificables."
  },
  {
    id: 2,
    type: "choice",
    prompt: "Dadas las siguientes pirámides poblacionales del INEGI, ¿qué grupo de edad muestra una mayor disminución porcentual?",
    images: [
      "assets/m14_piramide1980.png",
      "assets/m14_piramide2010.png"
    ],
    hint: "Observa la base de la pirámide y el impacto del descenso de la fecundidad en los grupos de la primera infancia y edad escolar temprana.",
    correct: "5 a 9 años.",
    distractors: [
      "0 a 4 años.",
      "15 a 19 años.",
      "25 a 29 años."
    ],
    explanation: "La reducción de la base piramidal refleja el descenso de la tasa de fecundidad; el estrato de 5 a 9 años presenta la caída porcentual más marcada entre 1980 y 2010, reflejando el progresivo envejecimiento poblacional."
  },
  {
    id: 3,
    type: "choice",
    prompt: "¿Cuáles son las variables demográficas que determinan la forma y evolución de una pirámide poblacional?",
    image: null,
    hint: "Piensa en las tres cuestiones que pueden cambiar la cantidad de personas en un país.",
    correct: "Fecundidad, mortalidad y migración.",
    distractors: [
      "Esperanza de vida, urbanización y densidad territorial.",
      "Alfabetización, ingreso per cápita y empleo.",
      "Nupcialidad, divorcio y crecimiento económico."
    ],
    explanation: "La estructura por edad y sexo de una población se transforma continuamente a partir del número de nacimientos (fecundidad), defunciones (mortalidad) y el saldo neto de desplazamientos hacia adentro o fuera del territorio (migración)."
  },
  {
    id: 4,
    type: "choice",
    prompt: "¿Qué es la esperanza de vida?",
    image: null,
    hint: "Es una estimación estadística proyectada desde el momento en que un individuo nace.",
    correct: "Es el promedio de años que podría alcanzar una persona, estimados al nacer.",
    distractors: [
      "Es la edad límite que alcanza el segmento más longevo de una sociedad.",
      "Son los años mínimos que un ciudadano permanece en el mercado productivo.",
      "Es el promedio de edad biológica calculado a partir de la tasa de mortalidad senil."
    ],
    explanation: "La esperanza de vida al nacer resume las condiciones sanitarias, alimentarias y sociales de un país, indicando la cantidad media de años que se espera que viva un recién nacido bajo las tasas de mortalidad vigentes."
  },
  {
    id: 5,
    type: "choice",
    prompt: "¿Cómo se llamó el acuerdo entre México y Estados Unidos que reguló el flujo migratorio laboral entre 1942 y 1964?",
    image: null,
    hint: "Programa impulsado en el contexto de la Segunda Guerra Mundial para suministrar mano de obra en labores agrícolas y ferroviarias.",
    correct: "Programa Bracero.",
    distractors: [
      "Operación Wetback.",
      "Tratado de Libre Comercio.",
      "Iniciativa Mérida."
    ],
    explanation: "El Programa Bracero permitió la contratación legal y temporal de millones de trabajadores agrícolas y obreros mexicanos en territorio estadounidense para compensar la escasez laboral de la posguerra."
  },
  {
    id: 6,
    type: "multi_select",
    prompt: "Selecciona las características que distinguen al patrón migratorio actual de mexicanos hacia Estados Unidos según el CONAPO:",
    image: null,
    hint: "Considera la dificultad de retorno, la diversidad de perfiles formativos y la dispersión geográfica.",
    correctAnswers: [
      "Disminución de los mecanismos de circularidad.",
      "Ampliación de las regiones de origen y destino de los emigrantes.",
      "Mayor heterogeneidad en el perfil socioeconómico y educativo de los migrantes."
    ],
    distractors: [
      "Predominio absoluto de trabajadores agrícolas temporales.",
      "Concentración exclusiva de destinos en Texas y California.",
      "Retorno masivo y regular tras cada ciclo de cosecha."
    ],
    explanation: "El endurecimiento fronterizo redujo la circularidad (el retorno estacional), obligando a estancias permanentes; paralelamente, la migración se diversificó incorporando múltiples niveles educativos y destinos urbanos diversos en Estados Unidos."
  },
  {
    id: 7,
    type: "choice",
    prompt: "¿Cuál de las siguientes afirmaciones es <b>falsa</b> respecto a los efectos de la migración en sus lugares de origen?",
    image: null,
    hint: "Las remesas alivian carencias inmediatas, pero no resuelven automáticamente los problemas productivos ni erradican la pobreza estructural.",
    correct: "Provoca transformaciones económicas que reducen de forma automática y estructural los niveles de pobreza.",
    distractors: [
      "Genera envejecimiento demográfico por la salida preponderante de población joven.",
      "Propicia la feminización de la comunidad y la recomposición de roles familiares.",
      "Altera la estructura de sustento local y fragmenta los núcleos domésticos."
    ],
    explanation: "Aunque las remesas mejoran el consumo básico, la migración no garantiza una disminución de la pobreza estructural en las regiones expulsoras; por el contrario, suele acarrear despoblamiento productivo, pérdida de mano de obra y desarticulación familiar."
  },
  {
    id: 8,
    type: "choice",
    prompt: "¿Cuál es la condición necesaria para decir que existe un crecimiento de riqueza en un país?",
    image: null,
    hint: "Compara el ritmo del Producto Interno Bruto frente a la tasa a la que se expande el número de habitantes.",
    correct: "Que la tasa de crecimiento del PIB sea superior a la tasa de crecimiento de la población.",
    distractors: [
      "Que el PIB alcance un saldo nominal positivo sin importar la demografía.",
      "Que la balanza comercial registre superávit en productos manufacturados.",
      "Que la tasa de inflación anual se mantenga en equilibrio con la tasa de interés interbancaria."
    ],
    explanation: "El PIB per cápita resulta de dividir el PIB entre el número total de habitantes. Si la población crece al mismo ritmo o más rápido que la producción, la riqueza promedio por individuo permanece estancada o disminuye."
  },
  {
    id: 9,
    type: "match_columns",
    prompt: "Relaciona cada subíndice del Índice de Desarrollo Humano con su criterio de medición:",
    pairs: [
      { left: "Salud", right: "Esperanza de vida al nacer." },
      { left: "Educación", right: "Alfabetización." },
      { left: "Ingreso", right: "PIB per cápita." }
    ],
    explanation: "El IDH propuesto por la ONU integra tres pilares del bienestar: una vida larga y saludable (esperanza de vida), el acceso a la formación académica (escolaridad) y un estándar material de vida digno (ingreso per cápita ajustado)."
  },
  {
    id: 10,
    topicId: "interes_simple_dinero",
    type: "choice",
    prompt: "Se invierten $1,000 a un plazo de 6 meses con una tasa de interés simple del 5% mensual. ¿Cuánto dinero se acumulará al término del plazo?",
    image: null,
    hint: "Calcula el interés con la ecuación $I = C \\cdot i \\cdot t$ y luego súmalo al capital inicial.",
    correct: "$1,300.00",
    distractors: [
      "$1,050.00",
      "$1,250.00",
      "$1,350.00"
    ],
    explanation: "El interés simple generado se obtiene calculando: $$I = (\\$1{,}000)(0.05)(6) = \\$300$$ Al sumar este rendimiento al capital inicial mediante $$M = C + I = \\$1{,}000 + \\$300$$, se obtiene un monto total de $1,300."
  },
  {
    id: 11,
    topicId: "interes_simple_tiempo",
    type: "choice",
    prompt: "¿En cuántos meses se obtendrá un monto final de $120,000 a partir de una inversión de $40,000, si la tasa de interés simple es del 5% bimestral?",
    image: null,
    hint: "El interés que se busca ganar es la diferencia ($80,000). Despeja el número de plazos bimestrales con $t = \\frac{I}{C \\cdot i}$ y luego convierte los plazos a meses.",
    correct: "80 meses.",
    distractors: [
      "40 meses.",
      "60 meses.",
      "120 meses."
    ],
    explanation: "Se requiere un interés de $$I = \\$120{,}000 - \\$40{,}000 = \\$80{,}000$$ Aplicando la ecuación para el cálculo de tiempo: $$t = \\frac{I}{C \\cdot i} = \\frac{\\$80{,}000}{(\\$40{,}000)(0.05)} = \\frac{\\$80{,}000}{\\$2{,}000} = 40\\text{ bimestres}$$ Al multiplicar $40\\text{ bimestres} \\cdot 2\\text{ meses}$, el tiempo total es de 80 meses."
  },
  {
    id: 12,
    topicId: "interes_compuesto",
    type: "choice",
    prompt: "¿Por qué el interés compuesto corresponde a un modelo geométrico?",
    image: null,
    hint: "Considera cómo se calculan los intereses de cada periodo y sobre qué saldo se acumulan.",
    correct: "Porque los intereses se capitalizan periódicamente, sumándose al capital para generar nuevos intereses.",
    distractors: [
      "Porque añade una cuota fija de ganancia sobre el depósito inicial sin variaciones de saldo.",
      "Porque su comportamiento genera incrementos lineales idénticos en cada intervalo temporal.",
      "Porque depende estrictamente de las fluctuaciones de la paridad cambiaria de la moneda."
    ],
    explanation: "En el interés compuesto, los rendimientos devengados se integran al capital en cada periodo de capitalización, formando una serie geométrica de crecimiento acumulativo acelerado dada por: $$M = C(1 + i)^n$$"
  },
  {
    id: 13,
    topicId: "interes_compuesto",
    type: "choice",
    prompt: "Se solicita un préstamo de $50,000 pactado a una tasa de interés compuesto del 2% mensual por un plazo de 5 meses. ¿Qué monto total deberá liquidarse al vencimiento?",
    image: null,
    hint: "Aplica la ecuación $M = C \\cdot (1 + i)^n$.",
    correct: "$55,204.04",
    distractors: [
      "$55,000.00",
      "$54,121.60",
      "$56,308.12"
    ],
    explanation: "Calculamos el factor de crecimiento geométrico: $$(1 + 0.02)^5 = (1.02)^5 \\approx 1.1040808$$ Multiplicando por el capital inicial: $$M = \\$50{,}000 \\cdot 1.1040808 \\approx \\$55{,}204.04$$"
  },
  {
    id: 14,
    topicId: "interes_compuesto",
    type: "choice",
    prompt: "Un inversionista tiene $100,000 a 5 años y evalúa dos ofertas bancarias: el Banco A ofrece una tasa bruta anual del 8% capitalizable cada 120 días, mientras que el Banco B ofrece una tasa bruta anual del 6% capitalizable cada 90 días. ¿Cuál alternativa ofrece mayor rendimiento final?",
    image: null,
    hint: "Determina el número de capitalizaciones al año para cada opción (3 para 120 días, 4 para 90 días) y calcula el monto compuesto total al término de los 5 años.",
    correct: "El Banco A, con un saldo aproximado de $148,402.74 frente a $134,685.50 del Banco B.",
    distractors: [
      "El Banco B, debido a que capitaliza intereses con mayor frecuencia durante el año.",
      "Ambos instrumentos generan exactamente el mismo monto debido a la compensación por plazo.",
      "El Banco B, al acumular 20 periodos de capitalización contra 15 del Banco A."
    ],
    explanation: "Para el Banco A, con 3 plazos anuales ($n = 15$ periodos en 5 años) e $i = \\frac{0.08}{3}$: $$M_A = \\$100{,}000\\left(1 + \\frac{0.08}{3}\\right)^{15} \\approx \\$148{,}402.74$$ Para el Banco B, con 4 plazos anuales ($n = 20$ periodos en 5 años) e $i = \\frac{0.06}{4} = 0.015$: $$M_B = \\$100{,}000(1 + 0.015)^{20} \\approx \\$134{,}685.50$$"
  },
  {
    id: 15,
    topicId: "ingreso_base_mensual",
    type: "choice",
    prompt: "Roberto percibe un salario mensual $7,500, mientras que su esposa cobra $150 por jornada trabajando entre 3 y 5 días a la semana. ¿Cuál es el ingreso base mensual de la pareja? ¿Por qué?",
    image: null,
    hint: "El ingreso base mensual toma en consideración únicamente aquellas fuentes de ingreso estables y garantizadas.",
    correct: "$7,500.00, porque el IBM se calcula estrictamente con la suma de los ingresos fijos garantizados.",
    distractors: [
      "$9,900.00, promediando 4 jornadas semanales de ingresos eventuales adicionales.",
      "$10,500.00, sumando el ingreso fijo con el tope máximo posible de ingresos esporádicos.",
      "$8,250.00, añadiendo el 10% del ingreso variable por concepto de previsión presupuestal."
    ],
    explanation: "Para diseñar un presupuesto riguroso, el ingreso base mensual debe sustentarse de forma exclusiva en los flujos monetarios predecibles y constantes (ingresos fijos), excluyendo entradas volátiles o contingentes."
  },
  {
    id: 16,
    type: "fill_blanks",
    prompt: "Completa la oración:",
    sentence: "El primer paso para elaborar un presupuesto consiste en registrar todo el dinero que {0} y posteriormente el que {1} durante un periodo determinado.",
    image: null,
    hint: "Identifica las dos corrientes monetarias básicas de entrada y salida de recursos en un hogar.",
    correctOrder: [
      "ingresa",
      "egresa"
    ],
    distractors: [
      "se ahorra",
      "se invierte",
      "se adeuda",
      "se capitaliza"
    ],
    explanation: "La planeación presupuestaria exige registrar metódicamente los ingresos y egresos de un periodo para diagnosticar la capacidad real de ahorro y evitar endeudamiento."
  },
  {
    id: 17,
    topicId: "riesgos_inversion",
    type: "classification",
    prompt: "Clasifica cada caso según el tipo de riesgo financiero que experimenta el inversionista:",
    image: null,
    hint: "Distingue entre incumplimiento del deudor, oscilaciones de mercado, cambios regulatorios globales o variaciones en tasas.",
    categories: ["Crédito", "Volatilidad", "Sistema", "Precio/interés"],
    items: [
      { text: "Una cooperativa tiene problemas de liquidez y no paga los rendimientos acordados.", correct: "Crédito" },
      { text: "El valor de las acciones de una empresa sube y baja abruptamente en una sola jornada.", correct: "Volatilidad" },
      { text: "Nuevas regulaciones e impuestos de importación deterioran la ganancia de un negocio.", correct: "Sistema" },
      { text: "Se toma un préstamo con tasa variable y al siguiente año el costo se eleva del 14% al 25%.", correct: "Precio/interés" }
    ],
    explanation: "El riesgo de crédito atañe a la falta de pago; el de volatilidad a las fluctuaciones rápidas de precio; el de sistema a factores macroeconómicos y regulatorios; y el de interés al cambio en el costo del dinero."
  },
  {
    id: 18,
    type: "choice",
    prompt: "¿Cuál de las siguientes operaciones NO corresponde a una operación pasiva?",
    image: null,
    hint: "En las operaciones pasivas el banco recibe dinero del público; en las activas, el banco coloca o presta sus recursos.",
    correct: "Préstamo personal.",
    distractors: [
      "Depósito a la vista.",
      "Cuenta de cheques sin rendimiento.",
      "Depósito bancario a plazo fijo."
    ],
    explanation: "Las cuentas de ahorro y los depósitos son operaciones pasivas porque el banco capta dinero del cliente; los préstamos personales y créditos representan operaciones activas donde la entidad coloca fondos propios cobrando intereses."
  },
  {
    id: 19,
    type: "choice",
    prompt: "¿Cuáles son las dos variables que intervienen en el cálculo de la tasa de interés real?",
    image: null,
    hint: "Es el rendimiento efectivo descontando el efecto inflacionario que merma el poder adquisitivo.",
    correct: "Tasa de interés nominal y tasa de inflación esperada.",
    distractors: [
      "Tasa de interés interbancaria y costo de apertura de cuenta.",
      "Tasa impositiva del ISR y comisiones por administración del fondo.",
      "Tipo de cambio spot y tasa bruta anualizada de rendimiento."
    ],
    explanation: "La tasa de interés real refleja la rentabilidad neta de los recursos una vez descontada la inflación mediante la relación: $$r \\approx i - \\pi$$ donde $i$ representa la tasa nominal pactada y $\\pi$ es la tasa de inflación esperada."
  },
  {
    id: 20,
    type: "fill_blanks",
    prompt: "Completa la oración:",
    sentence: "Las AFORES son instituciones que apoyan a los trabajadores para planear su {0}.",
    image: null,
    hint: "Son entidades financieras facultadas por la ley para custodiar y rentabilizar los recursos de los trabajadores destinados a la vejez.",
    correctOrder: [
      "retiro"
    ],
    distractors: [
      "impuesto",
      "ahorro",
      "utilidad"
    ],
    explanation: "Las AFORES operan como administradoras de fondos para el retiro autorizadas para invertir el saldo de las cuentas individuales en sociedades especializadas (SIEFORES), capitalizando recursos para la pensión."
  },
  {
    id: 21,
    type: "drag_order",
    prompt: "Ordena los pasos secuenciales recomendados para elaborar y optimizar un presupuesto familiar:",
    correctOrder: [
      "Registrar exhaustivamente todas las entradas y salidas de dinero mensuales.",
      "Clasificar los ingresos y egresos en categorías fijas y variables.",
      "Determinar el ingreso base mensual a partir de los ingresos fijos.",
      "Restar los egresos obligatorios y asignar un margen de ahorro previo a consumos discrecionales.",
      "Identificar gastos prescindibles para optimizar el recurso neto disponible."
    ],
    explanation: "La estructuración de un presupuesto inicia con la bitácora de flujo de efectivo, procede con la clasificación de partidas y el cálculo del ingreso base, asegura la reserva de ahorro y concluye con el ajuste de fugas de capital."
  },
  {
    id: 22,
    topicId: "series",
    type: "choice",
    prompt: "Un modelo demográfico lineal predice que una población de 50,000 habitantes aumenta de manera constante en 2,500 personas por año. ¿Cuántos habitantes habrá al transcurrir 8 años?",
    image: null,
    hint: "Utiliza la estructura de una progresión aritmética $a_n = a_1 + (n - 1)d$ o el cálculo lineal directo de incremento por año.",
    correct: "70,000 habitantes.",
    distractors: [
      "65,000 habitantes.",
      "72,500 habitantes.",
      "67,500 habitantes."
    ],
    explanation: "En un modelo de variación lineal el incremento es constante en cada periodo: $$\\text{Crecimiento total} = 2{,}500 \\cdot 8 = 20{,}000\\text{ habitantes}$$ Sumando al censo original: $$P_8 = 50{,}000 + 20{,}000 = 70{,}000\\text{ habitantes}$$"
  },
  {
    id: 23,
    topicId: "series",
    type: "choice",
    prompt: "Si una serie geométrica de crecimiento poblacional inicia con 2,000 individuos y su razón de crecimiento por periodo es r = 1.5, ¿cuál será el valor del cuarto término de la serie?",
    image: null,
    hint: "Aplica la regla de las progresiones geométricas $a_n = a_1 \\cdot r^{n - 1}$ para $n = 4$.",
    correct: "6,750 individuos.",
    distractors: [
      "4,500 individuos.",
      "10,125 individuos.",
      "5,000 individuos."
    ],
    explanation: "Aplicando la fórmula del enésimo término geométrico: $$a_4 = a_1 \\cdot r^{4 - 1} = 2{,}000 \\cdot (1.5)^3 = 2{,}000 \\cdot 3.375 = 6{,}750$$"
  },
  {
    id: 24,
    topicId: "interes_simple_dinero",
    type: "choice",
    prompt: "Una persona invierte $15,000 a un plazo de 18 meses a una tasa de interés simple del 5% bimestral. ¿Cuánto dinero total recibirá al concluir el plazo?",
    image: null,
    hint: "Convierte 18 meses a bimestres (18 / 2 = 9 bimestres). Calcula el interés simple y súmalo al capital.",
    correct: "$21,750.00",
    distractors: [
      "$28,500.00",
      "$19,500.00",
      "$22,250.00"
    ],
    explanation: "El plazo de 18 meses comprende $t = \\frac{18}{2} = 9\\text{ bimestres}$. El interés simple es: $$I = (\\$15{,}000)(0.05)(9) = \\$6{,}750$$ El monto final acumulado asciende a: $$M = C + I = \\$15{,}000 + \\$6{,}750 = \\$21{,}750$$"
  },
  {
    id: 25,
    type: "choice",
    prompt: "¿Cuál es el principal efecto sociodemográfico que experimenta una comunidad rural de origen cuando la mayoría de sus jóvenes emigran al extranjero?",
    image: null,
    hint: "Analiza el segmento poblacional que permanece en la localidad y el envejecimiento de la estructura comunitaria.",
    correct: "Envejecimiento poblacional y feminización demográfica de la comunidad.",
    distractors: [
      "Aumento inmediato en la tasa global de natalidad y fecundidad.",
      "Expansión sustancial del sector manufacturero industrial local.",
      "Homogeneización absoluta de las prácticas políticas y religiosas."
    ],
    explanation: "La emigración selectiva de jóvenes en edad reproductiva y laboral provoca que en las comunidades de origen predomine la población de adultos mayores, niñas y niños, así como una mayor proporción de mujeres al frente de los hogares."
  },
  {
    id: 26,
    type: "choice",
    prompt: "Si el Producto Interno Bruto de un país creció un 2% en un año y la población de ese mismo país aumentó también en un 2% durante el mismo periodo, ¿qué ocurrió con el PIB per cápita?",
    image: null,
    hint: "El PIB per cápita mide el producto generado dividido entre el total de habitantes.",
    correct: "Permaneció prácticamente estancado, ya que la riqueza generada por persona no aumentó.",
    distractors: [
      "Se incrementó un 4% gracias al balance entre ambas variables económicas.",
      "Disminuyó a la mitad debido al efecto distributivo demográfico.",
      "Se elevó un 2% sostenido por la estabilidad macroeconómica."
    ],
    explanation: "Dado que el incremento en la producción de bienes y servicios se reparte entre una proporción idéntica de nuevos habitantes, la cantidad promedio disponible por persona no experimenta aumento."
  },
  {
    id: 27,
    type: "fill_blanks",
    prompt: "Completa la relación entre ahorro, ingresos y egresos:",
    sentence: "El ahorro se define conceptualmente como el excedente de los {0} sobre los {1} realizados durante un periodo económico.",
    image: null,
    hint: "Indica qué factor debe ser mayor que el otro para que quede una reserva monetaria disponible.",
    correctOrder: [
      "ingresos",
      "gastos"
    ],
    distractors: [
      "préstamos",
      "créditos",
      "impuestos",
      "activos"
    ],
    explanation: "El ahorro constituye la diferencia positiva que queda a favor de una persona o institución cuando sus recursos percibidos superan la suma de erogaciones y consumos devengados."
  },
  {
    id: 28,
    topicId: "interes_compuesto",
    type: "choice",
    prompt: "Un ahorrador coloca $20,000 en un depósito a 2 años con una tasa compuesta anual del 10% capitalizable anualmente. ¿Cuánto dinero retirará al finalizar los dos periodos?",
    image: null,
    hint: "Calcula el primer año ($20,000 + 10%) y sobre ese nuevo saldo aplica nuevamente el 10%, o utiliza $M = C(1 + i)^n$.",
    correct: "$24,200.00",
    distractors: [
      "$24,000.00",
      "$22,000.00",
      "$25,100.00"
    ],
    explanation: "Al primer año el capital suma: $$\\$20{,}000 \\cdot 1.10 = \\$22{,}000$$ Al segundo año, el rendimiento se devenga sobre el saldo acumulado: $$\\$22{,}000 \\cdot 1.10 = \\$24{,}200$$ Mediante fórmula de interés compuesto: $$M = \\$20{,}000(1 + 0.10)^2 = \\$20{,}000(1.21) = \\$24{,}200$$"
  },
  {
    id: 29,
    topicId: "interes_simple_dinero",
    type: "choice",
    prompt: "Una familia destina $8,150 a una inversión a un plazo de 5 años bajo un esquema de interés simple con una tasa del 3.5% semestral. ¿Cuánto dinero acumulado obtendrá al término del contrato?",
    image: null,
    hint: "En 5 años hay 10 semestres. Aplica $I = C \\cdot i \\cdot t$ y suma el capital inicial.",
    correct: "$11,002.50",
    distractors: [
      "$9,576.25",
      "$12,429.75",
      "$10,850.00"
    ],
    explanation: "El periodo de 5 años comprende $t = 5 \\cdot 2 = 10\\text{ semestres}$. El interés generado es: $$I = (\\$8{,}150)(0.035)(10) = \\$2{,}852.50$$ El monto acumulado final es: $$M = C + I = \\$8{,}150 + \\$2{,}852.50 = \\$11{,}002.50$$"
  },
  {
    id: 30,
    topicId: "riesgos_inversion",
    type: "choice",
    prompt: "¿En qué consiste la ventaja financiera de mantener una adecuada diversificación al invertir recursos patrimoniales?",
    image: null,
    hint: "Evitar concentrar todo el capital en un solo activo para mitigar el impacto si uno de ellos sufre pérdidas.",
    correct: "Distribuir el capital en distintos instrumentos para mitigar el riesgo global de pérdida.",
    distractors: [
      "Garantizar que todos los fondos queden exentos de cualquier tasa impositiva.",
      "Asegurar que todas las inversiones mantengan liquidez inmediata a la vista.",
      "Concentrar el riesgo en una sola entidad para negociar mayores tasas preferenciales."
    ],
    explanation: "La diversificación de portafolios distribuye el dinero entre activos con diferentes niveles de riesgo y liquidez, amortiguando caídas imprevistas en instrumentos particulares."
  }
];
