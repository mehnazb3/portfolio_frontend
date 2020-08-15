import React from 'react';
import {  Row, Col, Divider, Timeline  } from 'antd';
import {DegreeWrapper} from './styles'
// import { Progress, Card, Timeline, List, Avatar } from 'antd';

const Degree = () => {
  return <DegreeWrapper id='about_me' className='med-theme'>
    <Row gutter={[32, 32]} style={{justifyContent: 'flex-end'}}>
      <Col span={6}>
        <b>Education</b>
      </Col>
      <Col span={16}>
        <Timeline>
            <Timeline.Item color="#21CEB5">
              <b>S.G.R.R public school</b>
              <p>High school (2008)</p>
            </Timeline.Item>
            <Timeline.Item color="#21CEB5">
              <b>K.V OLF</b>
              <p>Intermediate school (2010)</p>
            </Timeline.Item>
            <Timeline.Item color="#21CEB5">
              <b>G. B. Pant University of Agriculture and Technology</b>
              <p>Bachelor of Technology (2010-14)</p>
            </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
    
  </DegreeWrapper>
}

export default Degree;