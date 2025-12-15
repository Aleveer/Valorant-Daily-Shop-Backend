import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS with safe normalization (handle trailing slash, multi-origins)
  const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173')
    .split(',')
    .map((o) => o.trim().replace(/\/$/, '')) // drop trailing slash if any
    .filter(Boolean);

  app.enableCors({
    origin: (origin, callback) => {
      // Allow non-browser requests (e.g., curl, Postman)
      if (!origin) return callback(null, true);
      const normalizedOrigin = origin.replace(/\/$/, '');
      if (allowedOrigins.includes(normalizedOrigin))
        return callback(null, true);
      return callback(new Error(`Not allowed by CORS: ${origin}`), false);
    },
    credentials: true,
  });

  // Enable validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server is running on: http://localhost:${port}`);
}

bootstrap();
