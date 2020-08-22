import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer style={{backgroundColor: 'transparent'}}>
        <FooterTab>
          <Button vertical>
            <Icon type="FontAwesome" name="user" style={{color: 'white'}} />
            <Text style={{color: 'white'}}>Profile</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" name="comments" style={{color: 'white'}} />
            <Text style={{color: 'white'}}>Review</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" name="trophy" style={{color: 'white'}} />
            <Text style={{color: 'white'}}>Rewards</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" name="at" style={{color: 'white'}} />
            <Text style={{color: 'white'}}>Wall</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
