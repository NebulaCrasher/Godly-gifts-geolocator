//set background depending on mythology
//ids:
//trend 
//god-img 
//asp-desc 
//god-mythology
//god-name 
//selDataSet
//const data = [{"id": 41, "god_name": "Aphrodite", "description": "goddess of beauty, love, desire, and pleasure", "mythology": "Greek", "godly_aspects": "femininity", "godly_aspects2": "desire", "Img URL": "https://cdn.britannica.com/62/181762-050-5DC9A4C7/Venus-Genetrix-Roman-marble-copy-statue-Callimachus-c-475-bce.jpg"},
    //{"id": 41, "god_name": "Aphrodite2", "description": "goddess of beauty, love, desire, and pleasure", "mythology": "Greek", "godly_aspects": "femininity", "godly_aspects2": "desire", "Img URL": "https://cdn.britannica.com/62/181762-050-5DC9A4C7/Venus-Genetrix-Roman-marble-copy-statue-Callimachus-c-475-bce.jpg"}]
const url = "https://wbk8d88hw6.execute-api.us-east-2.amazonaws.com/default/app?f=hello&g=world";
//selDataSet:
function init(){
    d3.json(url).then(function(data) {
        console.log(data);
        //need for loop to go through each index/entry
        let selector = d3.select("#selDataset");
                
        data.forEach((god) => {
            console.log(god)
            selector
                .append("option")
                .text(god.god_name)
                .property("value", god.god_name);
        });
      }
);
    }
    function optionChanged(newGod){
        // code that updates graphics
        // one way is to recall each function
        console.log(newGod)
    
    }
init();
