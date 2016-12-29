import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SortPipe } from '../core/movie/pipes/movieSort';
import { FilterPipe } from '../core/movie/pipes/filterMovies';

import { AppComponent } from './app.component';
import { MoviesListComponent } from '../core/movie/movies-list.component';
import { MovieItemComponent } from '../core/movie/movie-item.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { MovieService } from '../core/movie/services/movies.service';

@NgModule({
	imports: [BrowserModule, HttpModule, Ng2BootstrapModule],
	declarations: [AppComponent, MoviesListComponent, MovieItemComponent, SortPipe, FilterPipe],
	providers: [MovieService],
	bootstrap: [AppComponent]
})

export class AppModule { }
