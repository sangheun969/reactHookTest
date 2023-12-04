import useInput from "../../hooks/useInput";

export const LoginInput = (name, type) => {
  // input의 상태변수
  // custom hook input
  const uidInput = useInput("");
  return <input name={name} type={type} {...uidInput} />;
};
