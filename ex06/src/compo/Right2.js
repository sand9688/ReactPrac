import {useDispatch} from 'react-redux'
//useDispatch : store에 연결되어 있는 reducer를 실행 시켜 주세요

function Right2(){
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Right2</h1>
            <button onClick={()=>dispatch({type:'plus'})}>+</button>
            <button onClick={()=>dispatch({type:'mius'})}>-</button>
        </div>
    );
};

export default Right2;