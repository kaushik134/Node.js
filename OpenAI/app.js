const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
async function start(){
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "facebook authentication ",
    temperature: 0,
    max_tokens: 3000,
});
console.log(response.data.choices[0].text);
}
start()