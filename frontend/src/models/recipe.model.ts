export class Recipe {
    
    id!: number;
    name!: string;
    description!: string;
    imageUrl?: string;
    createdAt!: Date;
    updatedAt!: Date;
    instructions!: string;
    ingredients!: string[];
  }
  