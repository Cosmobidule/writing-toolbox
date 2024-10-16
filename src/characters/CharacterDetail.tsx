import React from 'react';
import { Character } from './Character';

interface CharacterDetailProps {
  character: Character;
}
export default function CharacterDetail({ character }: CharacterDetailProps) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img
            className="rounded"
            src={character.imageUrl}
            alt={character.name}
          />
          <section className="section dark">
            <h3 className="strong">
              <strong>{character.name}</strong> ( {character.nickname})
            </h3>
            <p>Story : {character.roman}</p>
            <p>{character.description}</p>
            <p>Job title : {character.jobtitle}</p>
            <p>Rank : {character.rank}</p>
            <p>Age : {character.age}</p>
            <p>
              <mark className="active">
                {' '}
                {character.isActive ? 'active' : 'inactive'}
              </mark>
              <mark className='maincharacter'>
                {' '}
                {character.mainCharacter ? 'active' : 'inactive' }
              </mark>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}