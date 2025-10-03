import "./App.css";

function ConditionalRendering() {
  const broj = 2;
  const isLoading = true;

  const tekst = broj === 1 ? <p>Broj je jedan</p> : <p>Broj nije jedan</p>;

  return (
    <>
      <h2>Number?</h2>
      {tekst}
      {isLoading && <p>Loading spinner ...</p>}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ConditionalRendering />
    </div>
  );
}

export default App;
