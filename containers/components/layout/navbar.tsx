import { Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

export type Page = { label: string; path: string; comingSoon?: boolean };

interface BlogNavbarProps {
  pages: Page[];
}

export const BlogNavbar = ({ pages }: BlogNavbarProps) => {
  const router = useRouter();

  const getNavbarItem = (page) => {
    const path = page.comingSoon ? router.pathname : page.path;
    return handlePageAvailability(
      <Nav.Link className="px-5" key={page.label}>
        <Link as={path} href={path}>
          <div className="NavButton">
            <span className="Label">{page.label}</span>
          </div>
        </Link>
      </Nav.Link>,
      !page.comingSoon,
      page.label
    );
  };

  const handlePageAvailability = (
    children: JSX.Element,
    pageAvailable = false,
    key: string | number
  ) => {
    if (!pageAvailable) {
      return (
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="projects-tooltip">Coming soon</Tooltip>}
          key={key}
        >
          {children}
        </OverlayTrigger>
      );
    }
    return children;
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
