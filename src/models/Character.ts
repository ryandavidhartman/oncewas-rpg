import { AbilityScores } from "./AbilityScores";

export interface Character {
    abilityScores: AbilityScores;
    background: string;
    class: string;
    race: string;
    equipment: string[];
    wealth: number;
    hitPoints: number;
    spells?: string[];
  }