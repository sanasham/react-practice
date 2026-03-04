import Movie from './Movie';
const movies = [
  {
    id: 1,
    title: 'Magadheera',
    year: 2009,
    director: 'S. S. Rajamouli',
    rating: 7.7,
    runtime: '166 min',
    posterUrl:
      'https://m.media-amazon.com/images/M/MV5BMjBhZTZhODktYzYyNy00ZjU1LTllYTAtNjQxY2Q2NmE1NzI2XkEyXkFqcGc@._V1_.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Magadheera_poster.jpg/220px-Magadheera_poster.jpg',
  },
  {
    id: 2,
    title: 'Baahubali: The Beginning',
    year: 2015,
    director: 'S. S. Rajamouli',
    rating: 8.0,
    runtime: '159 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Baahubali_The_Beginning_poster.jpg/220px-Baahubali_The_Beginning_poster.jpg',
  },
  {
    id: 3,
    title: 'Baahubali 2: The Conclusion',
    year: 2017,
    director: 'S. S. Rajamouli',
    rating: 8.2,
    runtime: '167 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Baahubali_2_The_Conclusion_poster.jpg/220px-Baahubali_2_The_Conclusion_poster.jpg',
  },
  {
    id: 4,
    title: 'RRR',
    year: 2022,
    director: 'S. S. Rajamouli',
    rating: 8.0,
    runtime: '182 min',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg',
  },
  {
    id: 5,
    title: 'Pushpa: The Rise',
    year: 2021,
    director: 'Sukumar',
    rating: 7.6,
    runtime: '179 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/2d/Pushpa_-_The_Rise_%282021_film%29.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Pushpa_-_The_Rise_%282021_film%29.jpg/220px-Pushpa_-_The_Rise_%282021_film%29.jpg',
  },
  {
    id: 6,
    title: 'KGF: Chapter 1',
    year: 2018,
    director: 'Prashanth Neel',
    rating: 8.2,
    runtime: '155 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/fc/K.G.F_Chapter_1_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/K.G.F_Chapter_1_poster.jpg/220px-K.G.F_Chapter_1_poster.jpg',
  },
  {
    id: 7,
    title: 'KGF: Chapter 2',
    year: 2022,
    director: 'Prashanth Neel',
    rating: 8.3,
    runtime: '168 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/K.G.F_Chapter_2.jpg/220px-K.G.F_Chapter_2.jpg',
  },
  {
    id: 8,
    title: 'Vikram',
    year: 2022,
    director: 'Lokesh Kanagaraj',
    rating: 8.3,
    runtime: '175 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/d8/Vikram_2022_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Vikram_2022_poster.jpg/220px-Vikram_2022_poster.jpg',
  },
  {
    id: 9,
    title: 'Leo',
    year: 2023,
    director: 'Lokesh Kanagaraj',
    rating: 7.6,
    runtime: '164 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/0/0c/Leo_2023_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Leo_2023_poster.jpg/220px-Leo_2023_poster.jpg',
  },
  {
    id: 10,
    title: 'Jailer',
    year: 2023,
    director: 'Nelson Dilipkumar',
    rating: 7.2,
    runtime: '168 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b3/Jailer_2023_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Jailer_2023_poster.jpg/220px-Jailer_2023_poster.jpg',
  },
  {
    id: 11,
    title: 'Salaar: Part 1 – Ceasefire',
    year: 2023,
    director: 'Prashanth Neel',
    rating: 7.1,
    runtime: '175 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/5a/Salaar_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Salaar_poster.jpg/220px-Salaar_poster.jpg',
  },
  {
    id: 12,
    title: 'Sita Ramam',
    year: 2022,
    director: 'Hanu Raghavapudi',
    rating: 8.5,
    runtime: '163 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/28/Sita_Ramam_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Sita_Ramam_poster.jpg/220px-Sita_Ramam_poster.jpg',
  },
  {
    id: 13,
    title: 'Dasara',
    year: 2023,
    director: 'Srikanth Odela',
    rating: 7.6,
    runtime: '156 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/21/Dasara_film_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Dasara_film_poster.jpg/220px-Dasara_film_poster.jpg',
  },
  {
    id: 14,
    title: 'Devara: Part 1',
    year: 2024,
    director: 'Koratala Siva',
    rating: 8.0,
    runtime: '170 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/33/Devara_Part_1.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Devara_Part_1.jpg/220px-Devara_Part_1.jpg',
  },
  {
    id: 15,
    title: 'Kalki 2898 AD',
    year: 2024,
    director: 'Nag Ashwin',
    rating: 8.4,
    runtime: '180 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/74/Kalki_2898_AD.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Kalki_2898_AD.jpg/220px-Kalki_2898_AD.jpg',
  },
  {
    id: 16,
    title: 'RRR (Hindi Dubbed)',
    year: 2022,
    director: 'S. S. Rajamouli',
    rating: 8.0,
    runtime: '182 min',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/150px-RRR_Poster.jpg',
  },
  {
    id: 17,
    title: 'Bahubali: The Lost Legends',
    year: 2017,
    director: 'Sharad Devarajan',
    rating: 6.9,
    runtime: '25 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/f/f9/Baahubali_The_Lost_Legends_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Baahubali_The_Lost_Legends_poster.jpg/220px-Baahubali_The_Lost_Legends_poster.jpg',
  },
  {
    id: 18,
    title: 'Rangasthalam',
    year: 2018,
    director: 'Sukumar',
    rating: 8.4,
    runtime: '179 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/6a/Rangasthalam_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Rangasthalam_poster.jpg/220px-Rangasthalam_poster.jpg',
  },
  {
    id: 19,
    title: 'Arjun Reddy',
    year: 2017,
    director: 'Sandeep Reddy Vanga',
    rating: 8.0,
    runtime: '182 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/4f/Arjun_Reddy_poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Arjun_Reddy_poster.jpg/220px-Arjun_Reddy_poster.jpg',
  },
  {
    id: 20,
    title: 'Maharshi',
    year: 2019,
    director: 'Vamshi Paidipally',
    rating: 7.2,
    runtime: '178 min',
    posterUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7a/Magadheera_Poster.jpg',
    posterThumbnail:
      'https://upload.wikimedia.org/wikipedia/en/7/7a/Magadheera_Poster.jpg',
  },
];

const MovieComponent = () => {
  return (
    <div className='container mx-auto p-4'>
      <h2>Movies List</h2>
      <ul>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};
export default MovieComponent;
