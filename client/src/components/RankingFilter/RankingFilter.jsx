import { useDispatch } from "react-redux";
import { sortVideogamesByRank, getVideogames} from "../../redux/actions";

const RankingFilter = () => {
  const dispatch = useDispatch();

  const handleRankFilter = (event) => {
    if (event.target.value === "default") {
      dispatch(getVideogames());
    } else {
      dispatch(sortVideogamesByRank(event.target.value));
    }
  };

  return (
    <div>
      <label htmlFor="ranking-select">Ordenar por rating:</label>
      <select id="ranking-select" onChange={handleRankFilter}>
        <option value="default">Por defecto</option>
        <option value="desc">De mayor a menor</option>
        <option value="asc">De menor a mayor</option>
      </select>
    </div>
  );
};

export default RankingFilter;