import short from 'short-uuid';
import axios from "axios";

export const getRandomNum = () => {
    const uuid = short.generate().toString().substring(0, 18);
    return uuid;
}

const BASE_URL = "https://eliseupayment.onrender.com/";

export function getBaseUrl(){
    return BASE_URL
}

const config = {

    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'apikey': '10',
    }
}


export const requestPay = async (phone, amount) => {
    let reference = getRandomNum().toString()

    const data = {
        amount: amount,
        to: phone,
        from: phone,
        reference: reference,
        transaction: reference,
        subject: reference
    };

    try {
        const response = await axios.post(getBaseUrl()+"c2b", data, config);
        //TODO check response

        console.log(response)
        return true
    } catch (error) {
        const my = await axios.post(getBaseUrl()+"query", data, config);

        if (my.data.response.code == "INS-0") {
            return true
        } else {
           return false
        }
    }
};




