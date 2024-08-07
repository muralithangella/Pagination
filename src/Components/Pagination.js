const Pagination = ({ page, total, setPages }) => {
  const NoOfPages = Math.ceil(total / 10);
  const handleClick = (selectedPage) => {
    if (page >= 1 && page <= NoOfPages) {
      setPages(selectedPage);
    }
  };
  return (
    <div className="pagination">
      <span className="pages" onClick={() => handleClick(page - 1)}>
        Prev
      </span>
      {[...Array(NoOfPages)].map((_, i) => (
        <span key={i} className="pages" onClick={() => handleClick(i + 1)}>
          {i + 1}
        </span>
      ))}
      <span className="pages" onClick={() => handleClick(page + 1)}>
        Next
      </span>
    </div>
  );
};
export default Pagination;
