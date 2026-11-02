import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      name: 'EduLink backend',
      status: 'ok',
      modules: ['users', 'courses', 'forum', 'evaluations', 'marketplace'],
      timestamp: new Date().toISOString(),
    };
  }
}
