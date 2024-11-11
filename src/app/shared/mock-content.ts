import { IContent, IHome } from "./models/home.model";

export const CONTENT:IContent[] = [
    {
        home:
        {
           presentation:
                {
                    video: '../../../../assets/template/presentation-video.mp4',
                    profilePicture: '../../../../assets/template/profile.webp',
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
                        id: 11,
                        name: 'f-stream',
                        imgCover: '../../assets/projects/f-stream/f-stream-home.png',
                        projectImg: [
                            '../../assets/projects/f-stream/f-stream-landing.png',
                            '../../assets/projects/f-stream/f-stream-animation.png',
                            '../../assets/projects/f-stream/f-stream-home.png'
                        ],
                        links: [{
                          icon: '../../../../assets/icons/folder.webp',
                          name: 'Repository',
                          link: 'https://github.com/francescobert97/f-stream'
                        },
                        {
                          icon: '../../../../assets/icons/live.webp',
                          name: 'live version',
                          link: 'https://f-stream.vercel.app/'
                        },
                      ],
                        description: 'F-stream is your new go-to destination for streaming, offering a sleek, modern platform designed in bold red and black. With an intuitive interface and various sections to explore, F-stream makes it easy for users to discover and watch an extensive collection of movies available right on the platform.Whether you\'re in the mood for action-packed blockbusters or indie gems, F-stream has something for everyone. Users can dive into different categories, find hidden treasures, and enjoy their favorite films with a seamless viewing experience. No extra clutter—just pure entertainment at your fingertips.',

                      },
                    {
                      id: 2,
                      name: 'myportfolio',
                      imgCover: '../../assets/projects/myportfolio//my-portfolio.webp',
                      projectImg: [
                          '../../assets/projects/myportfolio/my-portfolio.webp'
                      ],
                      links: [{
                        icon: '../../../../assets/icons/folder.webp',
                        name: 'Repository',
                        link: 'https://github.com/francescobert97/pokemon-react-app'
                      },
                      {
                        icon: '../../../../assets/icons/live.webp',
                        name: 'live version',
                        link: 'https://francescobert97.github.io/pokemon-react-app/'
                      },
                    ],
                      description: 'Welcome to my Futuristic Portfolio, a cutting-edge showcase of my skills and projects. Designed with a sleek, futuristic aesthetic, this portfolio is not just a display—it\'s an experience. Explore my expertise across a range of technologies and tools, and see how I bring ideas to life through a series of innovative projects. Each section is crafted to highlight not just what I know, but how I apply it to create real-world solutions.'
                  },
                  {
                    id: 3,
                    name: 'pokemon-app',
                    imgCover: '../../assets/projects/pokemon-app/pokemon-app.webp',
                    projectImg: [
                        '../../assets/projects/pokemon-app/pokemon-app.webp',
                        '../../assets/projects/pokemon-app/pokemon-app-2.webp',
                        '../../assets/projects/pokemon-app/pokemon-app-3.webp',
                        '../../assets/projects/pokemon-app/pokemon-app-4.webp',
                        '../../assets/projects/pokemon-app/pokemon-app-5.webp',

                    ],
                    links: [{
                      icon: '../../../../assets/icons/folder.webp',
                      name: 'Repository',
                      link: 'https://github.com/francescobert97/pokemon-react-app'
                    },
                    {
                      icon: '../../../../assets/icons/live.webp',
                      name: 'live version',
                      link: 'https://francescobert97.github.io/pokemon-react-app/'
                    },
                  ],
                    description: 'Pokémon App is the ultimate app for Pokémon fans, offering an all-in-one solution to explore, capture, and manage your favorite Pokémon. With access to a complete Pokédex featuring all species, you can discover every detail about each Pokémon—types, abilities, stats, moves, and more. But that’s not all! It allows you to catch any Pokémon and organize them into your personal team or send them to your Pokémon Box for future use. Seamlessly switch between your active team and stored Pokémon, and dive deep into their individual stats and characteristics at the click of a button.',
                }

      ]
        }
    }
]
