/*
 * @Author: Joe.Chen
 * @Date: 2023-11-15 11:42:26
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-11-15 14:47:54
 * @Description:
 */

import { Body, Controller, Post } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Post()
  create(@Body() data: { title: string; description?: string }) {
    const id = 1;
    return { id, ...data };
  }
}
