/*
 * @Author: Joe.Chen
 * @Date: 2023-11-15 10:01:37
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-11-15 10:55:21
 * @Description:
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// main.ts 為進入點檔案，這裡會呼叫工具函示將 app 給建立起來，並且監聽 port 3000 的變化

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
