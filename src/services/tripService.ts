import dayjs from "dayjs";
import { tripExistsRepository } from "../repositories/tripRepository.js";

export function testDate(date: string): boolean{
    const now = dayjs();
    return now.isAfter(date);
}

export async function tripExists(id: number): Promise<boolean>{
    const trip = await tripExistsRepository(id);
    if(trip){
        return true;
    }
    return false;
}