// questions.js
const questionBank = [
  {
    id: 1,
    type: "choice",
    prompt: "¿Cuál es el vértice de la parábola $f(x) = x^2 - 4x + 3$?",
    image: null,
    correct: "$(2, -1)$",
    distractors: ["$(-2, 1)$", "$(0, 3)$", "$(4, 3)$"],
    explanation: "Con $x = -\\frac{b}{2a} = 2$, calculamos $f(2) = 2^2 - 4(2) + 3 = -1$."
  },
  {
    id: 2,
    type: "choice",
    prompt: "En un modelo de autogestión, la comunidad define sus propias metas y recursos sin depender de imposiciones verticales.",
    image: null,
    correct: "Verdadero",
    distractors: ["Falso"],
    explanation: "La autogestión transfiere el poder de decisión y responsabilidad directamente al grupo colectivo."
  },
  {
    id: 3,
    type: "drag_order",
    prompt: "Ordena los pasos para la resolución comunitaria de problemas:",
    image: null,
    correctOrder: [
      "1. Diagnóstico colectivo",
      "2. Planificación participativa",
      "3. Ejecución de la acción",
      "4. Evaluación en asamblea"
    ],
    explanation: "La secuencia parte de detectar la necesidad en común y concluye valorando los resultados en conjunto."
  }
];
