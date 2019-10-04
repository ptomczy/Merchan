import { Injectable } from "@angular/core";
import { IPerson, IRoom, ISkill } from '../models/suppliers.model';

const SKILLS: Array<ISkill> = [
    {id: 1, name: 'Classic'},
    {id: 2, name: 'Doggy'},
    {id: 3, name: 'Oral'},
    {id: 4, name: 'Anal'},
    {id: 5, name: '69'}
]

const PERSONS: Array<IPerson> = [
    {name: 'Lola', age: 23, height: 172, tits: '75C', skills: [1, 2], photo: 'assets/Lola.jpg'},
    {name: 'Tina', age: 29, height: 167, tits: '70B', skills: [1, 2, 3, 5], photo: 'assets/Tina.jpg'},
    {name: 'Venus', age: 26, height: 176, tits: '75D', skills: [1, 2, 4], photo: 'assets/Venus.jpg'},
    {name: 'Samantha', age: 33, height: 171, tits: '75B', skills: [1, 2, 3, 5], photo: 'assets/Samantha.jpg'},
    {name: 'Zdzicha', age: 55, height: 169, tits: '75C', skills: [1, 2, 3, 4, 5], photo: 'assets/Zdzicha.jpg'},
    {name: 'Megi', age: 24, height: 174, tits: '7D', skills: [1, 2, 3, 5], photo: 'assets/Megi.jpg'},
    {name: 'Jason', age: 25, height: 182, tits: null, skills: [2, 3, 4, 5], photo: 'assets/Jason.jpg'}
]

const ROOMS: Array<IRoom> = [
    {id: 1, name: 'Romantic Island'},
    {id: 2, name: 'Devil\'s church'},
    {id: 3, name: 'Spicy sawmill'}
]

@Injectable()
export class SuppliersService {

    getSuppliers() {
        return PERSONS;
    };

    getPlaces(){
        return ROOMS;
    };

    getSkills(){
        return SKILLS;
    }
}