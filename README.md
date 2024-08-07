# Node-Python server to use Llama 3 and Mistral

## Features

1. When program started, User can select model (**Llama3** and **mistral)**
2. User can send query on the selected model. and get answer from LLM.
3. This should keep comunication context between user and llm (previous questions continuously, like chatgpt keeping conversation context)
4. Wrap with Docker. In case you don't have docker installed, follow [this](https://docs.docker.com/desktop/install/mac-install/) tutoral from docker Docs.

## Requirements

1. ollama. This is used for downloading other models locally.
2. Langchain. This is used for linking the prompts and the model for the purposes of context.

## Individualize Instruction

1. [Node-Service](./node_service/README.md)
1. [Python-Service](./python_service/README.md)

## Usage

Simply just run `docker-compose up build`. This command will build the images if needed and start all the services defined in the docker-compose.yml file. Make sure you have docker installed.
