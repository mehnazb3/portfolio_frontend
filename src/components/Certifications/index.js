import React from "react"
import { Row, Col, Divider, List, Avatar } from "antd"
import { CertificationsWrapper } from "./styles"
// import { Progress, Card, Timeline, List, Avatar } from 'antd';

const Certifications = () => {
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
    <CertificationsWrapper id="certifications">
      <Row gutter={[32, 32]} style={{ justifyContent: "flex-end" }}>
        <Col span={6}>
          <b>Certifications</b>
        </Col>
        <Col span={16}>
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
        </Col>
      </Row>
    </CertificationsWrapper>
  )
}

export default Certifications
