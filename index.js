import React from "react";
import ReactDOM from "react-dom";
import MapContainer from './GoogleMap';

export function App() {
  var temp = (
    <div className="App">
      <h2>My Google Map</h2>
      <MapContainer />
    </div>
  );

  const heading = React.createElement("div", {}, temp);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
}

export default App;


var cHome = 0, cStartTrip = 0, cFinTrip = 0;

export function Home()
{
    ++cHome;
    
    const heading = React.createElement("h1", {}, "Home - " + cHome);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

    console.log("Home calling");
}

export function StartTrip()
{
    console.log("Start trip calling");
}

export function FinishTrip()
{
    console.log("Finish Trip Calling");
}

// Expose the functions to the global scope
window.Home = Home;
window.StartTrip = StartTrip;
window.FinishTrip = FinishTrip;
window.App = App;