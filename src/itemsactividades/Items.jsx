import './style.css';
import Incomplete from './assets/uncomplet.png'
import Complete from './assets/complet.png'
import PropTypes from 'prop-types';

function ItemActividad(props) {
    return(
        <div className="item-actividad"
        onClick={() => {props.viewDetail(props.data)}}
        >
            <div className="img-container">
                <img src={props.data.estado ? Complete : Incomplete} className='imgStyle' />
            </div>
            <div className="text-container">
                <p style={{margin: 0}}>{props.data.nombre}</p>
                <p style={{margin: 0}}>{props.data.descripcion}</p>
                <p style={{margin: 0}}>{props.data.fecha}</p>
            </div>
        </div>
    );
}

ItemActividad.propTypes= {
    data: PropTypes.object.isRequired,
    viewDetail: PropTypes.func.isRequired,
  };

export default ItemActividad;