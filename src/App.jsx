import { Campaign } from "./components/Campaign";
import { Hero } from "./components/Hero";
import { Howitworks } from "./components/Howitworks";
import { Raise } from "./components/Raise";

function App() {
  return (
    <div className="App">
      <Hero />
      <Howitworks />
      <Campaign />
      <Raise />
    </div>
  );
}

export default App;
