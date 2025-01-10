interface Character {
    name: string;
    level: number;
    classType: string;
  }
  
  const characters: Character[] = [];
  
  export const addCharacter = (character: Character) => {
    characters.push(character);
    console.log("Characters List:", characters);
  };
  