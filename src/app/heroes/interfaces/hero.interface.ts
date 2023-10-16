export interface Hero{
    id: string
    superhero: string
    publisher: Publisher
    alter_ego: string
    firts_appearance: string
    characters :string,
    alt_image?:string
}

export enum Publisher{
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics"
}