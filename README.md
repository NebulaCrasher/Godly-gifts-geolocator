# Godly-gifts-geolocator

## Overview  
<hr>
For this project, we went a "Choose Your Character!" type of format for the different pantheons. The dashboard shows three different highlighted areas in the world. Those being, Norway for Norse Mythology, Greece for Greek Mythology, and Egypt for Egyptian Mythology. When an area is chosen, the user will be redirected to another page depending on which area was selected, and this is where the user will be able to choose a list of gods for that specific mythology from the dropdown. The demographic info like the god name, description, power, and image will change depending on which god is selected in the dropdown. To go back to the main screen, simply click the header and check out the other available regions.

## Group Members
<hr>  

* Bilal Kaludi
* Davit Ksor
* Georgia Myers
* Sofia Ysita

## Data Sources  
<hr>  

* FusionCharts: 
    Official Website: https://www.fusioncharts.com/
    Documentation: https://www.fusioncharts.com/dev/

## Data Extraction


*  Below is a list of columns avaialble for each God:   

    * `god_name`        - God/Godess full name
    * `description`     - God/Godess brief description
    * `mythology`       - Mythology from which the God is from
    * `godly_aspects`   - One aspect of the God
    * `godly_aspects2`  - Other aspect of the God
    * `Img URL`         - URL for the first Google Image

## Backend
Data is hosted via Amazon's s3 service. This service interacts with another Amazon service called Lambda which takes a function. This function can be accessed (for copy/paste purposes) in the lambda_function.py file. The lambda_function file connects Lambda to s3 and reads in the data stored there which was in parsed JSON format. Once a client tries to access the API the lambda_function tests whether or not it's a GET or OPTIONS request. If those criteria are met the lambda_function then proceeds to check for a query parameter 'g'. 'g' should equal one of the 3 pantheons that exist in the data set (Egpytian, Greek, or Norse) and will return pantheon specific data accordingly. After the 'g' parameter is specified the lamda_function will return a JSON response that the front end can utilize for their data visualization purposes.


## HTML
The set-up of all pages included in this project was done through the Bootstrap library (v5.2). All pages have three main text portions: the title, header, and designers' names, where the title also serves as a link that goes back to the landing page. The landing page consists of three containers of varying sizes that hold a graph or interactive map that is called from the javascript file. The three mythology pages all share the same layout where a drop-down gives the user a selection of gods and the selected god's image and basic information are then called to display in the page's card and image containers. 

## Javascript

## Dashboard 

    * Used Fusioncharts Javascript library to create the 3 charts on the dashboard.
        * Used maps/worldwithcountries chart for the map with the 3 mythological locations.
        * Used column2d chart to show how many gods/godesses are on each region.
        * Used gantt chart for the timeline for each regions approximate years.
    * Moved the parameters given on the Fusioncharts documentation for each chart in order to meet our specific requirements.

## Each region's specific page
Here, the functions and scripts of each mythology's file were nearly identical other than unique identifiers that corresponded to the respective mythology's data. D3 was used to call the data from the s3 link. From there functions were created to retrieve specific data and place it in the desired space on the html file. The functions automatically run after a different god is selected in order to update the information.

## CSS

One styles sheet was used for all four pages of this project: id's and classes distinguished the styles for each mythology page in order for their appearance to represent their region.

## Future Development
With more time:
   * more interactive aspects could be added to the map and charts such as more detailed geographic info for each god
   * a more up-to-date library could be used to replace fusioncharts, as fusioncharts may have stopped updating their library several years ago
   * a google trend map for each god where users could see what regions of the world search that god's name the most
        
With more data/deeper dive:
   * many more mythologies and gods could be added to the data set
   * a family tree that explains the breakdown of each mythology/how one god relates to another
   * comparisons between mythologies that show similarities between gods
