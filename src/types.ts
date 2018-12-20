export type Country = {
  name: string
  code: string
  possibleCombinations?: string[]
}

type Longitude = number
type Latitude = number
export type Coordinates = [Longitude, Latitude]

export type GeographyData = {
  id: string
  type: string
  properties: { name: string }
  geometry: {
    type: string
    coordinates: Array<Coordinates[]>
  }
  isEnabled?: boolean
}

export type Projection = (point: Coordinates) => Coordinates
