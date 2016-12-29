import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../Movie';

@Pipe({
    name: 'movieSort'
})

export class SortPipe implements PipeTransform {
    transform(movies: Movie[], parameters: any[]): Movie[] {
        if (!movies) {
            return [];
        }

        return movies.sort((a, b) => {
            switch (parameters[0]) {
                case 'Title':
                    return parameters[1] === 'asc' ?
                        a.Title.localeCompare(b.Title) :
                        b.Title.localeCompare(a.Title);
                case 'Rating':
                    return parameters[1] === 'asc' ?
                        +a.imdbRating - +b.imdbRating :
                        +b.imdbRating - +a.imdbRating;
                case 'Year':
                    return parameters[1] === 'asc' ?
                        +a.Year - +b.Year :
                        +b.Year - +a.Year;
            }
        });
    }
};
