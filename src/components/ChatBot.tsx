// // src/pages/ChatBot.tsx
// import { Message } from "@/lib/chat";
// import { generateReply } from "@/lib/generateReply";
// import React, { useState, useEffect, useRef } from "react";
// import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Link } from "react-router-dom";

// const ChatBot = () => {
//   const [messages, setMessages] = useState<Message[]>([
//     { sender: "bot", text: "Hey, I'm ZBot. Ask me anything!" }
//   ]);
//   const [input, setInput] = useState("");
//   const endRef = useRef<HTMLDivElement | null>(null);

//   // Load messages from localStorage on mount
//   useEffect(() => {
//     const stored = localStorage.getItem("zbot-messages");
//     if (stored) {
//       setMessages(JSON.parse(stored));
//     }
//   }, []);

//   // Scroll and save messages to localStorage on change
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//     localStorage.setItem("zbot-messages", JSON.stringify(messages));
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage: Message = { sender: "user", text: input };
//     const botReply: Message = {
//       sender: "bot",
//       text: generateReply(input, [...messages, userMessage])
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     setTimeout(() => {
//       setMessages((prev) => [...prev, botReply]);
//     }, 500);
//   };

//   return (
//     <div className="min-h-screen h-screen w-full bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center px-4 py-6">
//       <Link to="/" className="text-purple-400 hover:underline text-lg mb-4 self-start">
//         ← Back to Home
//       </Link>

//       <Card className="w-full max-w-3xl h-[85vh] bg-gray-950 text-white border-gray-600 shadow-xl flex flex-col">
//         <CardHeader className="text-purple-400 text-xl font-semibold text-center">
//           ZBot 🤖
//         </CardHeader>

//         <CardContent className="flex-1 overflow-y-auto px-4">
//           <ScrollArea className="h-full pr-4">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex mb-2 ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`rounded-lg px-4 py-2 text-sm max-w-[75%] ${
//                     msg.sender === "user"
//                       ? "bg-purple-600 text-white"
//                       : "bg-gray-800 text-purple-300"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             <div ref={endRef} />
//           </ScrollArea>
//         </CardContent>

//         <CardFooter className="flex space-x-2 p-4 border-t border-gray-700">
//           <Input
//             className="bg-gray-800 text-white placeholder:text-gray-400 flex-1"
//             placeholder="Say something..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           />
//           <Button
//             onClick={handleSend}
//             className="bg-purple-600 hover:bg-purple-700"
//           >
//             Send
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default ChatBot;