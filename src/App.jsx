import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from "./components/StatefulForm/StatefulForm";
import RefForm from "./components/RefForm/RefForm"
import HookForm from "./components/HookForm/HookForm"
import ReusableForm from "./components/ReusableForm/ReusableForm";


function App() {
  const handleSignupSubmit = (data) => {
    console.log("sign up", data);
  };

  const handleProfileUpdate = (data) => {
    console.log("update profile", data);
  };

  return (
    <>
      <h1>form master</h1>
      <h3>simpleform</h3>
      <SimpleForm></SimpleForm>
      <br />
      <h3>statefulform</h3>
      <StatefulForm></StatefulForm>
      <br />
      <h3>refform</h3>
      <RefForm></RefForm>
      <br />
      <h3>hookform</h3>
      <HookForm></HookForm>
      <br />

      <ReusableForm formTitle={"sign up"} handleSubmit={handleSignupSubmit}>
        <div>
          <h2>signup form</h2>
          <p>please sign up now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"profile update"}
        submitBtnText={"update"}
        handleSubmit={handleProfileUpdate}
      >
        <div>
          <h2>update form</h2>
          <p>please keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
