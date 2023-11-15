/*
 * @Author: Joe.Chen
 * @Date: 2023-11-15 11:42:26
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-11-15 14:19:02
 * @Description:
 */
import { Controller, Patch, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  // @Get('/examples') // 裡面建立子路由
  // getExample() {
  //   return [
  //     {
  //       id: 1,
  //       title: 'Example 1',
  //       description: '',
  //     },
  //   ];
  // }

  // 路由參數設定
  // @Get('/examples/test/')
  // getTest(@Param() params: { test1: string }) {
  //   const { test1 } = params;
  //   return [
  //     {
  //       title: `Title ${test1}`,
  //       test: '123456',
  //     },
  //   ];
  // }

  // 路由查詢設定
  // getTest(@Query('limit') limit = 30, @Query('skip') skip = 0) {
  //   const list = [
  //     {
  //       id: `${limit}`,
  //       title: 'Title 1',
  //       description: '',
  //     },
  //     {
  //       id: `${skip}`,
  //       title: 'Title 2',
  //       description: '',
  //     },
  //   ];

  //   return list.slice(skip, limit);
  // }

  // 狀態碼設置
  @Patch('/')
  @HttpCode(HttpStatus.BAD_GATEWAY)
  get() {
    return [];
  }
}
