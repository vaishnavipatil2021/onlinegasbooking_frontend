import React from 'react'
import { useState } from 'react'

function GetCustomerBookingDetails() {
    const [myInformation, setMyInformation] = useState({

        "customerId": 0,
        "aadharCard": "string",
        "connectionStatus": "string",
        "address": "string",
        "cylinder": {
            "cylinderTypeId": 0,
            "cylinderType": "string",
            "weight": 0,
            "price": 0,
            "surrendercylinder": {
                "surrenderId": 0,
                "surrenderDate": "2022-04-06"
            }
        },
        "customer": "string"
    }
    );

    return (
        <div>GetCustomerBookingDetails</div>
    )
}

export default GetCustomerBookingDetails