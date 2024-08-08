/* eslint-disable react/prop-types */
const Main = ({ astronomyToday }) => {
  return (
    <div className="imageContainer">
      <img
        src={astronomyToday.url}
        alt={astronomyToday.title}
        className="bgImage"
      />
    </div>
  );
};

export default Main;
