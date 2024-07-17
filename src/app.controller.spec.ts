import { Test, TestingModule } from '@nestjs/testing'; // Import necessary modules for testing
import { AppController } from './app.controller'; // Import the AppController to be tested
import { AppService } from './app.service'; // Import the AppService to be provided in the test

describe('AppController', () => { // Describe the test suite for AppController
  let appController: AppController; // Declare a variable to hold the AppController instance

  // Before each test, asynchronously compile a testing module
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Declare the controller to be tested
      providers: [AppService], // Declare the service to be provided
    }).compile(); // Compile the module

    // Get an instance of the AppController from the compiled module
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => { // Describe the test suite for the root path
    // Test case to check if the controller's getHello method returns "Hello World!"
    it('should return "Hello World!"', () => {
      // Assert that the getHello method of the AppController returns the expected string
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

