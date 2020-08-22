/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Content,
  H3,
  Icon,
  List,
  ListItem,
  Tab,
  Tabs,
  TabHeading,
  Text,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from './components/Header.js';
import AppFooter from './components/Footer.js';
import Posts from './components/Posts.js';
import merci from './merci.json';

const data = merci;

const App: () => React$Node = () => {
  return (
    <Container>
      <LinearGradient
        useAngle="true"
        angle={225}
        colors={['#ff6bb3', '#000e53']}
        locations={[0, 0.8, 0.9]}
        style={styles.linearGradient}>
        <AppHeader />
        <Tabs
          tabContainerStyle={{backgroundColor: 'transparent'}}
          tabBarUnderlineStyle={{backgroundColor: 'white'}}>
          <Tab
            style={{backgroundColor: 'transparent'}}
            heading={
              <TabHeading style={{backgroundColor: 'transparent'}}>
                <Text style={{color: 'white'}}>Gave</Text>
              </TabHeading>
            }>
            <Content padder>
              <Posts data={data} />
            </Content>
          </Tab>
          <Tab
            style={{backgroundColor: 'transparent'}}
            heading={
              <TabHeading style={{backgroundColor: 'transparent'}}>
                <Text style={{color: 'white'}}>Recieved</Text>
              </TabHeading>
            }>
            <Content>
              <Content padder>
                <Text>
                  <H3 style={{color: 'white'}}>
                    You have not received any reviews
                  </H3>
                </Text>
              </Content>
            </Content>
          </Tab>
        </Tabs>
        <AppFooter />
      </LinearGradient>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      'linear-gradient(225deg, rgba(255,107,179,1) 0%, rgba(0,14,83,1) 20%)',
  },
  linearGradient: {
    flex: 1,
  },
});

export default App;
