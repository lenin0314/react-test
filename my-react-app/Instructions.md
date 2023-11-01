#### Resume

- *Rest API consumption and element displays / distribution*

  - [X] Create screen by get users
  - [X] Create screen by get post from users
    - [X] Get only users
    - [X] Get only recent posts by user
    - [X] Get comments of post selected
- *Chart visualizations*

  - [X] Create render of chart in react1 component from json data
  - [X] Using local json data consuming by method by httpclient
- *Creation of base Rest API Service*

  - In this case I made in Python API Rest Service /Flask  that consume the dataset. This service send the data to Map componente in Angula by render it

  - [X] Retrieve all the states names and id (in an array)
  - [X] Retrieve the Obesity index and the area (set of coordinates) for a specific state(passing the name or ID of the state as parameter)
  - [X] Retrieve sumary data:
    - [X] State with highest obesity index (name and value)
    - [X] State with lowest obesity index (name and value)
    - [X] Average country obesity index (just value)

  ```json

  python3 rest_api.py

  http://127.0.0.1:5000/obesity
  http://127.0.0.1:5000/country
  http://127.0.0.1:5000/get_obesity_by_state?name=Washington
  http://127.0.0.1:5000/get_highest_obesity
  http://127.0.0.1:5000/get_lowest_obesity
  http://127.0.0.1:5000/get_average_obesity

  ```
- 
- Displaying previous result in a map

  - [X] Get a summary of data from Geojson
  - [X] Connect methods from previous service API  that consuming DataSet of GeoJson
  - [X] Create Map and render the data





THE REPOSITORY INCLUDE 

- [X] rest-api-service
- [X] my-react-app
