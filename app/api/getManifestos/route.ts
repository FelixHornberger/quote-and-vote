import { promises as fs } from 'fs';
import path from 'path';
import { json } from 'stream/consumers';

export async function POST(req: Request) {
    try {
        let { party_name } = (await req.json()) as {
            party_name: string,
        };
        console.log("Test: ", party_name)
        let party_path = "/app/data"
        switch (party_name) {
            case 'AfD':
            case 'BSW':
            case 'Union':
            case 'Die Linke':
            case 'FDP':
            case 'Freie Waehler':
            case 'Buendnis90 / Die Gruenen':
            case 'SPD':
            case 'Tierschutzpartei':
            // EU-Parties
            case 'Alliance of Liberals and Democrats for Europe Party (ALDE)':
                party_path += "/eu/alde_eu-wahlprogramm_2024.txt";
                break;
            case 'The European Christian Political Movement (ECPM)':
                party_path += "/eu/ecpm_eu-wahlprogramm_2024.txt"
                break;
            case 'European Democrats (EDP)':
                party_path += "/eu/edp_eu-wahlprogramm_2024.txt";
                break;
            case 'European Free Alliance (EFA)':
                party_path += "/eu/efa_eu-wahlprogramm_2024.txt";
                break;
            case 'European people\'s party (EPP)':
                party_path += "/eu/epp_eu-wahlprogramm_2024.txt";
                break;
            case 'European Greens (EGP)':
                party_path += "/eu/egp_eu-wahlprogramm_2024.txt";
                break;
            case 'European-LEFT (EL)':
                party_path += "/eu/el_eu-wahlprogramm_2024.txt";
                break;
            case 'The Party of European Socialists (PES)':
                party_path += "/eu/pes_eu-wahlprogramm_2024.txt";
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