# import requests
# import json

# url = "https://services3.arcgis.com/HESxeTbDliKKvec2/arcgis/rest/services/LakeCounty_Health/FeatureServer/8/query?where=NAME='Texas'&outFields=*&f=json"

# response = requests.get(url)

# # Print the status code
# print(response.status_code)

# # Print the response data
# print(json.dumps(response.json(), indent=4))

# # # Write the response data to a JSON file
# # with open('response.json', 'w') as f:
# #     json.dump(response.json(), f, indent=4)



import requests
import json

url = "https://services3.arcgis.com/HESxeTbDliKKvec2/arcgis/rest/services/LakeCounty_Health/FeatureServer/8/query?where=NAME='Texas'&outFields=*&f=json"

response = requests.get(url)
data = response.json()

# Print the status code
print(response.status_code)

# Get the features list
features = data.get('features', [])

# Loop through each feature in the features list
for feature in features:
    # Get the attributes dictionary
    attributes = feature.get('attributes', {})

    # Get specific fields
    name = attributes.get('NAME')
    obesity = attributes.get('Obesity')
    shape_area = attributes.get('Shape__Area')
    shape_length = attributes.get('Shape__Length')

    # Print the fields
    print(f"Name: {name}")
    print(f"Obesity: {obesity}")
    print(f"Shape Area: {shape_area}")
    print(f"Shape Length: {shape_length}")

# # Write the response data to a JSON file
# with open('response.json', 'w') as f:
#     json.dump(data, f, indent=4)