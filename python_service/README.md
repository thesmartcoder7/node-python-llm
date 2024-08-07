# Python program to use Llama 3 and Mistral

## Features

1. When program started, User can select model (**Llama3** and **mistral)**
2. User can send query on the selected model. and get answer from LLM.
3. This should keep comunication context between user and llm (previous questions continuously, like chatgpt keeping conversation context)
4. Wrap with Docker. In case you don't have docker installed, follow [this](https://docs.docker.com/desktop/install/mac-install/) tutoral from docker Docs.

## Requirements

1. ollama. This is used for downloading other models locally.
2. Langchain. This is used for linking the prompts and the model for the purposes of context.

## usage

Clone [this](https://github.com/thesmartcoder7/llama_mistral.git) repository, then follow the instructions as given below.

## Installation

1. Download and install ollama from it's [source](https://ollama.com/download). For linux users . . . one can simply curl for the download, which you will see in the page: `curl -fsSL https://ollama.com/install.sh | sh`
2. Use ollama to pull the name of the model you would like to use. These can be selected from [here](https://github.com/ollama/ollama). In this context . . . I am using both Llama3 and Mistral so my commands will be:

   ```bash
   ollama pull llama3
   ```

   and

   ```bash
   ollama pull mistral
   ```

   To test the models downloaded, you need only type this command in your terminal.

   ```bash
   ollama run <model name>
   ```

   In this particular context:

   ```bash
   ollama run llama3
   ```

   or

   ```bash
   ollama run mistral
   ```

3. Create your project directory: `mkdir directory_name`
4. Create an environment. This can be done by venv or pipenv:

   - Venv: Create an environment using `python3 -m venv directory_name` then activate it by `source directory_name/bin/activate`

   - Pipenv: Create an environment using `pipenv install` or `pipenv shell` then activate it using `pipenv shell`

5. Install the required packages:

   - For Venv users:

   ```bash
       pip install langchain langchain-ollama ollama
   ```

   - For pipenv users:

   ```bash
       pipenv install langchain langchain-ollama ollama
   ```

## Run the application locally

Simply type the command `make`, and the program will run... or if you are feeling like doing more typing, just do `python3 chat.py`

To run it as a flask web application simply type `make web`. Make sure you read the flask version instructions from [here](./API.md)
