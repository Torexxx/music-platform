import { Module } from '@nestjs/common';
import { TrackController } from './trackController';
import { TrackService } from './track.service';

@Module({
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
