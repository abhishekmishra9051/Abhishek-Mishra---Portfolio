import Layout from "../../hoc/layout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import {userRegister} from "../../services/auth"
import {Navigate, useNavigate} from 'react-router-dom'

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate()

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
  });

  const onSignUp = async (e) => {

    let validate = false
    let errs = { ...errors }
    e.preventDefault();

    if (firstName.trim() === "") {
        errs.firstName = "First Name is required."
        validate = true
    }
    if (lastName.trim() === "") {
        errs.lastName = "Last Name is required."
        validate = true
    }
    if (email.trim() === "") {
        errs.email = "E-mail Address is required."
        validate = true
    }
    if (password.trim() === "") {
        errs.password = "Password Address is required."
        validate = true
    }
    if (cpassword.trim() === "") {
        errs.cpassword = "Confirm Password Address is required."
        validate = true
    }
    if (phone.trim() === "") {
        errs.phone = "Phone  field is required."
        validate = true
    }
    


    setErrors(errs);

    if (validate === true) {
        toast("Please fill all the required fields")
        return
    }

    let responce = await userRegister({
        firstName,
        lastName,
        email,
        password,
        cpassword,
        phone
    })
    if(responce.status === 201){
        toast("User register successfully!!")
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setCpassword("")
        setPhone("")
        navigate("/login")
    }
  };

  return (
    <Layout
      headerTitle="User Registration"
      headerText="You can Register here "
      activePage="SignUp"
      hideSideBar={true}
    >
      <div className="row">
        <div className="col-md-4 col-0"></div>
        <div className="col-md-4 col-12">
          <form onSubmit={onSignUp}>
            <div class="mb-3">
              <TextField
                className="w-100"
                id="firstName"
                label="First Name"
                variant="outlined"
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setErrors({ ...errors, firstName });
                }}
                value={firstName}
                error={errors.firstName ? true : false}
                helperText={errors.firstName ? errors.firstName : ""}
              />
            </div>
            <div class="mb-3">
              <TextField
                className="w-100"
                id="lastName"
                label="last Name"
                variant="outlined"
                onChange={(e) => {
                  setLastName(e.target.value);
                  setErrors({ ...errors, lastName });
                }}
                value={lastName}
                error={errors.lastName ? true : false}
                helperText={errors.lastName ? errors.lastName : ""}
              />
            </div>

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
                label="Passsword"
                variant="outlined"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password });
                }}
                value={password}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password : ""}
              />
            </div>
            <div class="mb-3">
              <TextField
                className="w-100"
                id="cpassword"
                label="Cpasssword"
                variant="outlined"
                onChange={(e) => {
                  setCpassword(e.target.value);
                  setErrors({ ...errors, cpassword });
                }}
                value={cpassword}
                error={errors.cpassword ? true : false}
                helperText={errors.cpassword ? errors.cpassword : ""}
              />
            </div>

            <div class="mb-3">
              <TextField
                className="w-100"
                id="phone"
                label="Phone"
                variant="outlined"
                onChange={(e) => {
                  setPhone(e.target.value);
                  setErrors({ ...errors, phone: "" });
                }}
                value={phone}
                error={errors.phone ? true : false}
                helperText={errors.phone ? errors.phone : ""}
              />
            </div>

            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </form>
        </div>
        <div className="col-md-4 col-0"></div>
      </div>
    </Layout>
  );
}
