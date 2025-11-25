export default function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} />

      <div className="news-card-content">
        <div className="news-card-title">{news.title}</div>
        <div className="news-card-text">{news.text}</div>
      </div>
    </div>
  );
}
