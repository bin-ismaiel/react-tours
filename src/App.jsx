import { useEffect, useState } from "react";
import Tour from "./components/Tour";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetchTours();
  }, []);

  const deleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    );
  }
  return (
    <main>
      <h2>Our Tours </h2>

      <section>
        {tours.map((ele) => {
          return <Tour key={ele.id} {...ele} onDelete={deleteTour} />;
        })}
      </section>
    </main>
  );
};
export default App;
