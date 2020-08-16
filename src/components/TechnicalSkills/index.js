import React from "react"
import { Row, Col, Divider, List, Avatar } from "antd";
import {
  AppleOutlined,
  QqOutlined,
  WindowsOutlined,
} from "@ant-design/icons"
import { TechnicalSkillsWrapper, SubHeading } from "./styles"
// import { Progress, Card, Timeline, List, Avatar } from 'antd';

const TechnicalSkills = () => {
  const web_technologies = [
    {
      name: "Ruby on Rails",
      logo: "/assets/logos/ruby.png",
    },
    {
      name: "ReactJS",
      logo: "/assets/logos/react_logo.png",
    },
    {
      name: "HTML",
      logo: "/assets/logos/html_logo.png",
    },
    {
      name: "CSS",
      logo: "/assets/logos/css_logo.png",
    },
    {
      name: "JavaScript",
      logo: "/assets/logos/javascript.png",
    },
    {
      name: "RSpec",
      logo: "/assets/logos/rspec_logo.png",
    },
  ]

  const db_technologies = [
    {
      name: "Postgres",
      logo: "/assets/logos/postgresql_logo.png",
    },
    {
      name: "MySql",
      logo: "/assets/logos/mysql_logo.png",
    }, 
  ]

  const OS_preferences = [
    {
      name: "MacOS",
      logo: "/assets/logos/macos.jpg",
    },
    {
      name: "Linux(Ubuntu)",
      logo: "/assets/logos/linux_logo.jpg",
    },
    {
      name: "Windows",
      logo: "/assets/logos/windows_logo.png",
    }, 
  ]

  const tools_and_servers = [
    {
      name: "AWS",
      logo: "/assets/logos/aws.png",
    },
    {
      name: "Heroku",
      logo: "/assets/logos/heroku_logo.png",
    },
    {
      name: "Redis",
      logo: "/assets/logos/redis_logo.png",
    },
    {
      name: "Solr",
      logo: "/assets/logos/solr_logo.png",
    },
    {
      name: "Elastic Search",
      logo:"/assets/logos/es_search_logo.png",
    },
    {
      name: "Memcache",
      logo: "/assets/logos/memcache_logo.png",
    }, 
    {
      name: "Github",
      logo: "/assets/logos/github_logo.jpg",
    },
    {
      name: "Sublime",
      logo: "/assets/logos/sublime_logo.png",
    }, 
    {
      name: "VS Code",
      logo: "/assets/logos/vscode_logo.jpeg",
    }, 
    {
      name: "MS Office",
      logo: "/assets/logos/msoffice_logo.png",
    }, 
  ]

  const DisplaySkillsSection = (collection) => {
    return (
      <Row gutter={[25, 25]} style={{ justifyContent: "center" }}>
        {collection.map( technology => {
          return <Col span={3}>
            <div style={{textAlign: '-webkit-center'}}>
              <img src={technology.logo} style={{width: '50px', height: '50px', objectFit: 'cover', display: 'block'}}/>
              <div>{technology.name}</div>
            </div>
          </Col>
        })}
      </Row>
    )
  }
  return (
    <TechnicalSkillsWrapper>
      <Divider orientation={"center"}>
        <h3>Technical Skills</h3>
      </Divider>
      <SubHeading>Web Technologies</SubHeading>
      {DisplaySkillsSection(web_technologies)}
      <SubHeading>DB Technologies</SubHeading>
      {DisplaySkillsSection(db_technologies)}
      <SubHeading>Tools and Servers</SubHeading>
      {DisplaySkillsSection(tools_and_servers)}
      <SubHeading>OS Preferences</SubHeading>
      {DisplaySkillsSection(OS_preferences)}
    </TechnicalSkillsWrapper>
  )
}

export default TechnicalSkills
