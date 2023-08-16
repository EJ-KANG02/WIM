import React from 'react';
import { Stack } from '@mui/material';
import MenuItem from './MenuItem';

function MenuStack() {
  return (
    <Stack spacing={5}>
      <MenuItem title="새 포트폴리오" />
      <MenuItem title="기존 포트폴리오" />
      <MenuItem title="예시 포트폴리오" />
      <MenuItem title="도움말" />
    </Stack>
  );
}

export default MenuStack;