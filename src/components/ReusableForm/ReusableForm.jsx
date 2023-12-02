const ReusableForm = ({
  formTitle,
  submitBtnText = "submit",
  handleSubmit,
  children,
}) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleLocaleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        {children}
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="" id="" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
