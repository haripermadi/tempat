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
import moment from 'moment'

import styles from "./styles";

const BASE_URL = 'http://snorlax.tempat.com'

class DetailPage extends Component {
  state = {
    data: null,
    isShownOperational: false,
    isHappyDeal: false,
    isAbout: false,
    isMenu: false,
    isReview: false,
  };

  componentDidMount() {
    this.getDetailData()
  }

  getDetailData = async() => {
    const url = `${BASE_URL}/api/v2/branch/${this.props.slug}`

    try {
      let response = await axios({
        method: "get",
        url,
        headers: {
          Authorization: `Bearer ${this.props.token}`
        },
       
      });
      console.log('res======', response)
      if(response) {
        this.setState({
          data: response.data.data
        })
      }
    } catch (err) {
      alert(err.message);
    }
  }

  renderTopImage(data) {
    return (
      <View style={styles.containerTopImage}>
         <Image source={{uri:data.branch_images.all[0] && data.branch_images.all[0].image_url}} style={styles.topImage}/>
         <View style={styles.topMenu}>
          <TouchableOpacity style={styles.topMenuList}>
            <Icon name="food" style={styles.iconTopMenu}/>
            <Text style={styles.topMenuTitle}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topMenuList}>
            <Icon name="silverware-fork-knife" style={styles.iconTopMenu}/>
            <Text style={styles.topMenuTitle}>Makanan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topMenuList}>
            <Icon name="castle" style={styles.iconTopMenu}/>
            <Text style={styles.topMenuTitle}>Suanana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topMenuList}>
            <Text style={styles.topMenuTitle}>Semua Gambar</Text>
          </TouchableOpacity>
         </View>
       </View>
    )
  }

  renderListOperational(data) {
    let day = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
    return (
      <View style={styles.listOperational}>
        <Text style={styles.textContent}>{day[data.day]}</Text>
        <Text style={styles.textContentBold}>{data.hour_start} - {data.hour_end}</Text>
      </View>
    )
  }

  renderTitleMenu(text, type){
    return (
      <TouchableOpacity style={styles.containerTitle} onPress={() => this.setState({[type] : !this.state[type]})}>
         <Text style={styles.textTitle}>{text}</Text>
         <Icon name={this.state[type] ? 'chevron-up':'chevron-down'} size={25}/>
       </TouchableOpacity>
    )
  }

  renderAboutPlace(data) {
    return (
      <View>
        {this.renderAboutData('Tipe Restoran', data.branch_type)}
        {this.renderAboutData('Rata-rata Harga', data.price_info)}
        {this.renderAboutData('Fasilitas', data.facilities)}
        {this.renderAboutData('Rescheduled & cancellation Policy', data.policy ? data.policy : '-')}
        {this.renderAboutData('Informasi Lainnya', data.payment_info)}

      </View>
    )
  }

  renderAboutData(title, desc) {
    return (
      <View style={styles.containerAbout}>
        <Text style={styles.titleAbout}>{title}</Text>
        {title === 'Fasilitas' ? 
        <View>
          <FlatList
            data={desc}
            renderItem={({ item }) => this.renderListFacilities(item)}
            keyExtractor={item => `${item.id}`}
            horizontal
           />
        </View>
        :
        <Text style={styles.descAboutText}>{desc}</Text>
        }
      </View>
    )
  }

  renderListFacilities(item) {
    return (
      <View style={styles.containerImageFacility}>
        <Image source={{uri: item.image_url}} style={styles.imageFacility}/>
        <Text style={styles.textContent}>{item.facility.name}</Text>
      </View>
    )
  }

  render() {
    console.log('detail -----', this.props,'---s', this.state)
    if(this.state.data) {
    let data = this.state.data
    return (
      <ScrollView style={styles.container}>
       {this.renderTopImage(data)}
       <View style={styles.placeContainer}>
         <View style={styles.titleContainer}>
           <View style={{flex:1}}>
              <Text style={styles.textTitle}>{data.branch_name}</Text>
           </View>
           <TouchableOpacity style={styles.favourite}>
             <Icon name="heart-outline" size={25}/>
           </TouchableOpacity>
         </View>
         <View>
            <View style={styles.containerRating}>
              <Icon name="star" style={styles.iconStyle}/>
              <Text style={styles.ratingText}>{data.rating_score}</Text>
            </View>
            <Text>{data.building.properties.address}</Text>
            <Text>{data.branch_tags[0] && data.branch_tags[0].tag}</Text>
         </View>
       </View>

       <TouchableOpacity style={styles.operationalContainer} onPress={() => this.setState({isShownOperational: !this.state.isShownOperational})}>
         <View style={styles.operationalToggle}>
          <Text style={styles.textContent}><Text style={styles.statusText}>Buka</Text> - Tutup pada pukul {data.operational_hours[0].hour_end}</Text>
          <Icon name={this.state.isShownOperational ? 'chevron-up':'chevron-down'} size={25}/>
         </View>
         {
           this.state.isShownOperational ?
           <FlatList
            data={data.operational_hours}
            renderItem={({ item }) => this.renderListOperational(item)}
            keyExtractor={item => `${item.id}`}
           />
           :null
         }
       </TouchableOpacity>
       <View>
         {this.renderTitleMenu('Happy Deals', 'isHappyDeal')}
         {this.state.isHappyDeal && <Text style={[styles.textContent, styles.mhMedium]}>{data.is_happy_hour ? 'Ada' : 'Tidak ada'}</Text>}
          
         {this.renderTitleMenu('Tentang','isAbout')}
         {this.state.isAbout && this.renderAboutPlace(data)}
         {this.renderTitleMenu('Menu & Galery','isMenu')}
         {this.state.isMenu && (
           <View style={styles.containerAbout}>
             <Image source={{uri:data.branch_images.all[0] && data.branch_images.all[0].image_url}} style={styles.gallery}/>
             <Text style={styles.titleAbout}>Semua Gambar</Text>
             <Text style={styles.textContent}>{data.branch_images.all.length} foto</Text>
           </View>
         )}
         {this.renderTitleMenu('Ulasan', 'isReview')}
       </View>
      </ScrollView>
    )
    }else {
      return (
        <View style={styles.containerLoader}>
          <ActivityIndicator />
        </View>
      )
    }
  }
}


export default DetailPage
