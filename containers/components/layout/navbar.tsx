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
    <Navbar
      className="justify-content-center w-100"
      expand="lg"
      variant="light"
    >
      <Nav className="justify-content-between w-75 mx-5">
        {pages.map((page) => getNavbarItem(page))}
      </Nav>
    </Navbar>
  );
};
