// fecth data api

function getData() {
  fetch("http://127.0.0.1:5500/src/asseet/data.json")
    .then((Response) => Response.json())
    .then((data) => {
      const dataJSON = data.products;
      let DataCategoriComputer = "";
      for (const DCC of dataJSON
        .filter((dataJSON) => dataJSON.category === "Laptop")
        .slice(0, 8)) {
        DataCategoriComputer += createCardProduct(DCC);
      }
      let DataCategoriGadget = "";
      for (const DCG of dataJSON
        .filter((dataJSON) => dataJSON.category === "Gadget")
        .slice(0, 8)) {
        DataCategoriGadget += createCardProduct(DCG);
      }
      let DataCategoriPc = "";
      for (const DCP of dataJSON
        .filter((dataJSON) => dataJSON.category === "PC")
        .slice(0, 8)) {
        DataCategoriPc += createCardProduct(DCP);
      }

      var itemComputer = document.getElementById("itemComputer");
      itemComputer.innerHTML = DataCategoriComputer;
      var itemGadget = document.getElementById("itemGadget");
      itemGadget.innerHTML = DataCategoriGadget;
      var itemPC = document.getElementById("itemPC");
      itemPC.innerHTML = DataCategoriPc;

      return {};
    });
}

function createCardProduct(el) {
  return `
  <a href="./detailProduct.html?id=${el.id}">
    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('${el.image}')"><button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
  <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></button></div><div class="px-5 py-3"><h3 class="text-gray-700 uppercase">${el.name}</h3><h3 class="text-gray-500 uppercase">${el.category}</h3><span class="text-gray-500 mt-2">$${el.price}</span><span class="flex gap-2 items-center">${el.ratings}<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
  </path>
  </svg></span></div></div></a>`;
}

getData();
