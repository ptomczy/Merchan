export interface IPerson {
    name: string,
    age: number,
    height: number,
    tits: string | null,
    skills: Array<number>,
    photo: string
}

export interface IRoom {
    id: number,
    name: string
}

export interface ISkill {
    id: number,
    name: string
}

export interface IMeeting {
    id: number, room: IRoom, person: IPerson, startTime: string, endTime: string
}