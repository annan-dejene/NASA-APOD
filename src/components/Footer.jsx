/* eslint-disable react/prop-types */
import { FaCircleInfo } from "react-icons/fa6";

const Footer = ({ setShowModal, astronomyToday }) => {
  const handleShowModal = () => {
    setShowModal((prevVal) => !prevVal);
  };

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD Project</h1>
        <h2>{astronomyToday.title}</h2>
      </div>

      <FaCircleInfo className="info" onClick={handleShowModal} />
    </footer>
  );
};

export default Footer;
