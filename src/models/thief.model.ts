import { AbilityName } from "./iabilitities.interface";
import { SavingThrowName } from "./isaving-throws.interface";
import { ClassName } from "./classname.enum";
import IClass from "./iclass.interface";

const WEAPON_RESTRICTIONS_KEY = "game.classes.weaponRestrictions"

export class Thief implements IClass {

    private constructor() { }
    private static instance: Thief;
    public static getInstance(): Thief{
        if (!Thief.instance) {
            Thief.instance = new Thief();
        }

        return Thief.instance;
    }

    className = ClassName.THIEF;
    hpBonus = { 10: 2, 11: 4, 12: 6, 13: 8, 14: 10, 15: 12, 16: 14, 17: 16, 18: 18, 19: 20, 20: 22 };
    abilityRequirements = { [AbilityName.DEXTERITY]: 9 };
    savingThrow = {
        [SavingThrowName.POISON]: [13, 12, 11, 11, 10, 9, 9, 8, 7, 7, 6],
        [SavingThrowName.WANDS]: [14, 14, 13, 13, 12, 12, 10, 10, 9, 9, 8],
        [SavingThrowName.PARALYSIS]: [13, 12, 12, 11, 11, 10, 10, 9, 9, 8, 8],
        [SavingThrowName.DRAGONBREATH]: [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6],
        [SavingThrowName.SPELLS]: [15, 14 ,13, 13, 12, 11, 11, 10, 9, 9, 8]
    };
    classAbilities = { "Thief Abilities" : {
        "Open Locks": [25, 30, 35, 40, 45, 50, 55, 60, 65, 68, 71, 74, 77, 80, 83, 84, 85, 86, 87, 88],
        "Remove Traps": [20, 25, 30, 35, 40, 45, 50, 55, 60, 63, 66, 69, 72, 75, 78, 79, 80, 81, 82, 83],
        "Pick Pockets": [30, 35, 40, 45, 50, 55, 60, 65, 70, 74, 78, 82, 86, 90, 94, 95, 96, 97, 98, 99],
        "Move Silently": [25, 30, 35, 40, 45, 50, 55, 60, 65, 68, 71, 74, 77, 80, 83, 85, 87, 89, 91, 93],
        "Climb Walls": [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
        "Hide": [10, 15, 20, 25, 30, 35, 40, 45, 50, 53, 56, 59, 62, 65, 68, 69, 70, 71, 72, 73],
        "Listen": [30, 34, 38, 42, 46, 50, 54, 58, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95]
    }};
    hd = 4;
    ab = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8];
    weaponRestrictions = [`${WEAPON_RESTRICTIONS_KEY}.noMetalArmor`];
}