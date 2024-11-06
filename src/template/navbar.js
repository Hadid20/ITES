const Navbar = document.getElementById("navbar-template");

function createNavbar() {
  Navbar.innerHTML = `
  <nav class=" bg-gradient-to-r from-slate-300 to-slate-500 w-full flex relative justify-evenly items-center mx-auto px-8 h-24">
  <!-- logo -->
  <div class="inline-flex">
      <a class="" href="#"
          ><div class="block h-full">
          <img src="http://127.0.0.1:5500/src/asseet/ITES.png" class="max-w-52"> 
          </div>
         
      </a>
  </div>

  <!-- end logo -->

  <!-- search bar -->
  <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
  <div class="inline-block">
  <div class="pt-2 relative mx-auto text-gray-500">
  <input class="border-0 border-black h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
    type="search" name="search" placeholder="Mau cari Apa?">
  <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
      viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
      width="512px" height="512px">
      <path
        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
    </svg>
  </button>
    </div>
  </div>
</div>
  <!-- end search bar -->

  <!-- login -->
  <div class="flex-initial">
    <div class="flex justify-end items-center relative">
     
    
      <div class="hidden md:flex mr-4 items-center">
        <a class="inline-block px-3" href="http://127.0.0.1:5500/index.html">
        <span id="menu1" class="py-2 px-4 hover:bg-gray-200 rounded-full">Beranda</span>
        </a>
        <a class="inline-block px-3" href="http://127.0.0.1:5500/src/page/Chategory.html">
        <span id="menu2" class="py-2 px-4 hover:bg-gray-200 rounded-full">Chategory</span>
        </a>
        <a class="inline-block px-3" href="http://127.0.0.1:5500/src/page/Blog.html">
        <span id="menu3" class="py-2 px-4 hover:bg-gray-200 rounded-full">About</span>
        </a>
       
        <div class="block relative">
          <a href="./#" type="button" class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
            <div class="flex items-center h-5">
              <div class="_xpkakx">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 24 24" fill="none">
              <path d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="block">
          <div class="inline relative">
              <button type="button" class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                  <div class="pl-1">
                      <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
                      >
                          <g fill="none" fill-rule="nonzero">
                              <path d="m2 16h28"></path>
                              <path d="m2 24h28"></path>
                              <path d="m2 8h28"></path>
                          </g>
                      </svg>
                  </div>

                  <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                      <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                          style="display: block; height: 100%; width: 100%; fill: currentcolor;"
                      >
                          <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                      </svg>
                  </div>
              </button>
          </div>
          </div>
          </div>
        
  <!-- end login -->
</nav>
  `;
  const menuLinks = [
    document.getElementById("menu1"),
    document.getElementById("menu2"),
    document.getElementById("menu3"),
  ];

  let activeLink = null;

  for (const link of menuLinks) {
    if (link.innerHTML === document.title) {
      activeLink = link;
      break; // Berhenti looping jika menu aktif ditemukan
    }
  }

  if (activeLink) {
    activeLink.classList.add("bg-gray-200");
  }
}

console.log(document.title);
console.log(Navbar);
createNavbar();
