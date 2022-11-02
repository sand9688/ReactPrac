import { useState } from "react";


function Ex02(){

    const [todoArray, setTodoArray] = useState([]);
    //let text='';
    const [testText, setText] = useState('');
    function chText(e){
        setText(e.target.value)
        //text = e.target.value;
    }
    function addList(e){
        //리엑트에서 배열에 값을 추가할때는 -> push가 아닌 concat 을 사용한다.

        //불변성 유지 : 상태값을 업데이트 할때는 기존 상태를 그대로 두면서
        //새로운 값으로 상태를 업데이트 해줘야 함
        setTodoArray(todoArray.concat(testText))
    }
    function  deletArray(e){
        setTodoArray(todoArray.filter(function(data,index) {
            return index != e.target.value
        }))


    }


    return(
        <>
            <h1> TodoList</h1>
            <input type='text'onChange={chText}></input>
            <button onClick={addList}>추가</button>
            {todoArray.map(function(data,index){
                return (<div>
                            <h1>{data}</h1>
                            <button value={index} onClick={deletArray}>삭제</button>
                        </div>)
            })}
        </>
    )
}

export default Ex02;