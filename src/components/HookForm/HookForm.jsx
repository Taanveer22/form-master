
import useInputState from "../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('rojoni hooked');
    const emailState = useInputState('rojoni@sojoni.go');

    const handleSubmit = e => {
        // console.log('form data array', name);
        console.log('form data object', emailState);
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" />
        <br /> */}
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
