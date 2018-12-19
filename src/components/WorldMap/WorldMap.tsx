// libs
import * as React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as fp from 'lodash/fp'

// src
import './WorldMap.css'

type Longitude = number
type Latitude = number
type Coordinates = [Longitude, Latitude]

type Geography = {
  id: string
  type: string
  properties: { name: string }
  geometry: {
    type: string
    coordinates: Array<Coordinates[]>
  }
}

type Projection = (point: Coordinates) => Coordinates

const WorldMap = () => (
  <ComposableMap
    className="worldmap-composablemap"
    style={{ height: window.innerHeight }}
  >
    <Geographies geography="/world-50m.json">
      {(geographies: Geography[], projection: Projection) =>
        fp.flow(
          fp.filter(({ id }: Geography) => id !== 'ATA'),
          fp.map((geography: Geography) => {
            return (
              <Geography
                key={geography.id}
                className="geography"
                geography={geography}
                projection={projection}
              />
            )
          }),
        )(geographies)
      }
    </Geographies>
  </ComposableMap>
)

export default WorldMap
