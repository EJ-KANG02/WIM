import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMenuItem = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#F7D358',
  color: '#FFFFFF',
  borderRadius: '5px',
  transition: 'transform 0.3s, width 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
    width: '320px',
  },
  maxWidth: '200%',
}));

function MenuItem({ title }) {
  return <StyledMenuItem>{title}</StyledMenuItem>;
}

export default MenuItem;
