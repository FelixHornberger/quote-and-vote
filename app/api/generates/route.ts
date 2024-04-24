import { OpenAIStream, OpenAIStreamPayload } from '@/utils/OpenAIStream'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

export const runtime = "edge"

// This code is from:
// https://github.com/Nutlope/twitterbio

// Need to rework this function after the following guide:
// https://platform.openai.com/docs/api-reference/chat/create
// TODO ADD Messages

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
    let { prompt, messages } = (await req.json()) as {
      prompt?: string,
      messages: any,
    };

    messages = messages["messages"]
    if (!prompt) {
      return new Response('No prompt in the request', { status: 400 });
    }
    let payload: OpenAIStreamPayload = {
      model: 'gpt-4-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      // max_tokens: 10000,
      stream: true,
      n: 1,
    };
    if (Array.isArray(messages) && messages.length > 0) {
      // Function to remove id and timestamp keys from a message
      // Iterate over every message and remove id and timestamp keys
      const messagesWithoutIdAndTimestamp: MessageWithoutIdAndTimestamp[] = messages.map(removeIdAndTimestamp);
      messagesWithoutIdAndTimestamp.push({ role: 'user', content: prompt })
      payload = {
        model: 'gpt-4-turbo',
        messages: messagesWithoutIdAndTimestamp,
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        // max_tokens: 10000,
        stream: true,
        n: 1,
      };
    }

    const stream = await OpenAIStream(payload);
    // return stream response (SSE)
    return new Response(stream, {
      headers: new Headers({
        // since we don't use browser's EventSource interface, specifying content-type is optional.
        // the eventsource-parser library can handle the stream response as SSE, as long as the data format complies with SSE:
        // https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#sending_events_from_the_server

        // 'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      }),
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return new Response('Invalid JSON in the request', { status: 400 });
  }
}