import React, { useState } from 'react';
import { CharacterProvider } from './context/CharacterContext';
import RollAbilityScores from './components/RollAbilityScores';
import RollBackground from './components/RollBackground';
import CharacterSheet from './components/CharacterSheet';

const App: React.FC = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);

  return (
    <CharacterProvider>
      <div className="App">
        {step === 0 && <RollAbilityScores onNext={nextStep} />}
        {step === 1 && <RollBackground onNext={nextStep} />}
        {/* Add other steps here as components */}
        {step === 5 && <CharacterSheet />}
      </div>
    </CharacterProvider>
  );
};

export default App;
