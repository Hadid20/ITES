// fecth data api

function getData() {
  fetch("https://hadid20.github.io/PILgusticode/src/asseet/data.json")
    .then((Response) => Response.json())
    .then((data) => {
      const dataJSON = data.products;

      const dataTopRatings = dataJSON
        .sort((a, b) => b.ratings - a.ratings)
        .slice(0, 8);

      let DataAll = "";
      for (const data of dataJSON) {
        DataAll += createCardProduct(data);
      }

      let DataTop = "";
      for (const dataTopRating of dataTopRatings) {
        DataTop += createCardProduct(dataTopRating);
      }

      let DataNew = "";
      for (const dataNew of dataJSON.sort((a, b) => b.id - a.id).slice(0, 8)) {
        DataNew += createCardProduct(dataNew);
      }

      let DataCategoriComputer = "";
      for (const DCC of dataJSON.filter(
        (dataJSON) => dataJSON.category === "Laptop"
      )) {
        DataCategoriComputer += createCardProduct(DCC);
      }

      var itemDataAll = document.getElementById("itemAll");
      itemDataAll.innerHTML = DataAll;
      var itemDataTop = document.getElementById("itemTOP");
      itemDataTop.innerHTML = DataTop;
      var itemDataNew = document.getElementById("itemNEW");
      itemDataNew.innerHTML = DataNew;
      var itemComputer = document.getElementById("itemComputer");
      itemComputer.innerHTML = DataCategoriComputer;

      return {};
    });
}

function createCardProduct(el) {
  return `
  <a href="./detailProduct.html?id=${el.id}">
    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('${el.image}')"><button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
  <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></button></div><div class="px-5 py-3"><h3 class="text-gray-700 uppercase">${el.name}</h3><span class="text-gray-500 mt-2">$${el.price}</span><span class="flex gap-2 items-center">${el.ratings}<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
  </path>
  </svg></span></div></div></a>`;
}

getData();
