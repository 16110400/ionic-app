import { environment } from './../../../environments/environment';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: any = [];
  imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const id:any = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.movieService.getMovieDetails(id).subscribe((res) => {
      console.log(res);
      this.movie = res;
    });

  }

}
