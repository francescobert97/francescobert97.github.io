import { IContent, IHome } from "./models/home.model";

export const CONTENT:IContent[] = [
    {
        home: 
        {
           presentation:
                {
                    video: '../../../../assets/template/presentation-video.mp4',
                    profilePicture: '../../../../assets/template/profile-picture2.png',
                    biography: `Sono Francesco e sono uno sviluppatore web Front-end, la tecnologia mi ha sempre appassionato,
                    mi affascina molto di questo mondo la possibilità di rendere ogni cosa realtà, è un po' come ricevere dei superpoteri,
                    ho quindi iniziato a formarmi come web developer prima in autonomia e poi seguendo un corso,
                    punto a diventare uno sviluppatore completo un giorno.`
                },
            tecnology:
                [
                    {
                        id: 0,
                        name: 'Angular',
                        icon: '../../../../assets/icons/angular-icon.svg',
                        description: ' è un framework open source per lo sviluppo di applicazioni web', 
                        animation: false,
                        time: 500,
                        showDescription: false
                    },
                    {
                        id: 1,
                        name: 'Rxjs',
                        icon: '../../../../assets/icons/rxjs-icon.png',
                        description: ' è un framework open source per lo sviluppo di applicazioni web',
                        animation: false,
                        time: 1000,
                        showDescription: false
                    },
                    {
                        id: 2,
                        name: 'Typescript',
                        icon: '../../../../assets/icons/typescript-icon.png',
                        description: ' è un framework open source per lo sviluppo di applicazioni web',
                        animation: false,
                        time: 1500,
                        showDescription: false
                    },
                    {
                        id: 3,
                        name: 'Javascript',
                        icon: '../../../../assets/icons/javascript-icon.png',
                        description: ' è un framework open source per lo sviluppo di applicazioni web',
                        animation: false,
                        time: 2000,
                        showDescription: false
                    },
                    {
                        id: 4,
                        name: 'CSS3',
                        icon: '../../../../assets/icons/css-icon.png',
                        description: ' è un framework open source per lo sviluppo di applicazioni web',
                        animation: false,
                        time: 2500,
                        showDescription: false
                    },
                    {
                        id: 5,
                        name: 'HTML5',
                        icon: '../../../../assets/icons/html-icon.png',
                        description: ' è un framework open source per lo sviluppo di applicazioni web',
                        animation: false,
                        time: 3000,
                        showDescription: false
                    }
                ],
            project:
                [
                    {
                        id: 0,
                        name: 'f-stream',
                        imgCover: '',
                        projectImg: [],
                        description: 'Sito di streaming di fantasia, contenente semplice autenticazione, guardie per le rotte accessibili solo da loggati.'
                    }
                ]
        }
    }
]