import React from 'react'
import Crypto1 from "../../assets/img/crypto_tomb_cash.f2b44ef4.png"
import Crypto2 from "../../assets/img/crypto_tomb_share.bf1a6c52.png"

function Stats() {
  return (
    <>
    <div className='stats'>
  <div className='stat1'>
<img src={Crypto1} className="crypto1"></img>
<h1 className='wheat'>0.9768FTM</h1>
  </div>
  <div className='stat2'>
  <img src={Crypto2}></img>
  <h1 className='wheat'>2,595.4584FTM</h1>
  </div>
  <div className='stat3'>
  <img src={Crypto1}></img>
  <h1 className='wheat'>0.9800FTM</h1>
  </div>
</div>
    </>
  )
}

export default Stats