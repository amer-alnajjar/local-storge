let input = document.getElementById("input");
let add = document.querySelector(".add");
let Delete = document.querySelector(".delete");
let Show = document.querySelector(".show");
let Chec = document.querySelector(".chec");
let result = document.querySelector(".result > span");

// عند الضغط على البتن

function clickbtn() {
  ////////////add
  add.onclick = function () {
    if (input.value === "") {
      massege();
    } else {
      localStorage.setItem(input.value, ".");
      result.innerHTML = `Done add name <span>${input.value}</span>`;
      input.value = "";
    }
  };
  //////////////Delete
  Delete.onclick = function () {
    if (input.value === "") {
      massege();
    } else {
      if (localStorage.getItem(input.value)) {
        localStorage.removeItem(input.value);
        result.innerHTML = `Done delete name <span>${input.value}</span>`;
        input.value = "";
      } else {
        result.innerHTML = `Not found the name in storage <span>${input.value}</span>`;
      }
    }
  };

  ////////////Show
  Show.onclick = function () {
    if (localStorage.length) {
      result.innerHTML = "";
      for (let [key, value] of Object.entries(localStorage)) {
        result.innerHTML += ` <span>  ${key}</span>  `;
      }
    } else {
      result.innerHTML = `Not found any name in storage `;
    }
  };

  ///////////// Chec
  Chec.onclick = function () {
    if (input.value === "") {
      massege();
    } else {
      if (localStorage.getItem(input.value)) {
        result.innerHTML = `found the name in storage <span>${input.value}</span>`;
      } else {
        result.innerHTML = `Not found the name in storage <span>${input.value}</span>`;
      }
    }
  };
}

clickbtn();

//فانكشن بتحط الجملة هاي اذا كانت فاضية الانبت
function massege() {
  result.innerHTML = `please write name `;
}
