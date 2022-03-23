import React from 'react'
import Nav from "../components/Nav"
import Stats from "../views/Home/Stats"
import Crypto11 from "../assets/img/crypto_tomb_cash.f2b44ef4.png"
import Fantom from "../assets/img/fantom.7660b7c5.svg"
import MAI from "../assets/img/MAI.0290c194.svg"
import Waves from "../assets/img/sky.352b80b2.svg"
import { createGlobalStyle } from 'styled-components';
import Cemetryy from "../assets/img/cemetry.png"
function Cemetry() {
    const BackgroundImage = createGlobalStyle`
  body {
    background: url(${Waves}) no-repeat top, url(${Cemetryy}) no-repeat top;
  
    background-size: cover !important;
  }
`;
    return (
      <>  
            <BackgroundImage/>
      <Nav/>
      <Stats/>
      <div className="stars"></div>
        {/* <div className='cemetry'></div> */}
      <div className='cemetry_title'>
     <div className="heading wheat">Cemetery</div>
<div className='bio wheat'>Earn TSHARE by staking LP</div>
</div>
<div className="cemetry_cards">
    <div className="cemetry_cards-1">
        <div className="cemetry_images">
    <div class="rounded"><img src={Crypto11} width="50" height="50"/></div>
    <div class="rounded"><img src={Fantom} width="50" height="50"/></div>
    </div>

<div className='cemetry_heading'>TOMB-FTM-LP</div>
<div className="deposit">Deposit:</div>
<div className="deposit">TOMB-FTM-LP Earn TSHARE</div>
<button className='btn'>View</button>
    </div>
    <div className="cemetry_cards-1">
    <div className="cemetry_images">
    <div class="rounded"><img src={Crypto11} width="50" height="50"/></div>
    <div class="rounded"><img src={Fantom} width="50" height="50"/></div>
    </div>
<div className='cemetry_heading'>TOMB-FTM-LP</div>
<div className="deposit">Deposit:</div>
<div className="deposit">TOMB-FTM-LP Earn TSHARE</div>
<button className='btn'>View</button>
    </div>
    <div className="cemetry_cards-1">
    <div className="cemetry_images">
    <div class="rounded"><img src={Crypto11} width="50" height="50"/></div>
    <div class="rounded"><img src={MAI} width="50" height="50"/></div>
    </div>
<div className='cemetry_heading'>TOMB-FTM-LP</div>
<div className="deposit">Deposit:</div>
<div className="deposit">TOMB-MAI-LP Earn TSHARE</div>
<button className='btn'>View</button>
    </div>

</div>
<div className="cemetry-small">

    <div className="cemetry-small-1">
        <div className="heading-cemetry">APR</div>
        <div className="value">131.28%</div>
        </div>
        <div className="cemetry-small-1">
        <div className="heading-cemetry">Daily APR</div>
        <div className="value">0.36%</div>
        </div>
        <div className="cemetry-small-3">
        <div className="heading-cemetry">TVL</div>
        <div className="value">$59,894,448.77</div>
        </div>
   

</div>
<div className="cemetry-cards">
<div className="cemetry_cards-1">
<div className="cemetry_images">
    <div class="rounded"><img src={Crypto11} width="50" height="50"/></div>
     </div>

<div className='cemetry_heading'>$0.0000</div>
<div className="deposit">USD $0.00</div>

<button className='btn btn-disabled'>Claim</button>
    </div>
    <div className="cemetry_cards-1">
<div className="cemetry_images">
    <div class="rounded"><img src={Crypto11} width="50" height="50"/></div>
    <div class="rounded"><img src={Fantom} width="50" height="50"/></div>
    </div>

<div className='cemetry_heading'>$0.0000</div>
<div className="deposit">USD $0.00</div>

<button className='btn btn-disabled'>Approve TOMB-FTM-LP</button>
    </div>
    </div>
    <div className="buutons">
    <button className='btn'>Provide liquidity for TOMB-FTM pair now on SpookySwap</button>
    <button className='btn claim'>Claim and withdraw</button>
    </div> 
    </>
  )
}

export default Cemetry