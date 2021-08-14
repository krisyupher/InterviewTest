const openMenu = () => {
  const myLinks = document.getElementById("myLinks");

  if (myLinks.classList.contains("none")) {
    myLinks.classList.remove("none");
  } else {
    myLinks.classList.add("none");
  }
};
