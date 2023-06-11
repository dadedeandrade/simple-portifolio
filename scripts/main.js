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
    const livechatItemDetails = document.querySelector(".livechatItemDetails p");
    const findYourDuoItemDetails = document.querySelector(".findYourDuoItemDetails p");
    const webOsItemDetails = document.querySelector(
      ".webOperationalSystemJSItemDetails p"
    );
    h1.innerText = "Olá, seja bem vindo ao meu portifólio!";
    h2.innerText =
      "Aqui você consegue acessar todos meus projetos em andamento com as stacks utilizadas e que tenho conhecimento, espero que goste :)";
    socialMedia.innerText = "Redes sociais:";
    livechatItemDetails.classList.add("heightFix");
    findYourDuoItemDetails.classList.add("heightFix");
    webOsItemDetails.classList.add("heightFix");
    livechatItemDetails.innerText =
      "Esse projeto foi criado com o intuito de disponibilizar um ambiente agradável para desenvolvedores tere m a possibilidade de um coffeBreak em home-office. Acredito na importancia de um momento de distração durante a jornada de trabalho e no home-office o momento do cafézinho se perdeu, por isso a ideia do projeto, O MVP que seria o chat já está disponibilizado e futuramente outras funções serão implementadas como uma radio colaborativa, mensagens privadas, cadastro de usurio e por aí vai :)";
    findYourDuoItemDetails.innerText =
      "Melhore a sua experiência de jogo com esse app para encontrar o duo ideal e conectar através do Discord. Filtre por jogo e estilo de jogo assim como dia da semana e horário disponível.";
    webOsItemDetails.innerText =
      "Uma replicação de um sistema operacional (Linux) utilizando HTML, CSS e JS";
  } else {
    const h1 = document.querySelector("header h1");
    const h2 = document.querySelector("header h2");
    const liveChat = document.querySelector("#liveChat");
    const pokedex = document.querySelector("#pokedex");
    const livechatItemDetails = document.querySelector(".livechatItemDetails p");
    const webOsItemDetails = document.querySelector(
      ".webOperationalSystemJSItemDetails p"
    );
    const findYourDuoItemDetails = document.querySelector(
      ".findYourDuoItemDetails p"
    );
    const socialMedia = document.querySelector(".userMedia p");
    h1.innerText = "Hi, Welcome to my portifolio!";
    h2.innerText =
      "Here you can find all my projects with the stacks im currently working, hope you enjoy :)";
    liveChat.innerText = "CoffeBreak RealTime Chat";
    socialMedia.innerText = "Social Media:";
    livechatItemDetails.classList.remove("heightFix");
    livechatItemDetails.innerText =
      "The idea behind this project was to create a pleasant environment for developers so they can take a small break from home-office in a chat with their colleagues. I believe in the idea that moments of distraction are one of the most important things during the working day so we can keep productivity going and keep burnout away, and with the current ascension of homeoffice we are kinda losing that little break we had in the office, thats why i developed the app. The MVP is ready, and for the future i'll implement more features like a collaborative radio, private messages, user registration and more :)";
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
const eachProject = document.querySelectorAll(".item h2");

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("whiteTheme");
  canvas.classList.toggle("whiteTheme");

  linkedinIcon.classList.toggle("whiteTheme");
  githubIcon.classList.toggle("whiteTheme");

  toggleTheme.classList.toggle("whiteTheme");
  toggleThemeLanguage.classList.toggle("whiteTheme");
  eachProject.forEach((project) => {
    project.classList.toggle("whiteTheme");
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

function bootingScreen() {
  setTimeout(
    () =>
      document.getElementById("bootSection").classList.add("booting-finish"),
    5000
  );
  setTimeout(
    () => document.getElementById("bootText").classList.add("booting-finish"),
    5000
  );
}
bootingScreen();
