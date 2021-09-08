// https://dogbreeds-dbcd.restdb.io/rest/dogbreeds?max=2

// api key: 61364b5343cedb6d1f97ed5f

// const url = "https://dogbreeds-dbcd.restdb.io/rest/dogbreeds?max=20";

// const options = {
//   headers: {
//     "x-apikey": "61364b5343cedb6d1f97ed5f",
//   },
// };

// fetch(url, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     handleData(data);
//   })
//   .catch((e) => {
//     console.error("An error occured:", e.message);
//   });

// function handleData(dogbreeds) {
//   dogbreeds.forEach((dog) => {
//     console.log(dog);
//     // 4 populate with data
//     document.querySelector(".retriever").addEventListener("click", changeDog);
//     // 5 append it to the DOM
//   });
// }

// function changeDog() {


//   document.querySelector(".retriever");
//   document.querySelector("h2").textContent = dog.breedname;
//   document.querySelector(".dog-image").src = dog.img_url;

//   document.querySelector("h3").textContent = dog.bio;

// }

const url = "https://dogbreeds-dbcd.restdb.io/rest/dogbreeds?max=15";

const options = {
  headers: {
    "x-apikey": "61364b5343cedb6d1f97ed5f",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    handleData(data);
    console.log(data)
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(dogbreeds) {
  dogbreeds.forEach((dog) => {
    // console.log(dog);

    const template = document.querySelector("#list").content;
    const clonelistitem = template.cloneNode(true);
    const aEl = clonelistitem.querySelector("a");
    aEl.textContent = dog.breedname;
    aEl.dataset.id = dog._id;
    aEl.addEventListener("click", showDog);

    function showDog(e) {
      console.log(e);
      document.querySelector("h2").textContent = dog.breedname;
      document.querySelector(".dog-image").src = dog.img_url;
    }

    const mylinksEl = document.querySelector("#myLinks");
    mylinksEl.appendChild(clonelistitem);


    document.querySelector("h3").textContent = dog.bio;
    document.querySelector(".furcolor").textContent = `Furcolor: ${dog.furcolor}`;
    document.querySelector(".lifespan").textContent = `Lifespan: ${dog.lifespan} years`;
    document.querySelector(".brachyc").textContent = `brachyc: ${dog.brachyc}`;


    // 5 append it to the DOM
  });
  document.querySelector("#myLinks a").click()
}



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}

function hideList() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}