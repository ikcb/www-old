import 'assets/styles/_indexFooter.scss';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineMedium
} from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function IndexFooter() {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center pt-5">
          <Bounce>
            <a href="https://github.com/iiitkota-codebase">
              <AiOutlineGithub />
            </a>
            <a href="https://instagram.com/iiitkota_codebase">
              <AiOutlineInstagram />
            </a>
            <a href="mailto:codebase@iiitkota.tech">
              <AiOutlineMail />
            </a>
            <a href="https://medium.com/codebase-iiitkota">
              <AiOutlineMedium />
            </a>
            <a href="https://discord.com/invite/ddaskT9kaM">
              <FaDiscord />
            </a>
          </Bounce>
        </Row>
        <Row className="text-secondary justify-content-center pt-4 pb-5">
          <Fade delay={400} duration={1600}>
            © 2021 IIIT Kota CodeBase
          </Fade>
        </Row>
      </Container>
    </footer>
  );
}
