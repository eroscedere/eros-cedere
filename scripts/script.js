const models = [
  //Triz
  {
    name: "Triz Pariz",
    perfil:
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0049.jpg",
    fotos: [
      //1
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0019.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0047.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0175.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0164.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0176.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0169.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0160.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0001.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0025.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0028.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0029.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0057.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0100.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0156.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0213.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0214.jpg",
      "https://fapello.com/content/t/r/triz-pariz/1000/triz-pariz_0215.jpg",
      "https://images4.imagebam.com/39/02/c6/MEONJFL_o.jpg",
      "https://pbs.twimg.com/media/FNGN4c2XoAU6u76.jpg",

      //2
      "",
      //3
    ],
  },

  {
    name: "Lorena Orsi",
    perfil:
      "https://fapello.com/content/l/o/lorena-orsi-1/1000/lorena-orsi-1_0013.jpg",
    fotos: [],
  },

  {
    name: "Gabi Catuzzo",
    perfil:
      "https://fapello.com/content/g/a/gabi-cattuzzo/1000/gabi-cattuzzo_0010.jpg",
    fotos: [],
  },

  {
    name: "Carol Zaghetti",
    perfil: "",
    fotos: [],
  },

  {
    name: "Kalera",
    perfil: "",
    fotos: [],
  },

  {
    name: "Einebru",
    perfil: "",
    fotos: [],
  },

  {
    name: "Gabie Fadel",
    perfil: "",
    fotos: [],
  },

  {
    name: "Xsbel",
    perfil: "",
    fotos: [],
  },
];

const container = document.querySelector(".container-perfil");

const createIcon = (url, title) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  container.appendChild(div);
  div.classList.add("model-icon");

  div.appendChild(img);
  img.src = url;

  div.appendChild(span);
  span.innerHTML = title;

  const teste = document.querySelectorAll(".model-icon");

  teste.forEach((e, i) => {
    e.addEventListener("click", () => {
      modelImages(i);
    });
  });
};

models.map((e, i) => {
  const name = e.name;
  const img = e.perfil;
  createIcon(img, name);
});

const pageON = document.querySelectorAll(".page");

const changePage = (num) => {
  pageON.forEach((e) => {
    e.style.display = "none";
  });

  pageON[num].style.display = "flex";
};

changePage(0);

const modelPerfil = document.getElementById("modelPerfil");
const modelName = document.getElementById("modelName");
const modelSocial = document.getElementById("modelSocial");
const modelAmount = document.getElementById("modelAmount");

const modelFotos = document.querySelector(".model-images");

const modelImages = (num) => {
  modelPerfil.src = models[num].perfil;
  modelName.innerHTML = models[num].name;

  modelFotos.innerHTML = "";

  models[num].fotos.forEach((e, i) => {
    const div = document.createElement("div");
    modelFotos.appendChild(div);
    div.style.backgroundImage = `url(${e})`;
    div.addEventListener("click", () => {
      showImage(num, i);
    });
  });

  changePage(1);
};

const srcImage = document.getElementById("showImage");

const showImage = (num, i) => {
  changePage(2);
  srcImage.src = models[num].fotos[i]
};


