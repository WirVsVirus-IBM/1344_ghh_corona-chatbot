from flask import Flask
from flask import jsonify, request
import requests
import json
app = Flask(__name__)


req_qa = {
    "questions": [
        
    ],
    "filters": {
        "lang": "en"
    },
    "top_k_retriever": 5
    }
url_qa = "http://3.121.62.187:80/models/1/faq-qa"
params_qa = {}

@app.route("/qa", methods=['GET', 'POST'])
def getAnswerFromQA():
    payload = (request.get_data())
    question = json.loads(payload)
    
    req_qa['questions']= [question['question']]
    response = requests.post(url_qa,params_qa , json=req_qa)
    data = json.loads(response.content)
    return {"answer"  : data['results'][0]['answers'][0]['answer']}





if __name__ == '__main__':
   app.run(host='0.0.0.0', port=80)
