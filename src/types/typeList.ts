export type PokedexNumbers = {
  entry_number: number
  pokedex: {
    name: string
    url: string
  }
}

export type Names = {
  language: {
    name: string
    url: string
  }
  name: string
}

export type Genera = {
  genus: string
  language: {
    name: string
    url: string
  }
}

export interface Colors {
  [key: string]: string
}
export type Pokemons = {
  pokemons: Array<Pokemon>
  types: Array<string>
  generations: Array<string>
}

export type PokeType = {
  slot: number
  type: { [key: string]: string }
}

export type Poke = {
  poke: Pokemon
}

export type Pokemon = {
  id: number
  index: number
  name: string
  image: string
  genus: string
  types: Array<Types>
  height: number
  weight: number
  generation: string
}

export type Types = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type IdName = Pick<Pokemon, 'id' | 'name'>

export type Test = {
  readonly id: number
  status: string
  val?: string | number
  name?: 'TANAKA' | 'YAMADA' | 'KATO'
}