import renderResume from "./Resume.js";
export default function renderAbout(about) {
  return `
    <div class="left-section" id="about">
      <section>
        <div>
          <img src="${about.photo}" alt="Your Photo" />
          <h2>${about.name}</h2>
          <p>${about.bio}</p>
          <p>${about.location}</p>
          <div class="social-links">
            <a href="${about.resume}">Resume</a>
            <a href="${about.linkedin}" target="_blank">LinkedIn</a>
            <a href="${about.github}" target="_blank">GitHub</a>
          </div>
        </div>
      </section>
    </div>`;
}