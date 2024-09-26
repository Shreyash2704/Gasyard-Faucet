import React from 'react'
import Morph from '../../assets/morph_2.svg'
import kakrot from '../../assets/kakarot_2.svg'
import Base from '../../assets/base_2.svg'
import Movement from '../../assets/movement_2.svg'
import './GetToken.css'
import backBtn from '../../assets/back_icon.svg'
type Props = {
    faucet:number,
    setfaucetSelected:any
}
type FaucetDetail = {
    id: number;
    icon: any; // Replace 'any' with a more specific type if you know the type of 'icon'
    name: string;
  };
  
  type FaucetDetails = {
    [key: number]: FaucetDetail;
  };
const faucet_details:FaucetDetails = {
    1:{
        "id":2810,
        "icon":Morph,
        "name":"Morph"
    },
    2:{
        "id":1802203764,
        "icon":kakrot,
        "name":"Kakarot"
    },
    3:{
        "id":8453,
        "icon":Base,
        "name":"Base"
    },
    4:{
        "id":30732,
        "icon":Movement,
        "name":"Movement"
    }
}
const GetTokens = ({faucet,setfaucetSelected}: Props) => {
  return (
    <div className='token-root'>
        <img src={backBtn} className='back_btn' onClick={() => setfaucetSelected(0)}/>
        <img src={faucet_details[faucet].icon} />
        <div className="username">Hey <span>@qimchi</span></div>
        <div className="claim_text">You can claim <span>0.02 ETH</span> on Morph Holesky</div>
        <div className="success_text">Your Funds are on the way!</div>
        <input type='text' className='evm_address' placeholder='Paste your EVM address' />
        <button className='submit_btn'>Get your Tokens</button>
    </div>
  )
}

export default GetTokens