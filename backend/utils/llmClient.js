import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function generateScript(prompt) {
  const response = await client.chat.completions.create({
    model: "qwen/qwen3-32b",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.6
  });
  console.log("LLM response:", response);
  if(!response.choices || response.choices.length === 0) {
    throw new Error("No response from LLM");
  }

  return response.choices[0].message.content;
}
