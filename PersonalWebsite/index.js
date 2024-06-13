
import renderMainPage from "./MainPage.js";
import renderProjectDetail from "./ProjectDetail.js";
import renderNav from "./Navbar.js";

let data;

fetch('data.json')
  .then(response => response.json())
  .then(fetchedData => {
    data = fetchedData;
    console.log(data);

    renderMainPage(data);


    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");
    if (projectId != null) {
      const project = data.projects.find((p) => p.id === projectId);
      renderProjectDetail(project);
    }
  })
  .catch(error => console.error("Error fetching data:", error));