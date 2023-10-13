function preloadImages() {
  var imageUrls = ["../assets/brazil.png", "../assets/english.jfif"];

  for (var i = 0; i < imageUrls.length; i++) {
    var img = new Image();
    img.src = imageUrls[i];
  }
}
window.addEventListener("load", preloadImages);

const toggleLanguage = document.querySelector("#toggleLanguage");

toggleLanguage.addEventListener("click", () => {
  toggleLanguage.classList.toggle("active");
  if (toggleLanguage.className.includes("active")) {
    const h1 = document.querySelector("header h1");
    const h2 = document.querySelector("header h2");
    const liveChat = document.querySelector("#liveChat");
    const pokedex = document.querySelector("#pokedex");
    const socialMedia = document.querySelector(".userMedia p");
    const livechatItemDetails = document.querySelector(
      ".livechatItemDetails p"
    );
    const findYourDuoItemDetails = document.querySelector(
      ".findYourDuoItemDetails p"
    );
    const webOsItemDetails = document.querySelector(
      ".webOperationalSystemJSItemDetails p"
    );
    h1.innerText = "Olá, meu nome é Vinicius de Andrade!";
    h2.innerText =
      "Tenho 23 anos e sou um desenvolvedor Front-end com 2 anos de experiência \n Aqui você consegue acessar todos meus projetos em andamento com as stacks utilizadas e que tenho conhecimento, espero que goste :)";
    socialMedia.innerText = "Redes sociais:";
    livechatItemDetails.classList.add("heightFix");
    findYourDuoItemDetails.classList.add("heightFix");
    webOsItemDetails.classList.add("heightFix");
    livechatItemDetails.innerText =
      "O CoffeBreak Realtime Chat é uma plataforma de comunicação baseada na Web projetada para facilitar interações instantâneas e contínuas entre os usuários. Esse aplicativo permite que os usuários participem de conversas baseadas em texto com indivíduos em tempo real.";
    findYourDuoItemDetails.innerText =
      "Melhore a sua experiência de jogo com esse app para encontrar o duo ideal e conectar através do Discord. Filtre por jogo e estilo de jogo assim como dia da semana e horário disponível.";
    webOsItemDetails.innerText =
      "Uma replicação de um sistema operacional (Linux) utilizando HTML, CSS e JS";
  } else {
    const h1 = document.querySelector("header h1");
    const h2 = document.querySelector("header h2");
    const liveChat = document.querySelector("#liveChat");
    const pokedex = document.querySelector("#pokedex");
    const livechatItemDetails = document.querySelector(
      ".livechatItemDetails p"
    );
    const webOsItemDetails = document.querySelector(
      ".webOperationalSystemJSItemDetails p"
    );
    const findYourDuoItemDetails = document.querySelector(
      ".findYourDuoItemDetails p"
    );
    const socialMedia = document.querySelector(".userMedia p");
    h1.innerText = "Hi, Welcome to my portifolio!";
    h2.innerText =
      "I am 23 years old and a Front-end developer with 2 years of experience \n Here you can find all my on-going projects with the stacks im currently working, hope you enjoy :)";
    liveChat.innerText = "CoffeBreak RealTime Chat";
    socialMedia.innerText = "Social Media:";
    livechatItemDetails.classList.remove("heightFix");
    livechatItemDetails.innerText =
      "The Coffebreak Real-Time Chat is a web-based communication platform designed to facilitate instant and seamless interactions between users. This application allows users to engage in text-based conversations with individuals in real-time. Key features include:";
    webOsItemDetails.innerText =
      "A replication of a operational system (Linux) using HTML, CSS and JS";
    findYourDuoItemDetails.innerText =
      "Find your ideal gaming duo and connect via Discord. Filter by game and playstyle. Elevate your gaming experience with our seamless web app";
  }
});

const toggleTheme = document.querySelector("#toggleTheme");
const toggleThemeLanguage = document.querySelector("#toggleLanguage");
const body = document.querySelector("body");
const linkedinIcon = document.querySelector(".fa-linkedin");
const githubIcon = document.querySelector(".fa-github");
const eachSocialLink = document.querySelectorAll("#socialLinks li a i");
const eachProject = document.querySelectorAll(".item h2");

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("blackTheme");
  canvas.classList.toggle("blackTheme");

  eachSocialLink.forEach((socialIcon) => {
    socialIcon.classList.toggle("blackTheme");
  });

  toggleTheme.classList.toggle("blackTheme");
  toggleThemeLanguage.classList.toggle("blackTheme");
  eachProject.forEach((project) => {
    project.classList.toggle("blackTheme");
  });

  const toggleIcon = () => {
    const toggleIcon = document.querySelector("#toggleIcon");
    if (toggleIcon.classList == "gg-sun") {
      toggleIcon.classList.remove("gg-sun");
      toggleIcon.classList.add("gg-moon");
    } else if (toggleIcon.classList == "gg-moon") {
      toggleIcon.classList.remove("gg-moon");
      toggleIcon.classList.add("gg-sun");
    }
  };
  toggleIcon();
});

function addActiveClassOnHover(elem) {
  document.querySelector(`#${elem}`).classList.add("active");
}
function removeActiveClassOnHover(elem) {
  document.querySelector(`#${elem}`).classList.remove("active");
}

// function bootingScreen() {
//   setTimeout(
//     () =>
//       document.getElementById("bootSection").classList.add("booting-finish"),
//     5000
//   );
//   setTimeout(
//     () => document.getElementById("bootText").classList.add("booting-finish"),
//     5000
//   );
// }
// bootingScreen();
