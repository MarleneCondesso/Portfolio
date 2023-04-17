import  { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if(req.method != 'GET'){
        return res.status(405).end();
    }

    try {
        
        const  personalInformation   = await prismadb.personalInformation.findFirst();

        if(!personalInformation) throw new Error('Do not exist personal information');



        return res.status(200).json(personalInformation);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}