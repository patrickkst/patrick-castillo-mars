const createFoot = document.createElement("footer");
document.body.appendChild(createFoot);
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `&copy Patrick Castillo ${thisYear}`;
footer.appendChild(copyright);

const skills = ["C", "C++", "Java", "Python", "HTML", "CSS", "Javascript"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
