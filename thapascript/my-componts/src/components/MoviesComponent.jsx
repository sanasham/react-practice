import movies from '../data/movies.js';
import Test from './Test.jsx';
const MoviesComponent = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center my-8'>
        Movie List
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className='w-full h-64 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{movie.title}</h2>
              <p className='text-gray-600 mb-1'>Year: {movie.year}</p>
              <p className='text-gray-600 mb-1'>Genre: {movie.genre}</p>
              <p className='text-yellow-500 font-bold'>
                Rating: {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Test />
    </div>
  );
};

export default MoviesComponent;
