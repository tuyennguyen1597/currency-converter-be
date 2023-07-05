import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { ConverterModule } from './converter/converter.module';

@Module({
    imports: [ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mssql',
            host: process.env.HOST,
            port: Number(process.env.PORT),
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            entities: [],
            options: {
                encrypt: true
            }
        }),
        HttpModule,
        ConverterModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
