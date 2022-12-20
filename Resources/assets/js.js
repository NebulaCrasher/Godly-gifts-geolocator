    // Specify data
    const countryData = [
      {
        id: "143",
        value: "-1500",
        link: "https://www.google.com/maps"
      },
      {
        id: "158",
        value: "-500",
        link: "https://www.google.com/maps"
      },
      {
        id: "53",
        value: "-700",
        link: "https://www.google.com/maps"
      }
    ];
  
    const Mythology = [
      {
        id: "EGYPT",
        label: "Egyptian",
        value: "40",
        showLabel: "1"
  
      },
      {
        id: "GREEK",
        label: "Greek",
        value: "37",
        showLabel: "1"
      },
      {
        id: "NORSE",
        label: "Norse",
        value: "37",
        showLabel: "1"
      }
    ];

    var chartConfig = {
      type: "", 
      renderAt: "", 
      dataFormat: "json", 
      dataSource: {
        chart: {
          dateformat: "dd/mm/yyyy",
          caption: "God Regions",
          theme: "fusion",
          canvasborderalpha: "40",
          ganttlinealpha: "50"
        },
        tasks: {
          color: "#5D62B5",
          task: [
            {
              start: "01/01/0001",
              end: "01/01/3970"
            },
            {
              start: "01/01/3100",
              end: "01/01/3700"
            },
            {
              start: "01/01/4700",
              end: "01/01/5100"
            }
          ]
        },
        processes: {
          headertext: "Mythology",
          headeralign: "left",
          fontsize: "14",
          isbold: "0",
          align: "left",
          process: [
            {
              label: "Egypt"
            },
            {
              label: "Greek"
            },
            {
              label: "Norse"
            }
          ]
        },
        categories: [
          {

            category: [
              {
                start: "01/01/0001",
                end: "01/01/3100",
                label: "4000 - 900 BC"
              },
              {
                start: "01/01/3100",
                end: "01/01/3700",
                label: "900 - 300 BC"
              },
              {
                start: "01/01/3700",
                end: "01/01/5100",
                label: "300 BC - 1100 AD"
              }
            ]
            }
            ]
      }
    }; 

    var chartConfig2 = {
      type: "", 
      renderAt: "", 
      dataFormat: "json", 
      dataSource: {
        chart: {
          caption: "Number of Gods in Each Mythology",
          xAxisName: "Mythlogy", 
          yAxisName: "# of Total Gods", 
          numberSuffix: "",
          theme: "fusion"   
  
        },
        // Connect the data
        data: Mythology
      }
    }; 

    var chartConfig3 = {
      type: "", 
      renderAt: "", 
      width: "900", //width of the chart
      height: "650", //height of the chart
      dataFormat: "json", 
      dataSource: {
        chart: {
          caption: "Godly Regions",
          subcaption: "Click on a region",
          labelsepchar: ": ",
          entitytooltext: "$lname: From year <b>$datavalue </b>",
          entityfillhovercolor: "#FFF9C4",
          theme: "fusion"
  
        },
      colorrange: {
        minvalue: "-1500",
        code: "#FFE0B2",
        gradient: "10",
        color: [
          {
            minvalue: "-1500",
            maxvalue: "-1000",
            color: "#FFD74D"
          },
          {
            minvalue: "-1000",
            maxvalue: "-500",
            color: "#FB8C00"
          },
          {
            minvalue: "0",
            maxvalue: "1000",
            color: "#E65100"
          }
        ]
      },
        // Connect the data
        data: countryData
      }
    }; 
      
      function renderBar(){
        chartConfig2.type = 'column2d';
          chartConfig2.renderAt = 'bar-chart-container';
        var fusioncharts = new FusionCharts(chartConfig2);
        fusioncharts.render();
      }
  
      function renderLine(){
        chartConfig.type = 'gantt';   	
          chartConfig.renderAt = 'line-chart-container';        
        var fusioncharts = new FusionCharts(chartConfig);
        fusioncharts.render();
      }    
  
      function renderMap(){
          chartConfig3.type = 'maps/worldwithcountries';     
          chartConfig3.renderAt = 'map-container';         
          var fusioncharts = new FusionCharts(chartConfig3);
          fusioncharts.render();
      }        
      
      FusionCharts.ready(renderBar);
      FusionCharts.ready(renderLine)
      FusionCharts.ready(renderMap);
  