//TODO: Insert party manifest

interface Message {
    id: number;
    user: string;
    content: string;
    timestamp: string;
}

const getManifesto = async (party_name: string) => {
    const response = await fetch('/api/getManifestos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            party_name,
        }),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.text();
    if (!data) {
        return "Error! Only answer the user that the system got broken and he should contact the admin!";
    }
    return data;
}

export async function generatePrompt(party_name: string, condition: boolean) {
    let prompt = `You are a generative AI model that has the task of informing the user about the party's election programme for the 2024 EU elections. 
                    The party is ${party_name}. 
                    There manifesto is:\n`;
    // if (condition) {
    //     prompt = `You are a generative AI model that has the task of informing the user about the party's election programme for the 2024 EU elections. 
    //                 At the end of your message, let the user know that you know even more about the party programme and that they are welcome to ask you about it. 
    //                 Give the user examples what else he could as you. 
    //                 The party is ${party_name}. There manifesto is:\n`;
    // }
    console.log("TEST Condition: ", condition)
    console.log("Systemprompt: ", prompt)
    const manifesto = await getManifesto(party_name);
    prompt += manifesto;
    return prompt;
}