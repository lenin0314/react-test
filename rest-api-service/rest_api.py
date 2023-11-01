from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/obesity')
def get_obesity():
    url = 'https://data-lakecountyil.opendata.arcgis.com/datasets/lakecountyil::national-obesity-by-state.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A3435%2C%22wkid%22%3A102671%7D'
    response = requests.get(url)
    return jsonify(response.json())

@app.route('/country')
def get_name_country():
    url = 'https://data-lakecountyil.opendata.arcgis.com/datasets/lakecountyil::national-obesity-by-state.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A3435%2C%22wkid%22%3A102671%7D'
    response = requests.get(url)
    data = response.json()
    names = [feature['properties']['NAME'] for feature in data['features']]
    return jsonify(names)




@app.route('/get_obesity_by_state', methods=['GET'])
def get_data():
    name = request.args.get('name')
    if not name:
        return jsonify({'error': 'Missing parameter "name"'}), 400

    url = f"https://services3.arcgis.com/HESxeTbDliKKvec2/arcgis/rest/services/LakeCounty_Health/FeatureServer/8/query?where=NAME='{name}'&outFields=*&f=json"
    response = requests.get(url)
    data = response.json()

    # Get the features list
    features = data.get('features', [])

    results = []
    # Loop through each feature in the features list
    for feature in features:
        # Get the attributes dictionary
        attributes = feature.get('attributes', {})

        # Get specific fields
        name = attributes.get('NAME')
        obesity = attributes.get('Obesity')
        shape_area = attributes.get('Shape__Area')
        shape_length = attributes.get('Shape__Length')

        # Append the fields to results
        results.append({
            "Name": name,
            "Obesity": obesity,
            "Shape Area": shape_area,
            "Shape Length": shape_length
        })

    return jsonify(results)


@app.route('/get_highest_obesity', methods=['GET'])
def get_highest_obesity():
    url = 'https://data-lakecountyil.opendata.arcgis.com/datasets/lakecountyil::national-obesity-by-state.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A3435%2C%22wkid%22%3A102671%7D'
    response = requests.get(url)
    data = response.json()

    # Get the features list
    features = data.get('features', [])

    highest_obesity = None
    highest_obesity_state = None

    # Loop through each feature in the features list
    for feature in features:
        # Get the properties dictionary
        properties = feature.get('properties', {})

        # Get specific fields
        name = properties.get('NAME')
        obesity = properties.get('Obesity')

        # Check if this state has the highest obesity
        if highest_obesity is None or obesity > highest_obesity:
            highest_obesity = obesity
            highest_obesity_state = name

    result = {
        "Name": highest_obesity_state,
        "Obesity": highest_obesity
    }

    return jsonify(result)



@app.route('/get_lowest_obesity', methods=['GET'])
def get_lowest_obesity():
    url = 'https://data-lakecountyil.opendata.arcgis.com/datasets/lakecountyil::national-obesity-by-state.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A3435%2C%22wkid%22%3A102671%7D'
    response = requests.get(url)
    data = response.json()

    # Get the features list
    features = data.get('features', [])

    lowest_obesity = None
    lowest_obesity_state = None

    # Loop through each feature in the features list
    for feature in features:
        # Get the properties dictionary
        properties = feature.get('properties', {})

        # Get specific fields
        name = properties.get('NAME')
        obesity = properties.get('Obesity')

        # Check if this state has the lowest obesity
        if lowest_obesity is None or obesity < lowest_obesity:
            lowest_obesity = obesity
            lowest_obesity_state = name

    result = {
        "Name": lowest_obesity_state,
        "Obesity": lowest_obesity
    }

    return jsonify(result)


@app.route('/get_average_obesity', methods=['GET'])
def get_average_obesity():
    url = 'https://data-lakecountyil.opendata.arcgis.com/datasets/lakecountyil::national-obesity-by-state.geojson?where=1=1&outSR=%7B%22latestWkid%22%3A3435%2C%22wkid%22%3A102671%7D'
    response = requests.get(url)
    data = response.json()

    # Get the features list
    features = data.get('features', [])

    total_obesity = 0
    count = 0

    # Loop through each feature in the features list
    for feature in features:
        # Get the properties dictionary
        properties = feature.get('properties', {})

        # Get specific fields
        obesity = properties.get('Obesity')

        # Add the obesity value to the total
        if obesity is not None:
            total_obesity += obesity
            count += 1

    # Calculate the average obesity
    average_obesity = round(total_obesity / count, 2) if count > 0 else None

    result = {
        "Average Obesity": average_obesity
    }

    return jsonify(result)


if __name__ == '__main__':
    app.run()


