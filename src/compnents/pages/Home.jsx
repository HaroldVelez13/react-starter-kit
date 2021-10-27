import React, { useEffect, useState } from "react";
import WrapperApp from "../atoms/WrapperApp";
import LoginForm from "../organisms/LoginForm";

const authExaple = {
  email: "haroldvelez@email.com",
  password: "secret1234",
  remember: true,
  gender: "Female",
};

function Home() {
  const [initialAuth, setInitialAuth] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setInitialAuth(authExaple);
    }, 300);
  }, []);
  return (
    <WrapperApp>
      <div className="d-grid gap-2 col-112 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto">
        <section className="card">
          <article className="card-body">
            <h1 className="card.title text-center">Login</h1>
            {initialAuth?.email && <LoginForm auth={initialAuth} />}
          </article>
        </section>
      </div>
    </WrapperApp>
  );
}

export default Home;
