import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    // our test data
    {
      id: 1,
      name: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      ingredients: ['fufu', 'corn'],
      instructions: 'Paris'
    },
    // rest of the recipes...
  ];
  readonly APIUrl="http://localhost:3010";
  constructor(private http: HttpClient){
  
  }
  //To get a recipe based on id

  getRecipeById(recipeId: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.APIUrl}/api/recipes/${recipeId}`)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }


  deleteRecipe(id: number): void{
    this.http.delete(this.APIUrl+'/api/recipes/'+id).subscribe((data)=>{
      console.log(data);
    })
  }

  getAllRecipe():  Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.APIUrl}/api/recipes`)
   
  }

  /*gettAllRecipeBySearch(searchTerm: string): Recipe[] {
    return this.getAllRecipe().filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
/*
  deleteRecipe(recipeId: number): void {
    const index = this.recipes.findIndex(recipe => recipe.id === recipeId);
    if (index !== -1) {
      this.recipes.splice(index, 1);
    }
  }
*/
  modifyRecipe(recipeId: number, updatedRecipe: Recipe): void {
    const index = this.recipes.findIndex(recipe => recipe.id === recipeId);
    if (index !== -1) {
      this.recipes[index] = { ...updatedRecipe };
      this.recipes[index].updatedAt = new Date();
    }
  }
}
