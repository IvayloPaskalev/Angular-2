import { DamageType } from './enums/DamageType';
import { PowerType } from './enums/PowerType';

export class Power {
    name: string;
    damage: number;
    damageType: DamageType;
    powerType: PowerType;

    constructor(name: string, damage: number, damageType: DamageType, powerType: PowerType) {
        this.name = name;
        this.damage = damage;
        this.damageType = damageType;
        this.powerType = powerType;
    }
}