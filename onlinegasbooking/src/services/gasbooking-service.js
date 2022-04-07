import axios from "axios";
import http from "./http-common";

class GasBookingService{
    create(data)
    {
        return http.post("/gasbooking",data);
    }

    delete(gasbookingId)
    {
        console.log("delete service:");
        console.log(gasbookingId);
        return http.delete("/GasBooking/${gasbookingid}");
    }

    update(data)
    {
        return http.put("/gasbooking",data);
    }
}

export default new GasBookingService();
