import React from 'react'
import Aux from '../../hoc/aux'
import lyt from './layout.css';


const layout = (props) => (
    <Aux>
        <div className = {lyt.moduleWrapper}>
            <div className = {lyt.moduleContainer}>
                <div className = {lyt.HeaderContainer}>
                    <div className= "HeaderTiltle">
                        <h2>Rent Payments History</h2>
                    </div>
                </div>
                <div className={lyt.contentContainer}>
                    
                            {props.children}
                        
                </div>
            </div>
        
        </div>
       
    </Aux>
    

)

export default layout;