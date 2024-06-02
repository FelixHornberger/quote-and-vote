import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received body:', body);

    const { party } = body as { party: string };
    console.log('Parsed party:', party);

    const partyPaths: { [key: string]: string } = {
      'Alliance of Liberals and Democrats for Europe Party (ALDE)': 'https://drive.google.com/file/d/1JfxnQNmB4g7RuqcIVB4J-Ej3-21DUF1J/previe',
      'The European Christian Political Movement (ECPM)': 'https://drive.google.com/file/d/1eBZ2KUjfkRC4FkxpvmxCQk52uKKf9rW1/preview',
      'European Conservatives and Reformists (ECR-Party)': 'https://drive.google.com/file/d/1kgCfE-2Xo8NpBaLnnyHrKh9aCgKqbAFQ/preview',
      'European Democrats (EDP)': 'https://drive.google.com/file/d/1wBS1v7ntL3c0ces8dHJgG9cCLAVY9aKw/preview',
      'European Free Alliance (EFA)': 'https://drive.google.com/file/d/1EFstKKkvU2QarE0FCXHz93PhZPHLSMMP/preview',
      'European people\'s party (EPP)': 'https://drive.google.com/file/d/19XkIXcV-QY5SghHw58RGhMegIWmBSUtR/preview',
      'European Greens (EGP)': 'https://drive.google.com/file/d/1Ysoshn_4NqPhTNEIbgRa7hgv3hj-o_BM/preview',
      'European-LEFT (EL)': 'https://drive.google.com/file/d/1tzoWcXsJHBWCuAlR5HQE_Hl_6UmJ63eM/preview',
      'The Party of European Socialists (PES)': 'https://drive.google.com/file/d/1EYiUlQXO0cvdzoZHp4rtpwCaOnDnJA8n/preview',
      'European Pirate Party (PPEU)': 'https://drive.google.com/file/d/1l05EjohR_SdKT2aQBugOjTmWL-CTz8NV/preview',
      'Volt Europa (Volt)': 'https://drive.google.com/file/d/10srivalu1qzMqNE8AsGYvTZkTRulnLZT/preview',
    };

    const partyPath = partyPaths[party];
    console.log('Found partyPath:', partyPath);

    if (!partyPath) {
      console.log('Party not found');
      return new NextResponse('Party not found', { status: 404 });
    }

    return new Response(partyPath, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Error serving PDF', { status: 500 });
  }
}