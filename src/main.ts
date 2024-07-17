import { NestFactory } from '@nestjs/core'; // Import the NestFactory from NestJS core module
import { AppModule } from './app.module'; // Import the root application module

// The bootstrap function initializes the NestJS application
async function bootstrap() {
  // Create a NestJS application instance using the AppModule as the root module
  const app = await NestFactory.create(AppModule);

  // Start the application and have it listen on port 3000
  await app.listen(3000);
}

// call the bootstrap function to start the application
bootstrap();
