class Modal {
  constructor(node) {
    this._modalNode = document.getElementById("modal");
    this._url = node.dataset.iframeUrl;

    node.addEventListener("click", () => {
      this._modalNode.querySelector(".modal__inner").innerHTML = `
        <iframe allow="autoplay" style="border: 0; width: 100%; height: 120px;" src="${this._url}" seamless><a href="https://septscaroles.bandcamp.com/album/a-raia-negra">A RAIA NEGRA by Sept Scaroles</a></iframe>\
      `;
      this._modalNode.classList.add("active");
    });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  [...document.querySelectorAll("[data-iframe-url]")].forEach(node => new Modal(node));
  document.getElementById("modal").addEventListener("click", e => e.target.classList.remove("active"))
})
