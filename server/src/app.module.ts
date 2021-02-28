import { Module } from '@nestjs/common';
import { TrackModule } from './track/trackModule';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:test@cluster0.zfmi0.mongodb.net/music-platform?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
