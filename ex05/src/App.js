import logo from './logo.svg';
import './App.css';
import Join from './compo/Join';
import Login from './compo/Login';
import Home from './compo/Home';

import {Routes,Route} from 'react-router-dom'

//redux 재료 import
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';

function reducer(currentState, action){
  //currentState :  현재 state  값
  // action : 컴포넌트에서 넘긴 message
  //currentState 기본값 설정
  if (currentState == undefined){
    return{
      id: '',
      pw: '',
      nick: ''

    };
  }
  //action에 있는 값을(message)를 가져와서 state 변경 로직
  if(action.type == 'login'){
    currentState.id = action.id;
    currentState.pw = action.pw;
    currentState.nick = action.nick;

  }

  //변경후 -> 반환
  return{...currentState}
}

const store = createStore(reducer);


function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/Join' element={<Join></Join>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
