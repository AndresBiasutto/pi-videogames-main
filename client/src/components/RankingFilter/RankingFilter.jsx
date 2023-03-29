const RankingFilter = ({ onRankingChange }) => {
    return (
        <form>
            <label htmlFor="ranking-select">Ordenar por ranking:</label>
            <select id="ranking-select" onChange={onRankingChange}>
                <option value="default">Por defecto</option>
                <option value="desc">De mayor a menor</option>
                <option value="asc">De menor a mayor</option>
            </select>
        </form>
    );
}

export default RankingFilter;