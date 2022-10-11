const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((p) => {
          return (
            <li key={p} className="page-item">
              <a href="#" className="page-link" onClick={() => paginate(p)}>
                {p}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
