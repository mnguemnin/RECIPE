import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit{
  recipe!: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
    
        this.recipeService.getRecipeById(params['id']).subscribe((data: Recipe) => {
          this.recipe = data;
        });
    
    });
  }
  ngOnInit(): void {
    
  }
  onDelete(): void {
    if (this.recipe) {
      this.recipeService.deleteRecipe(this.recipe.id); // Pass the recipe ID to deleteRecipe() method
      //this.router.navigateByUrl(`api/recipes`);
    } 
  }
}