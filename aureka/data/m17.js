// data/m17.js
var moduleInfo = {
  id: 17,
  title: "Biología",
  badge: "Módulo 17",
  topicVideos: {
    "teorias_evolutivas": {
      title: "Filosofías y teorías de la evolución",
      url: "https://youtu.be/dummy1"
    },
    "genetica_mendel": {
      title: "Leyes de Mendel y herencia genética",
      url: "https://youtu.be/dummy2"
    },
    "biotecnologia_bioetica": {
      title: "Biotecnología, eugenesia y bioética",
      url: "https://youtu.be/dummy3"
    }
  }
};

var questionBank = [
  {
    id: 1,
    topicId: null,
    type: "fill_blanks",
    prompt: "Completa la oración:",
    sentence: "Al cruzarse un individuo homocigoto de plumas negras con otro homocigoto de plumas blancas y se obtener descendientes con plumaje gris azulado, se observa la {0} como excepción mendeliana porque {1}.",
    hint: "Analiza el fenómeno genético donde ambos alelos se manifiestan al mismo tiempo sin que uno anule al otro.",
    correctOrder: [
      "codominancia",
      "se expresan al mismo tiempo los dos alelos"
    ],
    distractors: [
      "dominancia",
      "recesividad",
      "se manifiesta exclusivamente un sólo alelo",
      "no llega a manifestarse ninguno de los alelos",
      "no se expresa ninguno de los alelos del gen"
    ],
    explanation: "La <b>codominancia</b> ocurre cuando ambos alelos parentales son dominantes y se manifiestan conjuntamente en el fenotipo del heterocigoto, generando una expresión simultánea (como el plumaje gris azulado obtenido al cruzar individuos negros y blancos)."
  },
  {
    id: 2,
    topicId: null,
    type: "fill_blanks",
    prompt: "Completa la oración sobre las pruebas biológicas de la evolución humana:",
    sentence: "Al igual que todos los seres vivos, el hombre ha evolucionado, prueba de ello son los {0} del hombre primitivo, cuyos rasgos se fueron modificando durante el proceso de {1}.",
    hint: "Busca la evidencia paleontológica de restos antiguos y el término que describe la evolución morfológica de los ancestros humanos.",
    correctOrder: [
      "fósiles",
      "hominización"
    ],
    distractors: [
      "artefactos",
      "sedentarismo",
      "herramientas",
      "especiación",
      "movimientos tectónicos"
    ],
    explanation: "La prueba biológica directa de la evolución humana radica en el <b>registro fósil</b>, el cual evidencia las modificaciones anatómicas y craneales que ocurrieron de forma paulatina a lo largo del proceso de <b>hominización</b>."
  },
  {
    id: 3,
    topicId: null,
    type: "match_columns",
    prompt: "Relaciona los principios esenciales de la bioética con la situación práctica que ejemplifica cada persona:",
    hint: "Distingue entre el derecho a elegir sobre el propio cuerpo (autonomía), el reparto equitativo de recursos o méritos (justicia) y la necesidad de evitar un mal mayor como la muerte mediante una intervención drástica (no maleficencia).",
    pairs: [
      {
        left: "Autonomía",
        right: "<b>Beto:</b> Mi tía tuvo cáncer y ella quiso decidir sobre la posibilidad de usar un nuevo tratamiento que le ayudó un tiempo a mantenerse bien."
      },
      {
        left: "Justicia",
        right: "<b>Alma:</b> Es dar a cada quien lo que merezca pero de forma equitativa por un criterio de antigüedad, conocimientos y aptitudes."
      },
      {
        left: "No maleficencia",
        right: "<b>Carmen:</b> Al torero le tuvieron que amputar la pierna de urgencia para salvarlo de una grave cornada, pues era eso o la muerte."
      }
    ],
    explanation: "Los principios bioéticos se definen así:<br>• <b>Autonomía:</b> La facultad del paciente de decidir libremente sobre sus propios tratamientos con consentimiento informado.<br>• <b>Justicia:</b> La distribución equitativa de cargas, beneficios y atención médica.<br>• <b>No maleficencia:</b> La obligación de no infligir daño intencional, admitiendo intervenciones invasivas sólo cuando evitan un daño catastrófico mayor como la muerte."
  },
  {
    id: 4,
    topicId: null,
    type: "match_columns",
    prompt: "Relaciona cada concepto genético y evolutivo con la descripción que le corresponde:",
    hint: "Identifica qué proceso altera las secuencias del ADN, cuál transmite rasgos entre generaciones, cuál define la supervivencia del más apto y cuál se hereda causando afecciones biológicas.",
    pairs: [
      {
        left: "Mutación",
        right: "Cambio en información genética."
      },
      {
        left: "Herencia",
        right: "Característica que pasa de una generación a otra."
      },
      {
        left: "Selección natural",
        right: "Supervivencia del más apto."
      },
      {
        left: "Enfermedad genética",
        right: "Afecta a nivel hereditario."
      }
    ],
    explanation: "Una <b>mutación</b> es una alteración en la secuencia de nucleótidos del ADN; la <b>herencia</b> es la transmisión de caracteres de progenitores a descendientes; la <b>selección natural</b> favorece la supervivencia y reproducción diferencial del más apto en un medio determinado; y una <b>enfermedad genética</b> es aquella condición patológica transmitida hereditariamente."
  },
  {
    id: 5,
    topicId: null,
    type: "fill_blanks",
    prompt: "Completa la descripción de la filosofía transformista:",
    sentence: "El ejemplo clásico de la teoría de la evolución de {0} es el del cuello de la jirafa, que al estirarlo continuamente para conseguir alimento, lo alargaban y engendraban descendientes con el cuello cada vez un poco más largo.",
    hint: "Identifica al naturalista francés que propuso la ley del uso y desuso y la herencia de los caracteres adquiridos.",
    correctOrder: [
      "Lamarck"
    ],
    distractors: [
      "Darwin",
      "Mendel",
      "Sedgwick",
      "Lyell"
    ],
    explanation: "<b>Jean-Baptiste Lamarck</b> planteó en su corriente transformista que los cambios en el entorno provocan nuevas necesidades en los seres vivos, lo que conduce al uso o desuso de determinados órganos y a la herencia directa de esas adaptaciones adquiridas a sus descendientes."
  },
  {
    id: 6,
    topicId: null,
    type: "choice",
    prompt: "De acuerdo a los postulados de Darwin, todas las especies animales surgieron de otras que existieron previamente.",
    image: null,
    hint: "Analiza el concepto de descendencia con modificación a partir de formas de vida ancestrales.",
    correct: "Verdadero.",
    distractors: [
      "Falso."
    ],
    explanation: "Es <b>verdadero</b>. Uno de los pilares de la teoría darwiniana es que las especies no son inmutables ni aparecieron de la nada, sino que descienden con modificaciones a partir de especies ancestrales preexistentes."
  },
  {
    id: 7,
    topicId: null,
    type: "choice",
    prompt: "De acuerdo a los postulados de Darwin, si ejercitamos constantemente cualquiera de nuestros órganos se tendrá un mayor desarrollo de ellos y lo transmitiremos a nuestros hijos.",
    image: null,
    hint: "Distingue entre la herencia genética y la hipótesis del uso y desuso de los órganos con herencia de caracteres adquiridos.",
    correct: "Falso",
    distractors: [
      "Verdadero"
    ],
    explanation: "Es <b>falso</b>. La idea de que las modificaciones anatómicas adquiridas por el uso continuo o el ejercicio se heredan a la descendencia corresponde al transformismo de Lamarck, no a la selección natural postulada por Darwin."
  },
  {
    id: 8,
    topicId: null,
    type: "choice",
    prompt: "De acuerdo a los postulados de Darwin, todos los seres vivos provenimos de un ancestro común.",
    image: null,
    hint: "Recuerda la propuesta del árbol de la vida y el origen compartido de la biodiversidad.",
    correct: "Verdadero",
    distractors: [
      "Falso"
    ],
    explanation: "Es <b>verdadero</b>. Darwin estableció formalmente la existencia de un <b>ancestro común</b> universal del cual se han derivado todas las formas de vida a lo largo de las eras geológicas."
  },
  {
    id: 7,
    topicId: null,
    type: "choice",
    prompt: "De acuerdo a Galton, la eugenesia es la ciencia que...",
    image: null,
    hint: "Piensa en el término acuñado por el primo de Darwin para intentar perfeccionar al ser humano mediante la selección artificial.",
    correct: "trata de mejorar las cualidades innatas de una raza.",
    distractors: [
      "...estudia la composición, fisiología y herencia de los organismos.",
      "...sirve al hombre para alterar el ADN de un organismo.",
      "...estudia la moralidad de los comportamientos humanos."
    ],
    explanation: "<b>Francis Galton</b> acuñó el término eugenesia definiéndola formalmente como la ciencia que procura mejorar las cualidades biológicas e innatas de una raza mediante el control de la reproducción humana."
  },
  {
    id: 8,
    topicId: null,
    type: "match_columns",
    prompt: "Relaciona los planteamientos de explicación sobre los OVNIs con el estado correspondiente según la Ley de los tres Estados de Augusto Comte:",
    hint: "El estado teológico recurre a creencias sobrenaturales y seres superiores; el filosófico a conjeturas abstractas o racionales sin prueba empírica; y el científico a leyes naturales y físicas observables.",
    pairs: [
      {
        left: "Teológico",
        right: "<b>Karen:</b> Yo creo en los OVNIs aunque nunca los haya visto, pero estoy segura de que son seres etéreos que nos observan y le reportan a otro ser superior lo que hace el ser humano."
      },
      {
        left: "Filosófico",
        right: "<b>Adrián:</b> Los OVNIs deben ser reales pues los físicos y biólogos siempre han conjeturado acerca de la existencia de vida en el universo y la posibilidad de que la Tierra no sea el único planeta habitado."
      },
      {
        left: "Científico",
        right: "<b>Bruno:</b> Las fotografías y videos de OVNIs se explican por fenómenos de óptica, cambios de temperatura en la atmósfera, nubosidad y hasta aviones pasando a gran altura."
      }
    ],
    explanation: "Según la <b>Ley de los tres Estados</b> de Comte, la explicación de Karen es teológica al recurrir a seres divinos para explicar un fenómeno; la de Adrián es filosófica al presentarse como una opción racional pero sin ofrecer ninguna prueba; y la de Bruno es científica al mostrar pruebas falseables a través del método científico."
  },
  {
    id: 9,
    topicId: null,
    type: "choice",
    prompt: "¿Qué científico realizó el experimento de cruza con plantas de chícharos que producían semillas amarillas y verdes como generación parental?",
    image: null,
    hint: "Monje agustino austríaco reconocido como el padre de la genética clásica.",
    correct: "Gregor Mendel",
    distractors: [
      "Thomas H. Morgan",
      "Walter Sutton",
      "Hugo de Vries"
    ],
    explanation: "<b>Gregor Johann Mendel</b> estableció las leyes fundamentales de la herencia genética a través de sus minuciosos experimentos de hibridación con plantas de chícharo (<i>Pisum sativum</i>) entre 1856 y 1863."
  },
  {
    id: 10,
    topicId: null,
    type: "multi_select",
    prompt: "Selecciona todas las características o procesos que corresponden a la <b>recombinación homóloga</b>:",
    correctAnswers: [
      "Sucede durante la meiosis.",
      "El material genético es copiado de cromosoma a cromosoma.",
      "Ocurre en cambio de clases de inmunoglobulinas."
    ],
    distractors: [
      "Ocurre en los virus que van mutando de un individuo a otro.",
      "Se presenta en el virus de la influenza AH1N1."
    ],
    hint: "La recombinación homóloga involucra intercambio entre secuencias de cromosomas semejantes en la célula e interviene en la diversidad de anticuerpos.",
    explanation: "La <b>recombinación homóloga</b> se produce durante la división meiótica, transfiere fragmentos entre cromosomas homólogos y participa en el cambio de isotipos o clases de inmunoglobulinas. Los enunciados sobre mutaciones y transmisión en virus corresponden a la recombinación específica de sitio."
  },
  {
    id: 11,
    topicId: null,
    type: "multi_select",
    prompt: "Selecciona todas las características o procesos que corresponden a la <b>recombinación específica de sitio</b>:",
    correctAnswers: [
      "Ocurre en los virus que van mutando de un individuo a otro.",
      "Se presenta en el virus de la influenza AH1N1."
    ],
    distractors: [
      "Sucede durante la meiosis.",
      "El material genético es copiado de cromosoma a cromosoma.",
      "Ocurre en cambio de clases de inmunoglobulinas."
    ],
    hint: "La recombinación específica de sitio se da en regiones concretas de nucleótidos y es empleada por agentes víricos para recombinarse.",
    explanation: "La <b>recombinación específica de sitio</b> ocurre en secuencias diana delimitadas y es el mecanismo que aprovechan virus como el de la influenza AH1N1 para recombinar y mutar su genoma entre hospederos. Los procesos meióticos, cromosómicos celulares e inmunoglobulinas pertenecen a la recombinación homóloga."
  },
  {
    id: 11,
    topicId: null,
    type: "choice",
    prompt: "¿Qué describe el término <i>positivismo</i> acuñado por Auguste Comte?",
    image: null,
    hint: "Comte consideraba que este estado dejaba atrás la teología y la metafísica para alcanzar el orden empírico definitivo.",
    correct: "La fase más elevada del conocimiento en el hombre.",
    distractors: [
      "La fase intermedia que busca explicación de los fenómenos.",
      "La fase inicial del conocimiento de la naturaleza de las cosas.",
      "La fase más elevada para deducir que hay un ser creador."
    ],
    explanation: "Comte utilizó el término <b>positivismo</b> para señalar el estado positivo o científico como la etapa más madura, perfecta y elevada del intelecto humano, basada en hechos observables y leyes universales."
  },
  {
    id: 12,
    topicId: null,
    type: "choice",
    prompt: "¿Cómo se denomina el conjunto de técnicas para conocer la adecuada formación y desarrollo del feto antes de su nacimiento?",
    image: null,
    hint: "Engloba ecografías, amniocentesis y pruebas genéticas realizadas a la madre durante la gestación.",
    correct: "Diagnóstico prenatal.",
    distractors: [
      "Diagnóstico de enfermedades genéticas.",
      "Fecundación in vitro.",
      "Diagnóstico genético preimplantacional."
    ],
    explanation: "El <b>diagnóstico prenatal</b> comprende todas las herramientas clínicas y paraclínicas orientadas a evaluar el estado de salud y el desarrollo estructural y cromosómico del feto durante el embarazo."
  },
  {
    id: 13,
    topicId: null,
    type: "choice",
    prompt: "¿Dónde se puede observar el uso de las técnicas de la ingeniería genética?",
    image: null,
    hint: "Consiste en la introducción deliberada de genes foráneos en especies vegetales para mejorar su resistencia o rendimiento.",
    correct: "En el desarrollo de productos agrícolas transgénicos",
    distractors: [
      "En la producción de suplementos alimenticios",
      "En la aplicación en el desarrollo de pesticidas y herbicidas",
      "En los métodos de control de la natalidad humana"
    ],
    explanation: "La <b>ingeniería genética</b> se aplica de forma destacada en la agrobiotecnología mediante la creación de <b>organismos genéticamente modificados (transgénicos)</b> con tolerancia a sequías, plagas o agroquímicos."
  },
  {
    id: 14,
    topicId: null,
    type: "choice",
    prompt: "¿Cómo se le denomina a la variedad de seres vivos que habitan en la Tierra y los patrones que lo conforman?",
    image: null,
    hint: "Término ecológico compuesto por el prefijo para vida y variación.",
    correct: "Biodiversidad.",
    distractors: [
      "Bioma.",
      "Hábitat.",
      "Nivel trófico."
    ],
    explanation: "La <b>biodiversidad</b> o diversidad biológica describe la variedad completa de especies biológicas, su variabilidad genética dentro de cada población y los ecosistemas que integran en el planeta."
  },
  {
    id: 15,
    topicId: null,
    type: "multi_select",
    prompt: "Selecciona todas las áreas en las que se puede aplicar directamente la <b>biotecnología</b>:",
    correctAnswers: [
      "Acuicultura.",
      "Ganadería.",
      "Medicina."
    ],
    distractors: [
      "Física."
    ],
    hint: "La biotecnología utiliza sistemas biológicos y organismos vivos o sus derivados; descarta la disciplina que estudia las leyes fundamentales de la materia y energía inerte.",
    explanation: "La <b>biotecnología</b> tiene aplicaciones prácticas en la acuicultura (sanidad y reproducción marina), la ganadería (mejoramiento genético y nutrición) y la medicina (desarrollo de fármacos y terapias genéticas). La física es una ciencia exacta fundamental, no una rama de aplicación biotecnológica directa."
  },
  {
    id: 16,
    topicId: null,
    type: "match_columns",
    prompt: "Relaciona a cada naturalista o pensador con la propuesta evolutiva o científica que formuló:",
    hint: "Linneo formalizó la taxonomía; Lyell la hipótesis de uniformidad geológica; Leclerc fue precursor del estudio geográfico de las especies; y Lamarck abogó por los mecanismos de transformación de las especies.",
    pairs: [
      {
        left: "Carl Linneo",
        right: "Sistema de clasificación natural jerárquico."
      },
      {
        left: "Charles Lyell",
        right: "Hipótesis del uniformitarismo."
      },
      {
        left: "Georges Louis Leclerc",
        right: "Fundó la biogeografía."
      },
      {
        left: "Jean-Baptiste Lamarck",
        right: "Postuló el transformismo."
      }
    ],
    explanation: "• <b>Linneo:</b> Padre de la taxonomía y la nomenclatura binomial jerárquica.<br>• <b>Lyell:</b> Desarrolló el uniformitarismo geológico que inspiró los tiempos graduales de Darwin.<br>• <b>Leclerc:</b> Pionero de la biogeografía al notar que regiones aisladas con climas similares tienen floras y faunas distintas.<br>• <b>Lamarck:</b> Primer gran defensor del transformismo biológico mediante la adaptación y uso."
  },
  {
    id: 17,
    topicId: null,
    type: "choice",
    prompt: "Si el espermatozoide de un perro contiene 39 cromosomas, ¿cuál es su número haploide?",
    image: null,
    hint: "Recuerda que un gameto (óvulo o espermatozoide) contiene exactamente la dotación haploide ($n$) de la especie.",
    correct: "39",
    distractors: [
      "38 + 1",
      "78",
      "76 + 2"
    ],
    explanation: "Los gametos son células sexuales haploides ($n$). Dado que el espermatozoide ya contiene 39 cromosomas, el <b>número haploide</b> de los perros es directamente <b>39</b> (su número diploide $2n$ es de 78)."
  },
  {
    id: 18,
    topicId: "teorias_evolutivas", //FROM HERE ALSO NULL
    type: "multi_select",
    prompt: "Selecciona todas las propuestas que corresponden a la postura de los <b>Biometristas</b>:",
    correctAnswers: [
      "Defienden la selección natural propuesta por Darwin.",
      "Los cambios en las especies ocurren de forma paulatina."
    ],
    distractors: [
      "La evolución se presenta por transformaciones en las células.",
      "Se presenta una duplicación anormal de las células por error en el ADN."
    ],
    hint: "Los biometristas apoyaban la teoría original de Darwin y sostenían que la evolución ocurre de forma continua, cuantitativa y gradual.",
    explanation: "Los <b>biometristas</b> defendían la selección natural darwiniana y argumentaban que la evolución se produce mediante variaciones continuas y cambios que ocurren de manera paulatina. Las posturas relacionadas con alteraciones bruscas o errores en las células corresponden a los mutacionistas."
  },
  {
    id: 19,
    topicId: "teorias_evolutivas",
    type: "multi_select",
    prompt: "Selecciona todas las propuestas que corresponden a la postura de los <b>Mutacionistas</b>:",
    correctAnswers: [
      "La evolución se presenta por transformaciones en las células.",
      "Se presenta una duplicación anormal de las células por error en el ADN."
    ],
    distractors: [
      "Defienden la selección natural propuesta por Darwin.",
      "Los cambios en las especies ocurren de forma paulatina."
    ],
    hint: "Los mutacionistas consideraban que las mutaciones drásticas en el material celular eran el verdadero motor evolutivo, por encima de la selección gradual.",
    explanation: "Los <b>mutacionistas</b> sostenían que la evolución operaba mediante saltos abruptos causados por mutaciones y transformaciones anómalas en el ADN y las células. La defensa de la selección natural y el cambio paulatino corresponde a la corriente biométrica."
  },
  {
    id: 19,
    topicId: "biotecnologia_bioetica",
    type: "choice",
    prompt: "Completa el siguiente enunciado:<br><br>En el año 2008 se realizó una importante campaña de vacunación en niñas de 11 a 13 años en el DF, con un impacto nacional, con el objeto de evitar contagio de:",
    image: null,
    hint: "Infección de transmisión sexual asociada al desarrollo de cáncer cervicouterino en mujeres.",
    correct: "virus de papiloma humano",
    distractors: [
      "influenza AH1N1",
      "hepatitis A",
      "meningococo"
    ],
    explanation: "La campaña de salud pública de 2008 en la capital tuvo por meta inmunizar masivamente a niñas escolares contra el <b>Virus del Papiloma Humano (VPH)</b> antes del inicio de su vida sexual para prevenir lesiones premalignas y cáncer de cuello uterino."
  },
  {
    id: 20,
    topicId: "teorias_evolutivas",
    type: "choice",
    prompt: "Lee el caso del siguiente documento y contesta la respuesta de manera justificada:<br><br><i>\"Pedro aprendió por sí mismo a realizar los trabajos de carpintería con el mayor cuidado para no tener accidentes. Se percató de ello cuando supo de un compañero que se cortó un dedo con una segueta.\"</i><br><br>¿Qué tipo de aprendizaje se relaciona con el caso de Pedro?",
    image: null,
    hint: "El empirismo sostiene que el conocimiento surge de la experiencia fáctica directa o indirecta, no de deducciones lógico-matemáticas abstractas.",
    correct: "Empirismo. Aprendió por medio de la experiencia.",
    distractors: [
      "Racionalismo. Investigó el uso de la herramienta.",
      "Empirismo. Investigó el uso de la herramienta.",
      "Racionalismo. Aprendió por medio de la experiencia."
    ],
    explanation: "El <b>empirismo</b> postula que el conocimiento se deriva del contacto con la realidad y la experiencia vivencial de hechos concretos, a diferencia del racionalismo puro que opera mediante razonamientos lógicos a priori."
  },
  {
    id: 21,
    topicId: "genetica_mendel",
    type: "choice",
    prompt: "Completa la siguiente descripción:<br><br>La manifestación visible de los genes, por ejemplo, pelo rubio, ojos castaños, nariz aguileña, color de piel y la estatura entre otros se denomina:",
    image: null,
    hint: "Distingue entre la información contenida en el código genético y los rasgos corporales físicos observables.",
    correct: "fenotipo",
    distractors: [
      "genotipo",
      "Locus",
      "cariotipo"
    ],
    explanation: "El <b>fenotipo</b> es la expresión observable y medible del genotipo en interacción con el medio ambiente, abarcando rasgos anatómicos, fisiológicos y conductuales."
  },
  {
    id: 22,
    topicId: "teorias_evolutivas",
    type: "choice",
    prompt: "¿Cómo se le denomina al cambio continuo de los seres vivos, que se ha presentado en las eras geológicas y que ha permitido su sobrevivencia?",
    image: null,
    hint: "Es el concepto central de la biología que explica la transformación de las especies a lo largo del tiempo geológico.",
    correct: "Evolución.",
    distractors: [
      "Integración.",
      "Adaptación.",
      "Transformación."
    ],
    explanation: "La <b>evolución biológica</b> es el proceso continuo de transformación y diversificación de los linajes de organismos vivos a lo largo de las eras geológicas por el cual emergen nuevas adaptaciones y especies."
  },
  {
    id: 23,
    topicId: "biotecnologia_bioetica",
    type: "choice",
    prompt: "¿Cuál de las siguientes afirmaciones corresponde con un obstáculo para la investigación biotecnológica en México?",
    image: null,
    hint: "Enfócate en la limitación económica de insumos de laboratorio y espacios de experimentación agrícola.",
    correct: "Rentar parcelas y obtener materiales de investigación es altamente costoso en nuestro país.",
    distractors: [
      "Se tienen restricciones por parte de la Iglesia en nuestro país para la investigación en Biología.",
      "La producción agrícola nacional es insuficiente para cubrir las necesidades de la población.",
      "Los investigadores mexicanos no compiten en preparación y estudios con los de otros países."
    ],
    explanation: "Uno de los principales frenos al desarrollo de biotecnología agrícola y molecular en México radica en el <b>elevado costo de reactivos, infraestructura de laboratorio y el arrendamiento de parcelas de prueba</b> con bioseguridad certificada."
  },
  {
    id: 24,
    topicId: "genetica_mendel",
    type: "choice",
    prompt: "¿Quién es el investigador que encontró los caracteres dominantes que determinan el efecto de un gen y los recesivos por no tener efecto genético visible en el heterocigoto?",
    image: null,
    hint: "El monje que formuló las primeras leyes de la herencia mediante el análisis estadístico de sus plantas.",
    correct: "Gregor Mendel.",
    distractors: [
      "Francis Crick.",
      "Thomas Hunt.",
      "James Watson."
    ],
    explanation: "<b>Gregor Mendel</b> dedujo la presencia de factores hereditarios independientes organizados en caracteres dominantes (que se imponen fenotípicamente) y recesivos (que quedan enmascarados en la primera generación filial)."
  },
  {
    id: 25,
    topicId: "biotecnologia_bioetica",
    type: "choice",
    prompt: "Del libro de texto del Módulo \"Evolución y sus repercusiones sociales\" se adaptó un fragmento. Completa los espacios en blanco:<br><br>Los organismos ________ son mutantes. Si dichos organismos son menos eficientes para ________ que las variedades naturales entonces ________ causan problema en la diversidad biológica.",
    image: null,
    hint: "Se refiere a plantas o animales modificados por bioingeniería y su capacidad de competir en vida libre.",
    correct: "transgénicos ⇒ sobrevivir y reproducirse ⇒ no",
    distractors: [
      "transgénicos ⇒ alimentarse ⇒ no",
      "naturales ⇒ sobrevivir y reproducirse ⇒ sí",
      "naturales ⇒ alimentarse ⇒ sí"
    ],
    explanation: "Los <b>transgénicos</b> contienen modificaciones génicas artificiales. Si en condiciones silvestres poseen una menor eficacia biológica para sobrevivir y reproducirse frente a las variedades nativas, no logran desplazar a las poblaciones silvestres ni perjudicar la biodiversidad."
  },
  {
    id: 26,
    topicId: "teorias_evolutivas",
    type: "choice",
    prompt: "Analiza el siguiente texto y completa las palabras que faltan de acuerdo al contexto sociohistórico del que se habla:<br><br><i>\"El rompimiento de las reglas (1)________ posibilitó la liberación de la rigidez de las estructuras y jerarquías verticales de la (2)________ y plantear innovaciones en las áreas del conocimiento. Se desarrolló la teoría de la (3)________, que se ocupa de obtener el conocimiento de forma objetiva, racional, metódica etc.\"</i>",
    image: null,
    hint: "Identifica la influencia de la Iglesia medieval, el sistema filosófico escolástico y la rama de la filosofía de la ciencia que estudia el conocimiento científico.",
    correct: "[1-religiosas] [2- escolástica] [3-epistemología]",
    distractors: [
      "[1-religiosas] [2- patrística] [3-epistemología]",
      "[1-políticas] [2- escolástica] [3-gnoselogía]",
      "[1-políticas] [2- patrística] [3-gnoselogía]"
    ],
    explanation: "La superación de los dogmas <b>religiosos</b> permitió al pensamiento renacentista y moderno apartarse de la <b>escolástica</b> clerical para dar lugar a la <b>epistemología</b>: la disciplina que investiga la fundamentación, validez y métodos rigurosos del conocimiento científico."
  },
  {
    id: 27,
    topicId: "teorias_evolutivas",
    type: "match_columns",
    prompt: "Relaciona cada disciplina biológica con su objeto de estudio específico:",
    hint: "La biogeografía analiza mapas y hábitats; la morfología la anatomía externa e interna; y la paleontología los restos fósiles preservados en roca.",
    pairs: [
      {
        left: "Biogeografía",
        right: "Distribución de los seres vivos sobre la Tierra."
      },
      {
        left: "Morfología",
        right: "Forma de los seres vivos y su evolución."
      },
      {
        left: "Paleontología",
        right: "Seres orgánicos desaparecidos con base en rastros y huellas fósiles."
      }
    ],
    explanation: "• <b>Biogeografía:</b> Estudia los patrones espaciales de dispersión y localización geográfica de las especies.<br>• <b>Morfología:</b> Examina la estructura, forma y arquitectura corporal de los organismos.<br>• <b>Paleontología:</b> Reconstruye la historia biológica pasada a través de fósiles, impresiones y restos óseos petrificados."
  },
  {
    id: 28,
    topicId: "genetica_mendel",
    type: "match_columns",
    prompt: "Relaciona los conceptos genéticos con la definición o descripción correspondiente:",
    hint: "El cromosoma es la macromolécula nuclear de ADN empaquetado; el gen codifica información; el fenotipo es lo visible; la mitosis replica células idénticas; y el heterocigoto tiene dos alelos diferentes.",
    pairs: [
      {
        left: "Cromosoma",
        right: "Estructura celular formada por proteínas y ADN."
      },
      {
        left: "Gen",
        right: "Contiene información necesaria para la síntesis de una macromolécula."
      },
      {
        left: "Fenotipo",
        right: "Rasgos externos de un organismo."
      },
      {
        left: "Mitosis",
        right: "La célula se divide y da lugar a dos células hijas con la misma cantidad de cromosomas."
      },
      {
        left: "Heterocigoto",
        right: "Porta dos genes distintos que determinan una misma característica."
      }
    ],
    explanation: "• <b>Cromosoma:</b> Estructura de cromatina condensada (ADN y proteínas histonas).<br>• <b>Gen:</b> Unidad molecular de herencia que codifica para un ARN funcional o proteína.<br>• <b>Fenotipo:</b> Expresión física y fisiológica visible.<br>• <b>Mitosis:</b> División celular somática conservativa.<br>• <b>Heterocigoto:</b> Organismo con alelos disímiles en un locus determinado ($Aa$)."
  },
  {
    id: 29,
    topicId: "genetica_mendel",
    type: "choice",
    prompt: "Mendel en sus experimentos cruzó chícharos (o guisantes) con semillas lisas y chícharos con semillas rugosas, siendo la característica lisa dominante sobre la rugosa. Recolectó semillas de esta cruza y obtuvo la generación F1 de plantas. Después dejó que se autopolinizaran para formar una segunda generación (F2).<br><br>¿Cuál fue el resultado de dicho experimento?",
    image: null,
    hint: "En la primera generación la dominancia es del 100%, mientras que en la F2 reaparece el carácter recesivo en una proporción 3:1.",
    correct: "Todas las semillas de la generación F1 y 75% de F2 fueron lisas.",
    distractors: [
      "La totalidad de las semillas de las generaciones F1 y F2 fueron lisas.",
      "25% de la generación F1 y 25% de las semillas de F2 fueron rugosas.",
      "50% de la generación F1 y 75% de las semillas de F2 fueron lisas."
    ],
    explanation: "Al cruzar homocigotos $AA \\times aa$, la generación filial 1 (F1) es 100% lisa heterocigota ($Aa$). Al autofecundarse F1 ($Aa \\times Aa$), la generación filial 2 (F2) produce una proporción fenotípica mendeliana clásica de <b>75% semillas lisas</b> ($AA$ y $Aa$) y <b>25% semillas rugosas</b> ($aa$)."
  },
  {
    id: 30,
    topicId: "genetica_mendel",
    type: "drag_order",
    prompt: "Ordena cronológicamente los siguientes hitos históricos relacionados con el descubrimiento de la herencia genética:",
    hint: "Empieza por el aislamiento de los ácidos nucleicos en la célula, pasa por las moscas de Morgan, la identificación del ADN como portador, la difracción de rayos X y el modelo de doble hélice.",
    correctOrder: [
      "Se descubre que la célula tiene ADN y ARN.",
      "Se reconocen los hallazgos de Morgan, \"Los cromosomas son portadores de la herencia\".",
      "Descubrimiento de la parte de los cromosomas responsable de portar la información genética.",
      "Se observa la estructura helicoidal del ADN.",
      "Se propone un modelo molecular del ADN."
    ],
    explanation: "La cronología científica correcta es:<br>1. <b>Fines del siglo XIX / inicios del XX:</b> Descubrimiento y aislamiento celular de los ácidos nucleicos (ADN y ARN).<br>2. <b>1910-1915:</b> Experimentos de Thomas H. Morgan demostrando que los cromosomas portan los genes.<br>3. <b>1944:</b> Identificación de que el ADN de los cromosomas (y no las proteínas) es el material genético (Avery, MacLeod y McCarty).<br>4. <b>1952:</b> Obtención de la fotografía 51 por Rosalind Franklin evidenciando la doble hélice por difracción de rayos X.<br>5. <b>1953:</b> Publicación del modelo molecular tridimensional del ADN por Watson y Crick."
  }
];
