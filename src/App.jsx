import { useLoadScript } from "@react-google-maps/api";
import Map from "./components/Map";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBwPz_DE6jWCAbKVKL-FAeKZOKo6lUyiGU",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export default App;
