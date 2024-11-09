import { rollD20 } from '../utils/dice';
import chartA from '../data/chartA.json';
import { AbilityScores } from '../models';

const AbilityScoreGenerator = ({ onGenerate }: { onGenerate: (scores: AbilityScores) => void }) => {
  const handleRoll = () => {
    const roll = rollD20();
    const scores = chartA[roll - 1];
    onGenerate(scores);
  };
  
  return (
    <button onClick={handleRoll}>Generate Ability Scores</button>
  );
};

export default AbilityScoreGenerator;