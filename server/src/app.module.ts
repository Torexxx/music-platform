import { Module } from '@nestjs/common';
import { TrackModule } from './Tracks/trackModule';

@Module({
  imports: [TrackModule],
})
export class AppModule {}
