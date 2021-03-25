import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#dc9e82" }} dark expand='md'>
        <NavbarBrand href='/'>MTG Helpers</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
