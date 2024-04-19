// Form Handling at the Backend (Step-by-Step):

// Request Reception: Server receives form data through an HTTP request.
// Routing: Backend code routes the request to the appropriate handler.
// Data Extraction: Form data is extracted from the request.
// Validation & Sanitization: Data is validated and sanitized to ensure correctness and security.
// Processing: Process the data as per application requirements (e.g., saving to a database).
// Response Generation: Server generates a response, often confirming data reception or indicating any errors.
// Sending Response: Response is sent back to the client.

// Blob (Binary Large Object): A data type for storing binary data like images or files, commonly used in web applications. Blobs represent raw data, and they're manipulated using specific APIs provided by programming languages or frameworks.


const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))