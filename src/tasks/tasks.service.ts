import { Get, Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 } from 'uuid';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks : Task[] =[];
    
    getAllTasks():Task[]{
        return this.tasks;
    }

    createTask(createTaskDto :CreateTaskDto
        // title:string, description:string
        ):Task{
            const {title, description}=createTaskDto
        const task:Task = {
            id:randomUUID(),
            title,
            description,
            status:TaskStatus.OPEN
        }
        this.tasks.push(task);
        return task;

    }
    getTaskById(id:string):Task{
        return this.tasks.find((task)=>task.id===id)
    }
}
