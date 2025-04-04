import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Grid from "./Grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center">
        {" "}
        <h1 className="text-center inline-flex my-5 md:my-6  text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 p-6 to-orange-500 bg-clip-text text-transparent">
          Color Changing Box
        </h1>
      </div>

      <section>
        <Grid></Grid>
      </section>
    </div>
  );
}

export default App;
