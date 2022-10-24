import { atom, useRecoilValue } from 'recoil'

export const generationState = atom({
  key: 'recoilGeneration',
  default: '',
})
export const useRecoilGeneration = () => useRecoilValue(generationState)
