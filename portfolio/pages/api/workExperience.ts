import usePersonalInformation from '@/hooks/usePersonalInformation';
import  { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if(req.method != 'GET'){
        return res.status(405).end();
    }

    try {
        
        const currentPersonalInformation  = await prismadb.personalInformation.findFirst();

        if(!currentPersonalInformation) throw new Error('Does not exist personal information');

        const workExperience = await prismadb.professionalExperience.findMany({
            where: {
                id: {
                        in: currentPersonalInformation.professionalExperience
                }
            }
        })

        return res.status(200).json(workExperience);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}