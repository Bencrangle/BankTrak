import { IsDateString, IsEnum, IsNumber, IsPositive, IsString, MaxLength, MinLength } from 'class-validator';

enum TransactionType {
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE'
}

export class CreateTransactionDto {
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    description: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    amount: number;

    @IsEnum(TransactionType)
    type: TransactionType;

    @IsString()
    @MinLength(1)
    @MaxLength(50)
    category: string;
    
    @IsDateString()
    date: string;
}