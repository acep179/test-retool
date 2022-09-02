import React from "react";
import { Home } from "./pages";


function App() {
  return (
    <div>
      <header>
        <h1 className='bg-lime-200 p-4 text-center text-xl font-bold m-4'>
          Test Retool
        </h1>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
