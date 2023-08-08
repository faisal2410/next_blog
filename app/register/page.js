"use client";
import { useState } from "react";
import { Toaster,toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${process.env.API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.err);
        setLoading(false);
        return;
      }

      const data = await response.json();
      toast.success(data.success);
      setLoading(false);
      router.push("/login");
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
        <p className="lead">Register</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control mb-2"
            placeholder="Enter your name"
          />

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
            disabled={loading || !name || !email || !password}
          >
            {loading ? "Please wait..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
    <Toaster  position="top-right"/>
  </div>
  );
}
