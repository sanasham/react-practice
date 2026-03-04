const movie = ({ movie }) => {
  return (
    <li key={movie.id} className='mb-4 p-4 border rounded-lg flex'>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className='w-24 h-36 object-cover mr-4'
      />
      <div>
        <h3 className='text-xl font-bold'>
          {movie.title} ({movie.year})
        </h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.rating}</p>
        <p>Runtime: {movie.runtime}</p>
      </div>
    </li>
  );
};
export default movie;
