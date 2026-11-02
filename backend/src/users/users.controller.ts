import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { Auth0Guard } from '../auth/auth0.guard.js';
import { Auth0Payload } from '../auth/auth0.strategy.js';
import { UsersService } from './users.service.js';

type AuthenticatedRequest = Request & { user: Auth0Payload };

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @UseGuards(Auth0Guard)
    @Get('me')
    async getMe(@Req() req: AuthenticatedRequest) {
        const auth0User = req.user;
        return this.usersService.findOrCreateUser({
            sub: auth0User.sub,
            email: auth0User['https://banktrak.local/email'],
            name: auth0User['https://banktrak.local/name'],
        });
    }
}