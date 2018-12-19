// libs
import * as React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

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
        geographies.map((geography: Geography) => {
          return (
            geography.id !== 'ATA' && (
              <Geography
                key={geography.id}
                className="geography"
                geography={geography}
                projection={projection}
              />
            )
          )
        })
      }
    </Geographies>
  </ComposableMap>
)

export default WorldMap
