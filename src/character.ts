type Gender = 'male' | 'female' | 'n/a'
type HairColor = 'black' | 'brown' | 'blond' | 'auburn' | 'grey' | 'white' | 'n/a'
type SkinColor = 'fair' | 'gold' | 'white' | 'light' | 'blue' | 'red'
type EyeColor = 'blue' | 'yellow' | 'red' | 'brow' | 'blue-grey'

export default interface Character {
  name: string,
  height: string,
  mass: string,
  hair_color: HairColor,
  skin_color: SkinColor,
  eye_color: EyeColor,
  birth_year: string,
  gender: Gender,
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string,
}