# Godly-gifts-geolocator

## Backend
Data is hosted via Amazon's s3 service. This service interacts with another Amazon service called Lambda which takes a function. This function can be accessed (for copy/paste purposes) in the lambda_function.py file. The lambda_function file connects Lambda to s3 and reads in the data stored there which was in parsed JSON format. Once a client tries to access the API the lambda_function tests whether or not it's a GET or OPTIONS request. If those criteria are met the lambda_function then proceeds to check for a query parameter 'g'. 'g' should equal one of the 3 pantheons that exist in the data set (Egpytian, Greek, or Norse) and will return pantheon specific data accordingly. After the 'g' parameter is specified the lamda_function will return a JSON response that the front end can utilize for their data visualization purposes.


