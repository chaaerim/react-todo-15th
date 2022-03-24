import { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const ClockContainer = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: lighter;
  font-size: 27px;
`;

const Clock = () => {
  let timer = null;

  //moment.js 모듈 사용
  const [time, setTime] = useState(moment());

  // 처음 렌더링될 때만 실행
  useEffect(() => {
    timer = setInterval(() => {
      //현재 시간 불러오기
      setTime(moment());
      //1초마다 반복
    }, 1000);
  }, []);

  return <ClockContainer>{time.format('HH:mm:ss')}</ClockContainer>;
};
export default Clock;
