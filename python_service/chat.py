from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

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

def conversation():
    which_model = input('Which model would you like to use? Select a or b.\na. Llama3\nb. Mistral\n')

    if which_model not in models.keys():
        print("\n *** That is not a valid choice! ***\n")
        conversation()
    else:
        model = OllamaLLM(model=models[which_model])
        prompt = ChatPromptTemplate.from_template(template)
        chain = prompt | model

        context = ""
        print("Hello there . . . ")

        while True:
            user_input = input("You: ")
            if user_input.lower() == "exit":
                break
                
            result = chain.invoke({"context": context, "question": user_input})
            print("Assistant: ", result)

            context += f"\nUser: {user_input}\nAssistant: {result}"

        
if __name__ == "__main__":
   conversation()

    