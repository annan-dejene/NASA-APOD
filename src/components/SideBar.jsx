/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa6";

const SideBar = ({ setShowModal, astronomyToday }) => {
  const handleHideModal = () => {
    setShowModal((prevVal) => !prevVal);
  };

  return (
    <div className="sideBar">
      <div className="bgOverlay"></div>
      <div className="sideBarContents">
        <h2>{astronomyToday.title}</h2>
        <div>
          <p className="descriptionTitle">{astronomyToday.date}</p>
          <p>{astronomyToday.explanation}</p>
        </div>
        <FaArrowRight className="rightArrow" onClick={handleHideModal} />
      </div>
    </div>
  );
};

export default SideBar;
