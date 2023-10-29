# 🌐 WebSearch Agent using OpenAI GPT-3.5 Turbo

Welcome to the WebSearch Agent project powered by OpenAI's GPT-3.5 Turbo! 🚀

This project is a versatile web search agent designed to answer your queries and retrieve relevant information from the web. By integrating the power of OpenAI's GPT-3.5 Turbo, this agent can provide informative responses to your questions.

## 📝 Introduction

This WebSearch Agent is built using the following technologies:

- **OpenAI GPT-3.5 Turbo**: The core of this agent, enabling it to generate human-like responses to your queries.

- **SerpAPI**: A tool used for fetching search engine results, making sure you get the most up-to-date information.

## 🛠 Setup

Before using this agent, you'll need to set up your environment. Make sure you have the following prerequisites in place:

1. **API Keys**: You'll need an API key from [SerpAPI](https://serpapi.com/) to fetch search results. Make sure to add your API key to your environment variables.

2. **Node.js**: This project is built using Node.js. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

3. **Dependencies**: Use npm or yarn to install the required dependencies by running:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## 🚀 Usage

To use the WebSearch Agent, follow these simple steps:

1. Configure your environment variables, especially the SerpAPI key, as mentioned in the setup section.

2. Replace the placeholder query in the following code with your question:

    ```javascript
    const res = await executor.run("Why did Sam Altman visit India recently?");
    console.log(res);
    ```

3. Execute your script using Node.js. The agent will use OpenAI's GPT-3.5 Turbo and SerpAPI to fetch relevant information and provide you with an informative response.

## 🤖 Example

Here's an example of using the agent to answer a question:

```javascript
const res = await executor.run("Why did Sam Altman visit India recently?");
console.log(res);
```

## 🌍 Contributing

Feel free to contribute to this project by improving its features, code, or documentation. You can submit issues or pull requests to help make this agent even better!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Enjoy using the WebSearch Agent, and happy coding! If you have any questions or need assistance, please don't hesitate to reach out.
