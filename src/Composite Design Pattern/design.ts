export interface Product {
    updateStock(newQuantity: number): void;
    buyProduct(quantity: number): void;
    getPrice(): number;
    getType(): string;
}

export interface Products {
    "id": number;
    "quantity": number;
}

export class MeatProduct implements Product {

    name: string;
    price: number;
    category: string;
    stock_quantity: number;
  
    constructor(name: string, price: number, catagory: string, stock_quantity: number) {
      this.name = name;
      this.price = price;
      this.category = catagory;
      this.stock_quantity = stock_quantity;
    }
  
    // Optionally, you can add methods related to the product if needed, for example:
    updateStock(newQuantity: number): void {
        
    }

    buyProduct(quantity: number): void {
        
    }

    getPrice(): number {
        return this.price;
    }

    getCategory(): string {
        return this.category;
    }

    getType(): string {
        return "Kg";
    }
}

export class HalalMeat extends MeatProduct {
    
    constructor(name: string, price: number, catagory: string, stock_quantity: number) {
        super(name, price, catagory, stock_quantity);
    }

    isHalal(): string {
        return "Yes";
    }

    getType(): string {
        return "Kg";
    }
}

export class HaramMeat extends MeatProduct {
    
    constructor(name: string, price: number, catagory: string, stock_quantity: number) {
        super(name, price, catagory, stock_quantity);
    }

    isHalal(): string {
        return "No";
    }

    getType(): string {
        return "Kg";
    }
}

export class ElectronicProduct implements Product {

    name: string;
    price: number;
    category: string;
    stock_quantity: number;
  
    constructor(name: string, price: number, catagory: string, stock_quantity: number) {
      this.name = name;
      this.price = price;
      this.category = catagory;
      this.stock_quantity = stock_quantity;
    }
  
    // Optionally, you can add methods related to the product if needed, for example:
    updateStock(newQuantity: number): void {
        
    }

    buyProduct(quantity: number): void {
        
    }

    getPrice(): number {
        return this.price;
    }

    getCategory(): string {
        return this.category;
    }

    getType(): string {
        return "Unit";
    }
}


export class Hardware extends ElectronicProduct {
        
    constructor(name: string, price: number, catagory: string, stock_quantity: number) {
        super(name, price, catagory, stock_quantity);
    }

    provideSoftware(): string {
        return "No";
    }

    getType(): string {
        return "Unit";
    }
}

export class Software extends ElectronicProduct {
        
    constructor(name: string, price: number, catagory: string, stock_quantity: number) {
        super(name, price, catagory, stock_quantity);
    }

    getType(): string {
        return "Unit";
    }
}

export class GroceryProduct implements Product {

    name: string;
    price: number;
    category: string;
    stock_quantity: number;
  
    constructor(name: string, price: number, catagory: string, stock_quantity: number) {
      this.name = name;
      this.price = price;
      this.category = catagory;
      this.stock_quantity = stock_quantity;
    }
  
    // Optionally, you can add methods related to the product if needed, for example:
    updateStock(newQuantity: number): void {
        
    }

    buyProduct(quantity: number): void {
        
    }

    getPrice(): number {
        return this.price;
    }

    getCategory(): string {
        return this.category;
    }

    getType(): string {
        return "Kg";
    }
}

export class Other implements Product {

    name: string;
    price: number;
    category: string;
    stock_quantity: number;
  
    constructor(name: string, price: number, catagory: string, stock_quantity: number) {
      this.name = name;
      this.price = price;
      this.category = catagory;
      this.stock_quantity = stock_quantity;
    }
  
    // Optionally, you can add methods related to the product if needed, for example:
    updateStock(newQuantity: number): void {
        
    }

    buyProduct(quantity: number): void {
        
    }

    getPrice(): number {
        return this.price;
    }

    getCategory(): string {
        return this.category;
    }

    getType(): string {
        return "Unit";
    }
}