import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';
import ProgressCountdown from './components/ProgressCountdown';
import TokenSymbol from '../../components/TokenSymbol';
import useStatsForPool from '../../hooks/useStatsForPool';

const CemeteryCard = ({ bank }) => {
  const statsOnPool = useStatsForPool(bank);

  return (
    <>
    
    </>
  );
};

export default CemeteryCard;
