const { FlightRepository, AirplaneRepository } = require("../repository/index");

// const { compareTime } = require("../utils/helper");

class FlightService {

  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightrepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      
      const flight = await this.flightrepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }
  
  async getFlightData() {
    // 
  }
}

module.exports = FlightService;

// if (!compareTime(data.arrivalTime, data.departureTime)) {
//   throw { error: "Arrival time can not be less than departure time" };
// }


// {
  //           flightNumber,
//           airplaneId,
//           departureAirportId,
//           arrivalAirportId,
//           arrivalTime,
//           departureTime,
//           price,
//           totalSeats => airplane

// }
