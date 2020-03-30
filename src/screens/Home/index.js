import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image, 
  ScrollView
} from "react-native";

import axios from "axios";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux'

import styles from "./styles";

const BASE_URL = 'http://snorlax.tempat.com'

class Home extends Component {
  state = {
    listData: [],
    page: 1
  };

  componentDidMount() {
    this.getTokenAccess()
  }


  getTokenAccess = async () => {
    const url = `${BASE_URL}/api/v1/auth/token`

    try {
      let response = await axios({
        method: "post",
        url,
        data: {
          grant_type: 'client_credentials',
          client_id:'0vCQowPnun8UHLmIeoWhr2Cs17xVcY34loiA8Kd6', // move later
          client_secret: 'oRXrdH4jdfRS4rZ5PrfpwwQ549EYpSS47r0xRt9X75eq4zcrd9uUOYU2JvMiur4blUzgTII3nxjvK49HIOfqF58xweEuWdkHDHPTF8KtH6V2bIdY4Ss4iq6440svbzUS' // move later
        }
      });
      console.log('res======', response)
      if(response) {
        this.setState({
          token: response.data.access_token
        })
        this.getListData(response.data.access_token)
      }
    } catch (err) {
      alert(err.message);
    }
  }

  getListData= async (token) => {
    const url = 'https://bulbasur.tempat.com/api/v1/search'
    
    try {
      let response = await axios({
        method: "get",
        url,
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          page: this.state.page,
          class: 'provinsi',
          per_page: 20,
          query: 'ayam',
          idx: 7
        }
      })
      console.log('res==list====', response)
      if(response.data.msg === 'Berhasil') {
        this.setState({
          listData: [...response.data.data]
        })
      }
    } catch (err) {
      alert(err.message)
    }
  }


  renderList = item => {
    // console.log('list------>',item._source.branch_images.image_url_thumb)
    let ratingColor = item._source.rating_score < 3.5 ? {backgroundColor: '#fdcb6e'} : null
    return (
      <TouchableOpacity
        key={item._id}
        onPress={() => Actions.detailPage({slug: item._source.slug, token: this.state.token, title: item._source.branch_name})}
        style={styles.containerList}
      >
        <View style={styles.thumbContainer}>
          <Image source={{uri:item._source.branch_images.image_url_thumb}} style={styles.thumb}/>
        </View>
        <View style={styles.containerDesc}>
          <Text style={styles.textTitle}>{item._source.branch_name}</Text>
          <Text style={styles.textContent}>{item._source.administration_address}</Text>
          <Text style={[styles.textContent, styles.greyColor]}>{item._source.price_string}</Text>
          <Text style={[styles.textContent, styles.greyColor]}>{item._source.branch_group_activity[0] && item._source.branch_group_activity[0].activity_group.group_name}</Text>
          <View style={[styles.containerRating, ratingColor]}>
            <Icon name="star" style={styles.iconStyle}/>
            <Text style={styles.ratingText}>{item._source.rating_score}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    // console.log('home--render--------', this.state)
    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={[styles.textTitle, styles.whiteColor]}>List Tempat</Text>
          </View>
          {this.state.listData.length > 0 ? 
            <FlatList
                data={this.state.listData}
                renderItem={({ item }) => this.renderList(item)}
                keyExtractor={item => item._id}
              />
          :
            <View style={styles.containerLoader}>
              <ActivityIndicator />
            </View>
          }
        
          <TouchableOpacity style={styles.buttonLoad}>
            <Text style={[styles.textTitle, styles.violetColor]}>Muat Lebih</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    )
  }
}


export default Home
