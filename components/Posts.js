import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Card,
  CardItem,
  Content,
  Thumbnail,
  Badge,
  Text,
  Button,
  Icon,
  Left,
  Middle,
  Right,
  Body,
} from 'native-base';
import {ShareDialog} from 'react-native-fbsdk';
import avatar from '../assets/avatar.png';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://facebook.com',
      contentDescription: 'Facebook sharing is easy!',
    };
    this.state = {
      shareLinkContent: shareLinkContent,
      count: 0,
    };
  }

  shareLinkWithShareDialog() {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent)
      .then(function (canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      })
      .then(
        function (result) {
          if (result.isCancelled) {
            alert('Share cancelled');
          } else {
            alert('Share success with postId: ' + result.postId);
          }
        },
        function (error) {
          alert('Share fail with error: ' + error);
        },
      );
  }

  render() {
    const reviews = this.props.data;
    const share = this.shareLinkWithShareDialog.bind(this);
    const incrementItem = () => {
      this.setState({count: this.state.count + 1});
    };
    const decreaseItem = () => {
      this.setState({count: this.state.count - 1});
    };
    const date = (time) => {
      const d = new Date(time);
      const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      };
      const t = d.toLocaleDateString(undefined, options);
      return t;
    };
    return reviews.map((item, i) => (
      <>
        <Card
          key={i}
          transparent
          style={{flex: 0, backgroundColor: 'transparent'}}>
          <CardItem style={{backgroundColor: 'transparent'}}>
            <Left>
              {item.isAnonymous === 'TRUE' ? (
                <Thumbnail square source={avatar} style={styles.thumbnail} />
              ) : (
                <Thumbnail
                  square
                  source={{
                    uri: 'https://i.pravatar.cc/150',
                  }}
                  style={styles.thumbnail}
                />
              )}

              <Body>
                <Text style={{color: 'white'}}>
                  {item.isAnonymous === 'TRUE' ? 'Anonymous' : item.giverName}
                </Text>
                <Text note style={{color: 'white'}}>
                  {item['receiverBusinessInfo.name']}
                </Text>
                <Text note style={{color: 'white'}}>
                  {item['receiverBusinessInfo.city']}
                </Text>
              </Body>
            </Left>
            <Right>
              <Text style={{color: 'white'}}>{date(item.submissionTime)}</Text>
            </Right>
          </CardItem>
          <ReviewIcons
            good={item.isGoodReview}
            helpful={item['goodOptions.helpful']}
            smart={item['goodOptions.smart']}
            fun={item['goodOptions.fun']}
            fast={item['goodOptions.fast']}
          />
          <CardItem style={{backgroundColor: 'transparent'}}>
            <Body>
              {/* <Image
              source={{uri: 'https://picsum.photos/200/300'}}
              style={{height: 200, width: 200, flex: 1}}
            /> */}
              <Text style={{color: 'white'}}>{item.experienceDetail}</Text>
            </Body>
          </CardItem>
          <CardItem style={{backgroundColor: 'transparent'}}>
            <Left>
              <Button
                bordered
                transparent
                textStyle={{color: '#87838B'}}
                onPress={incrementItem}
                style={{borderColor: 'white', paddingStart: 15, marginEnd: 10}}>
                <Icon
                  type="FontAwesome"
                  name="heart"
                  style={{color: 'white'}}
                />
                <Text style={{color: 'white'}}>{this.state.count} Likes</Text>
              </Button>
              <Button
                bordered
                transparent
                iconLeft
                onPress={share}
                style={{borderColor: 'white'}}>
                <Icon
                  type="FontAwesome"
                  name="facebook"
                  style={{color: 'white'}}
                />
                <Text style={{color: 'white'}}>Share</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
        <View style={styles.lineStyle} />
      </>
    ));
  }
}

const ReviewIcons = (props) => {
  return (
    <>
      <CardItem style={{backgroundColor: 'transparent'}}>
        <Left>
          {props.good === 'TRUE' ? (
            <Icon
              type="FontAwesome5"
              name="thumbs-up"
              style={{color: 'white', marginEnd: 5}}
            />
          ) : null}
          {props.helpful === 'TRUE' ? (
            <Icon
              type="FontAwesome5"
              name="hands-helping"
              style={{color: 'white', marginEnd: 5}}
            />
          ) : null}
          {props.smart === 'TRUE' ? (
            <Icon
              type="FontAwesome5"
              name="lightbulb"
              style={{color: 'white', marginEnd: 5}}
            />
          ) : null}
          {props.fun === 'TRUE' ? (
            <Icon
              type="FontAwesome5"
              name="gamepad"
              style={{color: 'white', marginEnd: 5}}
            />
          ) : null}
          {props.fast === 'TRUE' ? (
            <Icon
              type="FontAwesome5"
              name="bolt"
              style={{color: 'white', marginEnd: 5}}
            />
          ) : null}
        </Left>
      </CardItem>
    </>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    borderRadius: 10,
  },
  lineStyle: {
    width: '100%',
    borderWidth: 0.8,
    borderColor: 'grey',
    marginVertical: 10,
  },
});
