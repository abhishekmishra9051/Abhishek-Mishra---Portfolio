import Pages from "../containers";

import { Routes as Switch, Route } from "react-router-dom";

const { Home, About, Products, Contact } = Pages;

export default function Routes() {
  return (
    <Switch>
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Switch>
  );
}
