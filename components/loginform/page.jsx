"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IonIcon } from "@ionic/react";
import { TailSpin } from "react-loader-spinner";
import { mailOutline, lockClosedOutline } from "ionicons/icons";
import styles from "@/app/src/login.css";
import { signIn } from "next-auth/react";

const loginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    window.onload = function () {
      setTimeout(() => {
        setLoad(false);
      }, 3000);
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (res.error) {
        setErrorMessage("Invalid username or password");
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      } else {
        router.replace("profile");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const ErrorNotification = () => {
    if (errorMessage) {
      return <div className="error-notification">{errorMessage}</div>;
    }
    return null;
  };

  return (
    <>
      <title>Login</title>
      <body>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit} id="loginForm">
              <h2>Login</h2>
              <div className="inputbox">
                <IonIcon icon={mailOutline} />
                <input
                  type="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Username:</label>
              </div>
              <div className="inputbox">
                <IonIcon icon={lockClosedOutline} />
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
              </div>
              <button type="submit" className="reg1" disabled={loading && load}>
                {(loading || load) && (
                  <>
                    <TailSpin
                      type="ThreeDots"
                      color="black"
                      height={20}
                      width={40}
                      style={{ marginRight: "5px" }}
                    />
                    <span>Loading...</span>
                  </>
                )}
                {!loading && "Login"}
              </button>
              <div className="login">
                {errorMessage && <div className="logerror">{errorMessage}</div>}
                {!errorMessage && (
                  <p>
                    Do not have an account?{" "}
                    <Link className="regww" href="/register">
                      Register
                    </Link>
                  </p>
                )}
                <br />
                <p>© 2023 Oasis. All rights reserved.</p>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default loginForm;
