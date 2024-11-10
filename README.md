# Task Management API

This project is a simple Task Management API built with Node.js, Express, and MongoDB. It provides basic CRUD (Create, Read, Update, Delete) operations for managing tasks.

## Installation

1. *Clone the repository:*
   bash
   git clone https://github.com/Rashmi-Kalsariya/Task_Management_Server
   

2. *Install dependencies:*
   bash
   npm install
   

3. *Set up environment variables:*
   Create a .env file and configure the necessary environment variables such as MongoDB connection URI.

   env
   MONGODB_URI=your_mongodb_connection_string
   

4. *Run the server:*
   bash
   npm start
   

## API Endpoints

### 1. Get All Tasks
*Endpoint:* GET /tasks

*Description:* Fetches all tasks from the database.

*Response:*
- *200 OK*: Returns an array of task objects.
- *500 Internal Server Error*: Returns an error message if fetching fails.

### 2. Get Task by ID
*Endpoint:* GET /tasks/:id

*Description:* Fetches a specific task by its ID.

*Response:*
- *200 OK*: Returns the task object.
- *404 Not Found*: Returns a message if the task is not found.
- *500 Internal Server Error*: Returns an error message if fetching fails.

### 3. Create a Task
*Endpoint:* POST /tasks

*Description:* Creates a new task.

*Request Body:*
- JSON object with task details (e.g., { "title": "New Task", "description": "Task details" }).

*Response:*
- *201 Created*: Returns the created task object.
- *400 Bad Request*: Returns an error message if task creation fails.

### 4. Update a Task
*Endpoint:* PUT /tasks/:id

*Description:* Updates an existing task by its ID.

*Request Body:*
- JSON object with updated task details.

*Response:*
- *200 OK*: Returns the updated task object.
- *404 Not Found*: Returns a message if the task is not found.
- *400 Bad Request*: Returns an error message if updating fails.

### 5. Delete a Task
*Endpoint:* DELETE /tasks/:id

*Description:* Deletes a task by its ID.

*Response:*
- *200 OK*: Returns a success message.
- *404 Not Found*: Returns a message if the task is not found.
- *500 Internal Server Error*: Returns an error message if deletion fails.

## Router Setup
The API routes are managed using an Express router defined in routes/taskRoutes.ts. This file imports the task controller functions and defines the endpoints for the CRUD operations.

### Code Example
typescript
import express from 'express';
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from '../controllers/taskController';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;


### Route Summary
- GET /tasks - Fetches all tasks.
- GET /tasks/:id - Fetches a task by ID.
- POST /tasks - Creates a new task.
- PUT /tasks/:id - Updates a task by ID.
- DELETE /tasks/:id - Deletes a task by ID.

This router ensures that the API endpoints are easy to manage and scale as the project grows.

## Models
### Task Model
typescript
import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export const Task = mongoose.model<ITask>('Task', TaskSchema);


## Error Handling
The API includes basic error handling to ensure informative responses are sent to the client. If an error occurs, the API returns a JSON response with an appropriate HTTP status code and an error message.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
