import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

const CharacterSheet: React.FC = () => {
  const { character } = useContext(CharacterContext);

  return (
    <div className="character-sheet">
      <h2>Character Sheet</h2>
      <section>
        <h3>Ability Scores</h3>
        <p>Strength: {character.abilityScores.strength}</p>
        <p>Intelligence: {character.abilityScores.intelligence}</p>
        <p>Wisdom: {character.abilityScores.wisdom}</p>
        <p>Dexterity: {character.abilityScores.dexterity}</p>
        <p>Constitution: {character.abilityScores.constitution}</p>
        <p>Charisma: {character.abilityScores.charisma}</p>
      </section>
      <section>
        <h3>Background</h3>
        <p>{character.background}</p>
      </section>
      <section>
        <h3>Class & Race</h3>
        <p>Class: {character.class}</p>
        <p>Race: {character.race}</p>
      </section>
      <section>
        <h3>Equipment & Wealth</h3>
        <ul>
          {character.equipment.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <p>Wealth: {character.wealth} gp</p>
      </section>
      <section>
        <h3>Hit Points</h3>
        <p>{character.hitPoints}</p>
      </section>
      <section>
        <h3>Spells</h3>
        <ul>
          {character.spells?.map((spell, index) => <li key={index}>{spell}</li>)}
        </ul>
      </section>
    </div>
  );
};

export default CharacterSheet;
