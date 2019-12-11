import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  recipes: any;
  cuisines = ['African', 'American', 'Japanese', 'French', 'Mexican', 'Italian', 'Latin American'];
  cuisineValue : String;
  cuisineSelected;
  previousSelected;

  
  constructor(private api : ApiService) { }
  
  ngOnInit() {
 
    this.searchByFilter();
  }
  
  


  searchByFilter() {
    let cuisineBtn = document.querySelectorAll('.cuisine');

    cuisineBtn.forEach((cuisine) => this.getButtonValue(cuisine));

      // this.api.getRecipesComplexFilter('cuisine=italian&number=2')
      //   .subscribe((result: any) => {
      //     //console.log("eae: ", result.results);
      //     this.recipes = result.results;
      // })
  }
  
  getButtonValue(event) {

    // Selects all buttons
    let buttons = document.querySelectorAll(".cuisine");

    //Adds the class "active" to the clicked button
    buttons.forEach((btn) => btn.classList.remove('active'))
    event.target.classList.add('active')

    //Gets the value of the clicked button
    this.previousSelected = event.target.getAttribute('value');

    //Call the API only when the button is first clicked
    if(this.previousSelected !== this.cuisineSelected) {
      this.cuisineSelected = event.target.getAttribute('value')

      this.api.getRecipesComplexFilter(this.cuisineSelected).subscribe((result: any) => {
        this.recipes = result.results
      })

    }
    
  }

  getRecipe(recipeId) {
    
    this.api.getFullRecipe(recipeId).subscribe((result: any) => {
      this.api.setRecipe(result)
    })
  }

}
