import React from 'react';

import {
  styled
} from '@mui/material/styles';

const Main_Cont = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1920px`,
  height: `2000px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Whole_Cont = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1290px`,
  height: `1500px`,
  left: `315px`,
  top: `0px`,
  overflow: `hidden`,
});

const Menu_PillarBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 0.5)`,
  width: `288px`,
  height: `1500px`,
  position: `absolute`,
  left: `-75px`,
  top: `0px`,
});

const Menu_Cont = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `699px`,
  height: `900px`,
  left: `-38px`,
  top: `375px`,
  overflow: `hidden`,
});

const Menu4_cont = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `403px`,
  height: `150px`,
  left: `38px`,
  top: `690px`,
});

const Menu4_outsideBg = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `400px`,
  height: `150px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Menu4_insideBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 1)`,
  width: `400px`,
  height: `125px`,
  position: `absolute`,
  left: `0px`,
  top: `13px`,
});

const Menu3_cont = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `400px`,
  height: `150px`,
  left: `38px`,
  top: `500px`,
});

const Menu3_outsideBg = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `400px`,
  height: `150px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Menu3_insideBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 1)`,
  width: `400px`,
  height: `125px`,
  position: `absolute`,
  left: `0px`,
  top: `13px`,
});

const Menu2_cont = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `400px`,
  height: `150px`,
  left: `38px`,
  top: `315px`,
});

const Menu2_outsideBg = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `400px`,
  height: `150px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Menu2_insideBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 1)`,
  width: `400px`,
  height: `125px`,
  position: `absolute`,
  left: `0px`,
  top: `13px`,
});

const Menu1_cont = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `400px`,
  height: `150px`,
  left: `39px`,
  top: `128px`,
});

const Menu1_outsideBg = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `400px`,
  height: `150px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Menu1_insideBg = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 1)`,
  width: `400px`,
  height: `125px`,
  position: `absolute`,
  left: `0px`,
  top: `13px`,
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

const Author = styled("div")({
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
  left: `450px`,
  top: `500px`,
});

const Line_year = styled("div")({
  border: `0.75px solid rgba(0, 0, 0, 1)`,
  width: `150px`,
  height: `0px`,
  position: `absolute`,
  left: `940px`,
  top: `516px`,
});

const Year = styled("div")({
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
  width: `171px`,
  height: `43.5px`,
  position: `absolute`,
  left: `760px`,
  top: `500px`,
});

const Author_Cont = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `460px`,
  height: `420px`,
  left: `330px`,
  top: `540px`,
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
  width: `400px`,
  height: `160px`,
  position: `absolute`,
  left: `120px`,
  top: `250px`,
});

const FirtstDPtext = styled("div")({
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
  width: `400px`,
  height: `160px`,
  position: `absolute`,
  left: `120px`,
  top: `50px`,
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
  height: `0px`,
  position: `absolute`,
  left: `240px`,
  top: `477px`,
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
  top: `410px`,
});

const WIM = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
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
  height: `113.25px`,
  position: `absolute`,
  left: `70px`,
  top: `260px`,
});

const Login = styled("div")({
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
    position: `absolute`,
    left: `1200px`,
    top: `7px`,
  });

const Q18 = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 1)`,
  width: `75px`,
  height: `40px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Banner = styled("div")({
    backgroundColor: `rgba(247, 211, 88, 1)`,
    width: `1440px`,
    height: `375px`,
    position: `absolute`,
    left: `-75px`,
    top: `0px`,
  });

const Join = styled("div")({
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
  position: `absolute`,
  left: `1140px`,
  top: `7px`,
});


function MainPage() {
  return (
    <Main_Cont>
     
      <Whole_Cont>
        <Menu_PillarBg>
        </Menu_PillarBg>
        <Menu_Cont>
          <Menu4_cont>
              <Menu4_outsideBg>
              </Menu4_outsideBg>
              <Menu4_insideBg>
              </Menu4_insideBg>
            <Menu_text>
              {`QnA`}
            </Menu_text>
          </Menu4_cont>

          <Menu3_cont>
              <Menu3_outsideBg>
              </Menu3_outsideBg>
              <Menu3_insideBg>
              </Menu3_insideBg>
            <Menu_text>
              {`예시 포트폴리오 구경`}
            </Menu_text>
          </Menu3_cont>

          <Menu2_cont>
              <Menu2_outsideBg>
              </Menu2_outsideBg>
              <Menu2_insideBg>
              </Menu2_insideBg>
            <Menu_text>
              {`기존 포트폴리오 수정`}
            </Menu_text>
          </Menu2_cont>

          <Menu1_cont>
              <Menu1_outsideBg>
              </Menu1_outsideBg>
              <Menu1_insideBg>
              </Menu1_insideBg>
            <Menu_text>
              {`새 포트폴리오 제작`}
            </Menu_text>
          </Menu1_cont>
        </Menu_Cont>
        
        <Line_author>
        </Line_author>
        <Author>
          {`제작자`}
        </Author>

        <Line_year>
        </Line_year>
        <Year>
          {`설립 년도`}
        </Year>

        <Author_Cont>
          <SecondDPtext>
            {`강은지
동국대학교 컴퓨터공학과 재학
010-
`}
          </SecondDPtext>
          <FirtstDPtext>
            {`정은지
동국대학교 컴퓨터공학과 재학
010-2655-9910
bian87@dgu.ac.kr`}
          </FirtstDPtext>
        </Author_Cont>

          <DateDP>
            {`2023.8`}
          </DateDP>

            <Banner>  
            </Banner>

            <WIM>
          {`W.I.M`}
        </WIM>

            <Login>
              {`Login`}
            </Login>
        <Join>
              {`Join`}
            </Join>

        <Line_Banner>
        </Line_Banner>
        <WhoAmI>
          {`간단하게 내 포트홀리오 만들기! Who Am I?`}
        </WhoAmI>

      </Whole_Cont>
      
    </Main_Cont>);

  }

export default MainPage;

  