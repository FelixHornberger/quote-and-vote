'use client'

import { useMessageStore } from "@/zustand/message";
import { useState } from "react";
import { KeyboardEvent } from 'react';
import {
    createParser,
    ParsedEvent,
    ReconnectInterval,
} from 'eventsource-parser';
import Loader from "./Loader";
import TaskButton from "../buttons/TaskButton";
import { generatePrompt } from "@/utils/prompt";
import { usePartyStore } from "@/zustand/party";

export default function ChatInput() {

    const [loading, setLoading] = useState(false);
    const [generatedAnswers, setGeneratedAnswers] = useState<String>('');
    const [showButton, setVisbility] = useState(false);
    const [counterChat, setCounterChat] = useState(0);
    const addMessageZustand = useMessageStore((state) => state.addMessage);
    const updateMessage = useMessageStore((state) => state.updateMessage);
    const partyStore = usePartyStore();
    const messages = useMessageStore();

    const generateAnswer = async (e: any, prompt: string) => {
        e.preventDefault();
        setGeneratedAnswers("");
        setLoading(true);
        const response = await fetch('/api/generates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
                messages,
            }),
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = response.body;
        if (!data) {
            addMessageZustand({ id: -1000, role: "System", content: "An error occured please resubmit your question", timestamp: new Date().toLocaleTimeString() })
            return;
        }
        let currentID = counterChat + 1;
        let updateCounter = 0
        let update_string = ""
        const onParseGPT = (event: ParsedEvent | ReconnectInterval) => {
            if (event.type === 'event') {
                const data = event.data;
                try {
                    const text = JSON.parse(data).text ?? '';
                    setGeneratedAnswers((prev) => prev + text);
                    update_string += text
                    if (updateCounter === 0) {
                        addMessageZustand({ id: currentID, role: "System", content: update_string as string, timestamp: new Date().toLocaleTimeString() })
                    } else {
                        updateMessage({ id: currentID, role: "System", content: update_string as string, timestamp: new Date().toLocaleTimeString() })
                    }
                    updateCounter++;
                } catch (e) {
                    console.error(e);
                }
            }
        };
        const reader = data.getReader();
        const decoder = new TextDecoder();
        const parser = createParser(onParseGPT);
        let done = false;
        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunkValue = decoder.decode(value);
            parser.feed(chunkValue);
        }
        setLoading(false);
    };

    const handleKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>): Promise<void> => {
        if (!loading) {
            if (event.key === 'Enter' && !event.shiftKey) {
                const messageText = event.currentTarget.value.trim();
                if (messageText !== '') {
                    addMessageZustand({
                        id: counterChat,
                        role: "User",
                        content: messageText,
                        timestamp: new Date().toLocaleTimeString()
                    }
                    );
                    event.currentTarget.value = '';
                    if (counterChat === 0) {
                        generateAnswer(event, messageText);
                    } else {
                        generateAnswer(event, messageText);
                    }

                    if (!showButton) {
                        setVisbility(true);
                    }
                    setCounterChat(counterChat + 2);
                }
            }
        }
    }

    return(
        <div className="justify-center items-center flex-col w-full pb-2.5 bg-custom-bg sticky bottom-0 border-t border-custom-text">
        <div className="justify-center items-center flex flex-col px-2.5">
            <div>
                {loading && <Loader />}
            </div>
            <textarea
                className="bg-transparent w-full sm:w-[70%] mx-5 border-neutral-900 border-2 focus:border-[3px] focus:outline-none shadow-xl focus:ring-0
                rounded-lg mt-3 text-custom-text"
                placeholder="Type a message..."
                id="message-input"
                defaultValue={""}
                onKeyDown={handleKeyDown}
            />
        </div>
        {showButton && <TaskButton />}
    </div>
    );
}