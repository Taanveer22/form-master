import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    };
    
    useEffect(() => {
        nameRef.current.focus();
    } ,[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" id="" />
        <br />
        <input ref={emailRef} defaultValue={'rojoni@sojoni.com'} type="email" name="email" id="" />
        <br />
        <input ref={passwordRef} type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefForm;
