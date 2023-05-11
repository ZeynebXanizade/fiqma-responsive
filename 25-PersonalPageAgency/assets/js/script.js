const bar=document.querySelector(".bar");
const resp=document.querySelector(".resp");
const nav=document.querySelector("nav");
bar.addEventListener("click",function () {
    resp.classList.toggle("responsive")
    nav.classList.toggle("header_bg")
})


//contact 
const form = document.getElementsByClassName("form");
const mapinput = document.getElementsByClassName("mapinput");
const selectinput = document.getElementsByClassName("selectinput");
const map2input = document.getElementsByClassName("map2input");
const mapbtn = document.querySelector(".mapbtn");



let arr = [];

if(JSON.parse(localStorage.getItem("data")) !== null){
    arr = JSON.parse(localStorage.getItem("data"));
}

mapbtn.addEventListener("submit", (e) => {
    let obj = {
        mapinput: "",
        selectinput: "",
        map2input: "",
    }
    obj. mapinput =  mapinput.value;
    obj.selectinput = selectinput.value;
    obj. map2input =  map2input.value;
    arr.push(obj);

    localStorage.setItem("data", JSON.stringify(arr));
    console.log("data");
    console.log(JSON.parse(localStorage.getItem("data")));

    e.preventDefault();
})


//faq

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var adigital2 = this.nextElementSibling;
    if (adigital2.style.maxHeight) {
      adigital2.style.maxHeight = null;
    } else {
      adigital2.style.maxHeight = adigital2.scrollHeight + "px";
    } 
  });
}


//fetch

const table = document.querySelector(".table");
fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {

        data.forEach((element,i) => {
        let tr = document.createElement('tr');
        let number = document.createElement('td');
        let name = document.createElement('td');
        let capital = document.createElement('td');
        let population = document.createElement('td');
        let flag = document.createElement('td');
        let img = document.createElement("img");
        img.setAttribute("src",element.flags.png);
        flag.append(img);


        number.innerHTML = i+1;
        name.innerHTML =element.name.common;
        capital.innerHTML = element.capital;
        population.innerHTML = element.population;
        tr.append(number, name, capital ,population, flag);
        table.appendChild(tr);


         btn3.addEventListener("click",function(){
                tr.remove()
                })
 
    })
})
