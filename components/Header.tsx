"use client";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import React from 'react';

interface HeaderProps {
  className?: string;
  navLinks?: { label: string; href: string; target?: string }[];
  darkLinks?: boolean;
  isBeta?: boolean;
}

const defaultNavLinks = [
  { label: "Home", href: "/", target: "" },
  { label: "Changelog", href: "/changelog", target: "" },
  { label: "Feedback", href: "/feedback", target: "" },
  {
    label: "GitHub",
    href: "https://github.com/SiloCityLabs/offthegrid.silocitygames.com",
    target: "_blank",
  },
];

const navbarBrand = {
  title: "Off The Grid",
  subtitle: "By SiloCityGames",
}

function Header(props: HeaderProps) {
  const { className, navLinks = defaultNavLinks, darkLinks = false, isBeta = false } = props;

  return (
    <Navbar
      id="main-header"
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className={`${className}`}
    >
      <Container>
        <Navbar.Brand href="/" className="position-relative d-flex align-items-center">
          {isBeta && (
            <Badge
              bg="warning"
              text="dark"
              style={{ fontSize: ".6rem", marginRight: "0.5rem" }}
            >
              BETA
            </Badge>
          )}
          <div>
            {navbarBrand.title}
            {navbarBrand.subtitle && (
              <span className="navbar-subtitle">{navbarBrand.subtitle}</span>
            )}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={darkLinks ? 'black-toggler' : ""} />
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
      </Container >
    </Navbar >
  );
}

export default Header;