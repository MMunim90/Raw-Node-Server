import path from "node:path";
import fs from "fs";
import type { IProduct } from "../types/product";

const filePath = path.join(process.cwd(), "./src/database/db.json");

export const productService = () => {
    // console.log(process.cwd());
    // console.log(filePath);

    // const result = fs.readFileSync(filePath); 
    // console.log(result.toString());
    
    const result = fs.readFileSync(filePath, "utf-8"); // using "utf-8" instade of toString() 
    // console.log(result);

    return JSON.parse(result);
}

export const createProduct = (payload: IProduct[]) => {
    fs.writeFileSync(filePath, JSON.stringify(payload))
}