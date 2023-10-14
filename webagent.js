import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { ChatAgent, AgentExecutor } from "langchain/agents";

import * as dotenv from "dotenv";
dotenv.config();

const tools = [
    new SerpAPI(process.env.SERP_API_KEY, {
        hl: "en",
        gl: "in",
    }),
];

const model = new ChatOpenAI({
    temperature: 0,
    modelName:"gpt-3.5-turbo",
});

const agent = ChatAgent.fromLLMAndTools(model, tools);

const executor = AgentExecutor.fromAgentAndTools({
    agent: agent,
    tools: tools,
});

const res = await executor.run("Why did Sam Altman visit India recently?");
console.log(res);