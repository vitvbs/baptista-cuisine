import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const apiKey = '9e8affb0511e4b8f958213fb06bcef47';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  selectedRecipe;

  //Observable source
  private recipeInfoSource = new Subject<object>();

  recipeInfo = this.recipeInfoSource.asObservable();

  constructor(private http: HttpClient) { }

  getRecipesComplexFilter(queryParams) {
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?cuisine='+ queryParams + '&number=2&apiKey='+ apiKey;
    console.log('chamou a API')
    return this.http.get(apiUrl);
  }

  getFullRecipe(recipeId) {
    this.selectedRecipe = recipeId
    const apiUrl = 'https://api.spoonacular.com/recipes/'+ recipeId +'/information?apiKey='+ apiKey;
    return this.http.get(apiUrl);
  }

  setRecipe(result) {
    this.recipeInfoSource.next(result);
  }

  getRecipe() {
    return this.recipeInfo;
  }
}

