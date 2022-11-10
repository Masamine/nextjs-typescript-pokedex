import { css } from '@emotion/react'
import { Colors, Poke } from '@/types/typeList'

const colors: Colors = {
  bug: '#bbdbbc',
  dark: '#aeaebd',
  dragon: '#97b3e6',
  electric: '#fcf6b5',
  fairy: '#fceaff',
  fighting: '#f2e4c8',
  fire: '#ffd4d4',
  flying: '#cef3ff',
  ghost: '#b0b0d5',
  grass: '#c6efc9',
  ground: '#c8bdb1',
  ice: '#a6eefe',
  normal: '#f6f6f6',
  poison: '#a08abb',
  psychic: '#c2a6f2',
  rock: '#cacabd',
  steel: '#c6c6c6',
  water: '#caddff',
}

const typeName: Colors = {
  bug: 'むし',
  dark: 'あく',
  dragon: 'ドラゴン',
  electric: 'でんき',
  fairy: 'フェアリー',
  fighting: 'かくとう',
  fire: 'ほのお',
  flying: 'ひこう',
  ghost: 'ゴースト',
  grass: 'くさ',
  ground: 'じめん',
  ice: 'こおり',
  normal: 'ノーマル',
  poison: 'どく',
  psychic: 'エスパー',
  rock: 'いわ',
  steel: 'はがね',
  water: 'みず',
}

const itemStyle = css`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 16px;
  font-weight: bold;
  color: #181f25;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff;
  margin-top: 15px;
`

const genusStyle = css`
  line-height: 1.5;
  font-size: 12px;
  color: #181f25;
  text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff;
  margin: 0;
  margin-top: 3px;
  padding: 0;
`

const boxStyle = (type1: string, type2: string) => css`
  position: relative;
  border-radius: 4px;
  width: 250px;
  cursor: pointer;
  margin: 0 10px 20px;
  padding: 8px;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  &::before {
    left: 0;
    background-color: ${colors[type1]};
  }
  &::after {
    left: 50%;
    background-color: ${colors[type2] || colors[type1]};
    transform: skew(-15deg);
  }
  .pokemon-image img {
    transition: transform 0.15s ease-out;
  }
  &:hover {
    .pokemon-image img {
      transform: scale(1.1);
    }
  }
`

const numberStyle = css`
  position: absolute;
  top: 7px;
  right: 7px;
  font-size: 11px;
  line-height: 1;
  margin: 0;
  padding: 0;
  color: #c1c6ca;
`

const boxInnerStyle = css`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const imageStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  img {
    height: 100px;
    width: auto;
    filter: drop-shadow(7px 7px 0px #dbdbdb);
  }
`

const Pokemon = (poke: Poke) => {
  const data = poke.poke
  const mainType = data.types[0].type.name
  const sub = data.types[1] ? data.types[1].type.name : ''
  const subType = sub || mainType
  const types = data.types.map(item => item.type.name).join('-')
  const imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.index}.png`
  return (
    <>
      <div className='pokemon' css={boxStyle(mainType, subType)} data-type={types}>
        <div className='pokemon-inner' css={boxInnerStyle}>
          <div className='pokemon-image image' css={imageStyle}>
            {/* <img src={data.image} alt={data.name} /> */}
            <img src={imagePath} alt={data.name} />
            <p css={numberStyle}>No.{data.index}</p>
          </div>
          <p css={itemStyle}>{data.name}</p>
          <p css={genusStyle}>{data.genus}</p>
          <p css={genusStyle}>
            {typeName[mainType]}
            {sub ? ` / ${typeName[sub]}` : ''}
          </p>
        </div>
      </div>
    </>
  )
}

export default Pokemon
