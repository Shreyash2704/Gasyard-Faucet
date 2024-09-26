import React from 'react'
import kakrotIcon from '../../assets/kakarot.svg'
import MovementIcon from '../../assets/movement.svg'
import Morph from '../../assets/morph.svg'
import baselogo from '../../assets/baselogo.svg'
import './Faucet.css'

type Props = {
    setfaucetSelected:any
}

const Faucets = ({setfaucetSelected}: Props) => {
  return (
    <div className="faucet-root">
        {/* <div className="faucet-title">Testnet Faucet</div> */}
        <div className="faucets">
            <img src={Morph} onClick={() => setfaucetSelected(1)}/>
            <img src={kakrotIcon} onClick={() => setfaucetSelected(2)}/>
            <img src={baselogo} onClick={() => setfaucetSelected(3)}/>
            <img src={MovementIcon} onClick={() => setfaucetSelected(4)}/>
        </div>
    </div>
  )
}

export default Faucets