import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AgtutsmongoProvider {

  data: any;
  constructor(public http: Http) {
    this.data = null;
  }
  
  getTutorials(str: string){
    if (this.data) {
      return Promise.resolve(this.data);
    }
//https://desolate-eyrie-84948.herokuapp.com/api/tutorials
    return new Promise(resolve => {
      this.http.get('http://localhost:5000/api/'+str).map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }
  
  getQuizzes(){
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:5000/api/quiz').map(res => res.json()).subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }
  /*
  createReview(review){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/api/reviews', JSON.stringify(review), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteReview(id){

    this.http.delete('http://localhost:8080/api/reviews/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

/*  constructor(public http: HttpClient) {
  console.log('Hello ReviewsProvider Provider');
} */

}
