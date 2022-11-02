import {useState} from 'react';
import {useSearchParams,useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'

function Home(){
    const [params,setParams] = useSearchParams();
    const nick = params.get('nick');
    const newNick = useSelector((state) => state.nick)

    return(
        <>
            <h1>HOME</h1>
            <h1>{newNick } 님 환영합니다.</h1>
        </>
    )
};

export default Home;