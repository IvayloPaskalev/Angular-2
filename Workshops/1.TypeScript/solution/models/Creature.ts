import { ICanBeHit } from './interfaces/ICanBeHit';
import { Power } from './Power';
import { DamageType } from './enums/DamageType';

export abstract class Creature implements ICanBeHit{
    private _name: string;
    public health: number;
    public immunities: DamageType[];

    constructor(name: string, health: number, ...immunities: DamageType) {
        this.name = name;
        this.health = health;
        this.immunities = immunities;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    takeHit(damage: number) {
        this.health = this.health - damage * 0.2;
    }

    takeHitWith(power: Power) {
        this.health = this.health - (power.damageType * power.damage);
    }
};