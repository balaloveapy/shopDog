import { uuid } from 'uuidv4';
type arrayAllAnimalsType = {
    id:string,
    animal:string,
    especie:string,
    img:string
}
export const arrayAllAnimals:arrayAllAnimalsType[] = [
    { 
        id:uuid(),
        animal:'pastor alemão',
        especie:'dog',
        img:'pastor-alemao.jpg'
    },
    { 
        id:uuid(),
        animal:'Labrador-retriever',
        especie:'dog',
        img:'labrador.jpg'
    },
    { 
        id:uuid(),
        animal:'Zwergspitz',
        especie:'dog',
        img:'zwergspitz.jpg'
    },
    { 
        id:uuid(),
        animal:'Husky Siberiano',
        especie:'dog',
        img:'husky.jpg'
    },
    { 
        id:uuid(),
        animal:'Golden Retriever',
        especie:'dog',
        img:'golden.jpg'
    },
    { 
        id:uuid(),
        animal:'Poodle',
        especie:'dog',
        img:'poodle.jpg'
    },
    { 
        id:uuid(),
        animal:'Bulldog',
        especie:'dog',
        img:'bulldog.jpg'
    },
    { 
        id:uuid(),
        animal:'Persa',
        especie:'cat',
        img:'persa.jpg'
    },
    { 
        id:uuid(),
        animal:'Maine Coon',
        especie:'cat',
        img:'mainecoon.jpg'
    },
    { 
        id:uuid(),
        animal:'Bengal',
        especie:'cat',
        img:'bengal.jpg'
    },
    { 
        id:uuid(),
        animal:'Siamês',
        especie:'cat',
        img:'siames.jpg'
    },
    { 
        id:uuid(),
        animal:'Sphynx',
        especie:'cat',
        img:'sphynx.jpg'
    },
    { 
        id:uuid(),
        animal:'Tetra Neon',
        especie:'fish',
        img:'neon.jpg'
    },
    { 
        id:uuid(),
        animal:'Mato Grosso',
        especie:'fish',
        img:'matogrosso.jpg'
    },
    { 
        id:uuid(),
        animal:'Limpa Vidro',
        especie:'fish',
        img:'limpavidro.jpg'
    },
    { 
        id:uuid(),
        animal:'Tanictis',
        especie:'fish',
        img:'tanictis.jpg'
    },
    { 
        id:uuid(),
        animal:'Acará Bandeira',
        especie:'fish',
        img:'acara.jpg'
    },
    
]
export function functionFilterAnimal(especie:string){
    const filterAnimals = arrayAllAnimals.filter((a)=>a.especie === especie)
    if(filterAnimals.length === 0){
        const SearchFilterAnimals = arrayAllAnimals.filter((a)=>a.animal.toLocaleLowerCase().includes(especie.toLocaleLowerCase()))
        return SearchFilterAnimals
    }
    return filterAnimals
}