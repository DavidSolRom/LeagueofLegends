/**********************************************************/
/* Web de League of Legends                               */
/* Hoja de javascript para galeria.html                   */
/* Autor: David Solera Romero                             */
/* Versión: 1.0                                           */
/* 7 de diciembre de 2022                                 */
/**********************************************************/

/* Java Script que regula la barra de navegación */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
