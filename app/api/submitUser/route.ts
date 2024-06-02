// TODO: Logic for submitting User
/* Neds to hand over:
    Code used for table creation:
    CREATE TABLE Participants (
    participant_id UUID PRIMARY KEY NOT NULL,

    // Demographics
    age INT NOT NULL,
    gender VARCHAR(255) NOT NULL,
    levelOfEducation TEXT NOT NULL,
    occupation TEXT NOT NULL,
    preferedInformationGatheringWay VARCHAR(255) NOT NULL,
    politicalSelfEstimation INT NOT NULL,

    //POST TASK
    eligibilityAfter INT NOT NULL,
    argumentsAfter TEXT NOT NULL,
    
    // PRESTUDY
    quizAnswers TEXT NOT NULL,

    //PreTask
    party TEXT NOT NULL,
    partyInterest TEXT NOT NULL,

    //
    chat   BOOLEAN NOT NULL,
    condition BOOLEAN NOT NULL,
    
    //Time
    timestamps TEXT NOT NULL,
    timestamp_demographic TEXT NOT NULL,
    dateOfSubmission DATE NOT NULL);
*/

// Need to adjust this values

import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';


// This should probably be its own file later
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
    try {
      const {
        age,
        gender,
        levelOfEducation,
        occupation,
        preferedInformationGatheringWay,
        politicalSelfEstimation,
        eligibilityAfter,
        argumentsAfter,
        quizAnswers,
        party,
        partyInterest,
        partyVote,
        chat,
        condition,
        timestamps,
        timestamp_demographic,
        dateOfSubmission,
      } = await req.json();
  
      let participant_id = uuidv4();
  
      const client = await pool.connect();
      // Here we check if the uuid is already in the table if thats the case we generate a new uuid
      const participantExists = await client.query(
        "SELECT COUNT(*) FROM Participants WHERE participant_id = $1",
        [participant_id]
      );
      if (participantExists.rows[0].count > 0) {
        participant_id = uuidv4();
      }
      await client.query(
        `INSERT INTO Participants 
          (participant_id,
          age, gender, levelOfEducation, occupation, preferedInformationGatheringWay, politicalSelfEstimation,
          eligibilityAfter, argumentsAfter, 
          quizAnswers,
          party, partyInterest,
          chat, condition,
          timestamps, timestamp_demographic, dateOfSubmission)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`,
        [
          participant_id, age, gender, levelOfEducation, occupation, preferedInformationGatheringWay, politicalSelfEstimation,
          eligibilityAfter, argumentsAfter,
          quizAnswers,
          party, partyInterest,
          chat, condition,
          timestamps, timestamp_demographic, dateOfSubmission,
        ]
      );
  
      client.release();
      return NextResponse.json({
        message: "Participant inserted successfully",
        participant_id,
      });
    } catch (error) {
      console.error("Error executing query:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

export const runtime = 'nodejs';