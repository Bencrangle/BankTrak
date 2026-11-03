import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UsersModule } from './users/users.module.js'; 
import { AuthModule } from './auth/auth.module.js';
import { TransactionsModule } from './transactions/transactions.module.js';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
