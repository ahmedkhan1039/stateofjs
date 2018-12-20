// libs
import { filter, findIndex, flow, includes, map } from 'lodash/fp'
import * as React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// src
import { Country, GeographyData, Projection } from '../../types'
import './WorldMap.css'

type Props = {
  enabledCountries: Country[]
  onCountryClick: (country: Country) => void
  onDialogClose: () => void
}

function enableCountries(enabledCountries: Country[]) {
  return map((geography: GeographyData) => {
    const {
      id,
      properties: { name },
    } = geography
    const index = findIndex(
      (country: Country) =>
        country.name === name ||
        country.code === id ||
        includes(name)(country.possibleCombinations),
    )(enabledCountries)
    const isEnabled = index > -1

    return { ...geography, isEnabled }
  })
}

function handleGeographyClick(
  isEnabled: boolean | undefined,
  selectedCountry: Country,
  onCountryClick: (country: Country) => void,
  onDialogClose: () => void,
): any {
  if (isEnabled) {
    return () => {
      onDialogClose()
      onCountryClick(selectedCountry)
    }
  }
}

const WorldMap = ({
  enabledCountries,
  onCountryClick,
  onDialogClose,
}: Props) => (
  <ComposableMap
    className="worldmap-composablemap"
    style={{ height: window.innerHeight }}
  >
    <Geographies geography="/world-50m.json">
      {(geographies: GeographyData[], projection: Projection) =>
        flow(
          filter(({ id }: GeographyData) => id !== 'ATA'),
          enableCountries(enabledCountries),
          map((geography: GeographyData) => {
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
                  isEnabled && 'worldmap-geography-enabled',
                ].join(' ')}
                onClick={handleGeographyClick(
                  isEnabled,
                  { name, code: id },
                  onCountryClick,
                  onDialogClose,
                )}
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
