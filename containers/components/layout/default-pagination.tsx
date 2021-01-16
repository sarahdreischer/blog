import { Pagination } from "react-bootstrap";

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
    <span>
      <Pagination size="sm">{getPaginationItems()}</Pagination>
    </span>
  );
};
