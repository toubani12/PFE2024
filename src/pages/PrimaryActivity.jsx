import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const PrimaryActivity = () => (
  <Card
    hoverable
    style={{
      width: '80vh',maxWidth: '50%',
    }}
    cover={<img alt="example" src="https://newsroom.cisco.com/c/dam/r/newsroom/en/us/assets/a/y2022/m10/Networking_Academy_25_Hero2_1200x675.jpg" />}
  >
    <Meta title="Networking Academy" description="https://www.netacad.com/" />
  </Card>
);
export default PrimaryActivity;