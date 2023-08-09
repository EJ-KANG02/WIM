import React from 'react';
import { styled } from '@mui/material/styles';

const Container = styled("div")({
  display: "flex",
  position: "relative",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  overflow: "hidden",
});

const StyledDiv = styled("div")({
  position: "absolute",
});

const SideMenu = styled(StyledDiv)({
  backgroundColor: "rgba(247, 211, 88, 0.5)",
  width: "288px",
  height: "100%",
  left: "-75px",
  top: "0px",
});

const Menu = styled(StyledDiv)({
  flexDirection: "column",
  width: "400px",
  height: "150px",
  overflow: "hidden",
});

const BgOutside = styled(StyledDiv)({
  backgroundColor: "rgba(255, 255, 255, 1)",
  width: "100%",
  height: "100%",
  left: "0px",
  top: "0px",
});

const BgInside = styled(StyledDiv)({
  backgroundColor: "rgba(247, 211, 88, 1)",
  width: "100%",
  height: "80%",
  top: "13px",
});

const Text = styled("div")({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "25px",
  letterSpacing: "0px",
  textDecoration: "none",
  textTransform: "none",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

const Line = styled(StyledDiv)({
  border: "0.75px solid rgba(0, 0, 0, 1)",
  width: "50%",
  height: "0px",
  transform: "translate(-50%, -50%)",
});

const TextContainer = styled(StyledDiv)({
  textAlign: "center",
  whiteSpace: "pre-wrap",
  transform: "translate(-50%, -50%)",
});

const TextDesign = styled("div")({
  fontSynthesis: "none",
  color: "rgba(0, 0, 0, 1)",
  fontStyle: "normal",
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: "22px",
  letterSpacing: "0px",
  textDecoration: "none",
  textTransform: "none",
});

const DateText = styled(Text)({
  fontSize: "22px",
  left: "50%",
  top: "50%",
});

const Banner = styled("div")({
  backgroundColor: "rgba(247, 211, 88, 1)",
  width: "100%",
  height: "375px",
  position: "absolute",
  left: "-75px",
  top: "0px",
});

const Title = styled("div")({
  fontSize: "75px",
  width: "192px",
  height: "113.25px",
});

const Location = styled(StyledDiv)({
  position: "absolute",
  left: "1200px",
  top: "7px",
});

const Design = styled("div")({
  fontSize: "23px",
});

function MainPage() {
  return (
    <Container>
      <SideMenu></SideMenu>
      <Menu>
        <BgOutside></BgOutside>
        <BgInside></BgInside>
        <Text>QnA</Text>
      </Menu>
      <Line></Line>
      <TextContainer>
        <TextDesign>제작자</TextDesign>
      </TextContainer>
      <Line></Line>
      <TextContainer>
        <TextDesign>설립 년도</TextDesign>
      </TextContainer>
      <Menu>
        <BgOutside></BgOutside>
        <BgInside></BgInside>
        <Text>예시 포트폴리오 구경</Text>
      </Menu>
      <Menu>
        <BgOutside></BgOutside>
        <BgInside></BgInside>
        <Text>기존 포트폴리오 수정</Text>
      </Menu>
      <Menu>
        <BgOutside></BgOutside>
        <BgInside></BgInside>
        <Text>새 포트폴리오 제작</Text>
      </Menu>
      <DateText>2023.8</DateText>
      <Banner></Banner>
      <Title>W.I.M</Title>
      <Location>
        <Design>Login</Design>
      </Location>
      <Location style={{ left: "1140px" }}>
        <Design>Join</Design>
      </Location>
      <TextContainer>
        <TextDesign>간단하게 내 포트홀리오 만들기! Who Am I?</TextDesign>
      </TextContainer>
    </Container>
  );
}

export default MainPage;
