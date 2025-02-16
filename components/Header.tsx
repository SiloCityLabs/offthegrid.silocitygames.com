import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface HeaderProps {
  className?: string;
  navLinks?: { label: string; href: string; target?: string }[];
}

const defaultNavLinks = [
  { label: "Home", href: "/", target: "" },
  {
    label: "GitHub",
    href: "https://github.com/SiloCityLabs/offthegrid.silocitygames.com",
    target: "_blank",
  },
];

function Header(props: HeaderProps) {
  const { className, navLinks = defaultNavLinks } = props;

  return (
    <Navbar
      id="main-header"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className={`${className}`}
    >
      <Container>
        <Navbar.Brand href="/">Off The Grid</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.href}
                target={link.target ? link.target : "_self"}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
