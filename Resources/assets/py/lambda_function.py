from boto3 import resource
from json import dumps

s3 = resource("s3")

obj = s3.Object("god-data", "god_data.json")
data = json.loads(obj.get()["Body"].read())


def getWordsHandler(event, context):
    httpMethod = event['httpMethod']
    if httpMethod != 'GET':
        if httpMethod == 'OPTIONS':
            return builtResponse(300)
        else:
            return builtResponse(400, 'ERROR: route only accepts GET requests!')
    else:
        params = event['queryStringParameters']
        if not params or 'g' not in params:
            return builtResponse(500, 'ERROR: "g" parameter required!')
        else:
            user_input = "Aphrodite"
            response = [record for record in data if record["god_name"] == user_input]
            return builtResponse(200, dumps(response))

def builtResponse(statusCode, responseBody=None):
    response = {
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,GET'
        },
        'statusCode': statusCode
    }
    if responseBody:
        response['body'] = responseBody
    return response