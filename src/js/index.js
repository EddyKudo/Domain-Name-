/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};
window.onload = () => {
  document.querySelector("#excuse").innerHTML = domainGenerator();
};

let domainGenerator = () => {
  let domain = ["the", "one", "our", "my", "his"];
  let adj = ["big", "tiny", "cool", "cozy", "warm"];
  let root = ["tree", "bed", "room", "home", "man"];
  let end = [".com", ".net", ".ru", ".de", ".ca"];
  for (let i = 0; i < domain.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < root.length; k++) {
        for (let l = 0; l < end.length; l++) {
          document.write(domain[i] + adj[j] + root[k] + end[l] + " ");
        }
      }
    }
  }
};
