import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Movie';

@Pipe({
    name: 'filterMovies'
})

export class FilterPipe implements PipeTransform {
    transform(movies: Movie[], filterValue: string): Movie[] {
        if (!filterValue) {
            return movies;
        }

        return movies.filter(item =>
            item.Title.toLocaleLowerCase()
                .indexOf(filterValue) > -1);
    }
}

