import React from 'react';
import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi'

import '../styles/pages/orphanages-map.css'

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Lajeado</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>
      <Map
        center={[-29.4498961,-52.030521]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
   { /*  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
   <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to='/map' className="create-orphanage">
        <FiPlus size={26} color="rgba(0,0,0,0.6)" />

      </Link>
    </div>

  );
}

export default OrphanagesMap;
