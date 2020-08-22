import React, {Component} from 'react';
import {
  Header,
  Left,
  Body,
  Center,
  Right,
  H2,
  Button,
  Icon,
  Tab,
  Tabs,
  TabHeading,
  Title,
} from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header transparent hasTabs>
        <Left />
        <Body>
          <Title style={{color: 'white'}}>Merci</Title>
        </Body>

        <Right>
          <Button transparent>
            <Icon type="FontAwesome" name="cog" style={{color: 'white'}} />
          </Button>
        </Right>
      </Header>
    );
  }
}
