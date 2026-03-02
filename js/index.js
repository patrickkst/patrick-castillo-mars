document.createElement("footer");
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Patrick Castillo ${thisYear}`;
document.body.appendChild(copyright);

const learnedSkills = [
  "C",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "Javascript",
];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < learnedSkills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = learnedSkills[i];
  skillsList.appendChild(skill);
}
