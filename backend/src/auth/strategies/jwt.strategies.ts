import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";

export class JwtStrategies extends PassportStrategy(Strategy) {
  
}