import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { jwtConstants } from './jwt.constants'; // Define your JWT secret key and options

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from Authorization header
      ignoreExpiration: false, // Do not ignore token expiration
      secretOrKey: jwtConstants.secret, // Use the provided JWT secret key
    });
  }

  // Validate and extract user information from JWT payload
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }; // Return validated user details
  }
}

