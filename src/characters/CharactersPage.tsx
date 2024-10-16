import React, {Fragment, useState, useEffect} from 'react';

import { characterAPI } from './characterAPI';
import CharacterList from './CharacterList';
import { Character } from './Character';

function CharactersPage () {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };

    useEffect(() => {
        async function loadCharacters() {
            setLoading(true);
            try {
                const data = await characterAPI.get(currentPage);
                setError('');
                //setCharacters(data);
                if (currentPage === 1) {
                    setCharacters(data);
                } else {
                    setCharacters((characters) => [...characters, ...data]);
                }
            }
            catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
            } finally {
            setLoading(false);
            }
        }
        loadCharacters();
        }, [currentPage]);


    const saveCharacter = (character: Character) => {
        //console.log('Saving character: ', character);
        //let updatedCharacters = characters.map((p: Character) => {
        //    return p.id === character.id ? character : p;
        //});
        //setCharacters(updatedCharacters)
        characterAPI
            .put(character)
            .then((updatedCharacter) => {
            let updatedCharacters = characters.map((p: Character) => {
                return p.id === character.id ? new Character(updatedCharacter) : p;
            });
            setCharacters(updatedCharacters);
            })
            .catch((e) => {
                if (e instanceof Error) {
                setError(e.message);
                }
            });
    };

    return (
        <Fragment>
            <h1>Characters</h1>
            {error && (
                <div className="row">
                <div className="card large error">
                    <section>
                    <p>
                        <span className="icon-alert inverse "></span>
                        {error}
                    </p>
                    </section>
                </div>
                </div>
            )}

            <CharacterList 
                onSave={saveCharacter}
                characters ={characters} 
            />

            {!loading && !error && (
                <div className="row">
                    <div className="col-sm-12">
                        <div className="button-group fluid">
                        <button className="button default" onClick={handleMoreClick}>
                            More...
                        </button>
                        </div>
                    </div>
                </div>
            )}

            {loading && (
                <div className="center-page">
                <span className="spinner primary"></span>
                <p>Loading...</p>
                </div>
            )}
        </Fragment>
    );
}

export default CharactersPage;