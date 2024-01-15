import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'Hello World!';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this id: ${movieId}`;
  }

  @Post()
  
}
