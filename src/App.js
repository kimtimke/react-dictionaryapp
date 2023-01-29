import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Image</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Kim Timke and is open-sourced on{" "}
            <a
              href="https://github.com/kimtimke/react-dictionaryapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
