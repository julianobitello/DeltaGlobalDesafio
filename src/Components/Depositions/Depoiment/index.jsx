import React from 'react';

import { Container, Content, User, UserInfo } from './styles';

export default function Depoiment(props) {
  return (
    <Container>
      <Content>
        <img src={props.img} alt='depoiment' />
        <h3>{props.comment}</h3>
        <User>
          <img src={props.imgUser} alt='user' />
          <UserInfo>
            <p>{props.name}</p>
            <p>{props.date}</p>
          </UserInfo>
        </User>
      </Content>
    </Container>
  );
}
