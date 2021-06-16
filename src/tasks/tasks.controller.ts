import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor( private tasksService:TasksService){
    }
    @Get()
    getAllTasks():Task[]{
        return this.tasksService.getAllTasks();
    }
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto
        // @Body('title') title:string, @Body('description')  description:string
    ):Task{
        // console.log('title',title)
        // console.log('description', description)
        return this.tasksService.createTask(createTaskDto)
    }
    @Get('/:id')
    getTaskById():Task{

    }

}
