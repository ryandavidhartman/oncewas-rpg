export interface AbilityScores {
    strength: number;
    intelligence: number;
    wisdom: number;
    dexterity: number;
    constitution: number;
    charisma: number;
  }
  
export interface Character {
  abilityScores: AbilityScores;
  background: string;
  class: string;
  race: string;
  equipment: string[];
  wealth: number;
  hitPoints: number;
}