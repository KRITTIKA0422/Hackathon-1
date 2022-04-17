
"use strict";
// Creating HTML Elements using DOM
const heading=document.createElement("header");
document.body.appendChild(heading);
heading.innerHTML=`List of Breweries`;
const filter=document.createElement("input");
filter.id="keyword";
filter.type="text";
filter.onkeyup="search_word()";
filter.name="search";
filter.placeholder="Filter by search";
const info=document.createElement("ul");
info.id="list";
document.body.appendChild(filter);
document.body.appendChild(info);
let li1=document.createElement("li");
li1.id="lifirst";
info.appendChild(li1);
const url = "https://api.openbrewerydb.org/breweries";
// Fetch API()
async function brew(url) {
  const response = await fetch(url);
  var data=await response.json();
  console.log(data);
  view(data);                                    //calling function view() to display the data
 } 
let brew_object = brew(url);
brew_object
  .try(function (value) {                       //try and catch are used to check for errors
    console.log(JSON.stringify(value));
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("fetch api ran successfully !");   //promise ran successfully
  });
  function view(data){                            //to display data for each brewery
    let listing;
    for(let r of data){
      li1.innerHTML=`<br>Name:${" "}${r.name}<br>Brewery Type:${" "}${r.brewery_type}<br>Address 2:${" "}${r.address_2}<br>Address 3:${" "}${r.address_3}<br>Website url:${" "}${r.website_url}<br>Phone Number:${" "}${r.phone}<br>`;
      listing+=li1.innerHTML;
    }
   info.innerHTML=listing;                         //adding data to ul list
}
function search_word(){                          //implementing search filter based on any text
  let input,i, txtValue;
 input= filter.value.toUpperCase();
  for (i = 0; i < info.length; i++) {
      li = info[i].getElementById("lifirst")
      txtValue = li.textContent || li.innerText;
      if (txtValue.toUpperCase().indexOf(input) > -1) {
        info[i].style.display = "";
      } else {
          info[i].style.display = "none";
      }
  }
}
