import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import * as dotenv from "dotenv";
dotenv.config();

const template = "what would be a good company name for a company that makes {product}?";
const promptTemplate = new PromptTemplate({
    template: template,
    inputVariables: ["product"],
});

const model = new OpenAI({
    temperature: 0.9,
    modelName:"gpt-3.5-turbo",
});

const chain = new LLMChain({
    llm: model,
    prompt: promptTemplate,
});

const res = await chain.call({
    product: "voice clones for influencers and distributes them to their followers",
});

console.log(res);
