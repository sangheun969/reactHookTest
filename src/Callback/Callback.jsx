import { useCallback, useState } from "react";

export const CallBack = () => {
  // 메모이제이션된 콜백을 반환
  // 함수를 메모이제이션 하기 위해서 사용하는 hook

  const [hi, setHi] = useState(0);
  const [bye, setBye] = useState(0);

  // 무한 스크롤 10개를 그리고 있고 10개만 보여줘야하는
  // 상황이면 리렌더링이 되었을때 그대로 이전값을 연산을 하지 않고 보여주면 된다. 20개로 변환이 되면 함수의 연산을 다시 정의 한다.
  const hiClickHanlder = useCallback(() => {
    // 함수의 내용을 다시 연산하는 경우를 두번째 매개 변수 배열에 주시할 값을 전달
    setHi(hi + 1);
  }, [bye]);
  // useCallback 첫번째 인자 값이 콜백 함수 두번째 인자 값을 배열
  // 첫번째의 인자로 전달한 함수를 두번째 인자 주시하고 있는 값이 변경될때 까지 연산을 다시 하지 않는다.

  // component 안에 리렌더링이 될때 새로운 함수가 생성되지 않는다는 것. 주시하는 값이 바뀌면 함수를
  // 생성 해서 연산한다.
  // 주시 하고 있는 값이 바뀌지 않는이상 이전 함수의 기존 메모리의 데이터로 연산을 하지 않고 결과를 반환한다.

  const byeClickHandler = useCallback(() => {
    setBye(bye + 1);
  }, [bye]);
  // memo 쓰면 memo 의 스코프만 매
  return (
    <>
      <div>
        <div>
          <div>{hi}</div>
          <button onClick={hiClickHanlder}>hi</button>
        </div>
        <div>
          <div>{bye}</div>
          <button onClick={byeClickHandler}>bye</button>
        </div>
      </div>
    </>
  );
};
