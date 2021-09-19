import "./App.css"
import Header from "./Components/Header"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="search">
        <form>
          <input type="search" id="search" placeholder="Thor: Ragnarok" required />
          <button>Search</button>
        </form>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
