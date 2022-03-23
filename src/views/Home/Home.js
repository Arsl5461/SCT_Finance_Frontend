import React, { useMemo } from 'react';
import Page from '../../components/Page';
import HomeImage from '../../assets/img/background1.png';
import HomeImage2 from '../../assets/img/background2.png';
import CashImage from '../../assets/img/sct_logo.png';
import Image from 'material-ui-image';
import styled from 'styled-components';
import { Alert } from '@material-ui/lab';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useTombStats from '../../hooks/useTombStats';
import useLpStats from '../../hooks/useLpStats';
import useModal from '../../hooks/useModal';
import useZap from '../../hooks/useZap';
import useBondStats from '../../hooks/useBondStats';
import usetShareStats from '../../hooks/usetShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import useFantomPrice from '../../hooks/useFantomPrice';
import { tomb as tombTesting, tShare as tShareTesting } from '../../tomb-finance/deployments/deployments.testing.json';
import { tomb as tombProd, tShare as tShareProd } from '../../tomb-finance/deployments/deployments.mainnet.json';
import ProgressCountdown from './components/ProgressCountdown';
import useTotalTreasuryBalance from '../../hooks/useTotalTreasuryBalance.js';
import moment from 'moment';
import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import ZapModal from '../Bank/components/ZapModal';
import ParticleBackground from '../../ParticalBackground';
import { makeStyles } from '@material-ui/core/styles';
import useTombFinance from '../../hooks/useTombFinance';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import Crypto1 from "../../assets/img/crypto_tomb_cash.f2b44ef4.png"
import Crypto2 from "../../assets/img/crypto_tomb_share.bf1a6c52.png"
import Meta from "../../assets/img/meta-mask.png"
import Stats from "./Stats"
import Nav from "../../components/Nav/Nav"

// const BackgroundImage = createGlobalStyle`
//   body {
//     background-color: var(--black);
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%231D1E1F' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
// }

// * {
//     border-radius: 0 !important;
// }
// `;

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage2}) no-repeat top, url(${HomeImage}) no-repeat top;
  
    background-size: cover !important;
  }
