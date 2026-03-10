const createFoot = document.createElement("footer"); //create footer element
document.body.appendChild(createFoot); //insers foot element into the body
const today = new Date(); //gets the current date
const thisYear = today.getFullYear(); //from the current date gets the year only
const footer = document.querySelector("footer"); //selects footer
const copyright = document.createElement("p"); //creates p element
copyright.innerHTML = `&copy Patrick Castillo ${thisYear}`; //inserts html text into the p element
footer.appendChild(copyright); //adds p element to footer

const skills = ["C", "C++", "Java", "Python", "HTML", "CSS", "Javascript"]; //array with skills
const skillsSection = document.getElementById("Skills"); //gets element by id Skills
const skillsList = skillsSection.querySelector("ul"); //selects ul element inside the id Skills section
for (let i = 0; i < skills.length; i++) {
  //this loop adds the skills inside the array into the skills section inside the ul
  const skill = document.createElement("li"); //inserts li for each skill
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
const messageForm = document.querySelector("form[name='leave_message']"); //Leave a message with name and email
messageForm.addEventListener("submit", function (event) {
  //listen to the event on the submit button when wanting to leave comment
  event.preventDefault();
  const name1 = event.target.usersName.value; //stores name from the name box
  const email1 = event.target.usersEmail.value; //stores email into variable from the email box
  const message1 = event.target.usersMessage.value; //stores message from the message box
  console.log("name", name1, "email", email1, "message", message1);
  const messageSection = document.getElementById("messages"); //selects element by id messages
  const messageList = messageSection.querySelector("ul"); //selects the ul section inside the element that has id messages
  const newMessage = document.createElement("li"); //creates an empty li element
  newMessage.innerHTML = `<a href="mailto:${email1}">${name1}</a><span>:${message1}</span>`; //stores html text into the empty li.
  const removeButton = document.createElement("button"); //creates remove button element
  removeButton.innerText = "remove"; //text inside remove button
  removeButton.addEventListener("click", function (event) {
    //removes button after being clicked
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage); //appends button next to new message
  event.target.reset();
});
fetch(`https://api.github.com/users/patrickkst/repos`) //this calls an api that gets the list of repositories in my github
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then((repositories) => {
    console.log(repositories);
    const projectSection = document.getElementById("Projects"); //selects element id for section of projects
    const projectList = projectSection.querySelector("ul"); //selects the ul section inside projects
    for (let i = 0; repositories.length > i; i++) {
      const project = document.createElement("li"); //loops the information from fetch and inserts it into the li and appends to projects ul section.
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error(error);
  });
