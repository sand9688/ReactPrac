import logo from './logo.svg';
import './App.css';
import Item1 from './compo/Item1';
import Item2 from './compo/Item2';
import Item3 from './compo/Item3';
import {useState} from 'react'

//리덕스 재료 주기
import {createStore} from'redux';
// createStore : state(상태값)을 저장하는 역활
import {Provider} from 'react-redux';
import Right1 from './compo/Right1';
//Provider : state 값을 어떤 컴포넌트와 공유 또는 제공 할껀지 를 정의!

//reducer : store에 접근해서 state에 관련된 작업을 처리할 기능
// 현재의 상태값, 작업(action)
function reducer(currentState, action){
  if(currentState === undefined){ // 리듀서가 처음 store에 적용 될때 default 생태값을 만드는 부분
    return{
      num :1 // 다른 컴포넌트에서 사용가능한 상태값
    };
  }
  //currentState가  undefined 가 아니고 다른 상태값에 따른 명령이 들어왔다면 밑에서 처리 가능
  if(action.type=='plus'){
    currentState.num++;
  }
  else if(action.type=='mius'){
    currentState.num--;
  }else if(action.type == 'name'){
    currentState.name = "승환";
  }

  return {...currentState}//... => 객체에 대한 모든 정보를 가져오겠습니다
}

const store = createStore(reducer);// State 값을 저장시킬 저장소 생성




function App() {

  const [num, setNum] = useState(3);

  return (
    <div id="container">
      <h1>Root : {num}</h1>
      <div id='grid'>
      <Provider store={store}>
        {/* 위에서 만들어 놓은 store와 연결시킨뒤 해당 내용을 하위 컴포넌트에 제공하겠습니다.
            하위 컴포너트가 사용하고 있는 다른 컴포넌트에도 store를 제공할 수 있다. */}
        <Item1 num = {num}></Item1>
        <Right1></Right1>
      </Provider>
      </div>
    </div>
  );
};

export default App;
