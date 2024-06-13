import renderAbout from "./About.js";
import renderNav from "./Navbar.js";
import renderNewsItems from "./News.js";
import renderProjects from "./Projects.js";
import renderProject from "./Project.js";

export default function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = `
    ${renderNav()}
    <div class="content-wrapper">
      ${renderAbout(data.about)}
      <section class="news-section" id="news">
        <div class="search">
          <input type="search" name="news" placeholder="Search News...">
        </div>
        <div class="newslist">
          ${renderNewsItems(data.news)}
        </div>
      </section>
      ${renderProjects(data.projects)}
    </div>`;


  console.log("renderMainPage called");

  const newsSearchInput = document.querySelector('.search input[name="news"]');
  if (!newsSearchInput.hasEventListener) {
    console.log("Adding event listener for news search input");
    newsSearchInput.hasEventListener = true;
    newsSearchInput.addEventListener("input", e => {
      console.log("News search input value:", e.target.value);
      const searchTerm = e.target.value.toLowerCase();
      const filteredNews = data.news.filter(newsitem => {
        const newsTitle = newsitem.content.toLowerCase();
        const newsDate = newsitem.date.toLowerCase();
        return newsTitle.includes(searchTerm) || newsDate.includes(searchTerm);
      });
      const newsList = document.querySelector(".newslist");
      newsList.innerHTML = renderNewsItems(filteredNews);
    });
  }

const projectsSearchInput = document.querySelector('.search input[name="projects"]');
if (!projectsSearchInput.hasEventListener) {
  console.log("Adding event listener for projects search input");
  projectsSearchInput.hasEventListener = true;
  projectsSearchInput.addEventListener("input", e => {
    console.log("Projects search input value:", e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filteredProjects = data.projects.filter(project => {
      const projectTitle = project.title.toLowerCase();
      const projectDescription = project.description.toLowerCase();
      return projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm);
    });
    const projectsList = document.querySelector(".projectslist");
  projectsList.innerHTML = filteredProjects.map(project => renderProject(project)).join(""); // Call function to render filtered projects
  });
}

}