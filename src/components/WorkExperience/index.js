import React from "react"
import { Row, Col, Divider, Card, Avatar } from "antd"
import { WorkExperienceWrapper, CardWrapper, InfoList } from "./styles";
import {  EditOutlined, EllipsisOutlined, SettingOutlined  } from '@ant-design/icons';
// import { Progress, Card, Timeline, List, Avatar } from 'antd';

const { Meta } = Card;

const WorkExperience = () => {
  const getTataInnoverseDescription = () => {
    return <div>
      An ideation platform - I worked as a <b>Technical lead</b> from <i>Dec 2016</i> to <i>Feb 2019</i>. My responsibilities were:
      <InfoList>
        <li>
          Requirement gathering, analysing and visualising workflow.
        </li>
        <li>
          Code deployment
        </li>
        <li>
          Support and guidance to Team
        </li>
        <li>
          Delivering a quality code
        </li>
      </InfoList>
    </div>
  }

  const getEDGEDescription = () => {
    return <div>
      A Best Practices Platform - I worked as a <b>Technical lead</b> from <i>Nov 2014</i> to <i>Nov 2016</i>. My responsibilities were:
      <InfoList>
        <li>
          Requirement gathering, analysing and visualising workflow.
        </li>
        <li>
          AWS Code deployment
        </li>
        <li>
          Support and guidance to Team
        </li>
        <li>
          Delivering a quality code
        </li>
        <li>
          Interacting with clients
        </li>
      </InfoList>
    </div>
  }

  const getGIMSDescription = () => {
    return <div>
      An Innovation Management Platform - I worked as a <b>Senior Developer</b> from <i>July 2016</i> to <i>Dec 2016</i>. My responsibilities were:
      <InfoList>
        <li>
          Requirement gathering, analysing and visualising workflow.
        </li>
        <li>
          Delivering a quality code
        </li>
        <li>
          Research and Development
        </li>
      </InfoList>
    </div>
  }

  const getItoIDescription = () => {
    return <div>
      Idea Implementation Platform - I worked as a <b>Senior Developer</b> from <i>Jan 2016</i> to <i>July 2016</i>. My responsibilities were:
      <InfoList>
        <li>
          Requirement gathering, analysing and visualising workflow.
        </li>
        <li>
          Delivering a quality code
        </li>
        <li>
          POC's
        </li>
        <li>
          Guidance and support to other team members
        </li>
      </InfoList>
    </div>
  }

  const experienceCard = (title, description) => {
    return <div style={{margin: '20px'}}>
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={title}
          description={description}
        />
      </Card>
    </div>
  }
  return (
    <WorkExperienceWrapper id="work_experience">
      <Divider orientation={'center'}><h3>Work Experience</h3></Divider>
      <Row gutter={[8, 32]} justify="center">
        <Col span={8}>{experienceCard('Tata Innoverse', getTataInnoverseDescription())}</Col>
        <Col span={8}>{experienceCard('The TataEdge', getEDGEDescription())}</Col>
        <Col span={8}>{experienceCard('Group Innovation Management', getGIMSDescription())}</Col>
      </Row>
      <Row gutter={[8, 32]} justify="center">
        <Col span={8}>{experienceCard('Innovation To Implementation', getItoIDescription())}</Col>
        {/* TODO - Have description for these */}
        <Col span={8}>{experienceCard('Leasing App', getTataInnoverseDescription())}</Col>
        <Col span={8}>{experienceCard('Interview Scheduling Tool', getEDGEDescription())}</Col>
        
      </Row>
    </WorkExperienceWrapper>
  )
}

export default WorkExperience
