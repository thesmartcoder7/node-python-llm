# Node Server for Chat

This is a node server to interface with the python llama-mistral flask app . . . at <https://github.com/thesmartcoder7/llama_mistral>

## Directions

Install dependencies

```bash
    npm install express axios body-parser
    npm install typescript @types/node @types/express ts-node
```

Install datebase dependencies

```bash
npm install sqlite3 typeorm reflect-metadata
npm install @types/sqlite3
```

Install any other dependency from the package.json

```bash
npm install
```

## API Usage

Base URL

```bash
http://localhost:3000/api
```

## Endpoints

### 1. **Create a Conversation**

Endpoint: `POST /conversation`

Description: Create a new conversation entry.

Request: `URL: /conversation`

Method: POST

Body:

```json
{
  "question": "What is the weather like?",
  "answer": "It is sunny."
}
```

Content-Type: application/json

Response:

Status Code: 201 Created

Body:

```json
{
  "id": 1,
  "question": "What is the weather like?",
  "answer": "It is sunny.",
  "createdAt": "2024-08-03T00:00:00.000Z"
}
```

Errors:

400 Bad Request: Invalid input or missing required fields.

```json
{
  "error": "Invalid input"
}
```

500 Internal Server Error: Server issues or unexpected errors.

```json
{
  "error": "Something went wrong"
}
```

### 2. **Get a Conversation by ID**

Endpoint: `GET /conversation/:id`

Description: Retrieve a conversation by its unique ID.

Request: `URL: /conversation/:id` (e.g., /conversation/1)

Method: `GET`

URL Parameters: `id` (number): The ID of the conversation to retrieve.

Response:

Status Code: 200 OK

Body:

```json
{
  "id": 1,
  "question": "What is the weather like?",
  "answer": "It is sunny.",
  "createdAt": "2024-08-03T00:00:00.000Z"
}
```

Errors:

404 Not Found: Conversation with the specified ID does not exist.

```json
{
  "error": "Conversation not found"
}
```

500 Internal Server Error: Server issues or unexpected errors.

```json
{
  "error": "Something went wrong"
}
```

### 3. **Set Model**

Endpoint: `POST /set_model`

Description: Set the model configuration.

Request: `URL: /set_model`

Method: `POST`

Body:

```json
{
  "model": "a" // for llama3 and b for mistral
}
```

Content-Type: `application/json`

Response:

Status Code: 200 OK

Body:

```json
{
  "message": "Model set successfully",
  "model": "llama3"
}
```

Errors:

400 Bad Request: Invalid input or missing required fields.

```json
{
  "error": "Invalid input"
}
```

500 Internal Server Error: Server issues or unexpected errors.

```json
{
  "error": "Something went wrong"
}
```

### **Error Handling**

400 Bad Request: The request could not be understood or was missing required parameters.

404 Not Found: The requested resource could not be found.

500 Internal Server Error: An unexpected error occurred on the server side.

## Example Requests

Create a Conversation

cURL Example:

```bash
curl -X POST http://localhost:3000/api/conversation \
     -H "Content-Type: application/json" \
     -d '{"question": "What is the weather like?", "answer": "It is sunny."}'
```

Get a Conversation by ID

cURL Example:

```bash
curl http://localhost:3000/api/conversation/1
```

Set Model

cURL Example:

```bash
Copy code
curl -X POST http://localhost:3000/api/set_model \
     -H "Content-Type: application/json" \     -d '{"model": "a"}'
```

## Notes

Ensure the server is running and accessible at <http://localhost:3000>.
The **/api** prefix is used based on how routes are registered; adjust the base URL if using a different prefix.

This documentation provides a <ins>**overview**</ins> of the API endpoints, request formats, and responses. Make sure to adjust any paths or details according to your specific setup and server configuration.

## Containerization

simply build and run the docker image

```bash
docker build -t server-for-chat .
```

Note: the 'server-for-chat' name is totally random

Now run the docker container

```bash
docker run -p 3000:3000 --name server-for-chat-container server-for-chat
```
