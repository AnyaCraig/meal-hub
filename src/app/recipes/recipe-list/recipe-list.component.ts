import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() fireRecipeSelection = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Agnolotti", "A delicious concoction of ground lamb inside pasta pouches", "http://www.savoredjourneys.com/wp-content/uploads/2015/07/agnolotti-dal-plin.jpg"),
    new Recipe("Bolognese", "A meat sauce from Italy", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/11/9/0/LR0101_Pasta-Bolognese.jpg.rend.hgtvcom.616.462.suffix/1485537164104.jpeg"),
    new Recipe("Tom Yum Soup", "A spicy Thai soup", "https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/thai-kitchen/t/800/tom_yum_soup_800x800.ashx?vd=20180710T053139Z&hash=2286EC87FA0660B24A85CE9904C4E24CFB9ECFD5"),
    new Recipe("Spanish Pork Burger", "A zesty burger with Spanish flavours", "http://images.media-allrecipes.com/userphotos/960x960/3756826.jpg"),
    new Recipe("Zimtsterne", "A traditional German Christmas cookie", "http://bestchristmascookierecipes.com/wp-content/uploads/2016/10/Zimtsterne.jpg"),
    new Recipe("Kale Caesar", "Crunchy kale ribbons in a creamy casear dressing", "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/1449002030/RECIPE0116-XL-chickpea-kale-caesar.jpg?itok=HeB3xbbU"),
    new Recipe("Garlic Butter Naan", "Chewy naan bread with minced garlic", "https://recipes.timesofindia.com/photo/53375444.cms"),
    new Recipe("Hot Pot", "Delicious mutton broth with lots of ingredient options - perfect for parties!", "https://img.grouponcdn.com/deal/2DKgXyrmbeJZ9wtykEEZnVQfgXaq/2D-1500x900/v1/c700x420.jpg"),

  ];
  constructor() {};
  ngOnInit() {

  }

  selectRecipe(recipe) {

    this.fireRecipeSelection.emit(recipe);




  }

}
