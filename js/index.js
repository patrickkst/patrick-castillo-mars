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
const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", function (event) {
  const name1 = event.target.usersName.value;
  const email1 = event.target.usersEmail.value;
  const message1 = event.target.usersMessage.value;
  console.log("name", name1, "email", email1, "message", message1);
  event.preventDefault();
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email1}">${name1}</a><span>:${message1}</span>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.addEventListener("click", function (event) {
    const entry = removeButton.parentNode;
    entry.remove();
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  });

  event.target.reset();
});
