const links = [
  {
    title: "Github",
    url: "https://github.com/wolney-fo"
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/wolney-oliveira/"
  },
  {
    title: "Codepen",
    url: "https://codepen.io/wolneyfo"
  }
]

var htmlLinksList = document.getElementById("links");
links.forEach((link) => {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.textContent = link.title;
  a.href = link.url;
  li.appendChild(a);
  htmlLinksList.appendChild(li);
});