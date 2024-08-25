type menuOptions = ''|'home'|'dog'|'cat'|'fish'|'search'

export function abaChosse(aba:menuOptions){
    const valores ={
        home:false,
        dog:false,
        cat:false,
        fish:false,
        search:true,
    }
    if(aba !==''){
        valores[aba] = true
    }
    return valores
}