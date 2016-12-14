import { ICanBePet } from './ICanBePet';
import { Power } from '../Power';

export interface ICanHavePet {
    pets: ICanBePet[];
    powers: Power[];

    takePet(pet: ICanBePet);
    removePet(pet: ICanBePet);
} 