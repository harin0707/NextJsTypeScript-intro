import { useRouter, NextRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next';


export default function Detail() {
    const router: NextRouter = useRouter();
    type MovieDetailParams = [string, string] | [];
    const [title, id] = (router.query.params || []) as MovieDetailParams;
    console.log(router);


    return(
        <div>
            <h4>{title} </h4>
        </div>
    ) 
}


// 서버사이드 렌더링으로 유저가 접속하기 전에 탭제목을 바꿀 수도 있음
// export const getServerSideProps: GetServerSideProps = async (context) => {


    