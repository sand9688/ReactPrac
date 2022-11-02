import {useSelector} from 'react-redux'
//useSelector : 공유 되고있는 storedp 접근해서 state값을 가져올 수 있는 역할


function Item3(props){
    const number = useSelector((state) => state.num)
    return(
        <>
            <div>
                <h1>Item3 : {number}</h1>
            </div>
        </>
    )
}

export default Item3;