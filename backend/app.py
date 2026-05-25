from flask import Flask,jsonify,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)   
@app.route('/api/data', methods=['POST'])
def receive_data():             
    data = request.get_json() 
    msg =data.get('text')
    print("Received data:", msg)  
    return jsonify({"message": f"Data received successfully: {msg}"}), 200
if __name__ == '__main__':
    app.run(debug=True)