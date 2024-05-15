import React from 'react'
import prg_1 from '../../assets/program-1.png'
import prg_2 from '../../assets/program-2.png'
import prg_3 from '../../assets/program-3.png'
import prg_icon_1 from '../../assets/program-icon-1.png'
import prg_icon_2 from '../../assets/program-icon-2.png'
import prg_icon_3 from '../../assets/program-icon-3.png'
import './Program.css'

const Program = () => {
  return (
    <div>
        <div className='programs'>
            <div className="program">
                <img src={prg_1} alt="" />
                <div className="caption">
                    <img src={prg_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={prg_2} alt="" />
                <div className="caption">
                    <img src={prg_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={prg_3} alt="" />
                <div className="caption">
                    <img src={prg_icon_3} alt="" />
                    <p>Posts Graduation</p>
                </div>
            </div>      
        </div>
    </div>
    
  )
}

export default Program
