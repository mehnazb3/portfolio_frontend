import React from "react"
import { Row, Col, Divider, Progress } from "antd"
import { QualificationWrapper, ProgressWrapper } from "./styles"
// import { Progress, Card, Timeline, List, Avatar } from 'antd';

const Qualification = () => {
  return (
    <QualificationWrapper id="about_me" className="med-theme">
      <Row gutter={[32, 32]} style={{ justifyContent: "flex-end" }}>
        <Col span={6}>
          <b>ABOUT ME</b>
        </Col>
        <Col span={16}>
          I’m very passionate about my work and an extrovert with a thirst for
          knowledge. I’m interested in Badminton, Photography and Watercolour
          painting.
          <br /> Full Stack Developer with 6 years experience in the areas of
          software developing and programming in Ruby On Rails
          <ProgressWrapper>
            <Row gutter={[30, 30]}>
              <Col span={6}>
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
              <Col span={6}>
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
              <Col span={6}>
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
              <Col span={6}>
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#4F95BD",
                    "100%": "#21CEB5",
                  }}
                  percent={80}
                  format={() => "80% HTML/CSS"}
                />
              </Col>
            </Row>
          </ProgressWrapper>
        </Col>
      </Row>
    </QualificationWrapper>
  )
}

export default Qualification
