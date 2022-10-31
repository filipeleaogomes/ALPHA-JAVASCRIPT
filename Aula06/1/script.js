const seletor = document.querySelector("#carros");
const box = document.querySelector(".img");
const text = document.querySelector(".info");

seletor.addEventListener("change", teste);

function teste() {
  switch (seletor.value) {
    case "ferrari":
      box.style.backgroundImage =
        "url('https://quatrorodas.abril.com.br/wp-content/uploads/2022/05/ferrari-sp48-unica.jpg')";
      text.innerHTML =
        "Modelo : SP 48 " +
        "<br> Velocidade máxima : 320km/h" +
        "<br> Potência: 719cv <br>" +
        " Peso: 1600kg ";
      text.style.display = "block";

      break;
    case "mercedes":
      box.style.backgroundPosition = "bottom";
      box.style.backgroundImage =
        "url('https://garagem360.com.br/wp-content/uploads/2022/03/20220325_2c57cc8c573e4c2e87628554f55b7553_22c0095-002.jpg')";

      text.innerHTML =
        "Modelo :  Mercedes-AMG GT Track Series" +
        "<br> Velocidade máxima : 340km/h" +
        "<br> Potência: 734cv <br>" +
        "Peso: 1800kg";
      text.style.display = "block";
      break;

    case "porsche":
      box.style.backgroundPosition = "bottom";
      box.style.backgroundImage =
        "url('https://cdn.motor1.com/images/mgl/9mmboX/s1/porsche-911-gt3-r.jpg')";

      text.innerHTML =
        "Modelo : 911 GT3 R " +
        "<br> Velocidade máxima : 320km/h" +
        "<br> Potência: 700cv <br>" +
        "Peso: 1400kg";
      text.style.display = "block";
      break;

    case "volvo":
      box.style.backgroundImage =
        "url('https://fotos.jornaldocarro.estadao.com.br/uploads/2020/02/25101650/Polestar_Precept_001.jpg')";

      text.innerHTML =
        "Modelo : Polestar Precept " +
        "<br> Velocidade máxima : 280km/h" +
        "<br> Potência: 650cv <br>" +
        "Peso: 2000kg";
      text.style.display = "block";
      break;

    default:
      box.style.display = "none";
      break;
  }
}
