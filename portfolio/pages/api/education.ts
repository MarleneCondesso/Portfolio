import usePersonalInformation from '@/hooks/usePersonalInformation';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method != 'GET') {
        return res.status(405).end();
    }

    try {

        const currentPersonalInformation = await prismadb.personalInformation.findFirst();

        if (!currentPersonalInformation) throw new Error('Does not exist personal information');

        const education = await prismadb.education.findMany({
            where: {
                id: {
                    in: currentPersonalInformation.education
                }
            }
        })

        return res.status(200).json(education);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}