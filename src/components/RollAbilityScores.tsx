// components/RollAbilityScores.tsx
import React, { useContext } from 'react';
import { rollD20 } from '../utils/dice';
import CharacterContext from '../context/CharacterContext';
import chartA from '../data/chartA.json';

const RollAbilityScores: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);

  const handleRoll = () => {
    const roll = rollD20();
    const scores = chartA[roll - 1];
    setCharacter({ ...character, abilityScores: scores });
  };

  return (
    <button onClick={handleRoll}>Roll Ability Scores</button>
  );
};

export default RollAbilityScores;