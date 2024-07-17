import { Controller, Get } from '@nestjs/common'; // Import necessary decorators from NestJS common module
import { AppService } from './app.service'; // Import the AppService to be used by the controller

// The @Controller() decorator marks this class as a NestJS controller. 
// It handles incoming requests and returns responses to the client.
@Controller()
export class AppController {
  // The constructor injects the AppService into the controller, 
  // allowing the controller to use the service's methods.
  constructor(private readonly appService: AppService) {}

  // The @Get() decorator defines a handler for GET requests to the root path ('/').
  // This method is mapped to the GET HTTP method for the root endpoint.
  @Get()
  getHello(): string {
    // This method calls the getHello() method of the AppService and returns its result.
    // The response is a simple string.
    return this.appService.getHello();
  }
}
