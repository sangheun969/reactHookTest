import "./App.css";
import { useState } from "react";
import { Memo } from "./Memo/Memo";
import Login from "./components/page/Login";
import { Context } from "./Context/Context";
import { CallBack } from "./Callback/Callback";
import { Reducer } from "./Reducer/Reducer";

function App() {
  const [temp, setTemp] = useState(0);
  const onClickHandler = () => {
    setTemp(temp + 1);
  };
  return (
    <div className="App">
      <Login></Login>
      <Memo></Memo>
      <button onClick={onClickHandler}>버튼</button>
      <Context></Context>
      <CallBack></CallBack>
      <Reducer></Reducer>
    </div>
  );
}

export default App;
