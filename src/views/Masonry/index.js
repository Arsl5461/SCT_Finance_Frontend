export { default } from './Masonry';
// {!!account ? (
//     <>
//       <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
//         <strong style={{color:"#ff4c39"}}>Room</strong>
//       </Typography>
//       <Box mt={5}>
//         <Grid container justify="center" spacing={3}>
//           <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
//             <Card className={classes.gridItem}>
//               <CardContent>
//                 <Typography style={{ textAlign: 'center' }}>Next Epoch</Typography>
//                 <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
//             <Card className={classes.gridItem}>
//               <CardContent align="center">
//                 <Typography>Current Epoch</Typography>
//                 {/* <Typography>{Number(currentEpoch)}</Typography> */}
//                 <Typography>{Number(0)}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
//             <Card className={classes.gridItem}>
//               <CardContent align="center">
//                 <Typography>
//                   SCT Price<small> (TWAP)</small>
//                 </Typography>
//                 <Typography>{rebateStats.tombPrice.toFixed(4)} AVAX</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
//             <Card className={classes.gridItem}>
//               <CardContent align="center">
//                 <Typography>APR</Typography>
//                 <Typography>{masonryAPR.toFixed(2)}%</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={2} lg={2}>
//             <Card className={classes.gridItem}>
//               <CardContent align="center">
//                 <Typography>PSHARES Staked</Typography>
//                 <Typography>{getDisplayBalance(totalStaked)}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         <Grid container justify="center">
//           <Box mt={3} style={{ width: '525px' }}>
//             <Alert variant="filled" severity="info" style={{ backgroundColor:"#06296e", marginBottom:'20px'}}>
//               Staked PSHARES can only be withdrawn after 6 epochs (36 hours) since deposit. Reward SCTS can only be claimed after 3 epochs (18 hours) since deposit.
//               Any time tokens are harvested, deposited, or withdrawn, the lockup timer gets reset.
//             </Alert>
//           </Box>
//         </Grid>

//         <Box mt={4}>
//           <StyledBoardroom>
//             <StyledCardsWrapper>
//               <StyledCardWrapper>
//                 <Harvest />
//               </StyledCardWrapper>
//               <Spacer />
//               <StyledCardWrapper>
//                 <Stake />
//               </StyledCardWrapper>
//             </StyledCardsWrapper>
//           </StyledBoardroom>
//         </Box>
//       </Box>

//       <Box mt={5}>
//         <Grid container justify="center" spacing={3} mt={10}>
//           <Button
//             disabled={stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)}
//             // disabled = { true }
//             onClick={onRedeem}
//             color="primary"
//             variant="contained"
//           >
//             Claim and Withdraw
//           </Button>
//         </Grid>
//       </Box>
//     </>
//   ) : (
//     <UnlockWallet />
//   )}
// </Page>
// );
// };

// const StyledBoardroom = styled.div`
// align-items: center;
// display: flex;
// flex-direction: column;
// @media (max-width: 768px) {
// width: 100%;
// }
// `;

// const StyledCardsWrapper = styled.div`
// display: flex;
// width: 600px;
// @media (max-width: 768px) {
// width: 100%;
// flex-flow: column nowrap;
// align-items: center;
// }
// `;

// const StyledCardWrapper = styled.div`
// display: flex;
// flex: 1;
// flex-direction: column;
// @media (max-width: 768px) {
// width: 80%;
// }
// `;
