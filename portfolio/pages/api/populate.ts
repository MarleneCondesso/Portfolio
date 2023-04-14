import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'POST') {
        return res.status(405).end();
    }

   // try {

        //const client = await prismadb;

        //GET COLLECTIONS FROM MONGO DB

        //POPULATE PERSONAL INFORMATION
        /**
                const personalInformationData = await client.personalInformation.createMany({
                    data: [
                        {
                            id: '6438101b627c0a149aee454e',
                            name: 'Marlene Condesso',
                            birthDate: '1997-12-07T00:00:00.000Z',
                            nationality: 'Portuguese',
                            contact: [
                                '64381208627c0a149aee4551',
                                '643812ef627c0a149aee4559',
                                '6438130e627c0a149aee455b'
                            ],
                            professionalExperience: [
                                '64385050d1b0a121c13a3606',
                                '64382ad5c36ef218a561550f',
                                '64382adec36ef218a5615510',
                                '64382aecc36ef218a5615511',
                                '64382b26c36ef218a5615512',
                                '64382b2dc36ef218a5615513',
                            ],
                            education: [
                                '64382b38c36ef218a5615514',
                                '64382b42c36ef218a5615515',
                            ],
                            matternLanguage: 'Portuguese',
                            otherLanguages: [
                                '64382b4bc36ef218a5615516',
                                '64382e37c36ef218a5615517'
                            ],
                            technicalSkills: [
                                '64382e77c36ef218a5615519',
                                '64382e81c36ef218a561551a',
                                '64382e8cc36ef218a561551b',
                                '64382e93c36ef218a561551c',
                                '64382e9cc36ef218a561551d',
                                '64382ea2c36ef218a561551e',
                                '64382ea9c36ef218a561551f',
                                '64382eb0c36ef218a5615520',
                                '64382eb5c36ef218a5615521',
                                '64382ebbc36ef218a5615522',
                                '64382f91c36ef218a5615524',
                                '64382f80c36ef218a5615523',
                                '64383396c36ef218a5615538',
                                '643833b2c36ef218a5615539',
                                '643833c5c36ef218a561553a',
                                '643855cbd1b0a121c13a3607'
                            ],
                            personalSkills: [
                                '64382fbec36ef218a5615525',
                                '64382fc6c36ef218a5615526',
                                '64382fcec36ef218a5615527',
                                '64382fd7c36ef218a5615528',
                                '64382fddc36ef218a5615529',
                                '64382fe3c36ef218a561552a',
                                '64382ffac36ef218a561552c'
                            ]
                        }
                    ]
                });
        
               
                return res.status(200).json(personalInformationData);
         */
        //POPULATE CONTACT

        /**
        const contactData = await client.contact.createMany({
            data: [
                {
                    id: '64381208627c0a149aee4551',
                    type: 'Phone-number',
                    contact: '917539038'
                },
                {
                    id: '643812ef627c0a149aee4559',
                    type: 'Email',
                    contact: 'marleneflima.official@gmail.com'
                },
                {
                    id: '6438130e627c0a149aee455b',
                    type: 'Linkedin',
                    contact: 'https://www.linkedin.com/in/marlene-lima-418b0b22b/'
                }
            ]
        });
        return res.status(200).json(contactData);
        */

        //POPULATE PROFESSIONAL EXPERIENCE
