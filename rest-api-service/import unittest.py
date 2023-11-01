import unittest
from flask_testing import TestCase
from rest_api import app
import json

class TestGetCountry(TestCase):
    def create_app(self):
        app.config['TESTING'] = True
        return app

    def test_get_country_missing_name(self):
        response = self.client.get('/get_obesity_by_state')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertEqual(data['error'], 'Missing parameter "name"')

    def test_get_country_state_not_found(self):
        response = self.client.get('/get_obesity_by_state?name=NonExistentState')
        self.assertEqual(response.status_code, 404)
        data = json.loads(response.data)
        self.assertEqual(data['error'], 'State not found')

    def test_get_country_valid_state(self):
        response = self.client.get('/get_obesity_by_state?name=Texas')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertTrue('NAME' in data)
        self.assertTrue('Obesity' in data)
        self.assertTrue('SHAPE_Length' in data)
        self.assertTrue('SHAPE_Area' in data)

if __name__ == '__main__':
    unittest.main()