import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {




    try{

        const startDate = moment('28-10-2024', 'DD-MM-YYYY').unix();
        const endDate = moment(Date.now()).unix();
        const umamiApiUrl = `${process.env.UMAMI_API_URL}/stats?startAt=${startDate}&endAt=${endDate}`;


        const response = await fetch(umamiApiUrl, {
            headers: {
                Authorization: `Bearer ${process.env.UMAMI_APPI_TOKEN}`,
            },
        });

        if(!response.ok){
            throw new Error('Failed to fetch visitors count');
        }

        const data = await response.json();

        console.log(data);

    } catch {

    }

}