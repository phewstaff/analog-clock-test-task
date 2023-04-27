import Clock from "./Clock";

function App() {
  const apiUrl =
    "https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=grozny";
  return (
    <>
      <Clock apiUrl={apiUrl} />
    </>
  );
}

export default App;
