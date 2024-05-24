// TODO: Logic for Student submit -> Put in StudentTable -> First & Last Name, Martikelnummer email?
/* Neds to hand over:
    CREATE TABLE Credits (
    id SERIAL PRIMARY KEY,
    matrikel INT NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    degreeprogramme TEXT NOT NULL,
    time TEXT NOT NULL);
*/

import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
});

export const POST = async (req: NextRequest) => {
    const { matrikel, firstname, lastname, degreeProgramm, time }: {
        matrikel: string;
        firstname: string;
        lastname: string;
        degreeProgramm: string;
        time: string;
    } = await req.json();

    try {
        const client = await pool.connect();
        await client.query(
            `INSERT INTO Credits  (matrikel, firstname, lastname, degreeprogramme, time)
            VALUES ($1, $2, $3, $4, $5)`,
            [matrikel, firstname, lastname, degreeProgramm, time]
        );
        client.release();

        return NextResponse.json({ message: 'Student inserted successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error executing query:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};

export const runtime = 'nodejs';