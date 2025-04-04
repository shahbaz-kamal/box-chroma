import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Grid from "./Grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto ">
      <h1 className="text-center my-5 md:my-6  text-3xl md:text-4xl font-bold">
        Color Changing Box
      </h1>
      <section>
        <Grid></Grid>
      </section>
    </div>
  );
}

export default App;
