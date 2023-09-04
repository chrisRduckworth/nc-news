function Pages({ total_count, queries, setQueries }) {
  const noOfPages = Math.ceil(total_count / 10);

  const pageTurn = (event) => {
    setQueries((currQueries) => {
      const { target: { id } } = event;
      const newQueries = JSON.parse(JSON.stringify(currQueries));
      if (id === "next-button" && newQueries.params.p < noOfPages) {
        newQueries.params.p++;
      } else if (id === "prev-button" && newQueries.params.p > 1) {
        newQueries.params.p--;
      }
      return newQueries;
    });
  };

  return (
    <nav id="page-buttons">
      <button onClick={pageTurn} id="prev-button">
        {"<"}
      </button>
      <span>Page {queries.params.p}</span>
      <button onClick={pageTurn} id="next-button">
        {">"}
      </button>
    </nav>
  );
}

export default Pages;
