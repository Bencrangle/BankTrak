import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import jwksRsa from 'jwks-rsa';

export type Auth0Payload = {
    sub: string;
    'https://banktrak.local/email': string;
    'https://banktrak.local/name': string;
};

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy, 'auth0-jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKeyProvider: jwksRsa.passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
            }),

            algorithms: ['RS256'],
            issuer: `https://${process.env.AUTH0_DOMAIN}/`,
            audience: process.env.AUTH0_AUDIENCE,
        });
    }

    validate(payload: Auth0Payload) {
        return payload;
    }
}