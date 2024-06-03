import { promises as fs } from 'fs';

export async function POST(req: Request) {
    try {
        let { party_name } = (await req.json()) as {
            party_name: string,
        };
        let party_path = "/app/data"
        switch (party_name) {
            case 'Alliance of Liberals and Democrats for Europe Party (ALDE)':
                party_path += "/eu/alde_eu-manifesto_2024.txt";
                break;
            case 'The European Christian Political Movement (ECPM)':
                party_path += "/eu/ecpm_eu-manifesto_2024.txt"
                break;
            case 'European Conservatives and Reformists (ECR-Party)':
                party_path += "/eu/ecr_eu-manifesto_2024.txt"
                break;
            case 'European Democrats (EDP)':
                party_path += "/eu/edp_eu-manifesto_2024.txt";
                break;
            case 'European Free Alliance (EFA)':
                party_path += "/eu/efa_eu-manifesto_2024.txt";
                break;
            case 'European people\'s party (EPP)':
                party_path += "/eu/epp_eu-manifesto_2024.txt";
                break;
            case 'European Greens (EGP)':
                party_path += "/eu/egp_eu-manifesto_2024.txt";
                break;
            case 'European-LEFT (EL)':
                party_path += "/eu/el_eu-manifesto_2024.txt";
                break;
            case 'The Party of European Socialists (PES)':
                party_path += "/eu/pes_eu-manifesto_2024.txt";
                break;
            case 'European Pirate Party (PPEU)':
                party_path += "/eu/ppeu_eu-manifesto_2024.txt";
                break;
            case 'Volt Europa (Volt)':
                party_path += "/eu/volt_eu-manifesto_2024.txt";
                break;
        }
        try {
            const data = await fs.readFile(process.cwd() + party_path, 'utf8');

            return new Response(data, {
                headers: {
                    'Content-Type': 'text/plain', // Adjust content type according to your file type
                },
            });
        } catch (error) {
            console.error('Error reading file:', error);
        }

    } catch (error) {
        console.error('Error parsing JSON:', error);
        return new Response('Invalid JSON in the request', { status: 400 });
    }
}