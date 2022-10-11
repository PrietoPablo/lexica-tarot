import axios from 'axios';

import { useState } from 'react';

function App() {
  const readers = [
    'Cezanne',
    'Georgia O’Keeffe',
    'Francisco de Goya'
  ];

  const [tarotReader, setTarotReader] = useState('');
  const [cardImageURL, setCardImageURL] = useState('');

  const fetchAPI = (tarotReaderValue) => {
    axios.get('https://lexica.art/api/v1/search', {
      params: {
        q: `the tower in the style of ${tarotReaderValue}`
      }
    })
      .then((response) => {
        console.log(response);
        setCardImageURL(response.data.images[0].src);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setTarotReader(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAPI(tarotReader);
  };

  return (
    <div className="app">
      {!cardImageURL
        ? (
          <form className="card-reader-form" onSubmit={handleSubmit}>
            <select value={tarotReader} onChange={handleChange}>
              <option value="" disabled selected hidden>Select your Reader</option>
              {readers.map((reader) => (
                <option key={reader} value={reader}>{reader}</option>
              ))}
            </select>
            <button type="submit">Choose</button>
          </form>
        )
        : <img src={cardImageURL} alt="an apple" className="card-image" />}
    </div>
  );
}

// == Export
export default App;
