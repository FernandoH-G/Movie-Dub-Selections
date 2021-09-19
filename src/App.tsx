import "./App.css"
import Header from "./Components/Header"

function App() {
  return (
    <div >
      <Header />
      <div className="search">
        <form>
          <input
            type="search"
            id="search-movie"
            placeholder="Thor: Ragnarok"
            required />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default App;
