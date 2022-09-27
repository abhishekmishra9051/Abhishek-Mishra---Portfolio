import Pages from "../containers";

import { Routes as Switch, Route } from "react-router-dom";
import MyAccount from "../containers/my-account";
import { isLoggedIn } from "../util/helpers/sessions";

const { Home, About, Products, Contact, Login, SignUp } = Pages;

export default function Routes() {
  return (
    <Switch>
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/my-account" element={isLoggedIn ? <MyAccount /> : <Login/> } />
      <Route path="/" element={<Home />} />
    </Switch>
  );
}
