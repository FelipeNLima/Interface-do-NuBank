import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styles';


export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Felipe</Title>
            </Top>
            <Icon name='expand-more' size={20} color="#FFF" />
        </Container>    
    );
}