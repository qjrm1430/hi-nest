import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable() // DI 의존성주입
export class MoviesService {
  private movies: Movie[] = [];
  // @Req() req, @Res() res // Express 명령어는 권장 X
  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`); // nest 기본 제공 404 예외처리
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id); // id값인 movie를 가져온다.
    this.deleteOne(id); //모든 movie를 가져와 해당 movie를 지우고
    this.movies.push({ ...movie, ...updateData }); // create old + new
  }
}
