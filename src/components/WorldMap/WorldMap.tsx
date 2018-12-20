// libs
import * as React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import * as fp from 'lodash/fp'

// src
import './WorldMap.css'
import { Country, GeographyData, Projection } from '../../types'

type Props = {
  enabledCountries: Country[]
  onCountryClick: (country: Country) => void
}

function enableCountries(enabledCountries: Country[]) {
  return fp.map((geography: GeographyData) => {
    const {
      id,
      properties: { name },
    } = geography
    const index = fp.findIndex(
      (country: Country) =>
        country.name === name ||
        country.code === id ||
        fp.includes(name)(country.possibleCombinations),
    )(enabledCountries)
    const isEnabled = index > -1

    return { ...geography, isEnabled }
  })
}

const WorldMap = ({ enabledCountries, onCountryClick }: Props) => (
  <ComposableMap
    className="worldmap-composablemap"
    style={{ height: window.innerHeight }}
  >
    <Geographies geography="/world-50m.json">
      {(geographies: GeographyData[], projection: Projection) =>
        fp.flow(
          fp.filter(({ id }: GeographyData) => id !== 'ATA'),
          enableCountries(enabledCountries),
          fp.map((geography: GeographyData) => {
            const {
              id,
              properties: { name },
              isEnabled,
            } = geography

            return (
              <Geography
                key={id}
                className={[
                  'worldmap-geography',
                  !isEnabled && 'worldmap-geography-disabled',
                ].join(' ')}
                onClick={() => isEnabled && onCountryClick({ name, code: id })}
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
