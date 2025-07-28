// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const navList = document.querySelectorAll("header nav a");

for (let i = 0; i < navList.length; i++) {
  navList[i].id = "nav-item-" + (i + 1);
  navList[i].textContent = siteContent.nav[navList[i].id];
}

const imgList = document.querySelectorAll("img");

imgList.forEach((el) => {
  el.setAttribute("src", siteContent.images[el.id]);
});
imgList[2].setAttribute("src", siteContent.images["accent-img"]);
/* img tagleri src değerlerini aldı.*/
