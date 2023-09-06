import ArticleCard from "./ArticleCard";

function ArticlesList({ articles, isLoading }) {
  if (isLoading) return <p>Loading...</p>;
  if (articles.total_count === 0) return <p>No results</p>;
  return (
    <section>
      {articles.articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}

export default ArticlesList;
