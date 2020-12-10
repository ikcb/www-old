import 'assets/styles/_sectionMembers.scss';

import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Gravatar from 'react-gravatar';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function SectionMembers() {
  const teamMembers = [
    {
      name: 'Divyansh Singh',
      role: 'President',
      github: 'brc-dd',
      id: '2019kucp1041',
      linkedin: 'brc-dd'
    },
    {
      name: 'Vaibhav Jain',
      role: 'App Development Lead',
      github: 'vaibhav-jain18',
      id: '2019kucp1088',
      linkedin: 'vaibhav-jain18'
    },
    {
      name: 'Pavnesh Chaturvedi',
      role: 'Robotics and ML Lead',
      github: 'pc-beast',
      id: '2019kuec2037',
      linkedin: 'pavnesh-chaturvedi-208b15197'
    },
    {
      name: 'Omkar Deshmukh',
      role: 'Competitive Programming Lead',
      github: 'H4ckOm',
      id: '2019kucp1009',
      linkedin: 'omkarvd'
    },
    {
      name: 'Tanmay Indwar',
      role: 'Web Development Lead',
      github: 'SinUponCos-May',
      id: '2019kucp1084',
      linkedin: 'tanmay-indwar-26b951190'
    },
    {
      name: 'Achalesh Lakhotiya',
      role: 'Content Writer',
      github: 'achalesh27022003',
      id: '2019kuec2036',
      linkedin: 'achal2702'
    },
    {
      name: 'Mradul Agarwal',
      role: 'UI/UX Designer',
      github: 'mradul71',
      id: '2019kucp1086',
      linkedin: 'mradul-agarwal'
    },
    {
      name: 'Saurabh Meena',
      role: 'Web Developer',
      github: 'saurabh41',
      id: '2019kucp1085',
      linkedin: 'saurabh-mina-a786681b8'
    },
    {
      name: 'Vipin Tripathi',
      role: 'Competitive Programmer',
      github: 'VIPIN-creator',
      id: '2019kucp1053',
      linkedin: 'vipin-tripathi-13a9a8190'
    }
  ];

  const MemberCard = member => (
    <Col xs={12} sm={6} lg={4} key={member.id} className="my-5">
      <Card bg="dark" className="text-center h-100 rounded-0 hover-item">
        <Card.Body>
          <Gravatar
            size={100}
            email={`${member.id}@iiitkota.ac.in`}
            className="rounded-circle"
          />
          <Card.Title className="text-uppercase mt-4">{member.name}</Card.Title>
          <Card.Subtitle className="pt-1 pb-2">{member.role}</Card.Subtitle>
          <Card.Link href={`https://github.com/${member.github}`}>
            <FaGithub />
          </Card.Link>
          <Card.Link href={`https://www.linkedin.com/in/${member.linkedin}`}>
            <FaLinkedinIn />
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container className="text-light py-5 mx-auto">
      <h1 className="display-0 text-center pb-5">Core Team</h1>
      <Row className="justify-content-center">
        {teamMembers.map(member => MemberCard(member))}
      </Row>
    </Container>
  );
}
