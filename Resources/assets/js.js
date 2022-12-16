    // Specify data
    const continentData = [
      {
        id: "NA",
        label: "North America",
        value: "16.3",
        showLabel: "1"
  
      },
      {
        id: "SA",
        label: "South America",
        value: "12.0",
        showLabel: "1"
      },
      {
        id: "AS",
        label: "Asia",
        value: "30.0",
        showLabel: "1"
      },
      {
        id: "EU",
        label: "Europe",
        value: "6.7",
        showLabel: "1"
      },
      {
        id: "AF",
        label: "Africa",
        value: "20.3",
        showLabel: "1"
      },
      {
        id: "AU",
        label: "Australia",
        value: "5.2",
        showLabel: "1"
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
          caption: "Percentage of Land Area on Planet Earth",
          subCaption: "Data Source: www.enchantedlearning.com",
          xAxisName: "Continent", 
          yAxisName: "% Land Area", 
          numberSuffix: "%",
          theme: "fusion"   
  
        },
        // Connect the data
        data: continentData
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
      width: "800", //width of the chart
      height: "600", //height of the chart
      dataFormat: "json", 
      dataSource: {
        chart: {
          caption: "Percentage of Land Area on Planet Earth",
          subCaption: "Data Source: www.enchantedlearning.com",
          xAxisName: "Continent", 
          yAxisName: "% Land Area", 
          numberSuffix: "%",
          theme: "fusion"   
  
        },
        // Connect the data
        data: continentData
      }
    }; 
      
      function renderBar(){
        chartConfig2.type = 'column2d';
          chartConfig2.renderAt = 'bar-chart-container';
        var fusioncharts = new FusionCharts(chartConfig2);
        fusioncharts.render();
      }
  
      function renderLine(){
        chartConfig.type = 'line';   	
          chartConfig.renderAt = 'line-chart-container';        
        var fusioncharts = new FusionCharts(chartConfig);
        fusioncharts.render();
      }    
  
      function renderMap(){
          chartConfig3.type = 'world';     
          chartConfig3.renderAt = 'map-container';         
          var fusioncharts = new FusionCharts(chartConfig3);
          fusioncharts.render();
      }        
      
      FusionCharts.ready(renderBar);
      FusionCharts.ready(renderLine)
      FusionCharts.ready(renderMap);
  