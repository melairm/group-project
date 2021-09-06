// https://dogbreeds-dbcd.restdb.io/rest/dogbreeds?max=2

// api key: 61364b5343cedb6d1f97ed5f

const url = "https://dogbreeds-dbcd.restdb.io/rest/dogbreeds?max=20";

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
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(dogbreeds) {
  dogbreeds.forEach((dog) => {
    console.log(dog);

    // 1 make a template
    // 2 grab it
    const template = document.querySelector("template").content;
    // 3 clone it
    const clone = template.cloneNode(true);
    // 4 populate with data
    clone.querySelector("h2").textContent = dog.breedname;
    clone.querySelector("img").src = dog.img_url;

    clone.querySelector("h3").textContent = dog.bio;

    const mainEl = document.querySelector("main");
    mainEl.appendChild(clone);
    // 5 append it to the DOM
  });
}
