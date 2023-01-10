import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import * as PackageJson from '../package.json';
import { AppModule } from './app-module';
import { createLogger, loadYAMLFile } from './common';
import { join } from 'path';

const host = '0.0.0.0';
const config = new DocumentBuilder()
  .setTitle(PackageJson.title)
  .setDescription(PackageJson.description)
  .setVersion(PackageJson.version)
  .build();

async function bootstrap() {
  const logger = createLogger();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger,
  });
  
  const corsOptions = { origin: process.env.CORS_WHITELIST };

  app.useLogger(logger);
  app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));

  app.useStaticAssets(join(__dirname, 'static'), {
    prefix: '/static',
  });

  app.enableCors(corsOptions);

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));

  await app.listen(process.env.PORT, host);
}

loadYAMLFile('src/configs/shared.yml', 'src/configs/env.yml');
bootstrap();
