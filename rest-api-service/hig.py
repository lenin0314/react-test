import unittest
from flask.testing import FlaskClient
from rest_api import app

class TestGetHighestObesity(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_get_highest_obesity(self):
        response = self.client.get('/get_highest_obesity')
        data = response.get_json()

        # Print 'Name' and 'Obesity' values
        print('Name:', data.get('Name'))
        print('Obesity:', data.get('Obesity'))

        # Check that the response status code is 200
        self.assertEqual(response.status_code, 200)

        # Check that the response data has the correct keys
        self.assertIn('Name', data)
        self.assertIn('Obesity', data)

        # Check that the 'Obesity' value is a number or None
        self.assertTrue(data['Obesity'] is None or isinstance(data['Obesity'], (int, float)))

        # Check that the 'Name' value is a string or None
        self.assertTrue(data['Name'] is None or isinstance(data['Name'], str))

if __name__ == '__main__':
    unittest.main()