import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    let { party_name } = (await req.json()) as {
        party_name: string,
    };
    let party_path = "/app/data"
    switch (party_name) {
        case 'Alliance of Liberals and Democrats for Europe Party (ALDE)':
            party_path += "/eu/alde_eu-manifesto_2024.pdf";
            break;
        case 'The European Christian Political Movement (ECPM)':
            party_path += "/eu/ecpm_eu-manifesto_2024.pdf"
            break;
        case 'European Conservatives and Reformists (ECR-Party)':
            party_path += "/eu/ecr_eu-manifesto_2024.pdf"
            break;
        case 'European Democrats (EDP)':
            party_path += "/eu/edp_eu-manifesto_2024.pdf";
            break;
        case 'European Free Alliance (EFA)':
            party_path += "/eu/efa_eu-manifesto_2024.pdf";
            break;
        case 'European people\'s party (EPP)':
            party_path += "/eu/epp_eu-manifesto_2024.pdf";
            break;
        case 'European Greens (EGP)':
            party_path += "/eu/egp_eu-manifesto_2024.pdf";
            break;
        case 'European-LEFT (EL)':
            party_path += "/eu/el_eu-manifesto_2024.pdf";
            break;
        case 'The Party of European Socialists (PES)':
            party_path += "/eu/pes_eu-manifesto_2024.pdf";
            break;
        case 'European Pirate Party (PPEU)':
            party_path += "/eu/el_eu-manifesto_2024.pdf";
            break;
        case 'Volt Europa (Volt)':
            party_path += "/eu/volt_eu-manifesto_2024.pdf";
            break;
    }
    const pdfBuffer = fs.readFileSync(process.cwd() + party_path);

    const headers = {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${party_name}_eu-manifesto_2024.pdf"`,
    };

    return new NextResponse(pdfBuffer, { headers });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Error serving PDF', { status: 500 });
  }
}