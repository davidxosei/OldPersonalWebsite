export default function renderNewsItems(news) {
  return `
    <section class="news-section" id="news">
      <div>
        <h2>News</h2>
        <ul>
          ${news.map(item => `<li><strong>${item.date}</strong> ${item.content}</li>`).join("")}
        </ul>
      </div>
    </section>`;
}