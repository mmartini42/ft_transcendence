import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { typeORMConfig } from './typeORM-configService'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({ useClass: typeORMConfig }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
