import axios from 'axios';
// == Composant
function App() {
  const handleClick = () => {
    axios.get('https://lexica.art/api/v1/search?q=apples')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="app">
      <button type="button" className="axios-query" onClick={handleClick}>query</button>
    </div>
  );
}

// == Export
export default App;
