import { Dimensions, StyleSheet, Platform } from "react-native";
import Scaling from "../../helper/Scaling";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  textTitle: {
    fontSize: Scaling.moderateScale(14),
    fontWeight: "bold",
    marginVertical: Scaling.moderateScale(2),
    flexWrap: 'wrap',
    color: '#505050'
  },
  textContent: {
    fontSize: Scaling.moderateScale(12),
    marginVertical: Scaling.moderateScale(2),
    color: '#505050'
  },
  textContentBold: {
    fontSize: Scaling.moderateScale(12),
    marginVertical: Scaling.moderateScale(2),
    color: '#000',
    fontWeight: '700'
  },
  greyColor: {
    color: '#787878'
  },
  whiteColor: {
    color: '#fff'
  },
  violetColor:{
    color: '#6c5ce7'
  },
  mhMedium: {
    marginHorizontal: Scaling.moderateScale(15)
  },
  containerRating:{
    backgroundColor: '#00b894',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    width: Scaling.moderateScale(50),
    borderRadius: Scaling.moderateScale(50),
    marginBottom: Scaling.moderateScale(5)
  },
  iconStyle: {
    color: '#fff',
    fontSize: Scaling.moderateScale(12),
    fontWeight: "bold",
  },
  ratingText: {
    fontSize: Scaling.moderateScale(12),
    marginVertical: Scaling.moderateScale(2),
    color: '#fff',
    fontWeight: '700',
  },
  topImage: {
    width: screenWidth,
    height: Scaling.moderateScale(150),
    resizeMode: 'cover'
  },
  containerTopImage:{
    position: 'relative',
    // backgroundColor: 'yellow'
  },
  topMenu: {
    position:'absolute',
    // width:'100%',
    // backgroundColor: 'aqua',
    top: Scaling.moderateScale(100),
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: Scaling.moderateScale(2)
  },
  topMenuList: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    // paddingHorizontal: Scaling.moderateScale(30),
    width: Scaling.moderateScale(90),
    marginRight: Scaling.moderateScale(5),
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Scaling.moderateScale(2)
  },
  topMenuTitle: {
    fontWeight: '700',
    fontSize: Scaling.moderateScale(11),
    color: '#fff'
  },
  iconTopMenu: {
    fontSize: 20,
    color: '#fff'
  },
  titleContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  placeContainer: {
    marginHorizontal: Scaling.moderateScale(10),
    marginTop: Scaling.moderateScale(10)
  },
  favourite: {
    // flex: 1,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: Scaling.moderateScale(40),
    height: Scaling.moderateScale(40),
    justifyContent:'center',
    alignItems:'center',
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 10,
  },
  operationalContainer: {
    borderTopColor:'#ededed',
    borderTopWidth:1,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    margin: Scaling.moderateScale(5),
    paddingVertical: Scaling.moderateScale(10),
  },
  operationalToggle:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statusText: {
    color: '#00b894',
    fontWeight: '700'
  },
  listOperational:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTitle:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginVertical: Scaling.moderateScale(10),
    marginHorizontal: Scaling.moderateScale(5),
  },
  containerAbout: {
    // backgroundColor: 'yellow',
    marginVertical: Scaling.moderateScale(5),
    marginHorizontal: Scaling.moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: '#ededed'
  },
  titleAbout: {
    fontSize: Scaling.moderateScale(12),
    color: 'grey',
    fontWeight: '700'
  },
  descAboutText: {
    fontSize: Scaling.moderateScale(13),
    paddingVertical: Scaling.moderateScale(5),
  },
  containerImageFacility:{
    // backgroundColor:'yellow',
    justifyContent: 'center',
    alignItems:'center',
    margin: Scaling.moderateScale(5),
    paddingHorizontal: Scaling.moderateScale(5)
  },
  imageFacility: {
    width: Scaling.moderateScale(30),
    height: Scaling.moderateScale(30),
  },
  gallery: {
    width: Scaling.moderateScale(80),
    height: Scaling.moderateScale(80),
  },
  containerLoader: {
    height: screenHeight * 0.8,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
 
});
