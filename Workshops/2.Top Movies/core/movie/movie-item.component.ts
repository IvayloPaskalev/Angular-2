import { Component, Input } from '@angular/core';
import {Movie} from '../movie/Movie';

@Component({
    selector: '[movie-item]',
    templateUrl: './movie-item.component.html'
})

export class MovieItemComponent {
    title: string;
    year: string;
    poster: string;
    imdbRating: string;

    @Input('movie') set movie(movie: Movie) {
        this.title = movie.Title;
        this.year = movie.Year;
        this.poster = movie.Poster;
        this.imdbRating = movie.imdbRating;
    }
};
