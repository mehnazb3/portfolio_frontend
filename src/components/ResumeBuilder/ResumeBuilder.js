import React from 'react';
import Aux from '../../hoc/Aux';
import './ResumeBuilder.css';
import 'antd/dist/antd.css';
import { Progress, Card, Timeline, List, Avatar } from 'antd';

const ResumeBuilder = () => {
    const certifications = [
      {
        name: 'AWS Certified Solution Architect - Associate',
        logo: '/assets/logos/aws.png',
      },
      {
        name: 'Ruby on Rails 5 Essential Training from Lynda',
        logo: '/assets/logos/ruby.png',
      },
      {
        name: 'JavaScript and AJAX certification from Lynda',
        logo: '/assets/logos/javascript.png',
      },{
        name: 'Ruby testing with RSPEC',
        logo: '/assets/logos/rspec.png',
      }
    ]
    return (
        <Aux>
          <div className='resume-layout'>
            <div className='resume-container' id='about_me'>
              <h6 className='resume-header'>About Me</h6>
              <p className='resume-body'>I’m very passionate about my work and an extrovert with a thirst for knowledge.  I’m interested in Badminton, Photography and Watercolour painting.<br/> Full Stack Developer with 5 years experience in the areas of software developing and programming in Ruby On Rails</p>
            </div>
            <div>
            <Progress
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                style={{margin: '25px'}}
                width={100}
                status="active"
                percent={90}
              />
              <span className='progess-text'>Ruby on Rails</span>
              <Progress
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                style={{margin: '25px'}}
                width={100}
                status="active"
                percent={60}
              />
              <span className='progess-text'>AWS</span>
              <Progress
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                style={{margin: '25px'}}
                width={100}
                status="active"
                percent={70}
              />
              <span className='progess-text'>React</span>
            </div>
            <div className='resume-container' id='work_edxperience'>
              <h6 className='resume-header'>Work Experience</h6>
              <div className='resume-body'>
                <div className='project-overview'>
                  <h5>Tata Consultancy Services</h5>
                  <h6 className='yellow'>IT Analyst</h6>
                  <h6>August 2014 - Feb 2019</h6>
                  <h6>Role and responsibilities -</h6>
                  <ul>
                    <li>Requirement gathering, analysing and visualising workflow.</li>
                    <li>Cooperating and communicating with other team members for efficient work.</li>
                    <li>Managing and providing support and guidance to other team members.</li>
                    <li>Code Deployment</li>
                  </ul>
                  <div>
                    <h6>Projects -</h6>
                    <p style={{display: 'flex', marginLeft: '-100px'}}>
                    <Card title="Tata Innoverse" style={{ width: 180, marginRight: '10px', backgroundImage: 'linear-gradient(to right, #108ee9 , #87d068)' }}>
                      <p>Role - Technical Lead</p>
                      <p>Primary Technology - Ruby on Rails</p>
                      {/* <p>It is the Ideation platform across Tata Companies</p> */}
                    </Card>
                    <Card title="The TataEdge" style={{ width: 180, marginRight: '10px', backgroundImage: 'linear-gradient(to right, #108ee9 , #87d068)' }}>
                      <p>Role - Technical Lead</p>
                      <p>Primary Technology - Ryby on Rails</p>
                      {/* <p>A Best Practices Platform for TATA group of employees, which captures the best practices followed by various Tata Group of Companies</p> */}
                    </Card>
                    <Card title="GIMS" style={{ width: 180, marginRight: '10px', backgroundImage: 'linear-gradient(to right, #108ee9 , #87d068)' }}>
                      <p>Role - Technical Lead</p>
                      <p>Primary Technology - Ruby on Rails</p>
                      {/* <p>It is the Ideation platform across Tata Companies</p> */}
                    </Card>
                    <Card title="I2I" style={{ width: 180, marginRight: '10px', backgroundImage: 'linear-gradient(to right, #108ee9 , #87d068)' }}>
                      <p>Role - Technical Lead</p>
                      <p>Primary Technology - Ryby on Rails</p>
                      {/* <p>A Best Practices Platform for TATA group of employees, which captures the best practices followed by various Tata Group of Companies</p> */}
                    </Card>
                    </p>
                  </div>
                  
                </div>
                <br/>
                <div className='project-overview'>
                  <h5>Medwing Gmbh</h5>
                  <h6 className='yellow'>Full Stack Developer</h6>
                  <h6>March 2019 - Sept 2019</h6>
                  <h6>Role and responsibilities -</h6>
                  <ul>
                    <li>Requirement gathering, analysing and visualising workflow.</li>
                    <li>Cooperating and communicating with other team members for efficient work.</li>
                    <li>Managing and providing support and guidance to other team members.</li>
                    <li>Code Deployment</li>
                  </ul>
                  <div>
                    <h6>Projects -</h6>
                    <p style={{display: 'flex', marginLeft: '-100px'}}>
                    <Card title="Leasing Apps" style={{ width: 180, marginRight: '10px', backgroundImage: 'linear-gradient(to right, #108ee9 , #87d068)' }}>
                      <p>Role - Full Stack Developer</p>
                      <p>Primary Technology - Ruby on Rails, React</p>
                      {/* <p>It is the Ideation platform across Tata Companies</p> */}
                    </Card>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className='resume-container' id='education'>
              <h6 className='resume-header'>Education</h6>
              <div className='timeline-body'>
                <Timeline>
                  <Timeline.Item color="green">
                    <p><b>S.G.R.R public school</b></p>
                    <p className='yellow'>High school (2008)</p>
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    <p><b>K.V OLF</b></p>
                    <p className='yellow'>Intermediate school (2010)</p>
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    <p><b>G. B. Pant University of Agriculture and Technology</b></p>
                    <p className='yellow'>Bachelor of Technology (2010-14)</p>
                  </Timeline.Item>
                </Timeline>
              </div>
            </div>

            <br/>
            <div className='resume-container' id='certifications'>
              <h6 className='resume-header'>Certifications</h6>
              <div className='timeline-body'>
              <List
                itemLayout="horizontal"
                dataSource={certifications}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.logo} />}
                      title={<a href="#">{item.name}</a>}
                    />
                  </List.Item>
                )}
              />
              </div>
            </div>
          </div>
        </Aux>  
    );
}
export default ResumeBuilder;