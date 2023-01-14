import {useEffect, useState} from 'react';
import Seo  from "../components/Seo";
import {useQuery} from 'react-query';

const API_KEY = "724b8aaa1e15cd140090c718dab6ece0";

interface IGetMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
}

function getMovies() {
  return fetch(
    `/api/movies`
  ).then((response)=>response.json());
}

export default function Home(){
  const {data, isLoading} = useQuery<IGetMoviesProps>(
    ["movies", "popular"],
    getMovies
  );

  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const {results} = await (
  //       await fetch(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //       )
  //     ).json();
  //     setMovies(results);
  //   })();
  // },[]);

  return (
  <div className="container">
    <Seo title="Home" />
    {isLoading ?(
      <h4>loading</h4>
    ) : (
      data?.results.map((movie)=> (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4> {movie.original_title} </h4>

        </div>
        )))}

<style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
  </div>
  );
}

