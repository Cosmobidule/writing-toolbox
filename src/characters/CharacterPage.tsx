import React, { useEffect, useState } from 'react';
import { characterAPI } from './characterAPI';
import CharacterDetail from './CharacterDetail';
import { Character } from './Character';
import { useParams } from 'react-router-dom';

function CharacterPage(props: any) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    characterAPI
      .find(id)
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <>
        <h1>Character Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {character && <CharacterDetail character={character} />}
      </>
    </div>
  );
}

export default CharacterPage;