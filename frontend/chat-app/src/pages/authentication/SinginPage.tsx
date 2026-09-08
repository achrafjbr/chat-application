import { LockKeyhole, Mail } from "lucide-react";
import TextField from "../../features/Auth/component/TextField";
import AuthButton from "../../features/Auth/component/AuthButton";
import Divider from "../../common/Divider";
import React, { useState } from "react";
import type { SignInParams } from "../../features/Auth/authTypes";

function SinginPage() {
  const [authentication, setAuthentication] = useState<SignInParams>({
    email: "",
    password: "",
  });
  const authenticationHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setAuthentication({ ...authentication, [name]: value });
  };
  const authenticationSubmitHandler = (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    // Check, & Submit.
  };

  return (
    <form onSubmit={authenticationSubmitHandler}>
      <div className="flex flex-col justify-center items-center gap-y-3  ">
        <div className="w-full">
          <TextField
            label="Email"
            name="email"
            onChangeHandler={(e) => {
              authenticationHandler(e);
            }}
            placeHolder="AlexSmith@gmail.com"
            type="text"
            id="email"
            value={authentication.email}
            icon={
              <Mail size={19} className="absolute ml-1.5 text-gray-500/50" />
            }
          />
        </div>

        <div className="w-full">
          <TextField
            label="Password"
            name="password"
            onChangeHandler={(e) => {
              authenticationHandler(e);
            }}
            placeHolder="• • • • • • •"
            type="password"
            id="password"
            value={authentication.password}
            icon={
              <LockKeyhole
                size={19}
                className="absolute ml-1.5 text-gray-500/50"
              />
            }
          />
        </div>
        <Divider padding="pt-1" />
        <AuthButton title="Sign In" disabled={false} />
      </div>
    </form>
  );
}

export default SinginPage;
