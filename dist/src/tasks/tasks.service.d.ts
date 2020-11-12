import { Task } from '../../dist/tasks/task.model';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(title: string, description: string): Task;
}
