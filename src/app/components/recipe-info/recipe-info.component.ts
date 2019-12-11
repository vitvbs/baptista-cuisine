import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent implements OnDestroy {

  subscription: Subscription;
  fullRecipeInfo;
  ingredientList: Array<any>;
  steps: Array<any>;


  constructor(private api : ApiService) {
    this.subscription = this.api.recipeInfo.subscribe( recipe => {
      this.fullRecipeInfo = recipe;
      //sessionStorage.setItem('fullRecipe', JSON.stringify(recipe));
      // recipe.extendedIngredients.forEach( ingredient => {
      //   console.log(ingredient)
      // });
      console.log('Retorno da receita: ', this.fullRecipeInfo)
    });

    //this.fullRecipeInfo = JSON.parse(sessionStorage.getItem('fullRecipe'))
    

    // this.fullRecipeInfo.analyzedInstructions.forEach(element => {
    //   steps
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
