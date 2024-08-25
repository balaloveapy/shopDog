import { Request, Response } from "express";
import { arrayAllAnimals, functionFilterAnimal } from "../arrayAllAnimals";
import { abaChosse } from "./abaChosse/abaChosseFunction";


export const home = (req: Request, res: Response) => {
    const aba = abaChosse('home')
    const filterAnimals = arrayAllAnimals
    res.render('pages/shopAppAllBuild', {aba, filterAnimals, animalBanner: 'allanimals.jpg' })
}
export const dogs = (req: Request, res: Response) => {
    const aba = abaChosse('dog')
    const filterAnimals = functionFilterAnimal('dog')
    res.render('pages/shopAppAllBuild', { aba, filterAnimals, animalBanner: 'banner_dog.jpg' })
}
export const cats = (req: Request, res: Response) => {
    const aba = abaChosse('cat')
    const filterAnimals = functionFilterAnimal('cat')
    res.render('pages/shopAppAllBuild', { aba, filterAnimals, animalBanner: 'banner_cat.jpg' })
}
export const fish = (req: Request, res: Response) => {
    const aba = abaChosse('fish')
    const filterAnimals = functionFilterAnimal('fish')
    res.render('pages/shopAppAllBuild', { aba, filterAnimals, animalBanner: 'banner_fish.jpg' })
}
export const search = (req: Request, res: Response) => {
    const aba = abaChosse('search')
    console.log(aba)
    const {animal} = req.query
    console.log(animal)
    const filterAnimals = functionFilterAnimal(animal as string)
    res.render('pages/shopAppAllBuild', { filterAnimals })
}