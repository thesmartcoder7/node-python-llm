from flask import Flask, request, jsonify
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

app = Flask(__name__)

# Define the template
template = """
Answer the question bellow:

Conversation history: {context}

Question: {question}
Answer: 
"""

models = {
    'a': 'llama3',
    'b': 'mistral'
}

# Initialize the model and chain
model = None
chain = None

@app.route('/set_model', methods=['POST'])
def set_model():
    global model, chain
    which_model = request.json.get('model')
    
    if which_model not in models.keys():
        return jsonify({"error": "Invalid model choice"}), 400
    
    model = OllamaLLM(model=models[which_model])
    prompt = ChatPromptTemplate.from_template(template)
    chain = prompt | model
    
    return jsonify({"message": "Model set successfully"}), 200

@app.route('/ask', methods=['POST'])
def ask():
    if model is None or chain is None:
        return jsonify({"error": "Model not set"}), 400
    
    user_input = request.json.get('question')
    context = request.json.get('context', '')

    if not user_input:
        return jsonify({"error": "No question provided"}), 400

    result = chain.invoke({"context": context, "question": user_input})

    context += f"\nUser: {user_input}\nAssistant: {result}"
    
    return jsonify({"answer": result, "context": context})

if __name__ == "__main__":
    app.run(debug=True)
