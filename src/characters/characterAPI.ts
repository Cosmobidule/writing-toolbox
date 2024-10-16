import { Character } from './Character';
const baseUrl = 'http://localhost:4000';
const url = `${baseUrl}/characters`;

/**
 * Fait apparaître un message en cas de code d'erreur.
 */
function translateStatusToErrorMessage(status: number) {
    switch (status) {
      case 401:
        return 'Please login again.';
      case 403:
        return 'You do not have permission to view the character(s).';
      default:
        return 'There was an error retrieving the character(s). Please try again.';
    }
  }

  function checkStatus(response: any) {
    if (response.ok) {
      return response;
    } else {
      const httpErrorInfo = {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
      };
      console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);
  
      let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
      throw new Error(errorMessage);
    }
  }

function parseJSON(response: Response) {
  return response.json();
}

// eslint-disable-next-line
function delay(ms: number) {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}


function convertToCharacterModels(data: any[]): Character[] {
    let characters: Character[] = data.map(convertToCharacterModel);
    return characters;
  }
  
  function convertToCharacterModel(item: any): Character {
    return new Character(item);
  }
  
  const characterAPI = {
      get(page = 1, limit = 10) {
          return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
          //.then(delay(600))
          .then(checkStatus)
          .then(parseJSON)
          .then(convertToCharacterModels)
          .catch((error: TypeError) => {
              console.log('log client error ' + error);
              throw new Error(
              'There was an error retrieving the characters. Please try again.'
              );
          });
      },
      put(character: Character) {
          return fetch(`${url}/${character.id}`, {
            method: 'PUT',
            body: JSON.stringify(character),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(checkStatus)
          .then(parseJSON)
          .catch((error: TypeError) => {
          console.log('log client error ' + error);
          throw new Error(
              'There was an error updating the character. Please try again.'
          );
          });
      },
      find(id: number) {
      return fetch(`${url}/${id}`)
          .then(checkStatus)
          .then(parseJSON)
          .then(convertToCharacterModel);
      },
  };
  


export { characterAPI };