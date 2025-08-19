import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CreateTaskDto[] | Error> {
    const tasks: CreateTaskDto[] = await this.prisma.tasks.findMany();

    if (!tasks) {
      throw new NotFoundException('No tasks found');
    }

    return tasks;
  }

  async findOne(Id: number): Promise<CreateTaskDto | Error> {
    const task: CreateTaskDto | null = await this.prisma.tasks.findUnique({ where: { Id } });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<CreateTaskDto | Error> {
    const task: CreateTaskDto = await this.prisma.tasks.create({ data: createTaskDto });

    if (!task) {
      throw new Error('Task creation failed');
    }

    return task;
  }

  async update(Id: number, updateTaskDto: UpdateTaskDto): Promise<UpdateTaskDto | Error> {
    const task: UpdateTaskDto = await this.prisma.tasks.update({ where: { Id }, data: updateTaskDto });

    if (!task) {
      throw new Error('Task update failed');
    }

    return task;
  }
}
