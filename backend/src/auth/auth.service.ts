import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {


  printCoucou () : string {
     return ("coucou");
  }
}
