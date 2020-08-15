import React from "react"
import { Row, Col, Divider, Card } from "antd"
import { WorkExperienceWrapper, CardWrapper } from "./styles"
// import { Progress, Card, Timeline, List, Avatar } from 'antd';

const WorkExperience = () => {
  return (
    <WorkExperienceWrapper id="work_experience">
      <Row gutter={[32, 32]} style={{ justifyContent: "flex-end" }}>
        <Col span={6}>
          <b>Work Experience</b>
        </Col>
        <Col span={16}>
          <CardWrapper>
            <Row gutter={[30, 30]}>
              <Col span={6}>
                <Card
                  title="Tata Innoverse"
                  style={{
                    backgroundImage: "linear-gradient(to right, #4F95BD , #21CEB5)",
                  }}
                >
                  <p>Role - Technical Lead</p>
                  <p>Primary Technology - Ruby on Rails</p>
                  <p>Tenure - Aug 2014 to Sep 2015</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="The TataEdge"
                  style={{
                    backgroundImage: "linear-gradient(to right, #4F95BD , #21CEB5)",
                  }}
                >
                  <p>Role - Technical Lead</p>
                  <p>Primary Technology - Ryby on Rails</p>
                  <p>Tenure - Sep 2015 to July 2016</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="GIMS"
                  style={{
                    backgroundImage: "linear-gradient(to right, #4F95BD , #21CEB5)",
                  }}
                >
                  <p>Role - Technical Lead</p>
                  <p>Primary Technology - Ruby on Rails</p>
                  <p>Tenure - Aug 2016 to Feb 2018</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="I2I"
                  style={{
                    backgroundImage: "linear-gradient(to right, #4F95BD , #21CEB5)",
                  }}
                >
                  <p>Role - Technical Lead</p>
                  <p>Primary Technology - Ryby on Rails</p>
                  <p>Tenure - Feb 2018 to March 2019</p>
                </Card>
              </Col>
            </Row>
          </CardWrapper>
        </Col>
      </Row>
    </WorkExperienceWrapper>
  )
}

export default WorkExperience
