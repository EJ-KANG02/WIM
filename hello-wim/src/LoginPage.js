import React from 'react';

import {
  styled
} from '@mui/material/styles';

const Container = styled("div")({
  display: `flex`,
  position: `relative`,
  boxSizing: `border-box`,
  width: `1290px`,
  height: `1500px`,
  left: `315px`,
  overflow: `hidden`,
});

const BgColor = styled("div")({
  backgroundColor: `rgba(247, 211, 88, 1)`,
  width: `1290px`,
  height: `1500px`,
  position: `absolute`,
});

const LogoSize = styled("div")({
    display: `flex`,
    whiteSpace: `pre-wrap`,
    position: `absolute`,
    boxSizing: `border-box`,
    left: `549px`,
  top: `191px`,
  });

const LogoDesign = styled("div")({
  textAlign: `center`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `75px`,
  letterSpacing: `0px`,
  position: `absolute`,
});

const LoginSize = styled("div")({
  display: `flex`,
  position: `relative`,
  boxSizing: `border-box`,
  width: `645px`,
  height: `750px`,
  left: `330px`,
  top: `375px`,
});

const LoginContainer = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `37px`,
  width: `645px`,
  height: `750px`,
  position: `absolute`,
});

const LogoLogin = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `50px`,
  letterSpacing: `0px`,
  position: `absolute`,
  left: `246px`,
  top: `95px`,
});

const Pw = styled("div")({
  display: `flex`,
  position: `absolute`,
  boxSizing: `border-box`,
  width: `500px`,
  height: `136px`,
  left: `63px`,
  top: `437px`,
});

const PwBlock = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `0.75px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  position: `absolute`,
  width: `500px`,
  height: `80px`,
  top: `56px`,
});

const PwInBlock = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(189, 189, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `25px`,
  letterSpacing: `0px`,
  position: `absolute`,
  left: `26px`,
  top: `79px`,
});

const TextPw = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  position: `absolute`,
  left: `190px`,
});

const Id = styled("div")({
  display: `flex`,
  position: `absolute`,
  boxSizing: `border-box`,
  width: `500px`,
  height: `136px`,
  left: `63px`,
  top: `237px`,
});

const IdBlock = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `0.75px solid rgba(0, 0, 0, 1)`,
  boxSizing: `border-box`,
  position: `absolute`,
  width: `500px`,
  height: `80px`,
  top: `56px`,
});

const IdInBlock = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(189, 189, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `25px`,
  letterSpacing: `0px`,
  position: `absolute`,
  left: `15px`,
  top: `79px`,
});

const TextId = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  position: `absolute`,
  left: `244px`,
});

const Notice = styled("div")({
  display: `flex`,
  position: `absolute`,
  boxSizing: `border-box`,
  width: `603.43px`,
  height: `90px`,
  left: `24px`,
  top: `634px`,
});

const TextNoticeId = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(247, 211, 88, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  width: `602px`,
  height: `45px`,
  position: `absolute`,
});

const TextNoticePw = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  color: `rgba(247, 211, 88, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  width: `602px`,
  height: `45px`,
  position: `absolute`,
  top: `45px`,
});

const RightPadding = styled("div")({
  display: `flex`,
  position: `absolute`,
  width: `315px`,
  height: `1500px`,
  left: `1605px`,
  overflow: `hidden`,
});

const LeftPadding = styled("div")({
  display: `flex`,
  position: `absolute`,
  width: `315px`,
  height: `1500px`,
  left: `630px`,
  top: `1500px`,
  overflow: `hidden`,
});


function LoginPage() {
  return (
      <Container>
        <BgColor>
        </BgColor>

        <LogoSize>
        <LogoDesign>
          {`W.I.M`}
        </LogoDesign>
        </LogoSize>

        <LoginSize>
          <LoginContainer>
          </LoginContainer>
          <LogoLogin>
            {`LOGIN`}
          </LogoLogin>

          <Pw>
            <PwBlock>
            </PwBlock>
            <PwInBlock>
              {`Password`}
            </PwInBlock>
            <TextPw>
              {`password`}
            </TextPw>
          </Pw>

          <Id>
            <IdBlock>
            </IdBlock>
            <IdInBlock>
              {`ID`}
            </IdInBlock>
            <TextId>
              {`ID`}
            </TextId>
          </Id>

          <Notice>
            <TextNoticeId>
              {`forget your ID? click me`}
            </TextNoticeId>
            <TextNoticePw>
              {`forget your password? click me`}
            </TextNoticePw>
          </Notice>
        </LoginSize>

        <RightPadding>
      </RightPadding>
      <LeftPadding>
      </LeftPadding>
      </Container>);

  }

export default LoginPage;

  