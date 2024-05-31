'use client'

import { useMessageStore } from "@/zustand/message";
import { useEffect, useRef } from "react";
import Message from "./Message";

export default function ChatHistory() {
    const { messages } = useMessageStore();
    const chatMessagesRef = useRef<null | HTMLDivElement>(null); 

    // The scroll Function comes from the following post of stackoverflow:
    // https://stackoverflow.com/a/52266212
    const scrollToBottom = () => {
        chatMessagesRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    // TODO: ADD margin to first message

    return(
        <div className="flex w-full sm:w-[70%] p-2 h-full sm:border sm:border-b-0 border-custom-text m-auto overflow-hidden self-center w-128 mt-[40px] sm:mt-[20px]">
            <div className="w-full h-full">
                <div className="overflow-y-scroll overflow-x-hidden p-2.5  break-words" id="chat-messages">
                    <Message key={-1} id={-1} role={"Assistant"} message={"Hi, I'm a AI system designed to help you learn about the party manifesto. You can ask me as many questions about the party manifesto as you like and I will answer them for you."}/>
                    {messages.map((message) => (
                        <Message key={message.id} id={message.id} role={message.role} message={message.content} />
                    ))}
                    <div ref={chatMessagesRef} />
                </div>
            </div>
        </div>
    );
}