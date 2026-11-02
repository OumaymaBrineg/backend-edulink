import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Module racine du backend EduLink.
 * Les modules fonctionnels (users, courses, forum, evaluations, marketplace)
 * seront importés ici au fur et à mesure : un module NestJS par domaine,
 * chacun propriétaire de ses collections Firestore.
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
