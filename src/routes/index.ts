import { Request,Response } from "express";

export const home = (req:Request,res:Response)=>{
    res.send('home')
}
export const dogs = (req:Request,res:Response)=>{
    res.send('dogs')
}
export const cats = (req:Request,res:Response)=>{
    res.send('cats')
}
export const fish = (req:Request,res:Response)=>{
    res.send('fish')
}
export const search = (req:Request,res:Response)=>{
    res.send('search')
}