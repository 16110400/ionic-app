import { environment } from './../../../environments/environment';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies:any = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private movieService:MovieService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(ev?: Event){
    const customEvent = ev as InfiniteScrollCustomEvent;

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'crescent',
    });

    await loading.present();

    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.movies.push(...res.results);
      console.log(res);

      customEvent?.target.complete();

      if(customEvent) {
        customEvent.target.disabled = res.total_pages === this.currentPage;
      }

    });

    // this.movieService.getMovieDetails("100").subscribe(res => {
    //   console.log(res);
    // });

  }

  loadMore(ev: Event){
    const customEvent = ev as InfiniteScrollCustomEvent;
    this.currentPage++;
    this.loadMovies(customEvent);
  }

}
