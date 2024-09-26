import React from 'react'
import GasyardLogo from '../../assets/gasyard_logo.svg'
import './Heading.css'

type Props = {}

const Heading = (props: Props) => {
  return (
    <div className='heading-root'>
        <img src={GasyardLogo}/>
        <div className="title">
            Testnet Faucet
        </div>
    </div>
  )
}

export default Heading