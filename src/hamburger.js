
/*
notes:
Naming via https://dev.to/samuel-braun/naming-every-developers-nightmare-3ge8
[scope(private, public, protected, internal, $, @, __, use, etc)]
[typePrefex(is, has, contains, are , integrations, get, set, fetch, update, store, save...)]
[baseName(user, distance, payment, errorMessage, status, price, elapsedTime...)]
[qualifier(firstName, lastName, phoneNumber, valid, in, byId...)]
[typeSuffix(count, index, sum, average, list, map, array...)]

[scope][typePre][basename][qualifier]
__isUserLoggedin
[scope][typePre][baseName][qualifier]
(public)fetchProductByID
[scope][prefix][basename][qualifier]
""updateEmailPref

*/

const menu = document.querySelector(".menu"); //hamburger
const nav = document.querySelector(".navigation"); //why again?

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active") //not yet used?
})