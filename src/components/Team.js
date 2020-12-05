import 'assets/styles/_team.scss';

import { LinkedIn } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import Gravatar from 'react-gravatar';

function Team() {
  const TeamLeads = [
    {
      key: '1',
      name: 'Divyansh Singh',
      role: 'President',
      github: 'https://github.com/pc-beast',
      email: '2019kucp1041@iiitkota.ac.in',
      linkedin: 'https://www.linkedin.com/in/brc-dd/'
    },
    {
      key: '2',
      name: 'Vaibhav Jain',
      role: 'App Development Lead',
      github: 'https://github.com/pc-beast',
      email: '2019kucp1088@iiitkota.ac.in',
      linkedin: 'https://github.com/vaibhav-jain18'
    },
    {
      key: '3',
      name: 'Pavnesh Chaturvedi',
      role: 'Robotics and ML Lead',
      github: 'https://github.com/pc-beast',
      email: '2019kuec2037@iiitkota.ac.in',
      linkedin: 'https://www.linkedin.com/in/pavnesh-chaturvedi-208b15197/'
    },
    {
      key: '4',
      name: 'Omkar Deshmukh',
      role: 'Competitive Programming Lead',
      github: 'https://github.com/H4ckOm',
      email: '2019kucp1009@iiitkota.ac.in',
      linkedin: 'https://www.linkedin.com/in/omkarvd/'
    }
  ];

  const TeamMembers = [
    {
      key: '1',
      name: 'Mradul',
      role: 'UI/UX Designer',
      github: 'https://github.com/mradul71',
      email: '2019kucp1086@iiitkota.ac.in',
      linkedin: 'https://www.linkedin.com/in/mradul-agarwal'
    },
    {
      key: '2',
      name: 'Vipin Tripathi',
      role: 'UI/UX Designer',
      github: 'https://github.com/VIPIN-creator',
      email: '2019kucp1053@iiitkota.ac.in',
      linkedin: 'https://www.linkedin.com/in/vipin-tripathi-13a9a8190/'
    },
    {
      key: '3',
      name: 'Achalesh Lakhotiya',
      role: 'Content Writer',
      github: 'https://github.com/achalesh27022003',
      email: '2019kuec2036@iiitkota.ac.in',
      linkedin: 'https://www.linkedin.com/in/achal2702/'
    },
    {
      key: '4',
      name: 'Saurabh Meena',
      role: 'Web Developer',
      github: 'https://github.com/saurabh41',
      email: '2019kucp1085@iiitkota.ac.in',
      linkedin: 'https://www.linkedin.com/in/saurabh-mina-a786681b8/'
    },
    {
      key: '5',
      name: 'Tanmay Indwar',
      role: 'Web Developer',
      github: 'https://github.com/SinUponCos-May',
      email: '2019kucp1084@iiitkota.ac.in',
      linkedin: 'https://www.linkedin.com/in/tanmay-indwar-26b951190/'
    }
  ];

  const LeadCard = TeamLeads.map(Lead => {
    return (
      <div className="team-member mt-5 mr-5 ml-5" key={Lead.key}>
        <Gravatar
          size={100}
          email={Lead.email}
          className="team-img"
          style={{ padding: '5px' }}
        />
        <h3>{Lead.name}</h3>
        <p className="role">{Lead.role}</p>
        <a href={Lead.github}>
          <GitHubIcon />
        </a>
        <a href={Lead.linkedin}>
          <LinkedIn />
        </a>
      </div>
    );
  });

  const MemberCard = TeamMembers.map(Member => {
    return (
      <div className="team-member mt-5 mr-5 ml-5" key={Member.key}>
        <Gravatar
          size={100}
          email={Member.email}
          className="team-img"
          style={{ padding: '5px' }}
        />
        <h3>{Member.name}</h3>
        <p className="role">{Member.role}</p>
        <a href={Member.github}>
          <GitHubIcon />
        </a>
        <a href={Member.linkedin}>
          <LinkedIn />
        </a>
      </div>
    );
  });

  return (
    <div className="main">
      <h1 className="display-0 text-center">Core Team</h1>
      <div className="team mt-5">
        {LeadCard}
        {MemberCard}
      </div>
    </div>
  );
}

export default Team;
