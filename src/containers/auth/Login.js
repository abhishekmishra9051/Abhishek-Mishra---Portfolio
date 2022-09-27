import Layout from "../../hoc/layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import { userLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();

    let validate = false;
    let errs = { ...errors };

    if (email.trim() === "") {
      errs.email = "Email Address is required.";
      validate = true;
    }
    if (password.trim() === "") {
      errs.password = "Password is required.";
      validate = true;
    }

    setErrors(errs);

    if (validate) {
      toast("Please fill all the required fields");
      return;
    }

    //call api

    let response = await userLogin({
      email,
    });

    if (response.status === 200) {
      let data = response.data;

      if (data.length === 0) {
        toast("Sorry, This user is not exist!");
        return;
      }

      let user = data[0];

      if (user.email !== email || user.password !== password) {
        toast("Sorry, Invalid Credentials!");
        return;
      }

      toast("User Loggedin Successfully!!");
      setEmail("");
      setPassword("");

      navigate("/");
    }
  };

  return (
    <Layout
      headerTitle="Login"
      headerText="User login "
      activePage="login"
      hideSideBar={true}
    >
      <div className="row">
        <div className="col-md-4 col-0"></div>
        <div className="col-md-4 col-12">
          <form onSubmit={onLogin}>
            <div class="mb-3">
              <TextField
                className="w-100"
                id="email"
                label="Email"
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email });
                }}
                value={email}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email : ""}
              />
            </div>
            <div class="mb-3">
              <TextField
                className="w-100"
                id="password"
                label="Password"
                variant="outlined"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
                value={password}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password : ""}
              />
            </div>

            <Button type="submit" variant="contained">
              Login
            </Button>
          </form>
        </div>
        <div className="col-md-4 col-0"></div>
      </div>
    </Layout>
  );
}
