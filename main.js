// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const navList = document.querySelectorAll("header nav a");

for (let i = 0; i < navList.length; i++) {
  navList[i].id = "nav-item-" + (i + 1);
  navList[i].textContent = siteContent.nav[navList[i].id];
  navList[i].classList.add("italic");
}

const imgList = document.querySelectorAll("img");

imgList.forEach((el) => {
  el.setAttribute("src", siteContent.images[el.id]);
});
imgList[2].setAttribute("src", siteContent.images["accent-img"]);
/* img tagleri src değerlerini aldı.*/

const ctaTittleTag = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");

ctaTittleTag.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

const topContent = Object.entries(siteContent["top-content"]);
const contents = document.querySelectorAll(".top-content .text-content > *");

for (let i = 0; i < contents.length; i++) {
  contents[i].id = topContent[i][0];
  contents[i].textContent = topContent[i][1];
}

/* Top content dolduruldu. */

const bottomContent = Object.entries(siteContent["bottom-content"]);
const bottomTexts = document.querySelectorAll(
  ".bottom-content .text-content > *"
);

for (let i = 0; i < bottomTexts.length; i++) {
  bottomTexts[i].id = bottomContent[i][0];
  bottomTexts[i].textContent = bottomContent[i][1];
}

/* bottom content dolduruldu. */

const contactContent = Object.entries(siteContent["contact"]);
const contactTexts = document.querySelectorAll(".contact > *");

for (let i = 0; i < contactTexts.length; i++) {
  contactTexts[i].id = contactContent[i][0];
  contactTexts[i].textContent = contactContent[i][1];
}

/* contact kısmı dolduruldu. */
const htmlFooterText = document.querySelector("footer a");
htmlFooterText.textContent = siteContent["footer"].copyright;
htmlFooterText.classList.add("bold");
