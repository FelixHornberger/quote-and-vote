import Anthropic from "@anthropic-ai/sdk";
import { Stream } from "@anthropic-ai/sdk/streaming.mjs";

/* 
    Credits where credits belong: 
    https://github.com/cjgammon/llm-demos/tree/anthropic
*/

export const runtime = "edge"

interface MessageWithoutIdAndTimestamp {
    role: string;
    content: string;
}

interface Message {
    id: number;
    role: string;
    content: string;
    timestamp: string;
}

function removeIdAndTimestamp(message: Message): MessageWithoutIdAndTimestamp {
    const { id, timestamp, role, ...rest } = message;
    return { role: role.toLowerCase(), ...rest };
}

export async function POST(req: Request) {
    try {

        let { prompt, messages, systemPrompt } = (await req.json()) as {
            prompt: string,
            messages: any,
            systemPrompt: string,
        };
        messages = messages["messages"]
        if (!prompt) {
            return new Response('No prompt in the request', { status: 400 });
        }

        const messagesWithoutIdAndTimestamp: MessageWithoutIdAndTimestamp[] = messages.map(removeIdAndTimestamp);
        messagesWithoutIdAndTimestamp.push({ role: 'user', content: prompt })

        const client = new Anthropic();

        const stream = await client.messages.stream({
            messages: messagesWithoutIdAndTimestamp as Anthropic.Messages.MessageParam[],
            model: 'claude-3-opus-20240229',
            max_tokens: 4096,
            system: systemPrompt,
            temperature: 0,
        })

        return new Response(stream.toReadableStream(), {
            headers: new Headers({
                // since we don't use browser's EventSource interface, specifying content-type is optional.
                // the eventsource-parser library can handle the stream response as SSE, as long as the data format complies with SSE:
                // https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#sending_events_from_the_server
        
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
            }),
        });
        
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return new Response('Invalid JSON in the request', { status: 400 });
    }
}