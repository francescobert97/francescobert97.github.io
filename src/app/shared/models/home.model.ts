export interface IPresentation {
    video: string,
    profilePicture: string,
    biography: string
}

export interface ITecnology {
    id: number,
    name: string,
    icon: string,
    description: string, 
    animation: boolean,
    time: number,
    showDescription: boolean
}

export interface IProject {
    id: number,
    name: string,
    imgCover: string,
    projectImg: string[],
    description: string,
    imgResize: string
}

export interface IHome {
    presentation: IPresentation,
    tecnology: ITecnology[],
    project: IProject[]
}
export interface IContent {
    home: IHome
}