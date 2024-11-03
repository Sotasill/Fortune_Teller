import axios from "axios";

const API_KEY =
  "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"; // Замените на ваш API ключ

export const fetchPredictionFromAI = async (cards) => {
  const prompt = `На основе следующих карт Таро: ${cards
    .map((card) => card.name)
    .join(", ")}, дайте предсказание.`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error("Too many requests. Please try again later.");
      // Реализация задержки или других действий
    } else {
      console.error("Error fetching prediction from AI:", error);
    }
    throw error;
  }
};
