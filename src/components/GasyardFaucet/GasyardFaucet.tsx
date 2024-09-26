import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Faucets from '../Faucets/Faucets'
import Footer from '../Footer/Footer'
import GetTokens from '../GetTokens/GetTokens'

type Props = {}

const GasyardFaucet = (props: Props) => {
  const [faucetSelected, setfaucetSelected] = useState(0)

  return (
    <div>
        <Heading />
         {faucetSelected === 0 ?
          <Faucets setfaucetSelected={setfaucetSelected}/> : 
          <GetTokens faucet={faucetSelected} setfaucetSelected={setfaucetSelected} />}
         
         <Footer />
    </div>
  )
}

export default GasyardFaucet