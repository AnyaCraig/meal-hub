export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

// you can also wite this as a shorthand - it does the same thing

// export class Ingredient {
//   constructor(public name: string, public amount: number){

//   }
// }
