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
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
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
  <div>
    <Seo title="Home" />
    {isLoading ?(
      <h4>loading</h4>
    ) : (
      data?.results.map((movie)=> (
        <div key={movie.id}>
          <h4> {movie.original_title} </h4>
        </div>
        ))
      )}
  </div>
  );
}

