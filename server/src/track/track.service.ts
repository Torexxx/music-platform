import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackService {
  async create() {
    return 'create';
  }
  async getAll() {
    return 'getAll';
  }
  async getOne() {
    return 'getOne';
  }
  async delete() {
    return 'delete';
  }
}
