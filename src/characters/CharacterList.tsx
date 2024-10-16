import React, {useState} from 'react';
import { Character } from './Character';
import CharacterCard from './CharacterCard';
import CharacterForm from './CharacterForm';

interface CharacterListProps {
  characters: Character[];
  onSave: (character : Character) => void;
}

function CharacterList({ characters, onSave }: CharacterListProps) {
  const [characterBeingEdited, setCharacterBeingEdited] = useState({});

  const handleEdit = (character: Character) => {
    console.log(character) ;
    setCharacterBeingEdited(character);
  }

  const cancelEditing = () => {
    setCharacterBeingEdited({});
  }



  return (
      <div className="row">
        {
          characters.map((character) => (
          <div key={character.id} className="cols-sm">
              {character === characterBeingEdited ? (
                <CharacterForm character={character} onSave={onSave} onCancel={cancelEditing} />
              ) : (
                <CharacterCard character={character} onEdit={handleEdit} />
              )}
          </div>
        ))
        }
      </div>
  );
}

export default CharacterList;