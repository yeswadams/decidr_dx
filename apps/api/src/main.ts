import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

function readPort(value: string | undefined): number {
  if (value === undefined || value.trim() === '') return 4000;
  const port = Number(value);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('API_PORT must be an integer between 1 and 65535');
  }
  return port;
}

const app = await NestFactory.create(AppModule);
const host = process.env.API_HOST || '127.0.0.1';
await app.listen(readPort(process.env.API_PORT), host);
console.info(`Decidr API listening on http://${host}:${readPort(process.env.API_PORT)}`);
