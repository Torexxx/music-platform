import { Controller, Get } from '@nestjs/common';
// import { TracksService } from './tracks.service';

@Controller('/tracks')
export class TrackController {
  // constructor(private tracksService: TracksService) {}
  @Get()
  getAll() {
    // return this.tracksService.getAll();
    return 'GET_ALL';
  }
}
