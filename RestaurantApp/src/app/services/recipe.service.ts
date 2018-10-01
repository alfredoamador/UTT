import {Recipe} from '../recipes/recipe.model';
export class RecipeService{

    recipes: Recipe[] = [
        new Recipe('Pizza_1', 'This is a simply test1',
         'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg'),
       new Recipe('Pizza_2', 'This is a simply test2',
         'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg'),
       new Recipe('Pizza_3', 'This is a simply test3',
         'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg')
     
     ];

     getRecipes(){
         return this.recipes.slice();
     }
     
     
}