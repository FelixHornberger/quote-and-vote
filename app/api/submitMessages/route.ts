import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

interface Message {
  id: number;
  role: string;
  content: string;
  timestamp: string;
}

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

// Table creation SQL statement
/*
CREATE TABLE Messages (
    id SERIAL PRIMARY KEY,
    participant_id UUID NOT NULL REFERENCES Participants(participant_id),
    message_id INT NOT NULL,
    userName VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    timestamp TEXT NOT NULL
);
*/

export const POST = async (req: NextRequest) => {
  try {
    const { participant_id, messages }: { participant_id: string; messages: Message[] } = await req.json();

    const client = await pool.connect();

    // Loop through all messages and insert them accordingly.
    for (const message of messages) {
      await client.query(
        `INSERT INTO Messages (participant_id, message_id, userName, content, timestamp)
         VALUES ($1, $2, $3, $4, $5)`,
        [participant_id, message.id, message.role, message.content, message.timestamp]
      );
    }

    client.release();
    return NextResponse.json({ message: "Messages inserted successfully" });
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

export const runtime = 'nodejs';