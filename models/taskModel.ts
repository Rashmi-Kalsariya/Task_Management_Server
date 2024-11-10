import mongoose, { Document, Schema } from 'mongoose';

interface ITask extends Document {
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done' | 'Timeout';
  duration: Date;
  createdAt: Date;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done', 'Timeout'], default: 'To Do' },
  duration: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});


const Task = mongoose.model<ITask>('Task', taskSchema);
export { Task, ITask };