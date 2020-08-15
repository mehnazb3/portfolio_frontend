import React from "react"
import { Row, Col, Divider, Progress } from "antd"
import { QualificationWrapper, ProgressWrapper } from "./styles"
// import { Progress, Card, Timeline, List, Avatar } from 'antd';

const Qualification = () => {
  return (
    <QualificationWrapper id="about_me">
      <Divider orientation={'center'}><h3>ABOUT ME</h3></Divider>
      <p>
        I’m very passionate about my work and an extrovert with a thirst for
          knowledge. I’m interested in Badminton, Photography and Watercolour
          painting.
          <br /> Full Stack Developer with 6 years experience in the areas of
          software developing and programming in Ruby On Rails
      </p>
      <ProgressWrapper>
        <Row gutter={[10, 10]}>
          <Col span={4}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#4F95BD",
                "100%": "#21CEB5",
              }}
              percent={90}
              format={() => "90% ROR"}
            />
          </Col>
          <Col span={4}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#4F95BD",
                "100%": "#21CEB5",
              }}
              percent={60}
              format={() => "60% AWS"}
            />
          </Col>
          <Col span={4}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#4F95BD",
                "100%": "#21CEB5",
              }}
              percent={75}
              format={() => "75% React"}
            />
          </Col>
          <Col span={4}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#4F95BD",
                "100%": "#21CEB5",
              }}
              percent={80}
              format={() => "80% HTML"}
            />
          </Col>
          <Col span={4}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#4F95BD",
                "100%": "#21CEB5",
              }}
              percent={80}
              format={() => "80% CSS"}
            />
          </Col>
          <Col span={4}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#4F95BD",
                "100%": "#21CEB5",
              }}
              percent={90}
              format={() => "90% Postgres"}
            />
          </Col>
        </Row>
      </ProgressWrapper>
    </QualificationWrapper>
  )
}

export default Qualification
