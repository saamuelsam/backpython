from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

def json_response(message):
    response = jsonify({"resultado": message})
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers["Content-Type"] = "application/json; charset=utf-8"
    return json.dumps(response.get_json(), ensure_ascii=False).encode('utf8')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/verificar_respostas', methods=['POST'])
def verificar_respostas():
    resposta = request.form['respostaInput']
    
    if resposta.lower() == 'sim':
        resultado = 'Você possui graduação!'
    else:
        resultado = 'Você não possui graduação!'
    
    return json_response(resultado)

@app.route('/verificar_idade', methods=['POST'])
def verificar_idade():
    idade = int(request.form['respostaIdade'])
    
    if idade >= 18:
        resultado = 'Você é maior de idade!'
    else:
        resultado = 'Você é menor de idade!'
    
    return json_response(resultado)

@app.route('/verificar_sexo', methods=['POST'])
def verificar_sexo():
    sexo = request.form['sexo']
    
    resultado = f'Seu sexo é {sexo}.'
    
    return json_response(resultado)

if __name__ == '__main__':
    app.run(debug=True)
