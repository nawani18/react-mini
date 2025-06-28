import { toast } from "react-toastify";
import "./search.scss";
import { useForm } from "react-hook-form";

const Search = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();
  const SubmitHandler = (data) => {
    if (!data.City) {
      toast.error("Please enter a city name to search.");
      return;
    } else {
      onSearch(data.City);
    }
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <div className="search">
        <div className="search-box">
          <input
            className="search-input"
            {...register("City")}
            type="text"
            placeholder="Search..."
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
