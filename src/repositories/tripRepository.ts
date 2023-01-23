import connection from "../database/database.js";
import { TripObject, TripObjectRepository, tripRepository } from "../protocols/protocols.js";

export async function postTripRepository(trip: TripObject){
    const id: number = (await connection.query(`
        INSERT INTO 
            trip ("to", "by", "date") 
        VALUES ($1, $2, $3)
        RETURNING id;`
    ,[trip.to, trip.by, trip.date])).rows[0].id;

    let seatNumber: number;
    let string: string = '';

    for(seatNumber=1; seatNumber<=trip.seats;seatNumber++){
        string=string+`(${seatNumber}, ${id})`;
        if (seatNumber < trip.seats){
            string = string + ', '
        }
    }
    
    await connection.query(`
    INSERT INTO 
        seat ("seatNumber", "tripId") 
    VALUES ${string};`)
}

export async function deleteTripRepository(id: number){
    await connection.query(`
    DELETE 
    FROM ticket 
    WHERE "tripId" 
        IN ($1)`,[id]);

    await connection.query(`
    DELETE 
    FROM seat 
    WHERE "tripId" 
        IN ($1)`,[id]);

    await connection.query(`
    DELETE
    FROM trip
    WHERE id = $1
    `,[id])
}

export async function  getTripRepository(id: number): Promise<TripObjectRepository>{
    const trip = await connection.query<TripObjectRepository>(`
        SELECT 
            tr.*,
            COUNT(s.occupied = FALSE)::INTEGER as "seatsAvaible"
        FROM trip tr
        LEFT JOIN seat s
        ON s."tripId" = $1
        WHERE tr.id = $1
        GROUP BY tr.id
        `,[id])
    return trip.rows[0];
}

export async function  getAllTripRepository() : Promise<TripObjectRepository[]>{
    const trip = await connection.query<TripObjectRepository>(`
        SELECT 
            tr.*,
            COUNT(s.occupied = FALSE)::INTEGER as "seatsAvaible"
        FROM trip tr
        LEFT JOIN seat s
        ON s."tripId" = tr.id
        WHERE tr.date > NOW()
        GROUP BY tr.id
        `)
    return trip.rows;
}

export async function tripExistsRepository(id: number): Promise<tripRepository>{
    const trip = await connection.query(`
        SELECT
            *
        FROM trip
        WHERE id = $1
    `,[id])
    return trip.rows[0];
}