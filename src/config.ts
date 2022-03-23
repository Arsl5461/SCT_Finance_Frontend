// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@traderjoe-xyz/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  production: {
    chainId: 43114,
    networkName: 'Avalanche Mainnet',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18],
      FUSDT: ['0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6], // This is actually usdc on mainnet not fusdt
      // BOO: ['0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE', 18],
      // ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
      // SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
      USDT: ['0xc7198437980c041c805a1edcba50c1ce5db95118', 6],
      DAI: ['0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18],
      USDC: ['0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6],
      JOE: ['0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd', 18],
      'wAVAX': ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18],
      // '2OMB': ['0x7a6e4E3CC2ac9924605DCa4bA31d1831c84b44aE', 18],
      // '2OMB-2SHARES LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
      // '2OMB-WAVAX LP': ['0xbdC7DFb7B88183e87f003ca6B5a2F81202343478',18],
      // '2SHARES-WAVAX LP': ['0x6398ACBBAB2561553a9e458Ab67dCFbD58944e52',18],
      '2SHARES': ['0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca', 18],
      'SCT-WAVAX LP': ['0x374546249424AB8bD0c826135B2c95c32792d47a',18],
      'PSHARES-WAVAX LP': ['0xe671f9C183E20Af60eA2FebE45A9817B6f27E894',18],
      'SCT-PSHARES LP': ['0xd352daC95a91AfeFb112DBBB3463ccfA5EC15b65',18],
      'PSHARES': ['0xaC5363fbC73E0F54d2541f517094DDd99d58c305', 18],
      'USDT-AVAX-LP': ['0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1', 18],
      'TOMB-AVAX-LP': ['0x374546249424AB8bD0c826135B2c95c32792d47a', 18],
      'TSHARE-AVAX-LP': ['0xe671f9C183E20Af60eA2FebE45A9817B6f27E894', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  // Tomb2sharesRewardPool: {
  //   name: 'Earn SCT by staking 2SHARES',
  //   poolId: 6,
  //   sectionInUI: 0,
  //   contract: 'Tomb2ShareRewardPool',
  //   depositTokenName: '2SHARES',
  //   earnTokenName: 'SCT',
  //   finished: false,
  //   multiplier: '7500x',
  //   site: "https://2omb.finance",
  //   buyLink: 'https://spookyswap.finance/swap?outputCurrency=0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae',
  //   sort: 0,
  //   closedForStaking: true,
  // },
  // Tomb2sharesWftmLPRewardPool: {
  //   name: 'Earn SCT by staking 2SHARES-WAVAX LP',
  //   poolId: 1,
  //   sectionInUI: 0,
  //   contract: 'Tomb2SharesWftmLPRewardPool',
  //   depositTokenName: '2SHARES-WAVAX LP',
  //   earnTokenName: 'SCT',
  //   finished: false,
  //   multiplier: '6000x',
  //   site: "https://2omb.finance",
  //   buyLink: 'https://spookyswap.finance/add/AVAX/0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca',
  //   sort: 1,
  //   closedForStaking: true,
  // },
  // Tomb2shares2ombLPRewardPool: {
  //   name: 'Earn SCT by staking 2OMB-2SHARES LP',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'Tomb2Shares2ombLPRewardPool',
  //   depositTokenName: '2OMB-2SHARES LP',
  //   earnTokenName: 'SCT',
  //   finished: false,
  //   multiplier: '6000',
  //   site: "https://2omb.finance",
  //   buyLink: 'https://spookyswap.finance/add/0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae/0xc54A1684fD1bef1f077a336E6be4Bd9a3096a6Ca',
  //   sort: 2,
  //   closedForStaking: false,
  // },
  // Tomb2ombWftmLPRewardPool: {
  //   name: 'Earn SCT by staking 2OMB-WAVAX LP',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'Tomb2ombWftmLPRewardPool',
  //   depositTokenName: '2OMB-WAVAX LP',
  //   earnTokenName: 'SCT',
  //   finished: false,
  //   multiplier: '6000x',
  //   site: "https://2omb.finance",
  //   buyLink: 'https://spookyswap.finance/add/AVAX/0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae',
  //   sort: 3,
  //   closedForStaking: true,
  // },
  // Tomb2ombRewardPool: {
  //   name: 'Earn SCT by staking 2OMB',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'Tomb2ombRewardPool',
  //   depositTokenName: '2OMB',
  //   earnTokenName: 'SCT',
  //   finished: false,
  //   multiplier: '5000x',
  //   site: 'https://2omb.finance',
  //   buyLink: 'https://spookyswap.finance/swap?outputCurrency=0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae',
  //   sort: 4,
  //   closedForStaking: true,
  // },
  SctWavaxGenesisRewardPool: {
    name: 'Earn SCT by staking WAVAX',
    poolId: 0,
    sectionInUI: 0,
    contract: 'SctWavaxGenesisRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '10000x (1% Deposit Fee)',
    poolStartUnixtimestamp: 1646991000,
    site: 'https://www.avax.network/',
    buyLink: 'https://traderjoexyz.com/trade?outputCurrency=0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7#/',
    sort: 0,
    closedForStaking: false,
  },
  SctUsdtGenesisRewardPool: {
    name: 'Earn SCT by staking USDT',
    poolId: 1,
    sectionInUI: 0,
    contract: 'SctUsdtGenesisRewardPool',
    depositTokenName: 'USDT',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x (1% Deposit Fee)',
    poolStartUnixtimestamp: 1646991000,
    site: 'https://tether.to/en/',
    buyLink: 'https://traderjoexyz.com/trade?outputCurrency=0xc7198437980c041c805a1edcba50c1ce5db95118#/',
    sort: 1,
    closedForStaking: false,
  },
  SctUsdcGenesisRewardPool: {
    name: 'Earn SCT by staking USDC',
    poolId: 2,
    sectionInUI: 0,
    contract: 'SctUsdcGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x (1% Deposit Fee)',
    poolStartUnixtimestamp: 1646991000,
    site: 'https://www.centre.io/',
    buyLink: 'https://traderjoexyz.com/trade?outputCurrency=0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664#/',
    sort: 2,
    closedForStaking: false,
  },

  SctJoeGenesisRewardPool: {
    name: 'Earn SCT by staking JOE',
    poolId: 3,
    sectionInUI: 0,
    contract: 'SctJoeGenesisRewardPool',
    depositTokenName: 'JOE',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x (1% Deposit Fee)',
    poolStartUnixtimestamp: 1646991000,
    site: 'https://traderjoexyz.com/home#/',
    buyLink: 'https://traderjoexyz.com/trade?outputCurrency=0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd#/',
    sort: 4,
    closedForStaking: false,
  },



  SctAvaxLpSctRewardPool: {
    name: 'Earn SCT by SCT-WAVAX LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'SctAvaxLpSctRewardPool',
    depositTokenName: 'SCT-WAVAX LP',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '10000',
    poolStartUnixtimestamp: 1646776800,
    buyLink: 'https://traderjoexyz.com/pool/avax/0x942B549334D6Cc2faAC7Ac28e5534F5A87Cc85C1#/',
    site: '',
    sort: 4,
    closedForStaking: false,
  },

  OldSctAvaxLpSctRewardPool: {
    name: 'Earn SCT by SCT-WAVAX LP(2)',
    poolId: 0,
    sectionInUI: 1,
    contract: 'OldSctAvaxLpSctRewardPool',
    depositTokenName: 'SCT-WAVAX LP',
    earnTokenName: 'SCT',
    finished: true,
    multiplier: '10000',
    poolStartUnixtimestamp: 1646820000,
    buyLink: 'https://traderjoexyz.com/pool/avax/0x942B549334D6Cc2faAC7Ac28e5534F5A87Cc85C1#/',
    site: '',
    sort: 5,
    closedForStaking: true,
  },


  SctAvaxLPPShareRewardPool: {
    name: 'Earn PSHARES by SCT-WAVAX LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'SctAvaxLPPShareRewardPool',
    depositTokenName: 'SCT-WAVAX LP',
    earnTokenName: 'PSHARES',
    finished: false,
    multiplier: '4000x',
    poolStartUnixtimestamp: 1646992800,
    buyLink: 'https://traderjoexyz.com/pool/avax/0x942B549334D6Cc2faAC7Ac28e5534F5A87Cc85C1#/',
    site: '/',
    sort: 5,
    closedForStaking: false,
  },
  PshareAvaxLPPShareRewardPool: {
    name: 'Earn PSHARES by PSHARES-WAVAX LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'PshareAvaxLPPShareRewardPool',
    depositTokenName: 'PSHARES-WAVAX LP',
    earnTokenName: 'PSHARES',
    finished: false,
    multiplier: '6000x',
    poolStartUnixtimestamp: 1646992800,
    buyLink: 'https://traderjoexyz.com/pool/avax/0xaC5363fbC73E0F54d2541f517094DDd99d58c305#/',
    site: '/',
    sort: 6,
    closedForStaking: false,
  },

  SctWAVAXRebates: {
    name: 'Bond WAVAX, earn SCT',
    poolId: 0,
    sectionInUI: 3,
    contract: 'SctRebate',
    depositTokenName: 'WAVAX',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x',
    poolStartUnixtimestamp: 1647000000,
    buyLink: '',
    site: '',
    sort: 0,
    closedForStaking: false,
  },
  SctUSDTRebates: {
    name: 'Bond USDT, earn SCT',
    poolId: 4,
    sectionInUI: 3,
    contract: 'SctRebate',
    depositTokenName: 'USDT',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x',
    poolStartUnixtimestamp: 1647000000,
    buyLink: '',
    site: '',
    sort: 1,
    closedForStaking: false,
  },
  SctUSDCRebates: {
    name: 'Bond USDC, earn SCT',
    poolId: 5,
    sectionInUI: 3,
    contract: 'SctRebate',
    depositTokenName: 'USDC',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x',
    poolStartUnixtimestamp: 1647000000,
    buyLink: '',
    site: '',
    sort: 2,
    closedForStaking: false,
  },
  SctPSHARESRebates: {
    name: 'Bond PSHARES, earn SCT',
    poolId: 1,
    sectionInUI: 3,
    contract: 'SctRebate',
    depositTokenName: 'PSHARES',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x',
    poolStartUnixtimestamp: 1647000000,
    buyLink: '',
    site: '',
    sort: 3,
    closedForStaking: false,
  },
  SctPSHARESAVAXRebates: {
    name: 'Bond PSHARES-WAVAX LP, earn SCT',
    poolId: 2,
    sectionInUI: 3,
    contract: 'SctRebate',
    depositTokenName: 'PSHARES-WAVAX LP',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x',
    poolStartUnixtimestamp: 1647000000,
    buyLink: '',
    site: '',
    sort: 4,
    closedForStaking: false,
  },
  SctSCTWAVAXRebates: {
    name: 'Bond SCT-WAVAX LP, earn SCT',
    poolId: 3,
    sectionInUI: 3,
    contract: 'SctRebate',
    depositTokenName: 'SCT-WAVAX LP',
    earnTokenName: 'SCT',
    finished: false,
    multiplier: '5000x',
    poolStartUnixtimestamp: 1647000000,
    buyLink: '',
    site: '',
    sort: 5,
    closedForStaking: false,
  },

};

export default configurations['production'];
