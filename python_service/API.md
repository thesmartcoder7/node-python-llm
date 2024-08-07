# Python program Web version to use Llama 3 and Mistral

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
       pip install langchain langchain-ollama ollama flask
   ```

   - For pipenv users:

   ```bash
       pipenv install langchain langchain-ollama ollama flask
   ```

## Run the application locally

To run it as a flask web application simply type `make web`

Base URL: <http://localhost:5000>

Set Model

Endpoint:

```bash
POST /set_model
```

Description:

Sets the model to be used for generating responses.

Request payload:

```json
{
  "model": "a" // or "b"
}
```

Response:

Success (200 OK):

```json
{
  "message": "Model set successfully"
}
```

Error (400 Bad Request):

```json
{
  "error": "Invalid model choice"
}
```

Example using curl: This is assuming that your app is running on local host

```bash
curl -X POST http://localhost:5000/set_model -H "Content-Type: application/json" -d '{"model": "a"}'
```

## Ask Question

Endpoint:

```bash
POST /ask
```

Description:

Submits a question to the model and retrieves the response.

Request Payload:

```json
{
  "question": "What is the capital of France?",
  "context": "Previous conversation context if any"
}
```

Response:

Success (200 OK):

```json
{
  "answer": "The capital of France is Paris.",
  "context": "Updated conversation context"
}
```

Error (400 Bad Request):

```json
{
  "error": "Model not set"
}
```

Example using curl:

```bash
curl -X POST http://localhost:5000/ask -H "Content-Type: application/json" -d '{"question": "What is the capital of France?", "context": ""}'
```

## Running using docker

Build the Docker Image:

Navigate to your project directory in the terminal and build the Docker image with the following command:

```bash
docker build -t flask-chat .
```

Run the Docker Container

Once the image is built, you can run a container from it with the following command:

```bash
docker run -p 5000:5000 flask-chat
```
