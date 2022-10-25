let img = document.querySelector("#container");
let section = document.querySelector("section");


result.addEventListener("click", (e) => showImg(e));

function showImg(e) {
  e.preventDefault();

  let players = parseInt(document.querySelector("#produtos").value);

  switch (players) {
    case 1:
      img.innerHTML =
        "<img src='https://www.esportelandia.com.br/wp-content/uploads/2020/04/michael-jordan.jpg'>";
      img.style.border = "50px solid darkred";
      img.style.background = "black";
      section.style.display = "flex";
      break;
    case 2:
      img.innerHTML =
        "<img src='https://ogimg.infoglobo.com.br/in/24212560-2ab-ac7/FT1500A/690/Kobe-Bryant.jpg'>";
      img.style.border = "50px solid darkviolet";
      img.style.background = "yellow";
      section.style.display = "flex";
    break;
    case 3:
      img.innerHTML =
        "<img src='https://noticiapreta.com.br/wp-content/uploads/2021/07/lebron-james-flexing.jpeg'>";
      img.style.border = "50px solid darkviolet";
      img.style.background = "yellow";
      section.style.display = "flex";
    break;

    case 4:
      img.innerHTML =
        "<img src='http://3.bp.blogspot.com/-FaXhHb0DEVM/Vaw5-eaRUII/AAAAAAAAFfw/uW1HzdKgcHU/s1600/shaq-lakers.jpg'>";
      img.style.border = "50px solid darkviolet";
      img.style.background = "yellow";
      section.style.display = "flex";
      break;

    case 5:
      img.innerHTML =
        "<img src='https://www.playmakerbrasil.com.br/sites/default/files/wp-content/uploads/2020/03/destacada_capa-furthermore.com-3wx.jpg'>";
      img.style.border = "50px solid darkviolet";
      img.style.background = "yellow";
      section.style.display = "flex";
      break;

      default:
        img.style.border = "50px solid lightgray";
        img.style.background = "lightblue";
        section.style.display = "flex";
  }
}
