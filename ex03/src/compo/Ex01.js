import {useEffect, useState} from 'react'

function Ex01(){
    const [data, setData] = useState(0);
    const [data1,setData1] = useState(0);
    // useEffect : 렌더링 되지마자 이거부터 실행해 주세요!
    //--> 상태값이 바뀔때마다 다시 실해시킨다.
    useEffect(function(){
        console.log("Test");
    },[data]); // [data] --> data라는 상태값이 바뀌었을때만 실행시켜주세요
    function plus(){
        setData (data + 1)
    }

    function mina(){
        setData (data - 1)
    }
    function plus1(){
        setData1 (data1 + 1)
    }

    function mina1(){
        setData1 (data1 - 1)
    }

    return (
        <>
            <h1>useEffect 첫번째</h1>
            <button onClick={plus}>+</button>
            <span>{data}</span>
            <button onClick={mina}>-</button>
            <br></br>
            <button onClick={plus1}>+</button>
            <span>{data1}</span>
            <button onClick={mina1}>-</button>

            
        </>
    )   
}

export default Ex01;