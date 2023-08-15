import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MenuStack() {
  return (
      <Stack spacing={5}>
        <Item>새 포트폴리오</Item>
        <Item>기존 포트폴리오</Item>
        <Item>예시 포트폴리오</Item>
        <Item>도움말</Item>
      </Stack>
  );
}

function Article(){
  return  <Typography component="article">
  정은지 컴퓨터공학 전공
</Typography>
}


export default function Main() {
  return (
    <Container fixed>
      <Card>
  <CardMedia
    sx={{ height: 140 }}
    title="Banner"
  />
  <CardContent>
    <Typography gutterBottom variant="h2" component="div">
      WIM
    </Typography>
  </CardContent>
</Card>
<Typography gutterBottom variant="h5" component="div" sx={{mb: 8}}>
      나만의 포트폴리오 만들기 !
    </Typography>
    <Grid container spacing={2}>
        <Grid item xs={3}>
          <MenuStack />
        </Grid>
        <Grid item xs={9}>
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
}
