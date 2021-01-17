import { Pagination, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import Link from "next/link";

interface DefaultPaginationProps {
  maxNumber: number;
  activePage: number;
  visibleRange: number;
}

export const DefaultPagination = ({
  maxNumber,
  activePage,
  visibleRange,
}: DefaultPaginationProps) => {
  const getPaginationItems = () => {
    const startingPoint =
      Math.floor(activePage / visibleRange) * visibleRange + 1;
    const range = maxNumber < visibleRange ? maxNumber : visibleRange;

    return Array(range)
      .fill(0)
      .map((_, i) => {
        const current = i + startingPoint;
        return (
          <Pagination.Item
            active={current === activePage}
            href={`/page/${current}`}
            key={current}
          >
            {current}
          </Pagination.Item>
        );
      });
  };

  return (
    <Row>
      <Pagination size="sm" className="mb-0">
        {getPaginationItems()}
      </Pagination>
      <Link as={`/page/${activePage + 1}`} href="/page/[page]">
        <Button
          className="ml-2"
          size="small"
          variant="outlined"
          disabled={activePage >= maxNumber}
        >
          Next
        </Button>
      </Link>
    </Row>
  );
};
