import { IContent, IHome } from "./models/home.model";

export const CONTENT:IContent[] = [
    {
        home:
        {
           presentation:
                {
                    video: '../../../../assets/template/presentation-video.mp4',
                    profilePicture: '../../../../assets/template/profile.jpeg',
                    biography: `Front-end developer with 3+ years of experience in web development. I help companies make unique product features focusing on high-quality code and application performance.
                    • Implemented several new user interface features, enhancing usability and making applications more user-friendly.
                    • Enhanced the agile task process by introducing standardized guidelines and requirements across teams, resulting in smooth communication, a notable 30% decrease in average task completion time, and an impressive 70% reduction in idle periods.
                    Technical Skills & Tools: React, Angular, Typescript, Javascript, HTML, CSS, Redux, Rxjs.
                    I get excited about opportunities where I can challenge myself by taking ownership of development projects and collaborating on the design of new solutions with my team, pushing our boundaries.
                    I love connecting with new people, you can reach me at francesco.dev.9@gmail.com`
                },
            tecnology:
                [
                    {
                        id: 0,
                        name: 'Angular',
                        icon: '../../../../assets/icons/angular-icon.svg',
                        description: ' è un framework open source per lo sviluppo di applicazioni web',
                        animation: false,
                        time: 500
                    },
                    {
                        id: 1,
                        name: 'Rxjs',
                        icon: '../../../../assets/icons/rxjs-icon.png',
                        description: `è una libreria per gestire eventi asincroni tramite l'utilizzo del concetto di Observarble e del paradigma funzionale (reattivo).`,
                        animation: false,
                        time: 1000
                    },
                    {
                        id: 2,
                        name: 'Typescript',
                        icon: '../../../../assets/icons/typescript-icon.png',
                        description: 'Si tratta di un Super-set di JavaScript che basa le sue caratteristiche su ECMAScript 6',
                        animation: false,
                        time: 1500
                    },
                    {
                        id: 3,
                        name: 'Javascript',
                        icon: '../../../../assets/icons/javascript-icon.png',
                        description: 'è un linguaggio di scripting lato client utilizzato per rendere interattive le pagine web.',
                        animation: false,
                        time: 2000
                    },
                    {
                        id: 4,
                        name: 'CSS3',
                        icon: '../../../../assets/icons/css-icon.png',
                        description: `è un linguaggio che gestisce il design e la presentazione delle pagine web (cioè l'aspetto estetico)`,
                        animation: false,
                        time: 2500
                    },
                    {
                        id: 5,
                        name: 'HTML5',
                        icon: '../../../../assets/icons/html-icon.png',
                        description: 'è un linguaggio di markup. Nato per la formattazione e impaginazione di documenti ipertestuali disponibili nel web 1.0',
                        animation: false,
                        time: 3000
                    },
                    {
                      id: 6,
                      name: 'React',
                      icon: '../../../../assets/icons/react-icon.png',
                      description: ' è un framework open source per lo sviluppo di applicazioni web',
                      animation: false,
                      time: 3500
                    },
                    {
                      id: 7,
                      name: 'Redux',
                      icon: '../../../../assets/icons/redux-icon.svg',
                      description: ' è un framework open source per lo sviluppo di applicazioni web',
                      animation: false,
                      time: 4000
                    }
                ],
            project:
                [
                    {
                        id: 0,
                        name: 'f-stream',
                        imgCover: '../../assets/projects/f-stream/f-stream-home.png',
                        projectImg: [
                            '../../assets/projects/f-stream/f-stream-landing.png',
                            '../../assets/projects/f-stream/f-stream-animation.png',
                            '../../assets/projects/f-stream/f-stream-home.png'
                        ],
                        description: 'Sito di streaming di fantasia, contenente semplice autenticazione, guardie per le rotte accessibili solo da loggati.',
                        imgResize: 'f-stream-img-resize'
                    },
                    {
                        id: 1,
                        name: 'myportfolio',
                        imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
                        projectImg: [
                            '../../assets/projects/myportfolio/myportfolio-home.png'
                        ],
                        description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
                        imgResize: 'myportfolio-img-resize'
                    },
                    {
                      id: 2,
                      name: 'myportfolio',
                      imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
                      projectImg: [
                          '../../assets/projects/myportfolio/myportfolio-home.png'
                      ],
                      description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
                      imgResize: 'myportfolio-img-resize'
                  },
                  {
                    id: 3,
                    name: 'myportfolio',
                    imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
                    projectImg: [
                        '../../assets/projects/myportfolio/myportfolio-home.png'
                    ],
                    description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
                    imgResize: 'myportfolio-img-resize'
                },
                {
                  id: 4,
                  name: 'myportfolio',
                  imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
                  projectImg: [
                      '../../assets/projects/myportfolio/myportfolio-home.png'
                  ],
                  description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
                  imgResize: 'myportfolio-img-resize'
              },
              {
                id: 44,
                name: 'myportfolio',
                imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
                projectImg: [
                    '../../assets/projects/myportfolio/myportfolio-home.png'
                ],
                description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
                imgResize: 'myportfolio-img-resize'
            },
            {
              id: 5,
              name: 'myportfolio',
              imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
              projectImg: [
                  '../../assets/projects/myportfolio/myportfolio-home.png'
              ],
              description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
              imgResize: 'myportfolio-img-resize'
          },
          {
            id: 6,
            name: 'myportfolio',
            imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
            projectImg: [
                '../../assets/projects/myportfolio/myportfolio-home.png'
            ],
            description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
            imgResize: 'myportfolio-img-resize'
        },
        {
          id: 62,
          name: 'myportfolio',
          imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
          projectImg: [
              '../../assets/projects/myportfolio/myportfolio-home.png'
          ],
          description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
          imgResize: 'myportfolio-img-resize'
      },
      {
        id: 61,
        name: 'myportfolio',
        imgCover: '../../assets/projects/myportfolio/myportfolio-home.png',
        projectImg: [
            '../../assets/projects/myportfolio/myportfolio-home.png'
        ],
        description: 'Lo stai già vedendo, ma è pur sempre un mio progetto no?',
        imgResize: 'myportfolio-img-resize'
    }
      ]
        }
    }
]
