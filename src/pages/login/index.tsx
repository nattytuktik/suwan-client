import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { TextInput, Button } from "@tremor/react";

type Props = {};

function Index({}: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  /**
   * login event handler
   */

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const loginForm = {
      userLogin: {
        first_name: firstName,
        last_name: lastName,
        password: password,
      },
    };

    const responsLogin = await fetch("http://localhost:5001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    });

    const bodyres = await responsLogin.json()

    if (responsLogin.ok === false) {
      console.log("logon failed");
    } else {
      localStorage.setItem("token", bodyres.token)
      window.location.href = "/"
    }
  };

  /**
   * Event Handler
   */
  const firstnameHandler = (e: any) => {
    setFirstName(e.target.value);
  };
  const lastnameHandler = (e: any) => {
    setLastName(e.target.value);
  };
  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <Layout>
      <div className="mt-32 w-72 mx-auto">
        <header className="mb-5">
          <h1 className="text-2xl">login</h1>
        </header>
        <div className="bg-sky-200 p-4 rounded-lg">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-flow-row gap-y-3">
                <div className="">
                  <label>ชื่อ</label>
                  <TextInput
                    onChange={firstnameHandler}
                    placeholder="ชื่อ"
                    type="text"
                  />
                </div>
                <div className="">
                  <label>สกุล</label>
                  <TextInput
                    onChange={lastnameHandler}
                    placeholder="สกุล"
                    type="text"
                  />
                </div>
                <div className="">
                  <label>password</label>
                  <TextInput
                    onChange={passwordHandler}
                    placeholder="password"
                    type="password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sky-500 text-sm">ลงชื่อเช้าใช้</p>
                  </div>
                  <div>
                    <Button>login</Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
