function Pages({ total_count, searchParams, setSearchParams }) {
  const noOfPages = Math.ceil(total_count / 10);
  const page_no = parseInt(searchParams.get("p"));

  const pageTurn = (event, move) => {
    if ((move === -1 && page_no > 1) || (move === 1 && page_no < noOfPages)) {
      setSearchParams((currParams) => {
        currParams.set("p", page_no + move);
        return currParams;
      });
    }
  };

  return (
    <nav id="page-buttons">
      <button onClick={(e) => pageTurn(e, -1)} className="page-button">
        {"<"}
      </button>
      <span>Page {page_no}</span>
      <button onClick={(e) => pageTurn(e, 1)} className="page-button">
        {">"}
      </button>
    </nav>
  );
}

export default Pages;