`;
const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      marginTop: '10px',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  console.log("Here", TVL);
  const tombFtmLpStats = useLpStats('SCT-WAVAX LP');
  const tShareFtmLpStats = useLpStats('PSHARES-WAVAX LP');
  const tombStats = useTombStats();
  const tShareStats = usetShareStats();
  const tBondStats = useBondStats();
  const tombFinance = useTombFinance();
  const { price: ftmPrice, marketCap: ftmMarketCap, priceChange: ftmPriceChange } = useFantomPrice();
  const { balance: rebatesTVL } = useTotalTreasuryBalance();
  const totalTVL = TVL + rebatesTVL;

  let tomb;
  let tShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    tomb = tombTesting;
    tShare = tShareTesting;
  } else {
    tomb = tombProd;
    tShare = tShareProd;
  }

  const buyTombAddress = 'https://spookyswap.finance/swap?outputCurrency=' + tomb.address;
  const buyTShareAddress = 'https://spookyswap.finance/swap?outputCurrency=' + tShare.address;

  const tombLPStats = useMemo(() => (tombFtmLpStats ? tombFtmLpStats : null), [tombFtmLpStats]);
  const tshareLPStats = useMemo(() => (tShareFtmLpStats ? tShareFtmLpStats : null), [tShareFtmLpStats]);
  const tombPriceInDollars = useMemo(
    () => (tombStats ? Number(tombStats.priceInDollars).toFixed(2) : null),
    [tombStats],
  );
  const tombPriceInFTM = useMemo(() => (tombStats ? Number(tombStats.tokenInFtm).toFixed(4) : null), [tombStats]);
  const tombCirculatingSupply = useMemo(() => (tombStats ? String(tombStats.circulatingSupply) : null), [tombStats]);
  const tombTotalSupply = useMemo(() => (tombStats ? String(tombStats.totalSupply) : null), [tombStats]);

  const tSharePriceInDollars = useMemo(
    () => (tShareStats ? Number(tShareStats.priceInDollars).toFixed(2) : null),
    [tShareStats],
  );
  const tSharePriceInFTM = useMemo(
    () => (tShareStats ? Number(tShareStats.tokenInFtm).toFixed(4) : null),
    [tShareStats],
  );
  const tShareCirculatingSupply = useMemo(
    () => (tShareStats ? String(tShareStats.circulatingSupply) : null),
    [tShareStats],
  );
  const tShareTotalSupply = useMemo(() => (tShareStats ? String(tShareStats.totalSupply) : null), [tShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInFTM = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const tombLpZap = useZap({ depositTokenName: 'SCT-WAVAX LP' });
  const tshareLpZap = useZap({ depositTokenName: 'PSHARE-WAVAX LP' });

  const StyledLink = styled.a`
    font-weight: 700;
    text-decoration: none;
    color: var(--accent-light);
  `;

  const [onPresentTombZap, onDissmissTombZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        tombLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissTombZap();
      }}
      tokenName={'SCT-WAVAX LP'}
    />,
  );

  const [onPresentTshareZap, onDissmissTshareZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        tshareLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissTshareZap();
      }}
      tokenName={'PSHARE-WAVAX LP'}
    />,
  );
  const MainFarmStartTimeStamp = 1648346400;
  return (
    <Page>

{/* <div className='bg1bg'> */}
{/* <Nav/> */}
<Stats/>

<div className='heading_title'>

<div className='title'>
  <div className="heading wheat">
Tomb Finance
  </div>
  <div className="heading2 wheat">
The algorithmic token pegged to FTM</div>
</div>
<div className='tvl_amount'>
  TVL <span className='number'>$436,763,672</span>
</div>
{/* </div> */}
</div>

{/* <div className='bg2bg'> */}
<div className='cards'>
{/* Card1 */}
<div className='card1'>
  <div className='cards_heading'>
    <img src={Crypto1}></img>
    <p className="title_card">$TBOND</p>
    <div className="meta">
    <img src={Meta} className="meta"></img>
    </div>
  </div>
    <h1 className='white center font12'>Current Price</h1>
    <p className='purple center font12'>FTM <span className='white font font12'>0.9655</span></p>
    <p className='purple center font12'>USD <span className='white font12'>$1.27</span></p>
    <p className='purple center font12'>Market Gap:</p>
    <h1 className='white center font12'>$324,761,231.35</h1>
    <p className='purple center font12'>Circulating Supply:</p>
    <h1 className='white center font12'>255,779,185</h1>
    <p className='purple center font12'>Total Supply:</p>
    <h1 className='white center font12' >225,779,317</h1>
<button className='buy_tomb center btn font12'>Buy Tomb</button>
  </div>
  
  {/* Card2 */}
  <div className='card1'>
  <div className='cards_heading'>
    <img src={Crypto1}></img>
    <h3 className="title_card">$TBOND</h3>
    <div className="meta">
    <img src={Meta} className="meta"></img>
    </div>
  </div>
    <h1 className='white center font12'>Current Price</h1>
    <p className='purple center font12'>FTM <span className='white font font12'>0.9655</span></p>
    <p className='purple center font12'>USD <span className='white font12'>$1.27</span></p>
    <p className='purple center font12'>Market Gap:</p>
    <h1 className='white center font12'>$324,761,231.35</h1>
    <p className='purple center font12'>Circulating Supply:</p>
    <h1 className='white center font12'>255,779,185</h1>
    <p className='purple center font12'>Total Supply:</p>
    <h1 className='white center font12'>225,779,317</h1>
<button className='buy_tomb center btn font12'>Buy Tomb</button>
  </div>
  
  {/* Card 3 */}
  <div className='card1'>
  <div className='cards_heading'>
    <img src={Crypto1}></img>
    <h3 className="title_card">$TBOND</h3>
    <div className="meta">
    <img src={Meta} className="meta"></img>
    </div>
  </div>
    <h1 className='white center font12'>Current Price</h1>
    <p className='purple center font12'>FTM <span className='white font font12'>0.9655</span></p>
    <p className='purple center font12'>USD <span className='white font12'>$1.27</span></p>
    <p className='purple center font12'>Market Gap:</p>
    <h1 className='white center font12'>$324,761,231.35</h1>
    <p className='purple center font12'>Circulating Supply:</p>
    <h1 className='white center font12'>255,779,185</h1>
    <p className='purple center font12'>Total Supply:</p>
    <h1 className='white center font12'>225,779,317</h1>
<button className='buy_tomb center btn font12'>Buy Tomb</button>
  </div>
  
</div>

{/* </div> */}

      {/* <ParticleBackground/> */}
      

      {/* <Image color="none" style={{ width: '100%', height: '100%', paddingTop: '0px' }} src={HomeImage2} /> */}

      <BackgroundImage />

      

      {/* <Grid container spacing={3}> */}
        {/* Logo */}
        {/* <Grid container item xs={12} sm={4} justify="center">
          <Paper>xs=6 sm=3</Paper>
          <Image color="none" style={{ width: '350px', height: '350px', paddingTop: '0px' }} src={CashImage} />
        </Grid> */}
        {/* Explanation text */}
        {/* <Grid item xs={12} sm={8}>
          <Paper style={{ backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)", fontSize: "20px" }}>
            <Box  style={{"text-align": "center"}} p={4}>
              <h2>EARN DAILY YIELDS AT <span style={{color:"#ff4c39"}}>SCT FINANCE</span></h2>
              <p>SCT is an algocoin which is designed to follow the price of 0.1 <span style={{color:"#e84142"}}>AVAX</span></p>
              <p>SCT utilizes multiple bonding mechanisms at the <StyledLink style={{color:"#e84142"}} href="/rebates">DAO</StyledLink> as well as seigniorage.</p>
              <p>
                Stake your SCT-WAVAX LP in the <StyledLink style={{color:"#e84142"}} href="/farms">FARMS</StyledLink> to earn PSHARES rewards.
              </p>
              <p>
                Then stake your earned PSHARES in the <StyledLink  style={{color:"#e84142"}} href="/boardroom">ROOM</StyledLink> to maximize profits!
              </p>
              <p>
              <ProgressCountdown base={moment().toDate()} unix_deadline={MainFarmStartTimeStamp} description="Genesis Pools and All Farms Launch in : " />
              </p>
            </Box>
          </Paper>



        </Grid> */}

        {/* <Grid container justify="center">
            <Box mt={3} style={{ width: '1000px' }}>
            <Alert variant="filled" >
                New <strong style={{color: "red"}}>XFarm</strong>(Earn SCT by staking SCT-WAVAX LP) is added. That is about to launch. Please visit XFARMS
            </Alert>
            </Box>
        </Grid> */}

        {/* <Grid container spacing={3}>
    <Grid item  xs={12} sm={12} justify="center"  style={{ margin: '12px', display: 'flex' }}>
            <Alert severity="warning" style={{ backgroundColor: "transparent", border: "1px solid var(--white)" }}>
              <b>
      Please visit our <StyledLink target="_blank" href="https://docs.tomb.finance">documentation</StyledLink> before purchasing TOMB or TSHARE!</b>
            </Alert>
        </Grid>
        </Grid> */}

        {/* TVL */}
        {/* <Grid item xs={12} sm={4}>
          <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)" }}>
            <CardContent align="center">
              <h2>Total Value Locked</h2>
              <CountUp style={{ fontSize: '25px' }} end={totalTVL} separator="," prefix="$" />
            </CardContent>
          </Card>
        </Grid> */}
        {/* Wallet */}
        {/* <Grid item xs={12} sm={8}>
          <Card style={{ height: '100%', backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <CardContent align="center"> */}
              {/* <h2 style={{ marginBottom: '20px' }}>Wallet Balance</h2> */}
              {/* <Button color="primary" href="/farms" variant="contained" style={{ marginRight: '10px' }}>
                Farms
              </Button>
              <Button color="primary" href="/boardroom" variant="contained" style={{ marginRight: '25px' }}>
                Stake
              </Button> */}
              {/* <Button color="primary" href="/masonry" variant="contained" style={{ marginRight: '10px' }}>
                Stake Now
              </Button> */}
              {/* <Button href="/cemetery" variant="contained" style={{ marginRight: '10px' }}>
                Farm Now
              </Button> */}
              {/* <Button
                color="primary"
                target="_blank"
                href="https://traderjoexyz.com/trade?outputCurrency=0x942B549334D6Cc2faAC7Ac28e5534F5A87Cc85C1#/"
                variant="contained"
                style={{ margin: '10px 20px 10px 20px' }}
                className={classes.button}
              >
                Buy SCT
              </Button>
              <Button color="primary" variant="contained" target="_blank" href="https://traderjoexyz.com/trade?outputCurrency=0xaC5363fbC73E0F54d2541f517094DDd99d58c305#/" style={{ margin: '10px 20px 10px 20px' }} className={classes.button}>
                Buy PSHARES
              </Button>
              <Button color="primary" variant="contained" target="_blank" href="https://dexscreener.com/avalanche/0x942B549334D6Cc2faAC7Ac28e5534F5A87Cc85C1" style={{ margin: '10px 20px 10px 20px' }} className={classes.button}>
                SCT Chart
              </Button>
              <Button color="primary" variant="contained" target="_blank" href="https://dexscreener.com/avalanche/0xaC5363fbC73E0F54d2541f517094DDd99d58c305" style={{ margin: '10px 20px 10px 20px' }} className={classes.button}>
                PSHARES Chart
              </Button>
            </CardContent>
          </Card>
        </Grid> */}

        {/* TOMB */}
        {/* <Grid item xs={12} sm={3}>
          <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)" }}>
            <CardContent align="center" style={{ position: 'relative' }}>
              <h2>AVAX</h2>
              <Box mt={2} style={{ backgroundColor: "transparent !important" }}>
                <CardIcon style={{ backgroundColor: "transparent !important" }}>
                  <TokenSymbol symbol="WAVAX" style={{ backgroundColor: "transparent !important" }} />
                </CardIcon>
              </Box>
              Current Price
              <Box>
                <span style={{ fontSize: '30px' }}>${ftmPrice ? ftmPrice : '-.----'} USD</span>
              </Box>
              <span style={{ fontSize: '12px' }}>
                Market Cap: ${ftmMarketCap} <br />
                Price Change 24h: {ftmPriceChange.toFixed(2)}% <br />
                <br />
                <br />
              </span>
            </CardContent>
          </Card>
        </Grid> */}

        {/* TOMB */}
        {/* <Grid item xs={12} sm={3}>
          <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)" }}>
            <CardContent align="center" style={{ position: 'relative' }}>
              <h2>SCT</h2>
              <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask('SCT');
                }}
                color="secondary"
                variant="outlined"
                style={{ position: 'absolute', top: '10px', right: '10px', borderColor: "var(--accent-light)" }}
              >
                +&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Box mt={2} style={{ backgroundColor: "transparent !important" }}>
                <CardIcon style={{ backgroundColor: "transparent !important" }}>
                  <TokenSymbol symbol="TOMB" style={{ backgroundColor: "transparent !important" }} />
                </CardIcon>
              </Box>
              Current Price
              <Box>
                <span style={{ fontSize: '30px' }}>{tombPriceInFTM ? tombPriceInFTM : '-.----'} AVAX</span>
              </Box>
              <Box>
                <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
                  ${tombPriceInDollars ? tombPriceInDollars : '-.--'}
                </span>
              </Box>
              <span style={{ fontSize: '12px' }}>
                Market Cap: ${(tombCirculatingSupply * tombPriceInDollars).toFixed(2)} <br />
                Circulating Supply: {tombCirculatingSupply} <br />
                Total Supply: {tombTotalSupply}
              </span>
            </CardContent>
          </Card>
        </Grid> */}

        {/* TSHARE */}
        {/* <Grid item xs={12} sm={3}>
          <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)" }}>
            <CardContent align="center" style={{ position: 'relative' }}>
              <h2>PSHARES</h2>
              <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask('PSHARES');
                }}
                color="secondary"
                variant="outlined"
                style={{ position: 'absolute', top: '10px', right: '10px', borderColor: "var(--accent-light)" }}
              >
                +&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="TSHARE" />
                </CardIcon>
              </Box>
              Current Price
              <Box>
                <span style={{ fontSize: '30px' }}>{tSharePriceInFTM ? tSharePriceInFTM : '-.----'} AVAX</span>
              </Box>
              <Box>
                <span style={{ fontSize: '16px' }}>${tSharePriceInDollars ? tSharePriceInDollars : '-.--'}</span>
              </Box>
              <span style={{ fontSize: '12px' }}>
                Market Cap: ${(tShareCirculatingSupply * tSharePriceInDollars).toFixed(2)} <br />
                Circulating Supply: {tShareCirculatingSupply} <br />
                Total Supply: {tShareTotalSupply}
              </span>
            </CardContent>
          </Card>
        </Grid> */}

        {/* TBOND */}
        {/* <Grid item xs={12} sm={3}>
          <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)" }}>
            <CardContent align="center" style={{ position: 'relative' }}>
              <h2>PBOND</h2>
              <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask('PBOND');
                }}
                color="secondary"
                variant="outlined"
                style={{ position: 'absolute', top: '10px', right: '10px', borderColor: "var(--accent-light)" }}
              >
                +&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="TBOND" />
                </CardIcon>
              </Box>
              Current Price
              <Box>
                <span style={{ fontSize: '30px' }}>{tBondPriceInFTM ? tBondPriceInFTM : '-.----'} AVAX</span>
              </Box>
              <Box>
                <span style={{ fontSize: '16px' }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</span>
              </Box>
              <span style={{ fontSize: '12px' }}>
                Market Cap: ${(tBondCirculatingSupply * tBondPriceInDollars).toFixed(2)} <br />
                Circulating Supply: {tBondCirculatingSupply} <br />
                Total Supply: {tBondTotalSupply}
              </span>
            </CardContent>
          </Card>
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)" }}>
            <CardContent align="center">
              <h2>SCT-WAVAX Joe LP</h2>
              <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask('SCT-WAVAX LP');
                }}
                color="secondary"
                variant="outlined"
                style={{ position: 'absolute', top: '10px', right: '10px', borderColor: "var(--accent-light)" }}
              >
                +&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="TOMB-AVAX-LP" />
                </CardIcon>
              </Box> */}
              
              {/* <Box mt={2}>
                <Button color="primary" disabled={false} onClick={onPresentTombZap} variant="contained">
                  Zap In
                </Button>
              </Box> */}
              {/* <Box mt={2}>
                <span style={{ fontSize: '26px' }}>
                  {tombLPStats?.tokenAmount ? tombLPStats?.tokenAmount : '-.--'} SCT /{' '}
                  {tombLPStats?.ftmAmount ? tombLPStats?.ftmAmount : '-.--'} AVAX
                </span>
              </Box>
              <Box>${tombLPStats?.priceOfOne ? tombLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${tombLPStats?.totalLiquidity ? tombLPStats.totalLiquidity : '-.--'} <br />
                Total supply: {tombLPStats?.totalSupply ? tombLPStats.totalSupply : '-.--'}
              </span> */}
            {/* </CardContent>
          </Card>
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "1px solid var(--white)" }}>
            <CardContent align="center"> */}
              {/* <h2>PSHARES-WAVAX Joe LP</h2> */}
              {/* <Button
                onClick={() => {
                  tombFinance.watchAssetInMetamask('PSHARES-WAVAX LP');
                }}
                color="secondary"
                variant="outlined"
                style={{ position: 'absolute', top: '10px', right: '10px', borderColor: "var(--accent-light)" }}
              >
                +&nbsp;
                <img alt="metamask fox" style={{ width: '20px' }} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="TSHARE-AVAX-LP" />
                </CardIcon>
              </Box> */}
              {/* <Box mt={2}>
                <Button color="primary" onClick={onPresentTshareZap} variant="contained">
                  Zap In
                </Button>
            </Box> */}
              {/* <Box mt={2}>
                <span style={{ fontSize: '26px' }}>
                  {tshareLPStats?.tokenAmount ? tshareLPStats?.tokenAmount : '-.--'} PSHARE /{' '}
                  {tshareLPStats?.ftmAmount ? tshareLPStats?.ftmAmount : '-.--'} AVAX
                </span>
              </Box>
              <Box>${tshareLPStats?.priceOfOne ? tshareLPStats.priceOfOne : '-.--'}</Box>
              <span style={{ fontSize: '12px' }}>
                Liquidity: ${tshareLPStats?.totalLiquidity ? tshareLPStats.totalLiquidity : '-.--'}
                <br />
                Total supply: {tshareLPStats?.totalSupply ? tshareLPStats.totalSupply : '-.--'}
              </span> */}
            {/* </CardContent>
          </Card>
        </Grid> */}
      {/* </Grid> */}
    </Page>
  );
};

export default Home;
