// libs
import chroma from 'chroma-js'
import { filter, findIndex, flow, includes, map } from 'lodash/fp'
import * as React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import ReactTooltip from 'react-tooltip'

// src
import { Country, GeographyData, Projection } from '../../types'
import './WorldMap.css'

const colorScale = chroma
  .scale('OrRd')
  .classes(6)
  .colors(6)

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

type Props = {
  enabledCountries: Country[]
  onCountryClick: (country: Country) => void
  onDialogClose: () => void
}

class WorldMap extends React.Component<Props> {
  public componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 50)
  }

  public handleGeographyClick = (geography: GeographyData): any => {
    const { onCountryClick, onDialogClose } = this.props
    const {
      id,
      properties: { name },
      isEnabled,
    } = geography

    if (isEnabled) {
      onDialogClose()
      onCountryClick({ name, code: id })
    }
  }

  public render() {
    const { enabledCountries } = this.props

    return (
      <React.Fragment>
        <ReactTooltip />
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
                  const color =
                    colorScale[findIndex({ name })(enabledCountries) % 6]

                  return (
                    <Geography
                      key={id}
                      data-tip={name}
                      className={[
                        'worldmap-geography',
                        isEnabled && 'worldmap-geography-enabled',
                      ].join(' ')}
                      style={{
                        default: {
                          fill: isEnabled ? color : '#fff',
                        },
                        hover: {
                          fill: isEnabled ? chroma(color).darken(0.5) : '#fff',
                        },
                      }}
                      geography={geography}
                      projection={projection}
                      onClick={this.handleGeographyClick}
                    />
                  )
                }),
              )(geographies)
            }
          </Geographies>
        </ComposableMap>
      </React.Fragment>
    )
  }
}

export default WorldMap
