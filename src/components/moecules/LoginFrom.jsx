import React, { useEffect, useState, useRef } from "react";
import { LoginLabel } from "../atoms/LoginLabel";
import { LoginInput } from "../atoms/LoginInput";
import { LoginButton } from "../atoms/LoginButton";

const LoginFrom = () => {
  const [SubmitData, setSubmitData] = useState(null);
  const selectInput = useRef(null);
  const loginHanlder = (e) => {
    e.preventDefault();
    // const resp = await axios.post("domain.com/login")
    const { uid, upw } = e.target;
    setSubmitData({ uid: uid.value, upw: upw.value });
  };
  useEffect(() => {
    console.log(selectInput.current);
    console.log(selectInput.current.value);

    //querySelector 사용하지말자
    // const userInput = document.querySelector(".userInput");
    // useRef 태그를 선택을 해야할때 사용하라
    // <input ref={selectInput}/>
    // ref 속성에 전달을 하면 화면을 그리고 이 인스턴스에 객체의 속성에 태그가 요소로 참조되는데
    // ref 속성에 useRef의 인스턴스를 전달한 해당 요소가 참조된다.
    // current 키에 값으로 해당 요소가 들어있다.
    // selectInput.current.value;

    if (SubmitData) console.log(SubmitData);
  }, [SubmitData]);
  return (
    <from onSubmit={loginHanlder}>
      <LoginLabel>아이디</LoginLabel>
      <LoginInput name={"uid"} type={"text"}></LoginInput>
      <LoginLabel>비밀번호</LoginLabel>
      <LoginInput name={"upw"} type={"password"}></LoginInput>
      <LoginLabel>아이디(useRef)</LoginLabel>
      <input ref={selectInput} value={"123456"}></input>
      <LoginButton>로그인하기</LoginButton>
    </from>
  );
};

export default LoginFrom;
