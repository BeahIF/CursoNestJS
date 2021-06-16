import { Get, Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 } from 'uuid';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';

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
    deleteTask(id:string):void{
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }
    updateTaskStatus(id:string, status:TaskStatus){
        const task = this.getTaskById(id);
        task.status =status;
        return task;
        // this.tasks = this.tasks.includes
    }
    getTasksWithFilters(filterDto:GetTasksFilterDto):Task[]{
        const {status, search}=filterDto;
        let tasks = this.getAllTasks();
        if(status){
            tasks = tasks.filter((task)=> task.status === status)
        }
        if(search){
            tasks =tasks.filter((task)=>{
                if(task.title.includes(search) || task.description.includes(search)){
                    return true;
                }else{
                    return 
                }
            })
        }
        return tasks;
    }
}
