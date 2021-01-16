import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export type Page = { label: string; path: string };

interface BlogNavbarProps {
  pages: Page[];
}

export const BlogNavbar = ({ pages }: BlogNavbarProps) => {
  const getNavbarItem = (page) => {
    return (
      <Nav.Link className="px-5" key={page.label}>
        <Link as={page.path} href={page.path}>
          <div className="NavButton">
            <span className="Label">{page.label}</span>
          </div>
        </Link>
      </Nav.Link>
    );
  };

  return (
    <Navbar className="w-100" expand="md" variant="light">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="justify-content-between w-75 mx-5">
          {pages.map((page) => getNavbarItem(page))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
