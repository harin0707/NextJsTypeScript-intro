// import {useEffect, useState} from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Seo  from "../components/Seo";
import {useQuery} from 'react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

// interface IGetMoviesProps {
//   page: number;
//   results: IMovieProps[];
//   total_pages: number;
//   total_results: number;
// }

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

interface IClick {
  id: number;
}

// function getMovies() {
//   return fetch(
//     `/api/movies`
//   ).then((response)=>response.json());
// }

export default function Home({ results }: InferGetServerSidePropsType<GetServerSideProps>){
  // const {data, isLoading} = useQuery<IGetMoviesProps>(
  //   ["movies", "popular"],
  //   getMovies
  // );

  const router = useRouter();
  const onClick = (id:number, title:string) =>{
    router.push({
      pathname:`/movies/${id}`,
      query:{
        title
      },
    },
    `/movies/${id}`
    );
  }

  return (
  <div className="container">
    <Seo title="Home" />
    
      {results?.map((movie: IMovieProps)=> (
        <div 
          onClick={()=>onClick(movie.id, movie.original_title)} 
          className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Link href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`/movies/${movie.id}`}>
              <h4> {movie.original_title} </h4>
            </Link>
        </div>
        ))}

  <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie{
          cursor: pointer,
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
          color: black;
        }
      `}</style>
  </div>
  );
}

export async function getServerSideProps({}: GetServerSideProps){
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
    ).json();
  return {
    props: {
      results,
    },
  };
}

