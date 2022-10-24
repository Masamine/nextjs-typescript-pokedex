import { PokedexNumbers, Names, Genera } from '@/types/typeList'

const POKEMON_COUNT = 386

export const getPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_COUNT}`)
  const data = await res.json()
  const results = data.results
  const dataPromise = []

  for (let i = 0; i < results.length; i++) {
    const result = results[i]
    dataPromise.push(getPokemon(result.name))
  }

  return Promise.all(dataPromise)
}

export const getPokemon = async (id: number) => {
  // ポケモンの基本データを取得
  const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const pokemonData = await pokemonRes.json()

  // ポケモンの種族データを取得
  const speciesRes = await fetch(pokemonData.species.url)
  const speciesData = await speciesRes.json()

  return {
    id: pokemonData.name,
    index: speciesData.pokedex_numbers.find(
      (data: PokedexNumbers) => data.pokedex.name === 'national',
    ).entry_number,
    name: speciesData.names.find((data: Names) => data.language.name === 'ja-Hrkt').name,
    image: pokemonData.sprites['front_default'],
    genus: speciesData.genera.find((data: Genera) => data.language.name === 'ja-Hrkt').genus,
    types: pokemonData.types,
    height: pokemonData.height,
    weight: pokemonData.weight,
    generation: speciesData.generation.name,
  }
}
