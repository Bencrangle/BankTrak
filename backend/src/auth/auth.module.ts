import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Auth0Strategy } from './auth0.strategy.js';
import { Auth0Guard } from './auth0.guard.js';

@Module({
    imports: [ PassportModule.register ({ defaultStrategy: 'auth0-jwt' })],
    providers: [ Auth0Strategy, Auth0Guard ],
    exports: [ PassportModule, Auth0Guard ],
})

export class AuthModule {}