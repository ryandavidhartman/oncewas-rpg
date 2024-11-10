import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AbilityScores } from '../models/AbilityScores';
import { Character } from '../models/Character';

interface CharacterContextType {
  character: Character;
  setAbilityScores: (scores: AbilityScores) => void;
  setBackground: (background: string) => void;
  setClass: (charClass: string) => void;
  setRace: (race: string) => void;
  setEquipment: (equipment: string[]) => void;
  setWealth: (wealth: number) => void;
  setHitPoints: (hitPoints: number) => void;
  setSpells: (spells: string[]) => void;
}

// Define initial state
const initialCharacter: Character = {
  abilityScores: {
    strength: 0,
    intelligence: 0,
    wisdom: 0,
    dexterity: 0,
    constitution: 0,
    charisma: 0,
  },
  background: '',
  class: '',
  race: '',
  equipment: [],
  wealth: 0,
  hitPoints: 0,
  spells: [],
};

// Create the context with default values
const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

// CharacterProvider component
export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [character, setCharacter] = useState<Character>(initialCharacter);

  const setAbilityScores = (scores: AbilityScores) => {
    setCharacter((prev) => ({ ...prev, abilityScores: scores }));
  };

  const setBackground = (background: string) => {
    setCharacter((prev) => ({ ...prev, background }));
  };

  const setClass = (charClass: string) => {
    setCharacter((prev) => ({ ...prev, class: charClass }));
  };

  const setRace = (race: string) => {
    setCharacter((prev) => ({ ...prev, race }));
  };

  const setEquipment = (equipment: string[]) => {
    setCharacter((prev) => ({ ...prev, equipment }));
  };

  const setWealth = (wealth: number) => {
    setCharacter((prev) => ({ ...prev, wealth }));
  };

  const setHitPoints = (hitPoints: number) => {
    setCharacter((prev) => ({ ...prev, hitPoints }));
  };

  const setSpells = (spells: string[]) => {
    setCharacter((prev) => ({ ...prev, spells }));
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        setAbilityScores,
        setBackground,
        setClass,
        setRace,
        setEquipment,
        setWealth,
        setHitPoints,
        setSpells,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

// Custom hook to use the CharacterContext
export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};
