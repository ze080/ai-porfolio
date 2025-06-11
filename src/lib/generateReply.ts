// import { Message } from "./chat";

// // A very simple memory store
// let memory: {
//   name?: string;
// } = {};

// export const generateReply = (input: string, context: Message[]): string => {
//   const lower = input.toLowerCase();

//   // Learn user's name
//   const nameMatch = input.match(/my name is (\w+)/i);
//   if (nameMatch) {
//     memory.name = nameMatch[1];
//     return `Nice to meet you, ${memory.name}! 😄`;
//   }

//   // Respond to questions about user's name
//   if (lower.includes("my name")) {
//     return memory.name
//       ? `Your name is ${memory.name}, of course! 😉`
//       : "Hmm... I don't think you've told me your name yet.";
//   }

//   // Respond to questions about bot's name
//   if (lower.includes("your name")) return "I'm ZBot, your sarcastic AI sidekick. 🤖";
//   if (lower.includes("hi") || lower.includes("hello"))
//     return "Hello there! 👋 Ready to dive into the AI world?";
//   if (lower.includes("joke"))
//     return "Why did the AI break up with the computer? It felt too programmed. 💔";
//   if (lower.includes("help"))
//     return "Ask me anything about AI, your projects, or how to impress ChatGPT 😉.";

//   return `Hmm... "${input}"? Sounds like you're on a roll. Keep going! 🔥`;
// };