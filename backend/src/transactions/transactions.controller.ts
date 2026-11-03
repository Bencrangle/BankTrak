import { Controller, Body, Get, Req, Post, UseGuards } from '@nestjs/common';
import type { request } from 'express';
import { Auth0Guard } from '../auth/auth0.guard.js';
import type { Auth0Payload } from '../auth/auth0.strategy.js';
import { UsersService } from '../users/users.service.js';
import { TransactionsService } from './transactions.service.js';
import { CreateTransactionDto } from  './dto/create_transaction.dto.js';

type AuthenticatedRequest = Request & { user: Auth0Payload };

@Controller('transactions')
@UseGuards(Auth0Guard)
export class TransactionsController {
    constructor( private readonly transactionsService: TransactionsService, private readonly usersService: UsersService) {}

    @Post()
    async createTransaction(
        @Req() req: AuthenticatedRequest,
        @Body() transactionData: CreateTransactionDto,
    ) {
        const user = await this.usersService.findByAuth0Id(req.user.sub);

        if (!user) {
            throw new Error('User not found');
        }

        return this.transactionsService.createTransaction(user.id, transactionData);
    }

    @Get()
    async getAllTransactions(@Req() req: AuthenticatedRequest) {
        const user = await this.usersService.findByAuth0Id(req.user.sub);

        if (!user) {
            throw new Error('User not found');
        }
        
        return this.transactionsService.getTransactions(user.id);
    }
}
