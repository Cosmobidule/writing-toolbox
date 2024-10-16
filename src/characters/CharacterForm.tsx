import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Character } from './Character';

interface CharacterFormProps {
  character: Character;
  onSave: (character: Character) => void;
  onCancel: () => void;
}

function CharacterForm({
  character: initialCharacter,
  onSave,
  onCancel,
}: CharacterFormProps) {
  const [character, setCharacter] = useState(initialCharacter);

  const [errors, setErrors] = useState({
    name : '', 
    description : '', 
    roman :''
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(character);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    // if input type is checkbox use checked
    // otherwise it's type is text, number etc. so use value
    let updatedValue = type === 'checkbox' ? checked : value;

    //if input type is number convert the updatedValue string to a number
    if (type === 'number') {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedCharacter: Character;
    // need to do functional update b/c
    // the new character state is based on the previous character state
    // so we can keep the character properties that aren't being edited like character.id
    // the spread operator (...) is used to
    // spread the previous character properties and the new change
    setCharacter((p) => {
      updatedCharacter = new Character({ ...p, ...change });
      return updatedCharacter;
    });
    setErrors(() => validate(updatedCharacter));
  };

  function validate(character: Character) {
    let errors: any = { name: '', description: '', roman: '' };
    if (character.name.length === 0) {
      errors.name = 'Name is required';
    }
    if (character.name.length > 0 && character.name.length < 3) {
      errors.name = 'Name needs to be at least 3 characters.';
    }
    if (character.description.length === 0) {
      errors.description = 'Description is required.';
    }
    if (character.roman.length === 0) {
      errors.roman = 'Roman is required.';
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.roman.length === 0
    );
  }
    


  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Character Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={character.name}
        onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="description">Character Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={character.description}
        onChange={handleChange}
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor="roman">Character Story</label>
      <input
        type="text"
        name="roman"
        placeholder="enter roman"
        value={character.roman}
        onChange={handleChange}
      />
      {errors.roman.length > 0 && (
        <div className="card error">
          <p>{errors.roman}</p>
        </div>
      )}
      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        checked={character.isActive}
        onChange={handleChange}
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default CharacterForm;