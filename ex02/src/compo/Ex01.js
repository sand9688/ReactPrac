import {useState} from 'react'

function Ex01(){

    //const array = ['눈','바람','비','맑음'];
    const [array, setArray] = useState(['눈','바람','비','맑음'])

    function deleteData(e){
        setArray(array.filter(function(data,index){
            return index != e.target.value
        }));
    }

    return(
        <>
            <ul>
                {array.map(function(data,index) {
                    return <li key={index}>{data}<button value={index} onClick={deleteData}>삭제</button></li>
                })}
            </ul>
        </>

    )
};

export default Ex01;