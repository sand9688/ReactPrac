import { useState,useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'


// useRef : 컴포넌트 안의 특정dom(요소) 선택할 수 잇게끔 도와 주는 기능
function Join(){

    const test = useSelector((state)=> state.id)
    const dispatch = useDispatch();

    const nav= useNavigate();
    const useID = useRef();

    const [id,SetId] = useState('');
    const [pw,SetPw] = useState('');
    const [nick,SetNick] = useState('');
    function Clear(){
        SetId("");
        SetPw("");
        SetNick("");
        //ref.current => ref가 적용된 태그를 의미!
        // useID.current.focus();
        document.getElementById('test').focus();
    };
    function ChangeId(e){
        SetId(e.target.value)
        console.log(id)
    };
    function ChangePw(e){
        SetPw(e.target.value)
        console.log(pw)
    };
    function ChangeNick(e){
        SetNick(e.target.value)
        console.log(nick)
    };
    function Login(){
        dispatch({type:'login',
                    id: id,
                    pw: pw,
                    nick: nick
                })
        nav('/login')

    }
    // function loGin(){
    //     nav(`/login?id=${id}&pw=${pw}&nick=${nick}`)
    // }
    //from : 주소값으로 이동하면서 form 태그 안에 있는 내용도 같이 전달
    return(
        <>
            <h1>회원가입 페이지{test}</h1>

            <form action='/login' method='get'>  
                id : <input name='id' type={"text"} onChange={ChangeId} value={id} ref={useID} id="test"></input>
                <br></br>
                pw: <input name='pw' type={"password"} onChange={ChangePw} value={pw}></input>
                <br></br>
                Nick : <input name='nick' type={"text"} onChange={ChangeNick} value={nick}></input>
                <br></br>
                {/* <Link to="/login" onClick={loGin}><button >Join</button></Link> */}
                <button type='button' onClick={Login}>Join(정보같이)</button>
                <button type='button' onClick={Clear}>초기화</button>
            </form>
                
        </>
    )
}

export default Join;