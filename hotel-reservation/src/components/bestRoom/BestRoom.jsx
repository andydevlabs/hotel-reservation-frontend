import React from 'react';
import './bestRoom.css';
import twin from '../../img/twinPromotion.jpg';
import family from '../../img/familyPromotion.jpg';
import suite from '../../img/suitePromotion.jpg';

function BestRoom() {
    return (
        <div className='bestRoom'>
            <div className="bestRoomItem">
                <img src={twin} alt="" className="bestRoom" />
                <span className="bestRoomName"></span>
                <span className="bestRoomCity"></span>
                <span className="bestRoomPrice">A partir de 40.000ar</span>
                <div className="bestRoomRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default BestRoom;