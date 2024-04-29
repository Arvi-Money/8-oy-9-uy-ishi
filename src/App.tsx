import { FullscreenControl, GeolocationControl, Map, Placemark, RouteButton, RouteEditor, RulerControl, SearchControl, TrafficControl, TypeSelector, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import './App.css'

function App() {

  return (
    <>
      <YMaps query={{apikey: '949d2a1a-b458-48e9-b14a-8f0cf25ddc44'}}>
  <Map
    defaultState={{
      center: [55.751574, 37.573856],
      zoom: 9,
      controls: [],
    }}

    width='100vw'
    height='100vh'
  >
    <Placemark defaultGeometry={[55.751574, 37.573856]} />
    <FullscreenControl />
    <GeolocationControl options={{ float: "left" }} />
    <RouteButton options={{ float: "right" }} />
    <RouteEditor />
    <RulerControl  />
    <SearchControl options={{ float: "right" }} />
    <TrafficControl  />
    <TypeSelector  />
    <ZoomControl  />
  </Map>
</YMaps>;
    </>
  )
}

export default App
