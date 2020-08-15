import React from "react"
import { Row, Col, Divider, Card, Timeline, List, Avatar } from "antd"
import { DegreeWrapper, CertificationsWrapper } from "./styles"
// import { CertificationsWrapper } from "../Certifications/styles"
// import { Progress, Card, Timeline, List, Avatar } from 'antd';

const Degree = () => {
  const certifications = [
    {
      name: "AWS Certified Solution Architect - Associate",
      logo: "/assets/logos/aws.png",
    },
    {
      name: "Ruby on Rails 5 Essential Training from Lynda",
      logo: "/assets/logos/ruby.png",
    },
    {
      name: "JavaScript and AJAX certification from Lynda",
      logo: "/assets/logos/javascript.png",
    },
    {
      name: "Ruby testing with RSPEC",
      logo: "/assets/logos/rspec.png",
    },
  ]

  return (
    <DegreeWrapper id="education">
      <Divider orientation={'center'}><h3>Education and Certifications</h3></Divider>
      <Row gutter={[32, 32]} style={{justifyContent: 'center', marginTop: '50px'}}>
        <Col span={10}>
          <Card >
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
          </Card>
        </Col>
        <Col span={10}>
          <Card >
            <List
              itemLayout="horizontal"
              dataSource={certifications}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.logo} />}
                    title={<a href="#">{item.name}</a>}
                  />
                </List.Item>
              )}
              />
          </Card>
        </Col>
      </Row>
    </DegreeWrapper>
  )
}

export default Degree
