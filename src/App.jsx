import { useEffect, useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DateField from "./components/DateField";
import Circles from "react-loading-icons/dist/esm/components/circles";

const App = () => {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const currentDate = new Date().toISOString().split("T")[0];

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [astronomyToday, setAstronomyToday] = useState({});
  const [selectedDate, setSelectedDate] = useState(`${currentDate}`);

  useEffect(() => {
    const fetchAPOD = async (date = selectedDate) => {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`
        );
        const data = await res.json();
        setAstronomyToday(data);
      } catch (error) {
        console.log("Error occured while fetching", error);
      } finally {
        setLoading(false);
      }
    };

    const astronomyTodaysessionStorage = sessionStorage.getItem(
      `${selectedDate} - NASA Astronomy Picture of the Day`
    );

    if (
      !astronomyTodaysessionStorage ||
      Object.keys(JSON.parse(astronomyTodaysessionStorage)).length === 0
    ) {
      fetchAPOD(selectedDate);
      console.log("fetching data", selectedDate);
    } else {
      setAstronomyToday(JSON.parse(astronomyTodaysessionStorage));
      setLoading(false);
      console.log("data fetched from sessionStorage");
    }
  }, [selectedDate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    sessionStorage.setItem(
      `${selectedDate} - NASA Astronomy Picture of the Day`,
      JSON.stringify(astronomyToday)
    );
    console.log("data stored in sessionStorage");
  }, [astronomyToday]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Circles className="loader" />
        </div>
      ) : (
        <>
          <Main astronomyToday={astronomyToday} />
          <DateField
            setLoading={setLoading}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </>
      )}

      {showModal && (
        <SideBar setShowModal={setShowModal} astronomyToday={astronomyToday} />
      )}

      {!loading && (
        <Footer setShowModal={setShowModal} astronomyToday={astronomyToday} />
      )}
    </>
  );
};

export default App;
