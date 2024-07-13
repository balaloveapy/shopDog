import {Router}  from "express";
import * as petShop from "./index"
const router = Router()

router.get('/',petShop.home)
router.get('/dogs',petShop.dogs)
router.get('/cats',petShop.cats)
router.get('/fish',petShop.fish)
router.get('/search',petShop.search)
export default router