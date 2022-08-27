//index.js for GLAS
 
var displayAmount = 7,
    jsonData = null,
    search = false,
    header = document.getElementById("header"),
    error = document.getElementById("alert"),
    logo = document.getElementById("logo"),
    scrollBtn = document.getElementById("top"),
    content = document.getElementById("content");
 
fetch("./posts").then(r => r.json()).then(async data => {
    jsonData = data;
    update();
 
})
 
//Partial loding for Easing on GPU. 
//I mean, it still loads all of the data so it computes the same amount.
window.onscroll = function (ev) {
    if (search == false) {
        if ((window.innerHeight + window.scrollY - document.body.scrollHeight) > -1) {
            content.innerHTML = "";
            displayAmount += 5;
            update();
        }
    }
};
//Using the Update function for absolute Garbage.
//It's not even properly updating.
function update() {
    jsonData.forEach(r => {
        if (r.id < displayAmount) {
            content.innerHTML += `<div class="box"><span class="floatright">${r.id}</span><a href="post?id=${r.id}">${r.title}</a> <br></div>`;
        }
    })
}
//Click
logo.addEventListener("click", function () {
    search = false;
    displayAmount = 7;
    content.innerHTML = "";
    error.innerHTML = "";
    update();
});
 
 
//Input Search Bar 
const input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        //Searching mechanism. No real algorithm involved. Just searches through all of it. 
        search = true; 
        var searchData = [];
        if (input.value.length > 2) {
            for (var i = 0; i < jsonData.length; i++) {
                if (jsonData[i].title.toLowerCase().includes(input.value)) {
                    searchData.push(jsonData[i]); 
                }
            }
            if (searchData != "") {
                error.innerHTML = searchData.length + " matches for " + input.value + "</br>";
                content.innerHTML = "";
                for (var i = 0; i < searchData.length; i++) {
                    content.innerHTML += "<div class='box'><span class='floatright'>" + searchData[i].id + "</span><a href='post?id=" + searchData[i].id + "'>" + searchData[i].title + "</a></div>";
                }
            } else {
                //These two lines were the only two lines that worked first try throughout this whole thing.
                //Epic Programming.
                error.innerHTML = "No matches";
                content.innerHTML = "";
            }
 
        }
    }
});
//Lonely function :(
btnVisibility();

