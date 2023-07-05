import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipe().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    //search by name
    
    /*this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
       // this.recipes = this.recipeService.gettAllRecipeBySearch(params['searchTerm']);
      } else {
     //   this.recipes = this.recipeService.getAllRecipe();
      }
    });*/
  }
//View a specific menu
  onViewRecipe(id: number): void {

    this.router.navigateByUrl(`api/recipes/${id}`);
    
  }
}

