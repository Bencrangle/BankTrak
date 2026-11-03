import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

type Auth0User = {
    sub: string;
    email: string;
    name?: string;
}

@Injectable()
export class UsersService {
    constructor (private readonly prisma: PrismaService) {}
    async findByAuth0Id(auth0Id: string) {
        return this.prisma.user.findUnique({
            where: { auth0Id: auth0Id }
        })
    }
    
    async findOrCreateUser(auth0User: Auth0User) {
        const nameParts = auth0User.name?.split(' ') ?? [];
        const firstName = nameParts[0] ?? '';
        const lastName = nameParts.slice(1).join(' ') ?? '';


        /* Upsert updates record if it exists, otherwise it creates it */
        return this.prisma.user.upsert({
            where : {
                auth0Id: auth0User.sub
            },
            update : {
                email: auth0User.email,
                firstName,
                lastName
            },
            create : {
                auth0Id: auth0User.sub,
                email: auth0User.email,
                firstName,
                lastName
            }
        })
    }
}