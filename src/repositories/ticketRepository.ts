import connection from "../database/database.js";
import { Seat, SeatTicket } from "../protocols/protocols.js";

export async function postTicketRepository(seatId: number, tripId: number, name: string){
    await connection.query(`
    UPDATE
        seat
    SET "occupied" = TRUE
    WHERE id = $1
    `,[seatId])

    await connection.query(`
    INSERT INTO 
        ticket ("seatId", "tripId", "name") 
    VALUES ($1, $2, $3)
    `,[seatId, tripId, name]);
}

export async function deleteTicketRepository(id: number){
    await connection.query(`
        UPDATE
            seat
        SET "occupied" = FALSE
        WHERE id = $1
        `,[id])

    await connection.query(`
        DELETE
        FROM ticket
        WHERE "seatId" = $1
        `,[id])
}

export async function modifyNameRepository(id: number, name: string){
    await connection.query(`
        UPDATE
            ticket
        SET "name" = $2
        WHERE "seatId" = $1
        `,[id, name])
}

export async function getTicketRepository(id: number): Promise<Seat>{
    const seat = await connection.query<Seat>(`
        SELECT 
            s.*,
            t.name
        FROM seat s
        LEFT JOIN ticket t
        ON t."seatId" = $1
        WHERE s."id" = $1
        GROUP BY s.id, t.name
        `,[id])
    return seat.rows[0];
}

export async function getAllTicketFromTripRepository(tripId: number): Promise<SeatTicket[]>{
    const seat = await connection.query<SeatTicket>(`
        SELECT 
            s.*
        FROM seat s
        WHERE s."tripId" = $1
        GROUP BY s.id
        `,[tripId])
    return seat.rows;
}