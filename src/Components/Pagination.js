const Pagination = ({ page, total }) => {
  const NoOfPages = Math.ceil(total / 10);
  return (
    <div className="pagination">
      <span className="pages">Prev</span>
      {[...Array(NoOfPages)].map((_, i) => (
        <span className="pages">{i}</span>
      ))}
      <span className="pages">Next</span>
    </div>
  );
};
export default Pagination;
