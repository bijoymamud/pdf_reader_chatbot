import { Send, X } from "lucide-react";
import React from "react";
import Container from "../../Layout/Container/Container";
const Interface = () => {
  const predefinedResponses = {
    "What is this document about?":
      "This document provides information about the uploaded content.",
    "Who created this document?":
      "The document was created by a sample user for demonstration purposes.",
    "What is my name?": "Hello Shakil, how are you?",
    "Can you help with this document?":
      "Sure! Let me know what specific help you need.",
    "What features does this app have?":
      "This app lets you upload PDFs, view them, and chat about their content.",
    "What is your purpose?": "I'm here to assist with your document queries.",
    "How to understand the code?": "This is for understanding purpose only",
  };

  const handleDefaultPromptClick = (prompt) => {
    console.log(prompt);
  };

  return (
    <div className="bg-white h-screen">
      <Container>
        <div className="flex items-center justify-between bg-indigo-400 p-2 text-white rounded-t-xl">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png"
              alt="chatbot img"
              className="w-[40px]"
            />
            <h3 className="font-semibold text-2xl">Skylar</h3>
          </div>

          <div className="bg-red-500 hover:bg-red-600 rounded-full p-1 cursor-pointer">
            <X />
          </div>
        </div>

        <div className="pt-5">
          <div className="bg-gray-300 p-[0.5px]"></div>
          <div className="flex flex-wrap gap-2 p-4 bg-slate-200 border-t">
            {Object.keys(predefinedResponses).map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleDefaultPromptClick(prompt)}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-lg"
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="bg-gray-300 p-[0.5px]"></div>
        </div>

        {/* input interface */}
        <div className="pt-4">
          <div className="px-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask a question...."
                className="input input-bordered rounded-r-none w-full text-sm"
              />
              <div className="bg-indigo-400 p-3 rounded-r-md text-white">
                <Send />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Interface;
