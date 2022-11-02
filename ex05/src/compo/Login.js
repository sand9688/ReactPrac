import {useState} from 'react';
import {useSearchParams,useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'

function Login(){

    const newId = useSelector((state) => state.id)
    const newPw = useSelector((state) => state.pw)
    const newNick = useSelector((state) => state.nick)
    
    const nav = useNavigate();
    const [params, setParams] = useSearchParams();

    const id = params.get('id');
    const pw = params.get('pw');
    const nick = params.get('nick');
    const [state, setState] = useState('');
    const [checkId, setCheckId] = useState('');
    const [checkPw, setCheckPw] = useState('');

    function LogId(e){
        setCheckId(e.target.value)
    }
    function LogPw(e){
        setCheckPw(e.target.value)
    }
    function Login(){
        if (checkId == newId && checkPw == newPw){
            nav(`/Home`)
        }else{
            setState('다시확인해주세요')
        }
    }
    function JoIn(){
        nav('/Join')
    }
    const hTtp = `/Home?nick${nick}` 
    return(
        <>
       
            <h1>Login 페이지</h1>
        <from action= '/Home' >
            ID : <input name='id' type={'text'} onChange={LogId} value={checkId}></input><br></br>
            PW : <input name='pw' type={'password'} onChange={LogPw} value={checkPw}></input><br></br>
            <button type="button" onClick={Login}>로그인</button>
            <button type="button" onClick={JoIn}>회원가입</button>
            <br></br>
        </from>
            <h1>{state}</h1>
        </>
    )
}

export default Login;