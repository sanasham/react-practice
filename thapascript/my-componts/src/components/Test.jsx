import movies from '../data/movies.js';
const Test = () => {
  return (
    <div>
      {movies.length > 0 &&
        movies.map((movie) => {
          return <p key={movie.id}>{movie.title}</p>;
        })}
    </div>
  );
};
export default Test;
