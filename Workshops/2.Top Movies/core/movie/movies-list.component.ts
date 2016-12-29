import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Movie } from './Movie';
import { MovieService } from './services/movies.service';

@Component({
    selector: 'movie-list',
    templateUrl: './movies-list.component.html',
})

export class MoviesListComponent implements OnInit {
    movies: Movie[];
    pageTitle: string;
    sortingProperties: string[];
    sortingProperty: string;
    filterText: string;
    sortingDirection: string;
    http: Http;

    constructor(private _movieService: MovieService) { }

    ngOnInit() {
        this.pageTitle = 'Top 10 iMDB Movies';
        this.sortingProperties = ['Year', 'Title', 'Rating'];
        this.sortingProperty = 'Rating';
        this.sortingDirection = 'desc';
        this._movieService
            .getMovies()
            .subscribe(response => this.movies = response);
    }

    onSortChange(e: any) {
        this.sortingProperty = e.target.value;
    }

    onDirectionChange(e: any) {
        this.sortingDirection = e.target.value;
    }

    onInput(e: any) {
        this.filterText = e.target.value;
    }
}