/**

        const professionalExperienceData = await client.professionalExperience.createMany({
            data: [
                {
                    id: '64382ad5c36ef218a561550f',
                    startDate: '2013-07-02T00:00:00.000Z',
                    endDate: '2015-09-12T00:00:00.000Z',
                    company: 'UPN - União de Produtores Hortículas do Norte, LDA',
                    type: 'Trabalhadora Agrícola',
                    location: 'Povóa de Varzim, Portugal',
                    descriptions: []
                },
                {
                    id: '64382adec36ef218a5615510',
                    startDate: '2015-05-15T00:00:00.000Z',
                    endDate: '2019-07-14T00:00:00.000Z',
                    company: 'Bombeiros Voluntários de Fão',
                    type: 'Outras Atividades De Serviços',
                    location: 'Fão, Esposende, Portugal',
                    descriptions: [
                        "64382ff2c36ef218a561552b",
                        "64383070c36ef218a561552d"
                    ]
                },
                {
                    id: '64382aecc36ef218a5615511',
                    startDate: '2016-04-12T00:00:00.000Z',
                    endDate: '2019-07-21T00:00:00.000Z',
                    company: 'Esposende2000',
                    type: 'Atividades Desportivas e Recreativas',
                    location: 'Esposende, Portugal',
                    descriptions: [
                        "64383145c36ef218a5615532"
                    ]
                },
                {
                    id: '64382b26c36ef218a5615512',
                    startDate: '2017-01-04T00:00:00.000Z',
                    endDate: '2019-01-04T00:00:00.000Z',
                    company: 'FM Têxteis S.A',
                    type: 'Operadora de máquinas téxteis',
                    location: 'Gilmonde, Barcelos, Portugal',
                    descriptions: [
                        "64383077c36ef218a561552e",
                        "64383110c36ef218a561552f",
                        "64383117c36ef218a5615530",
                    ]
                },
                {
                    id: '64385050d1b0a121c13a3606',
                    startDate: '2022-04-14T00:00:00.000Z',
                    endDate: '2022-07-28T00:00:00.000Z',
                    company: ' DOLORES HIPÓLITO, UNIPESSOAL, LDA',
                    type: 'Operadora de máquinas téxteis',
                    location: 'Apúlia, Esposende, Portuga',
                    descriptions: [
                        "64383139c36ef218a5615531"
                    ]
                },
                {
                    id: '64382b2dc36ef218a5615513',
                    startDate: '2022-04-14T00:00:00.000Z',
                    endDate: '2022-07-28T00:00:00.000Z',
                    company: 'N4IT Software',
                    type: 'FullStack de Desenvolvimento de Website',
                    location: 'Porto, Portugal',
                    descriptions: [
                        "6438314cc36ef218a5615533",
                        "64383153c36ef218a5615534",
                        "64383187c36ef218a5615535",
                        "643831a1c36ef218a5615536",
                        "643831a8c36ef218a5615537"
                    ]
                }

            ]

        });

        return res.status(200).json(professionalExperienceData);
*/

        //POPULATE DESCRIPTION WORK

         /**

        const descriptionWorkData = await client.descriptionWork.createMany({
            data: [
                {
                    id: '64382ff2c36ef218a561552b',
                    text: 'Estágio realizado no âmbito do Curso Técnico de Gestão do Ambiente - 12ºAno.'
                },
                {
                    id: '64383070c36ef218a561552d',
                    text: 'Identificação e marcação da informação georreferenciada relativamente as bocas-de-incêndio e marcos de água da Junta de Freguesia de Apúlia e Fão.'
                },
                {
                    id: '64383077c36ef218a561552e',
                    text: 'Operadora Têxtil no setor de Corte (Encargo principal)'
                },
                {
                    id: '64383110c36ef218a561552f',
                    text: 'Operadora Têxtil no setor de Embalamento.'
                },
                {
                    id: '64383117c36ef218a5615530',
                    text: 'Operadora Têxtil no setor de Confeção.'
                },

                {
                    id: '64383139c36ef218a5615531',
                    text: 'Operadora Têxtil no setor de Confeção.'
                },

                {
                    id: '64383145c36ef218a5615532',
                    text: 'Auxilio no planeamento e coordenação de atividades desportivas(Crianças/Adultos).'
                },

                {
                    id: '6438314cc36ef218a5615533',
                    text: 'Levantamento de Requisitos, Analise, Design.'
                },
                {
                    id: '643831a8c36ef218a5615537',
                    text: 'Planeamento de Sprints'
                },
                {
                    id: '64383153c36ef218a5615534',
                    text: 'Desenvolvimento de frontend web (React).'
                },
                {
                    id: '64383187c36ef218a5615535',
                    text: 'Desenvolvimento de backend (dotnet).'
                },
                {
                    id: '643831a1c36ef218a5615536',
                    text: 'Participação no desenvolvimento de um frontend mobile híbrido(dotnet,xamarin/.net MAUI).'
                }


            ]

        });
        return res.status(200).json(descriptionWorkData);
*/

        //POPULATE EDUCATION
        /**
        const educationData = await client.education.createMany({
            data: [
                {
                    id: '64382b38c36ef218a5615514',
                    startDate: '2013-09-13T00:00:00.000Z',
                    endDate: '2016-07-30T00:00:00.000Z',
                    company: 'Escola Profissional de Esposende (EPE)',
                    companyWebSite: 'https://www.epe.edu.pt/nws/',
                    type: 'Curso Técnico de Gestão do Ambiente - 12 º ano',
                    location: 'Fão, Esposende, Portugal'
                },
                {
                    id: '64382b42c36ef218a5615515',
                    startDate: '2020-10-05T00:00:00.000Z',
                    endDate: '2022-09-14T00:00:00.000Z',
                    company: 'Instituto Superior de Engenharia do Porto',
                    companyWebSite: 'https://www.isep.ipp.pt/',
                    type: 'Curso Técnico Superior Profissional - Desenvolvimento Ágil de Software',
                    location: 'Porto, Portugal'
                }
            ]
        });

        return res.status(200).json(educationData);
        */

        //POPULATE OTHER LANGUAGES
        /**
        const otherLanguagesData = await client.otherLanguages.createMany({
            data: [
                {
                    id: '64382b4bc36ef218a5615516',
                    name: 'English',
                    oralComprehension: 'B1',
                    readComprehension: 'A2',
                    oralInteraction: 'A2',
                    write: 'A2'
                },
                {
                    id: '64382e37c36ef218a5615517',
                    name: 'Spanish',
                    oralComprehension: 'B1',
                    readComprehension: 'A2',
                    oralInteraction: 'A2',
                    write: 'A2'
                },
            ]
        });

        return res.status(200).json(otherLanguagesData);
        */

        //POPULATE TECHNICAL SKILL

        /**
        const technicalSkillData = await client.technicalSkill.createMany({
            data: [
                {
                    id: '64382e77c36ef218a5615519',
                    name: 'Microsoft SQL Server',
                    type: 'Database'
                },
                {
                    id: '64382e81c36ef218a561551a',
                    name: 'Microsoft Sharepoint',
                    type: 'Database'
                },
                {
                    id: '64382e8cc36ef218a561551b',
                    name: 'PHP',
                    type: 'Backend'
                },
                {
                    id: '64382f80c36ef218a5615523',
                    name: 'Mongodb Atlas',
                    type: 'Database'
                },
                {
                    id: '64382e93c36ef218a561551c',
                    name: 'HTML',
                    type: 'Front-end'
                },
                {
                    id: '64382e9cc36ef218a561551d',
                    name: 'CSS',
                    type: 'Front-end'
                },
                {
                    id: '64382ea2c36ef218a561551e',
                    name: 'Javascript',
                    type: 'Front-end'
                },
                {
                    id: '64382ea9c36ef218a561551f',
                    name: 'Typescript',
                    type: 'Front-end'
                },
                {
                    id: '64382eb0c36ef218a5615520',
                    name: 'React',
                    type: 'Front-end'
                },
                {
                    id: '64382f91c36ef218a5615524',
                    name: 'Next.js',
                    type: 'Front-end'
                },
                {
                    id: '64382eb5c36ef218a5615521',
                    name: 'Java',
                    type: 'Back-end'
                },
                {
                    id: '643855cbd1b0a121c13a3607',
                    name: 'JavaFx',
                    type: 'Front-end'
                },
                {
                    id: '64382ebbc36ef218a5615522',
                    name: 'C#',
                    type: 'Back-end'
                },
                {
                    id: '643833b2c36ef218a5615539',
                    name: 'ASP.NET Web API',
                    type: 'Back-end'
                },
                {
                    id: '64383396c36ef218a5615538',
                    name: 'ASP.NET Core',
                    type: 'Back-end'
                },
                {
                    id: '643833c5c36ef218a561553a',
                    name: 'GIT',
                    type: 'Source-Control'
                },
            ]
        });

        return res.status(200).json(technicalSkillData);
        
*/
        //POPULATE PERSONALSKILLS 

        /**
        const personalSkillData = await client.personalSkill.createMany({
            data: [
                {
                    id: '64382fbec36ef218a5615525',
                    name: 'Boa capacidade de organização'
                },
                {
                    id: '64382fc6c36ef218a5615526',
                    name: 'Boa capacidade social'
                },
                {
                    id: '64382fcec36ef218a5615527',
                    name: 'Capacidade de ajudar e transmitir conhecimentos aos outros'
                },
                {
                    id: '64382fd7c36ef218a5615528',
                    name: 'Espirito de equipa'
                },
                {
                    id: '64382fddc36ef218a5615529',
                    name: 'Gosto pelo trabalho em equipa'
                },
                {
                    id: '64382fe3c36ef218a561552a',
                    name: ' Vontade de aprender'
                },
                {
                    id: '64382ffac36ef218a561552c',
                    name: 'Capacidade de pedir auxílio quando necessário'
                }
            ]
        });

        return res.status(200).json(personalSkillData);
        */
    // } catch (error) {
    //     console.log(error);
    //     return res.status(400).end();
    // }
}