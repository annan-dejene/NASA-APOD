/* eslint-disable react/prop-types */
const DateField = ({ setLoading, selectedDate, setSelectedDate }) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setLoading(true);
  };

  const handleResetButton = () => {
    setSelectedDate(`${currentDate}`);
  };

  return (
    <div className="dateInputContainer">
      <input
        type="date"
        className="dateInput"
        value={selectedDate}
        onInput={handleDateChange}
        min="1995-06-16"
        max={`${currentDate}`}
      />
      <button className="dateInputButton" onClick={handleResetButton}>
        Reset
      </button>
    </div>
  );
};

export default DateField;
