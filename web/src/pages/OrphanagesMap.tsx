import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup }  from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criançãs estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Uberlândia</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map 
                center={[-18.9029185,-48.2493067]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker 
                    icon={mapIcon}
                    position={[-18.9029185,-48.2493067]}
                >
                    <Popup closeButton={false} minWidth={240} maxwidth={240} className='map-popup'>
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>

                </Marker>

            </Map> 

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFFF"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;   