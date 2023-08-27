import React, { useState } from 'react';
import { Card, CardContent, Typography, Container, Grid, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuStack from '../../components/Menu/MenuStack'; // 메뉴 스택 컴포넌트를 불러옴
import '../../styles/Main/Main.css'; // 메인 페이지 스타일을 불러옴

function Main() {
  // 상태 정의
  const [inputValues, setInputValues] = useState({
    name: '',
    school: '',
    job: '',
  });
  const [saved, setSaved] = useState(false); // 저장 상태 여부
  const [editMode, setEditMode] = useState(false); // 수정 모드 여부

  // 입력값 변경 처리
  const handleInputChange = (field, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  // 수정 모드 토글
  const toggleEditMode = () => {
      setEditMode((prevEditMode) => !prevEditMode); // 수정 모드 토글s
  };

  const handleSave = () => {
    setSaved(true); // 저장 상태 변경
    setEditMode(false); // 수정 모드 비활성화
  };

  // 입력 필드 렌더링
  const renderField = (field) => {
    const value = inputValues[field];
    return (
      <div>
        <Typography variant="body1" className="field-label">
          {field.charAt(0).toUpperCase() + field.slice(1)}:
        </Typography>
        {!saved && (
          <div>
            {editMode ? (
              <TextField
                fullWidth
                variant="outlined"
                value={value}
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            ) : (
              <Typography variant="body1" className="field-value">
                {value}
              </Typography>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Container fixed>
      {/* 페이지 헤더 카드 */}
      <Card className="header-card">
        <CardContent>
          <Typography gutterBottom variant="h2" component="header" className="header-title">
            WIM
          </Typography>
        </CardContent>
      </Card>
      <Typography gutterBottom variant="h5" component="div" className="page-title">
        나만의 포트폴리오 만들기 !
      </Typography>
      
      <Grid container spacing={2}>
        {/* 왼쪽 메뉴 스택 */}
        <Grid item xs={3}>
          <MenuStack />
        </Grid>
        {/* 오른쪽 내용 */}
        <Grid item xs={9}>
          <Grid container spacing={0}>
            {/* 왼쪽 섹션 */}
            <Grid item xs={6}>
              <Typography variant="body1" className="field-label">
                School:
              </Typography>
              {renderField('school')} {/* School 입력 필드 렌더링 */}
            </Grid>
            {/* 오른쪽 섹션 */}
            <Grid item xs={6}>
              {['name', 'school', 'job'].map((field, index) => (
                <div key={index}>
                  {renderField(field)} {/* 이름, 학교, 직업 입력 필드 렌더링 */}
                </div>
              ))}
            </Grid>
          </Grid>
          {/* 수정 버튼 */}
          {!saved && (
            <div className="edit-save-button">
              <Button onClick={toggleEditMode}>{editMode ? 'Save' : 'Edit'}</Button>
              {editMode && <Button onClick={handleSave}>Save</Button>} {/* 수정 모드일 때 저장 버튼 */}
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
