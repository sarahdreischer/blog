import { Pagination } from "react-bootstrap";

interface DefaultPaginationProps {
  maxNumber: number;
  activePage: number;
}

export const DefaultPagination = ({
  maxNumber,
  activePage,
}: DefaultPaginationProps) => {
  const getPaginationItems = () => {
    let items = [];
    for (let number = 1; number <= maxNumber; number++) {
      items.push(
        <Pagination.Item key={number} active={number === activePage}>
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <span>
      <Pagination size="sm">{getPaginationItems()}</Pagination>
    </span>
  );
};
