import React, { useState } from 'react';
import AbilityScoreGenerator from './components/AbilityScoreGenerator';
import { Character, AbilityScores } from './models';

const App: React.FC = () => {
  const [character, setCharacter] = useState<Character>({
    abilityScores: { strength: 0, intelligence: 0, wisdom: 0, dexterity: 0, constitution: 0, charisma: 0 },
    background: "",
    class: "",
    race: "",
    equipment: [],
    wealth: 0,
    hitPoints: 0,
  });

  const handleScoresGenerated = (scores: AbilityScores) => {
    setCharacter((prev) => ({ ...prev, abilityScores: scores }));
  };

  return (
    <div>
      <h1>Quick Character Generator</h1>
      <AbilityScoreGenerator onGenerate={handleScoresGenerated} />
      {character && <pre>{JSON.stringify(character, null, 2)}</pre>}
    </div>
  );
};

export default App;
