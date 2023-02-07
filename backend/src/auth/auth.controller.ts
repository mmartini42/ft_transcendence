import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
@Controller('auth')
export class AuthController {

  constructor( private readonly authService: AuthService) {}
  @Get()
  getUsers() : any {
    return this.authService.printCoucou();
  }
}
