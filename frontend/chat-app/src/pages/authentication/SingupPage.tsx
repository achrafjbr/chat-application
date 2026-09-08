import { useState } from "react";
import TextField from "../../features/Auth/component/TextField";
import type { SignUpParams } from "../../features/Auth/authTypes";
import Divider from "../../common/Divider";
import AuthButton from "../../features/Auth/component/AuthButton";
import { AtSign, LockKeyhole, Mail, User } from "lucide-react";

function SingupPage() {
  const [authentication, setAuthentication] = useState<SignUpParams>({
    email: "",
    password: "",
    fullName: "",
    username: "",
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
    <form onSubmit={(e) => authenticationSubmitHandler(e)}>
      <div className="flex flex-col justify-center items-center gap-y-3  ">
        <div className="w-full">
          <TextField
            label="Full Name"
            name="fullName"
            onChangeHandler={(e) => {
              authenticationHandler(e);
            }}
            placeHolder="AlexSmith"
            type="text"
            id="fullName"
            value={authentication.fullName}
            icon={
              <User size={19} className="absolute ml-1.5 text-gray-500/50" />
            }
          />
        </div>

        <div className="w-full">
          <TextField
            label="Username"
            name="username"
            onChangeHandler={(e) => {
              authenticationHandler(e);
            }}
            placeHolder="Smithy"
            type="text"
            id="username"
            value={authentication.username}
            icon={
              <AtSign size={19} className="absolute ml-1.5 text-gray-500/50" />
            }
          />
        </div>

        <div className="w-full">
          <TextField
            required={false}
            label="Email Address (optional)"
            name="email"
            onChangeHandler={(e) => {
              authenticationHandler(e);
            }}
            placeHolder="AlixSmith@example.com"
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

export default SingupPage;
