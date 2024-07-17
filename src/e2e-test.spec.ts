// e2e-test.spec.ts

import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AppController (e2e)', () => {
  let app;

  // Setup before running tests
  beforeAll(async () => {
    // Create a testing module with AppModule imported
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // Create a NestJS application instance
    app = moduleFixture.createNestApplication();
    // Initialize the application
    await app.init();
  });

  // Teardown after running tests
  afterAll(async () => {
    // Close the NestJS application instance
    await app.close();
  });

  // Test for the root endpoint '/'
  it('/ (GET)', () => {
    // Make a GET request to the root endpoint '/'
    return request(app.getHttpServer())
      .get('/')
      .expect(200) // Expect HTTP status code 200
      .expect('Hello World!'); // Expect the response body to be 'Hello World!'
  });

  // Add more E2E tests for authentication flows
});
