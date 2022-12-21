
const greek_url = "https://wbk8d88hw6.execute-api.us-east-2.amazonaws.com/default/app?g=Greek";
const egypt_url = "https://wbk8d88hw6.execute-api.us-east-2.amazonaws.com/default/app?g=Egyptian";
const norse_url = "https://wbk8d88hw6.execute-api.us-east-2.amazonaws.com/default/app?g=Norse";
//selDataSet:
let url = norse_url

function init(){
    createDropdown()    
    card("Aegir")
};


function card(god){
    d3.json(url).then(function(data) {

        let godObject = data.filter(i => i.god_name == god)
        console.log(godObject[0].description)
        document.getElementById("god-name").innerHTML = godObject[0].god_name
        document.getElementById("asp-desc").innerHTML = godObject[0].description
        document.getElementById("god-mythology").innerHTML = godObject[0].mythology
        document.getElementById("god-img").src = godObject[0]["Img URL"]
        document.getElementById("god-img").width = 250
        document.getElementById("aspects").innerHTML = godObject[0].godly_aspects
        document.getElementById("aspects2").innerHTML = godObject[0].godly_aspects2
    }
)};


function optionChanged(newGod){
        // code that updates graphics
        // one way is to recall each function
    console.log(newGod)
    card(newGod);
}


function createDropdown(){
    d3.json(url).then(function(data) {
        console.log(data);
        //need for loop to go through each index/entry
        let selector = d3.select("#selDataset");
                
        data.forEach((god) => {
           // console.log(god)
            selector
                .append("option")
                .text(god.god_name)
                .property("value", god.god_name);
        });
    }
)};

init();
