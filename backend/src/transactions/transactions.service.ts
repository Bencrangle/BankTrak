import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTransactionDto } from './dto/create_transaction.dto.js';

@Injectable()
export class TransactionsService {
    constructor(private readonly prisma: PrismaService) {}

    async createTransaction(userId: string, transactionData: CreateTransactionDto) {
        return this.prisma.transaction.create({
            data: {
                description: transactionData.description,
                amount: transactionData.amount,
                type: transactionData.type,
                category: transactionData.category,
                date: new Date(transactionData.date),
                userId: userId
            }
        });
    }

    async getTransactions(userId: string) {
        return this.prisma.transaction.findMany({
            where: { userId },
            orderBy: { date: 'desc' }
        });
    }
}