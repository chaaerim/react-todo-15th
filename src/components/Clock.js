import { useEffect, useState } from 'react';
import moment from 'moment';

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

  return <h2>{time.format('HH:mm:ss')}</h2>;
};
export default Clock;
