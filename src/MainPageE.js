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
  padding: `0px`,
  boxSizing: `border-box`,
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
  padding: `0px`,
  boxSizing: `border-box`,
  width: `315px`,
  height: `1500px`,
  overflow: `hidden`,
});

const RightPadding = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `315px`,
  height: `1500px`,
  left: `1605px`,
  overflow: `hidden`,
});

const Menu_PillarBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 0.5)`,
  width: `210px`,
  height: `1500px`,
  position: `absolute`,
});

const Menu_Container = styled("div")({
  display: `flex`,
  position: `absolute`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
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
  padding: `0px`,
  boxSizing: `border-box`,
  width: `400px`,
  height: `150px`,
});

const Menu_outsideBg = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `400px`,
  height: `150px`,
  position: `absolute`,
});

const Menu_insideBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 1)`,
  width: `400px`,
  height: `125px`,
  position: `absolute`,
});

const Menu_text = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `25px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `100px`,
  top: `60px`,
});

const Line_author = styled("div")({
  border: `0.75px solid rgba(0, 0, 0, 1)`,
  width: `208.5px`,
  height: `0px`,
  position: `absolute`,
  left: `548px`,
  top: `517px`,
});

const AuthorSize = styled("div")({
    textAlign: `center`,
  whiteSpace: `pre-wrap`,
  position: `absolute`,
    left: `450px`,
  top: `500px`,
})

const Author_design = styled("div")({
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Line_year = styled("div")({
  border: `0.75px solid rgba(0, 0, 0, 1)`,
  width: `150px`,
  height: `0px`,
  position: `absolute`,
  left: `940px`,
  top: `516px`,
});

const Year_cont = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    width: `171px`,
    height: `43.5px`,
    position: `absolute`,
    left: `760px`,
    top: `500px`,
})

const Year_design = styled("div")({
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const DP_Cont = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const SecondDPtext = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `23px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const FirstDPtext = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `23px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const DateDP = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1130px`,
  top: `500px`,
});

const Line_Banner = styled("div")({
  border: `0.75px solid rgba(0, 0, 0, 1)`,
  width: `1050px`,
  position: `absolute`,
  left: `240px`,
  top: `400px`,
});

const WhoAmI = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `22.5px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `500px`,
  height: `27px`,
  position: `absolute`,
  left: `560px`,
  top: `350px`,
});

const WIM = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  position: `absolute`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `75px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `192px`,
  height: `115px`,
  left: `70px`,
  top: `180px`,
});

const Login_location =styled("div")({
    position: `absolute`,
    left: `1200px`,
    top: `7px`,
})
const Login_design = styled("div")({
    textAlign: `center`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `23px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
  });

const Banner = styled("div")({
    backgroundColor: `rgba(247, 211, 88, 1)`,
    width: `1440px`,
    height: `300px`,
    position: `absolute`,
  });

const Join_location = styled("div")({
  position: `absolute`,
  left: `1140px`,
  top: `7px`,
})
const Join_design = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `23px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});


function MainPage() {
  return (
      <Container>
        <LeftPadding />
        <RightPadding />
        <Menu_PillarBg>
        </Menu_PillarBg>
        <Menu_Container>
          <MenuSize style={{top: `800px`}}>
              <Menu_outsideBg />
              <Menu_insideBg style={{top: `13px`}} />
            <Menu_text>
              {`QnA`}
            </Menu_text>
          </MenuSize>

          <MenuSize style={{top: `600px`}}>
              <Menu_outsideBg />
              <Menu_insideBg style={{top: `13px`}} />
            <Menu_text> 
              {`예시 포트폴리오 구경`}
            </Menu_text>
          </MenuSize>

          <MenuSize style={{top: `400px`}}>
              <Menu_outsideBg />
              <Menu_insideBg style={{top: `13px`}} />
            <Menu_text>
              {`기존 포트폴리오 수정`}
            </Menu_text>
          </MenuSize>
          <MenuSize style={{top: `200px`}}>
              <Menu_outsideBg />
              <Menu_insideBg style={{top: `13px`}} />
            <Menu_text>
              {`새 포트폴리오 제작`}
            </Menu_text>
          </MenuSize>
        </Menu_Container>
        
        <Line_author>
        </Line_author>
        
        <AuthorSize>
            <Author_design>
          {`제작자`}
          </Author_design>
        </AuthorSize>

        <Line_year>
        </Line_year>
        <Year_cont>
            <Year_design>
          {`설립 년도`}
          </Year_design>
        </Year_cont>

        <DP_Cont style={{ width: `360px`, height: `240px`, left: `440px`, top: `540px`,}}>
          <FirstDPtext>
          {`정은지
동국대학교 컴퓨터공학과 재학
010-2655-9910
bian87@dgu.ac.kr`}
          </FirstDPtext>
          </DP_Cont>
          <DP_Cont style={{ width: `360px`, height: `240px`, left: `440px`, top: `780px`,}}>
          <SecondDPtext>
          {`강은지
동국대학교 컴퓨터공학과 재학
010- `}
          </SecondDPtext>
        </DP_Cont>

          <DateDP>
            {`2023.8`}
          </DateDP>

            <Banner>  
            </Banner>

            <WIM>
          {`W.I.M`}
        </WIM>
        <Login_location>
            <Login_design>
              {`Login`}
            </Login_design>
            </Login_location>
            <Join_location>
        <Join_design>
              {`Join`}
            </Join_design>
            </Join_location>

        <Line_Banner>
        </Line_Banner>
        <WhoAmI>
          {`간단하게 내 포트홀리오 만들기! Who Am I?`}
        </WhoAmI>
  
      </Container>);

  }

export default MainPage;

  