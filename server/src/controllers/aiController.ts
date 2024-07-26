import model from "../services/aiInit";

async function generateText(prompt: string) {
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  console.log(text);
  return text;
}


export {
    generateText
}