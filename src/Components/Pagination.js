const Pagination = ({ page, total, setPages }) => {
  const NoOfPages = Math.ceil(total / 10);
  const handleClick = (selectedPage) => {
    if (page >= 1 && page <= NoOfPages) {
      setPages(selectedPage);
    }
  };
  return (
    <div className="pagination">
      <span
        className="pages"
        onClick={() => handleClick(page - 1)}
        className={page <= 1 ? "page-disabled" : ""}
      >
        Prev
      </span>
      {[...Array(NoOfPages)].map((_, i) => (
        <span
          key={i}
          className="pages"
          onClick={() => handleClick(i + 1)}
          className={page == i + 1 ? "page-selected" : "pages"}
        >
          {i + 1}
        </span>
      ))}
      <span
        className="pages"
        onClick={() => handleClick(page + 1)}
        className={page > total / 10 ? "page-disabled" : ""}
      >
        Next
      </span>
    </div>
  );
};
export default Pagination;
