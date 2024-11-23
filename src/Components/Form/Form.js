import { useCallback, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const changeHandler2 = useCallback((e) => {
    setName2(e.target.value);
  }, []);

  return (
    <div>
      <input value={name} onChange={changeHandler} />
      <input value={name2} onChange={changeHandler2} />
    </div>
  );
};

export default Form;
