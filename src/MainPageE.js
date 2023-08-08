import React from 'react';

import {
  styled
} from '@mui/material/styles';

const Container = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `1290px`,
  height: `1500px`,
  left: `315px`,
  overflow: `hidden`,
});

const LeftPadding = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `315px`,
  height: `1500px`,
  left: `350px`,
  overflow: `hidden`,
});

const RightPadding = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `315px`,
  height: `1500px`,
  left: `1605px`,
  overflow: `hidden`,
});

const MenuPillarBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 0.5)`,
  width: `210px`,
  height: `1500px`,
  position: `absolute`,
});

const MenuContainer = styled("div")({
  display: `flex`,
  position: `absolute`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `600px`,
  height: `1200px`,
  top: `300px`,
  overflow: `hidden`,
});

const MenuSize = styled("div")({
  backgroundColor: `rgba(88,77,55,0.5)`, 
  display: `flex`,
  position: `absolute`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `400px`,
  height: `150px`,
});

const MenuOutsideBg = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `400px`,
  height: `150px`,
  position: `absolute`,
});

const MenuInsideBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 1)`,
  width: `400px`,
  height: `125px`,
  position: `absolute`,
});

const MenuText = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `25px`,
  letterSpacing: `0px`,
  position: `absolute`,
  left: `100px`,
  top: `60px`,
});

const Line = styled("div")({
  border: `0.75px solid rgba(0, 0, 0, 1)`,
  position: `absolute`,
});

const TitleTextSize = styled("div")({
    textAlign: `center`,
  whiteSpace: `pre-wrap`,
  position: `absolute`,
})

const TitleTextDesign = styled("div")({
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontSize: `22px`,
  letterSpacing: `0px`,
});

const DPContainer = styled("div")({
  display: `flex`,
  position: `absolute`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  overflow: `hidden`,
  width: `360px`, height: `240px`, left: `440px`,
});

const DPText = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `23px`,
  letterSpacing: `0px`,
});

const IntroTextSize = styled("div")({
  textAlign: `center`,
whiteSpace: `pre-wrap`,
position: `absolute`,
left: `560px`,
top: `340px`,
})

const IntroTextDesign = styled("div")({
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `25px`,
  letterSpacing: `0px`,
});

const LogoSize = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  position: `absolute`,
  left: `10px`,
  top: `200px`,
})

const LogoDesign = styled("div")({
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `75px`,
  letterSpacing: `0px`,
});

const UserDeviceSize =styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    position: `absolute`,
})

const UserDeviceDesign = styled("div")({
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `23px`,
  });

const Banner = styled("div")({
    backgroundColor: `rgba(247, 211, 88, 1)`,
    width: `1440px`,
    height: `300px`,
    position: `absolute`,
  });

function MainPage() {
  return (
      <Container>
        <LeftPadding />
        <RightPadding />
        <MenuPillarBg>
        </MenuPillarBg>
        <MenuContainer>
          <MenuSize style={{top: `800px`}}>
              <MenuOutsideBg />
              <MenuInsideBg style={{top: `13px`}} />
            <MenuText>
              {`QnA`}
            </MenuText>
          </MenuSize>

          <MenuSize style={{top: `600px`}}>
              <MenuOutsideBg />
              <MenuInsideBg style={{top: `13px`}} />
            <MenuText> 
              {`예시 포트폴리오 구경`}
            </MenuText>
          </MenuSize>

          <MenuSize style={{top: `400px`}}>
              <MenuOutsideBg />
              <MenuInsideBg style={{top: `13px`}} />
            <MenuText>
              {`기존 포트폴리오 수정`}
            </MenuText>
          </MenuSize>
          <MenuSize style={{top: `200px`}}>
              <MenuOutsideBg />
              <MenuInsideBg style={{top: `13px`}} />
            <MenuText>
              {`새 포트폴리오 제작`}
            </MenuText>
          </MenuSize>
        </MenuContainer>

        <DPContainer style={{ top: `560px`,}}>
          <DPText>
          {`정은지
동국대학교 컴퓨터공학과 재학
010-2655-9910
bian87@dgu.ac.kr`}
          </DPText>
          </DPContainer>
          <DPContainer style={{ top: `760px`,}}>
          <DPText>
          {`강은지
동국대학교 컴퓨터공학과 재학
010- `}
          </DPText>
        </DPContainer>

        <Line style={{ width: `200px`, left: `540px`, top: `500px`,}} />
        
        <TitleTextSize style={{ left: `440px`, top: `486px` }}>
            <TitleTextDesign>
          {`제작자`}
          </TitleTextDesign>
        </TitleTextSize>

        <Line style={{width: `200px`, left: `920px`, top: `500px`,}} />
        <TitleTextSize style={{ left: `780px`, top: `486px`}}>
            <TitleTextDesign>
          {`설립 년도`}
          </TitleTextDesign>
        </TitleTextSize>

        <TitleTextSize style={{ left: `1160px`, top: `486px`}}>
            <TitleTextDesign>
          {`2023.8`}
          </TitleTextDesign>
        </TitleTextSize>

        <Line style={{width: `1020px`, left: `240px`, top: `400px`}} />
        <IntroTextSize>
          <IntroTextDesign>
          {`간단하게 내 포트홀리오 만들기! Who Am I?`}
          </IntroTextDesign>
        </IntroTextSize>

            <Banner>  
            </Banner>

            <LogoSize>
              <LogoDesign>
          {`W.I.M`}
          </LogoDesign>
        </LogoSize>

        <UserDeviceSize style={{ left: `1120px`, top: `10px` }}>
            <UserDeviceDesign> 
              {`Login`}
            </UserDeviceDesign>
            </UserDeviceSize>
            <UserDeviceSize style={{ left: `1220px`, top: `10px` }}>
        <UserDeviceDesign>
              {`Join`}
            </UserDeviceDesign>
            </UserDeviceSize>
  
      </Container>);
  }

export default MainPage;

  