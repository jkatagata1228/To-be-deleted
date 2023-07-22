const Register = () => {
  return (
    <div className="signUp-container">
      <form method="POST" action="/api/auth/signup">
        <input name="name" type="text" placeholder="Name" />
        <input name="email" type="text" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button className="signUp-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
