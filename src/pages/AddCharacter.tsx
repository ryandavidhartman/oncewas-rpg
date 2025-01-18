import React, { useState } from "react";
import { AbilityName } from "../models/iabilitities.interface";
import { ClassName } from "../models/classname.enum";

type CharacterAttributes = Record<AbilityName, number>;

interface CharacterData {
  name: string;
  race: string;
  gender: string;
  className: string;
  attributes: CharacterAttributes;
}

const AddCharacterPage: React.FC = () => {
  const [character, setCharacter] = useState<CharacterData>({
    name: "",
    race: "",
    gender: "",
    className: "",
    attributes: {
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    },
  });

  const races = ["Human", "Elf", "Dwarf", "Halfling", "Orc", "Tiefling"];
  const genders = ["Male", "Female", "Non-binary"];
  const classes = Object.values(ClassName);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  const handleAttributeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    attribute: AbilityName
  ) => {
    const { value } = event.target;
    setCharacter({
      ...character,
      attributes: {
        ...character.attributes,
        [attribute]: parseInt(value, 10) || 0,
      },
    });
  };

  const handleSubmit = () => {
    console.log("Character Data:", character);
    // Placeholder for API call or local save
    alert(`Character ${character.name} created!`);
  };

  return (
    <div className="add-character-page">
      <h1>Add New Character</h1>

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={character.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Race:</label>
        <select
          name="race"
          value={character.race}
          onChange={handleSelectChange}
        >
          <option value="">Select Race</option>
          {races.map((race) => (
            <option key={race} value={race}>
              {race}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Gender:</label>
        <select
          name="gender"
          value={character.gender}
          onChange={handleSelectChange}
        >
          <option value="">Select Gender</option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Class:</label>
        <select
          name="className"
          value={character.className}
          onChange={handleSelectChange}
        >
          <option value="">Select Class</option>
          {classes.map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </div>

      <div className="attributes">
        <h2>Attributes</h2>
        {Object.keys(character.attributes).map((attr) => (
          <div key={attr} className="form-group">
            <label>{attr}:</label>
            <input
              type="number"
              value={character.attributes[attr as AbilityName]}
              onChange={(e) =>
                handleAttributeChange(e, attr as AbilityName)
              }
            />
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Create Character</button>
    </div>
  );
};

export default AddCharacterPage;
