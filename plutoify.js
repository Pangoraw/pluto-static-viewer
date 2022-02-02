const firstLine = document.getElementById("LC1");

if (firstLine.innerText === "### A Pluto.jl notebook ###") {
  const btnGroup = document.querySelector(".d-flex > div.BtnGroup")
  const newLink = document.createElement("a")
  newLink.innerHTML =
      "<img style=\"height: 12px\" src=\"https://user-images.githubusercontent.com/9824244/152204177-aff19d7e-0dca-4a07-a730-d96727f512bd.png\">"

  const url = "https://raw.githubusercontent.com" +
              window.location.pathname.replace("/blob", "")
  newLink.href =
      "https://pluto-static-viewer.netlify.app/viewer.html?url=" + url

  for (let cls of ["js-permalink-replaceable-link", "btn-sm", "btn",
                   "BtnGroup-item"]) {
    newLink.classList.add(cls)
  }
  console.log("heyeyeyey")
  btnGroup.appendChild(newLink)
}
