import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name='attach-money' size={28} color="#666" />
            <Icon name='visibility-off' size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title> Saldo disponivel </Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation> 
              Transferência de R$ 20,00 recebida de Felipe Lima no dia 02/05/2019 às 22:15 hrs
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
