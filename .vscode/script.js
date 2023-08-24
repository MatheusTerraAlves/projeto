function toggleMode() {
  const html = document.documentElement

  /*if(body.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } a função 'toggle' substitui esse código comentado */

  html.classList.toggle("light") //fazendo a troca das classes

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    Image.setAttribute("src", "./assets/assets/avatar.png")
  }
}
