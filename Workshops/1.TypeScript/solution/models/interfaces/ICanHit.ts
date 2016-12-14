import { Power } from '../Power';

export interface ICanHit {
    damage: number;

    hit(damage: number);
    hitWith(power: Power);
}