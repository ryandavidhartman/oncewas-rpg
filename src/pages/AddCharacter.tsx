import React, { useState } from "react";
import "../styles/index.css";
import { AbilityName } from "../models/iabilitities.interface";
import { ClassName } from "../models/classname.enum";
import { IRace } from "../models/irace.interface";
import { RaceName } from "../models/racename.enum";
import { Dwarf } from "../models/dwarf.model";
import { Elf } from "../models/elf.model";
import { Halfling } from "../models/halfling.model";
import { Human } from "../models/human.model";
import IClass from "../models/iclass.interface";
import { Cleric } from "../models/cleric.model";
import { Fighter } from "../models/fighter.model";
import { MagicUser } from "../models/magic-user.model";
import { MagicUserFighter } from "../models/magic-user-fighter.model";
import { MagicUserThief } from "../models/magic-user-thief.model";
import { Thief } from "../models/thief.model";

type CharacterAttributes = Record<AbilityName, number>;

interface CharacterData {
  name: string;
  race: IRace;
  gender: string;
  className: IClass;
  attributes: CharacterAttributes;
}

const AddCharacterPage: React.FC = () => {
  const [character, setCharacter] = useState<CharacterData>({
    name: "",
    race: {} as IRace,
    gender: "",
    className: {} as IClass,
    attributes: {
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    },
  });

  const genders = ["Male", "Female", "Non-binary"];
  const classes = Object.values(ClassName);
  const races = Object.values(RaceName);
  
  const createRace = (raceName: RaceName): IRace => {
    switch (raceName) {
      case RaceName.DWARF:
        return Dwarf.getInstance();;
      case RaceName.ELF:
        return Elf.getInstance();;
      case RaceName.HALFLING:
        return Halfling.getInstance();
      case RaceName.HUMAN:
        return Human.getInstance();
      default:
        throw new Error("Invalid race selected");
    }
  };

  const createClass = (className: ClassName): IClass => {
    switch (className) {
      case ClassName.CLERIC:
        return Cleric.getInstance();
      case ClassName.FIGHTER:
        return Fighter.getInstance();
      case ClassName.MAGICUSER:
        return MagicUser.getInstance();
      case ClassName.MAGICUSERFIGHTER:
        return MagicUserFighter.getInstance();
      case ClassName.MAGICUSERTHIEF:
        return MagicUserThief.getInstance();
      case ClassName.THIEF:
        return Thief.getInstance();
      default:
        throw new Error("Invalid class selected");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCharacter({ ...character, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === "race") {
      const selectedRace = createRace(value as RaceName);
      setCharacter({ ...character, race: selectedRace });
    } else if (name === "className") {
      const selectedClass = createClass(value as ClassName);
      setCharacter({ ...character, className: selectedClass });  
    } else {
      setCharacter({ ...character, [name]: value });
    }
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

  <div className="form-row">
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={character.name}
        onChange={handleInputChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="race">Race:</label>
      <select
        id="race"
        name="race"
        value={character.race.raceName || ""}
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
      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
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
      <label htmlFor="className">Class:</label>
      <select
        id="className"
        name="className"
        value={character.className.className || ""}
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
  </div>

  <div className="attributes" style={{ width: "25%" }}>
    <h2>Attributes</h2>
    {Object.keys(character.attributes).map((attr) => (
      <div key={attr} className="form-group">
        <label>{attr}:</label>
        <input
          type="number"
          value={character.attributes[attr as AbilityName]}
          onChange={(e) => handleAttributeChange(e, attr as AbilityName)}
        />
      </div>
    ))}
  </div>

  <button onClick={handleSubmit} style={{ display: "block", margin: "1rem auto" }}>
        Create Character
  </button>
</div>
    
 );
};

export default AddCharacterPage;
