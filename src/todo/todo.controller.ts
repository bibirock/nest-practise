/*
 * @Author: Joe.Chen
 * @Date: 2023-11-15 11:42:26
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-11-15 15:03:21
 * @Description:
 */

import { Body, Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  @Post()
  create(@Body() dto: CreateTodoDto) {
    const id = 1;
    return { id, ...dto };
  }
}
