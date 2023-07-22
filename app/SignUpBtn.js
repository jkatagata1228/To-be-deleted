import Link from "next/link";

const SignUpBtn = () => {
  return (
    <Link href="/register">
      <button className="signUp-btn">Sign Up</button>
    </Link>
  );
};

export default SignUpBtn;
