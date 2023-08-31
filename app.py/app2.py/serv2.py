from flask import Flask, render_template, request

app2 = Flask(__name__)

@app2.route("/")
def index():
    return render_template("index.html")

@app2.route("/verificar_respostas", methods=["POST"])
def verificar_respostas():
    resposta = request.form.get("respostaValor")
    
    resultado = f"Legal! {resposta.capitalize()} é uma ótima cor."
    
    return resultado

if __name__ == "__main__":
    app2.run(debug=True)
