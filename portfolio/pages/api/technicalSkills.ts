import usePersonalInformation from '@/hooks/usePersonalInformation';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method != 'GET') {
        return res.status(405).end();
    }

    try {

        const currentPersonalInformation = await prismadb.personalInformation.findFirst();

        if (!currentPersonalInformation) throw new Error('Does not exist personal information');

        const technicalSkill = await prismadb.technicalSkill.findMany({
            where: {
                id: {
                    in: currentPersonalInformation.technicalSkills
                }
            }
        })

        return res.status(200).json(technicalSkill);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}