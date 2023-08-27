"use client";
import { useState } from "react";
import {toast,Toaster} from "react-hot-toast";
import { useRouter,useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("MArt@msb2020");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl=searchParams.get("callbackUrl")||"/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading(false);
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Login successful");
      
        router.push(callbackUrl);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("An error occurred. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="d-flex row justify-content-center align-items-center vh-100">
        <div className="col-lg-5 bg-light p-5 shadow">
          <p className="lead">Login</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-2"
              placeholder="Enter your email"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-2"
              placeholder="Enter your password"
            />

            <button
              className="btn btn-primary"
              disabled={loading || !email || !password}
            >
              {loading ? "Please wait..." : "Submit"}
            </button>
          </form>

          <button
            className="btn btn-danger mb-4"
            onClick={() => signIn("google", { callbackUrl })}
          >
            Sign in with Google
          </button>

        </div>
      </div>
      <Toaster/>
    </div>
  );
}
