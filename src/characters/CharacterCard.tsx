import { Character } from './Character';
import React from 'react';
import { Link } from 'react-router-dom';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

interface CharacterCardProps {
  character: Character;
  onEdit: (character : Character) => void;
}

function CharacterCard(props: CharacterCardProps) {
  const { character, onEdit } = props;
  
  const handleEditClick = ( characterBeingEdited : Character) => {
    console.log(characterBeingEdited);
    onEdit(characterBeingEdited);
  };
  
  return (
    <div className="card">
      <img src={character.imageUrl} alt={character.name} />
      <section className="section dark">
        
          <h5 className="strong">
            <strong>{character.name} </strong> 
            <mark className="detailLink">
                <Link to={'/characters/' + character.id}><span className='icon-info inverse'></span></Link>
            </mark>
          </h5>
          <p>{formatDescription(character.description)}</p>
          <p>
            <mark className='romanBulle'>
                {character.roman}
            </mark> 
        </p>
          <button className="bordered" onClick={() => handleEditClick(character)}>
              <span className="icon-edit"></span>
              Edit
          </button>
        
      </section>
    </div>
  );
}

export default CharacterCard;