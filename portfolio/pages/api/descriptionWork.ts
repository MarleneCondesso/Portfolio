import usePersonalInformation from '@/hooks/usePersonalInformation';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method != 'GET') {
        return res.status(405).end();
    }

    try {

        const currentProfessionalExperience = await prismadb.professionalExperience.findMany();

        if (!currentProfessionalExperience) throw new Error('Does not exist personal information');
/**
        // const descriptions = await prismadb.descriptionWork.findMany({
        //     where: {
        //         id: {
        //             in: currentProfessionalExperience.find(e=> {e.descriptions}),
        //         }
        //     }
        // })
*/
        const descriptions = await prismadb.descriptionWork.findMany();

        return res.status(200).json(descriptions);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}