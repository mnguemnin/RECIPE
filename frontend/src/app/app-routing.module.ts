import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'api/recipes', component: RecipeListComponent},
  {  path: 'search/:searchTerm', component: RecipeListComponent},
  {  path: 'api/recipes/:id', component: RecipeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
