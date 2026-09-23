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
    id: 1,  //READY
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
    id: 2,  //READY
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
    id: 3,  //READY
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
    id: 4,  //READY
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
    id: 5,  //READY
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
    id: 6,  //READY
    type: "multi_select",
    prompt: "Selecciona las características que distinguen al patrón migratorio actual de mexicanos hacia Estados Unidos según el CONAPO:",
    image: null,
    hint: "Considera la dificultad de retorno, la diversidad de perfiles formativos y la dispersión geográfica.",
    correctAnswers: [
      "Disminución de los mecanismos de circularidad.",
      "Ampliación de las regiones de origen y destino de los emigrantes.",
      "Mayor heterogeneidad en el perfil de los migrantes."
    ],
    distractors: [
      "Predominio absoluto de trabajadores agrícolas temporales.",
      "Concentración exclusiva de destinos en Texas y California.",
      "Retorno masivo y regular tras cada ciclo de cosecha."
    ],
    explanation: "El endurecimiento fronterizo redujo la circularidad (el retorno estacional), obligando a estancias permanentes; paralelamente, la migración se diversificó incorporando múltiples niveles educativos y destinos urbanos diversos en Estados Unidos."
  },
  {
    id: 7,  //READY
    type: "choice",
    prompt: "¿Cuál de las siguientes afirmaciones es <b>falsa</b> respecto al fenómeno migratorio en sus lugares de origen?",
    image: null,
    hint: "Las remesas alivian carencias inmediatas, pero no resuelven automáticamente los problemas productivos ni erradican la pobreza estructural.",
    correct: "Provoca cambios económicos en el lugar de origen al incidir en la disminución de los índices de pobreza.",
    distractors: [
      "Genera envejecimiento demográfico por la salida preponderante de población joven.",
      "Propicia la feminización de la comunidad y la recomposición de roles familiares.",
      "Altera la estructura de sustento local y fragmenta los núcleos domésticos."
    ],
    explanation: "Aunque las remesas mejoran el consumo básico, la migración no garantiza una disminución de la pobreza estructural en las regiones expulsoras; por el contrario, suele acarrear despoblamiento productivo, pérdida de mano de obra y desarticulación familiar."
  },
  {
    id: 8,  //READY
    type: "choice",
    prompt: "¿Cuál es la condición necesaria para decir que existe un crecimiento de riqueza económica en un país?",
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
    id: 9,  //READY
    type: "fill_blanks",
    prompt: "Completa la oración:",
    sentence: "Según el CONAPO, el primer patrón migratorio estableció las bases del fenómeno actual a partir de {0} en Estados Unidos a finales del siglo XIX.",
    image: null,
    hint: "Compara el ritmo del Producto Interno Bruto frente a la tasa a la que se expande el número de habitantes.",
    correctOrder: [
      "la demanda laboral"
    ],
    distractors: [
      "el término del Programa Bracero",
      "la expulsión de migrantes",
      "los índices de desempleo"
    ],
    explanation: "De los 4 patrones migratorios identificados por el CONAPO, el primero se da a partir de la <b>demanda laboral en el vecino Estados Unidos</b> desde finales del siglo XIX hasta inicios del siglo XX."
  },
  {
    id: 10,  //READY
    type: "match_columns",
    prompt: "Relaciona cada subíndice del Índice de Desarrollo Humano con su criterio de medición:",
    pairs: [
      { left: "Salud", right: "Esperanza de vida." },
      { left: "Educación", right: "Alfabetización." },
      { left: "Ingreso", right: "PIB per cápita." }
    ],
    explanation: "El IDH propuesto por la ONU integra tres pilares del bienestar: una vida larga y saludable (esperanza de vida), el acceso a la formación académica (escolaridad) y un estándar material de vida digno (ingreso per cápita ajustado)."
  },
  {
    id: 11,  //READY
    type: "choice",
    prompt: "¿Qué se requiere para obtener el presupuesto mensual de un hogar?",
    image: null,
    hint: null,
    correct: "Registrar el dinero que ingresa y egresa al hogar durante un periodo mensual.",
    distractors: [
      "Equilibrar necesidades y recursos disponibles con un margen de deuda.",
      "Equilibrar necesidades y recursos disponibles con un margen de ahorro.",
      "Solicitar asesoría contable para registrar ingresos y egresos durante un periodo mensual."
    ],
    explanation: "Para elaborar un presupuesto, se necesita <b>registrar el dinero que entra y sale del hogar durante un mes</b>."
  },
  {
    id: 12,  //READY
    type: "multi_select",
    prompt: "¿Qué ventajas ofrece la elaboración de un presupuesto?",
    image: null,
    hint: null,
    correctAnswers: [
      "Aumentar los ingresos familiares.",
      "Limitarse a los ingresos disponibles.",
      "Lograr que el orden redunde en el ahorro."
    ],
    distractors: [
      "Mantener las finanzas personales equilibradas."
    ],
    explanation: "Mantener las finanzas personales equilibradas es en sí la elaboración del presupuesto, no una ventaja que resulta de éste."
  },
  {
    id: 13,  //READY
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
    explanation: "El interés simple generado se obtiene calculando: $$I = (\\$1{,}000)(0.05)(6) = \\$300$$ Al sumar este rendimiento al capital inicial mediante $$M = C + I = \\$1{,}000 + \\$300$$ se obtiene un monto total de $\\mathbf{\\$1,300}$."
  },
  {
    id: 14, //READY
    topicId: "interes_simple_tiempo",
    type: "choice",
    prompt: "¿En cuántos meses se obtendrá un monto final de $\\$$120,000 a partir de una inversión de $\\$$40,000 con una tasa de interés simple del 5% bimestral?",
    image: null,
    hint: "El interés que se busca ganar es la diferencia ($80,000). Despeja el número de plazos bimestrales con $$t = \\frac{I}{C \\cdot i}$$ y luego convierte los plazos a meses.",
    correct: "80 meses.",
    distractors: [
      "40 meses.",
      "60 meses.",
      "120 meses."
    ],
    explanation: "Se requiere un interés de $$I = \\$120{,}000 - \\$40{,}000 = \\$80{,}000$$ Aplicando la ecuación para el cálculo de tiempo: $$\\begin{aligned} t &= \\frac{I}{C \\cdot i} \\\\[4pt] &= \\frac{\\$80{,}000}{(\\$40{,}000)(0.05)} \\\\[4pt] &= \\frac{\\$80{,}000}{\\$2{,}000} \\\\[4pt] &= \\mathbf{40\\text{ plazos (bimestres)}} \\end{aligned}$$ Si cada plazo es bimestral, se multiplica $40 \\cdot 2$ y se tiene el tiempo total de <b>80 meses</b>."
  },
  {
    id: 15,
    topicId: "riesgos_inversion",
    type: "choice",
    prompt: "¿Qué tipo de riesgo se relaciona a eventos como la inflación, la devaluación y situaciones económicas que involucran a todo un país?",
    image: null,
    hint: null,
    correct: "Riesgo del sistema.",
    distractors: [
      "Riesgo de inversión.",
      "Riesgo de precio/interés.",
      "Riesgo de volatilidad."
    ],
    explanation: "TBR."
  },
  {
    id: 16, //READY
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
    explanation: "Calculamos el factor de crecimiento geométrico: $$(1 + 0.02)^5 = (1.02)^5 \\approx 1.1040808$$ Multiplicando por el capital inicial: $$\\begin{aligned} M &= \\$50{,}000 \\cdot 1.1040808 \\\\ &\\approx \\mathbf{\\$55{,}204.04} \\end{aligned}$$"
  },
  {
    id: 17,
    topicId: "riesgos_inversion",
    type: "match_columns",
    prompt: "Relaciona los principales tipos de riesgo en el ahorro y la inversión con el evento que les corresponde:",
    hint: "Distingue entre problemas de liquidez o retraso de pago, caída abrupta de valor en mercados, cambios regulatorios externos y ajustes en el costo del financiamiento.",
    pairs: [
      {
        left: "Riesgo de crédito",
        right: "<b>Rodrigo:</b> Invirtió en una cooperativa de transporte que debía pagar rendimientos en mayo, pero por problemas de liquidez postergan sus pagos de forma variable hasta fin de año."
      },
      {
        left: "Riesgo de volatilidad",
        right: "<b>Valeria:</b> Adquirió acciones de empresas consolidadas, pero una caída repentina en las bolsas internacionales redujo drásticamente su valor de rescate."
      },
      {
        left: "Riesgo del sistema",
        right: "<b>Esteban:</b> Vende joyería artesanal y enfrenta dificultades para surtir a sus clientes debido a la devaluación y nuevas regulaciones aduanales."
      },
      {
        left: "Riesgo de precio o interés",
        right: "<b>Mauricio:</b> Contrató un préstamo hipotecario a 15 años al 14% anual, pero tras el primer año la tasa pactada aumentó al 25%."
      }
    ],
    explanation: "Los riesgos financieros se clasifican según su origen:<br>• <b>Crédito:</b> No se realiza el pago de un interés o préstamo.<br>• <b>Volatilidad:</b> Fluctuaciones repentinas en los precios de mercado.<br>• <b>Sistema:</b> Factores macroeconómicos como la inflación, devaluaciones o políticas de gobierno.<br>• <b>Precio/interés:</b> Cambios en los porcentajes de la tasa de interés."
  },
  {
    id: 18,
    topicId: "interes_compuesto",
    type: "choice",
    prompt: "Una familia invierte $\$$100,000 a 5 años con dos posibles ofertas:<br><br>• <b>Banco Andor:</b> 8% de tasa bruta anualizada a 120 días.<br>• <b>Banco Bix:</b> 6% de tasa bruta anualizada a 90 días.<br><br>¿Cuál alternativa ofrece mayor rendimiento final?",
    image: null,
    hint: "Determina el número de capitalizaciones al año para cada opción (3 para 120 días, 4 para 90 días) y calcula el monto compuesto total al término de los 5 años.",
    correct: "Banco Andor con un rendimiento de $\$$148,402.74.",
    distractors: [
      "Banco Bix con un rendimiento de $\$$148,594.73.",
      "Ambos bancos generan el mismo rendimiento de $\$$148,402.74.",
      "Banco Andor con un rendimiento de $\$$148,594.73."
    ],
    explanation: "Para el Banco A, con 3 plazos anuales ($n = 15$ periodos en 5 años) e $i = \\frac{0.08}{3}$: $$M_A = \\$100{,}000\\left(1 + \\frac{0.08}{3}\\right)^{15} \\approx \\$148{,}402.74$$ Para el Banco B, con 4 plazos anuales ($n = 20$ periodos en 5 años) e $i = \\frac{0.06}{4} = 0.015$: $$M_B = \\$100{,}000(1 + 0.015)^{20} \\approx \\$134{,}685.50$$"
  },
  {
    id: 19, //READY
    topicId: "ingreso_base_mensual",
    type: "choice",
    prompt: "Roberto percibe un salario mensual de \\$7,500, mientras que su esposa cobra \\$150 por jornada trabajando entre 3 y 5 días a la semana. ¿Cuál es el ingreso base mensual de la pareja? ¿Por qué?",
    image: null,
    hint: "El ingreso base mensual toma en consideración únicamente aquellas fuentes de ingreso estables y garantizadas.",
    correct: "$7,500.00, porque el IBM se calcula estrictamente con la suma de los ingresos fijos.",
    distractors: [
      "\\$9,900.00, promediando 4 jornadas semanales de ingresos eventuales adicionales.",
      "\\$10,500.00, sumando el ingreso fijo con el tope máximo posible de ingresos esporádicos.",
      "\\$8,250.00, añadiendo el 10% del ingreso variable por concepto de previsión presupuestal."
    ],
    explanation: "Para diseñar un presupuesto riguroso, el ingreso base mensual debe sustentarse de forma exclusiva en los flujos monetarios predecibles y constantes (ingresos fijos), excluyendo entradas volátiles o contingentes."
  },
  {
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
    type: "choice",
    prompt: "Es la cantidad monetaria excedente de las personas e instituciones sobre sus gastos:",
    image: null,
    hint: null,
    correct: "Ahorro.",
    distractors: [
      "Ingreso.",
      "Inversión.",
      "Presupuesto."
    ],
    explanation: "El ahorro constituye la diferencia positiva que queda a favor de una persona o institución cuando sus recursos percibidos superan la suma de erogaciones y consumos devengados."
  },
  {
    id: 25,  //READY
    topicId: "series",
    type: "choice",
    prompt: "¿Por qué se puede afirmar que el modelo curvo es geométrico?",
    image: "assets/m14_models.png",
    hint: null,
    correct: "Porque aplica la tasa de interés al capital del periodo anterior y lo acumula en cada intervalo de tiempo.",
    distractors: [
      "Porque se basa en una progresión no lineal que multiplica la tasa de interés al capital inicial constante.",
      "Porque multiplica la tasa fija por el capital inicial constante y lo acumula en cada intervalo de tiempo.",
      "Porque mantiene constante el interés que se aplica al capital inicial fijo para cada intervalo de tiempo."
    ],
    explanation: "TBR."
  },
  {
    id: 26,
    topicId: "series",
    type: "choice",
    prompt: "Al calcular el crecimiento total de la población de Ciudad Xóchitl de 1989 a 2013 se obtuvo el valor $P = -937$. ¿Qué interpretación tiene este resultado?",
    image: null,
    hint: "Observa el signo del resultado y el periodo completo sobre el cual se calculó la variación demográfica.",
    correct: "La población se redujo en 937 personas entre 1989 y 2013.",
    distractors: [
      "Cada año la población disminuye a razón constante de 937 habitantes.",
      "La población aumentó en 937 personas entre 1989 y 2013.",
      "Ninguna interpretación válida, ya que el crecimiento poblacional no puede tomar valores negativos."
    ],
    explanation: "El valor representa la variación absoluta acumulada en todo el periodo ($P = P_{2013} - P_{1989}$). Un signo negativo indica una reducción o decremento neto de la población entre esos dos años, no una tasa anual promedio."
  },
  {
    id: 27,
    topicId: "porcentajes",
    type: "multi_select",
    prompt: "Más de medio millón de mexicanos canceló sus cuentas de ahorro en el primer trimestre del año. De acuerdo al reporte de la Comisión Nacional Bancaria y de Valores, el ahorro nacional se desplomó en 60 millones de pesos comparado con el año previo. ¿Qué factores están implícitos en este fenómeno?",
    image: null,
    hint: "Identifica tanto las presiones sobre los ingresos de las familias como los costos bancarios y medidas fiscales que desalientan el ahorro formal.",
    correctAnswers: [
      "La crisis económica y el desempleo.",
      "La reducción de los créditos bancarios.",
      "La aplicación de impuestos a los depósitos en efectivo.",
      "Los cobros bancarios por manejo de cuenta."
    ],
    distractors: [
      "El incremento en las tasas de interés pagadas.",
      "La obligación legal de canalizar todo el ahorro hacia AFORES."
    ],
    explanation: "El retiro masivo del ahorro bancario obedece a un conjunto integral de factores: la pérdida de liquidez por desempleo y crisis económica, la contracción del crédito que forzó a usar reservas previas, la carga tributaria sobre depósitos en efectivo y el cobro recurrente de comisiones que reducía el saldo neto de los pequeños ahorradores."
  },
  {
    id: 28,
    type: "choice",
    prompt: "Un país se encuentra en subdesarrollo con muy poca población pero una tasa de crecimiento poblacional extremadamente alta. ¿Qué gráfica representa mejor el crecimiento de su población respecto a la de Europa?",
    image: null, // o una imagen de apoyo si la pregunta la requiere
    hint: "Busca la gráfica cuya tasa de crecimiento se acelere con el tiempo formando una curva ascendente pronunciada.",
    correct: '<img src="assets/m14_graphnat3.png" alt="Gráfica geométrica" class="w-full max-h-36 object-contain pointer-events-none mx-auto py-1">',
    distractors: [
      '<img src="assets/m14_graphnat1.png" alt="Gráfica lineal" class="w-full max-h-36 object-contain pointer-events-none mx-auto py-1">',
      '<img src="assets/m14_graphnat2.png" alt="Gráfica constante" class="w-full max-h-36 object-contain pointer-events-none mx-auto py-1">',
      '<img src="assets/m14_graphnat4.png" alt="Gráfica decreciente" class="w-full max-h-36 object-contain pointer-events-none mx-auto py-1">'
    ],
    explanation: "TBR."
  }
];
