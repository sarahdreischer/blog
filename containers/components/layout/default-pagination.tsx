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
    const range = maxNumber < visibleRange ? maxNumber : visibleRange;

    return Array(range)
      .fill(0)
      .map((_, i) => (
        <Pagination.Item key={i + 1} active={i + 1 === activePage}>
          {i + 1}
        </Pagination.Item>
      ));
  };

  return (
    <span>
      <Pagination size="sm">{getPaginationItems()}</Pagination>
    </span>
  );
};
