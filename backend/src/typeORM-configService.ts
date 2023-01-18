import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Inject, Injectable} from '@nestjs/common';

@Injectable()
export class typeORMConfig implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly configService: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('POSTGRES_TRANS_HOST'),
      port: this.configService.get<number>('POSTGRES_TRANS_PORT'),
      database: this.configService.get<string>('POSTGRES_TRANS_DB'),
      username: this.configService.get<string>('POSTGRES_TRANS_USER'),
      password: this.configService.get<string>('POSTGRES_TRANS_PASSWORD'),
      autoLoadEntities: true,
      synchronize: true, //NOT in prod | Check migrations
    };
  }
}