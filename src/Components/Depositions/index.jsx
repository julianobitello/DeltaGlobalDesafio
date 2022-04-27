import React from 'react';
import Depoiment from './Depoiment';
import img1 from '../../Assets/Images/image1.png';
import img2 from '../../Assets/Images/image2.png';
import img3 from '../../Assets/Images/image3.png';
import img4 from '../../Assets/Images/image4.png';

import { Container, Content } from './styles';

export default function Depositions() {
  return (
    <Container>
      <Content>
        <Depoiment
          img={img1}
          name='Souza costa'
          date='18 de Fevereiro de 2021'
          imgUser='https://thispersondoesnotexist.com/image'
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Depoiment
          img={img2}
          name='Juninho'
          date='18 de Fevereiro de 2021'
          imgUser='https://thispersondoesnotexist.com/image'
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Depoiment
          img={img3}
          name='Nicolas'
          date='18 de Fevereiro de 2021'
          imgUser='https://thispersondoesnotexist.com/image'
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Depoiment
          img={img4}
          name='Jenifer'
          date='18 de Fevereiro de 2021'
          imgUser='https://thispersondoesnotexist.com/image'
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Depoiment
          img={img1}
          name='Austin'
          date='18 de Fevereiro de 2021'
          imgUser='https://thispersondoesnotexist.com/image'
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
        <Depoiment
          img={img2}
          name='Carla'
          date='18 de Fevereiro de 2021'
          imgUser='https://thispersondoesnotexist.com/image'
          comment='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam'
        />
      </Content>
    </Container>
  );
}
