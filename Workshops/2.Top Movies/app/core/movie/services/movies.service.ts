import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import '../../../node_modules/rxjs/operator/map';

@Injectable()

export class MovieService {
    constructor(private _http: Http) { }

    getMovies() {
        return this._http.get('./data/movies.json')
            .map((res: Response) => res.json());
    }
}
