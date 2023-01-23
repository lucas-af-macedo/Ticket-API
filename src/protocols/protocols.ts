type TripObject = {
    to: string,
    by: string,
    date: string,
    seats: number
};

type Name = {
    name: string
};


type TripObjectRepository = {
    id: number,
    to: string,
    by: string,
    date: string,
    seatsAvaible: number
};

type tripRepository = Omit<TripObjectRepository, "seatsAvaible">;

type SeatTicket = {
    id: number,
    seatNumber: number,
    tripId: number,
    occupied: boolean,
    name: string
};

type Seat = Omit<SeatTicket, "name">;

export {
    TripObject,
    TripObjectRepository,
    Name,
    SeatTicket,
    Seat,
    tripRepository
}

