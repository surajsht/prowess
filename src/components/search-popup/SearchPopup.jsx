import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { UseCustomContext } from "../../context/Context";
import "./searchPopup.css";

const SearchPopup = () => {
  let { searchPopupState, setSearchPopupState } = UseCustomContext();

  return (
    <div
      className={`search-popup-container ${searchPopupState ? "active" : ""}`}
    >
      <IoMdClose
        className="search-popup-close"
        onClick={() => setSearchPopupState(false)}
      />

      <form className="search-popup-form">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <IoIosSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchPopup;
