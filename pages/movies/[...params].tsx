import { useRouter, NextRouter } from 'next/router';
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Seo from '../../components/Seo'


interface MovieDetailParams{
    params: [string, string];
}

export default function Detail({params}:MovieDetailParams) {
    const [title, id] = params;


    return(
        <div>
            <Seo title={title}/>
            <h4>{title}</h4>
        </div>
    ) 
}


// 서버사이드 렌더링으로 유저가 접속하기 전에 탭제목을 바꿀 수도 있음
export const getServerSideProps = (context: GetServerSidePropsContext) => {
    return { props: { params: context.query.params } };
};

    