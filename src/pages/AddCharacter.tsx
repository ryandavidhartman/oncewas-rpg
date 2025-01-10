import React, { useState } from "react";
import { addCharacter } from "../utils/characterService";

interface Character {
  name: string;
  level: number;
  classType: string;
}

const AddCharacter: React.FC = () => {
  const [character, setCharacter] = useState<Character>({
    name: "",
    level: 1,
    classType: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({
      ...prev,
      [name]: name === "level" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCharacter(character); // Save character
    setCharacter({ name: "", level: 1, classType: "" }); // Reset form
  };

  return (
    <div>
      <h1>Add New Character</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={character.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="level">Level:</label>
          <input
            type="number"
            id="level"
            name="level"
            value={character.level}
            onChange={handleInputChange}
            min={1}
            max={20}
            required
          />
        </div>
        <div>
          <label htmlFor="classType">Class:</label>
          <select
            id="classType"
            name="classType"
            value={character.classType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a class</option>
            <option value="Fighter">Fighter</option>
            <option value="Wizard">Wizard</option>
            <option value="Cleric">Cleric</option>
            <option value="Thief">Thief</option>
            {/* Add other classes as needed */}
          </select>
        </div>
        <button type="submit">Add Character</button>
      </form>
    </div>
  );
};

export default AddCharacter;
