import { Dimensions, StyleSheet, Platform } from "react-native";
import Scaling from "../../helper/Scaling";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: Scaling.moderateScale(10)
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
  greyColor: {
    color: '#787878'
  },
  whiteColor: {
    color: '#fff'
  },
  violetColor:{
    color: '#6c5ce7'
  },
  containerList: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    marginVertical: Scaling.moderateScale(5),
    justifyContent: 'space-around',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1
  },
  thumbContainer: {
    // backgroundColor: 'aqua',
    padding: Scaling.moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerDesc:{
    // backgroundColor: 'violet',
    paddingRight: Scaling.moderateScale(5),
    flex:1
  },
  thumb: {
    width: Scaling.moderateScale(70),
    height: Scaling.moderateScale(70),
    backgroundColor:'#fff',
    resizeMode: 'cover',
    borderRadius: Scaling.moderateScale(5)
  },
  containerTitle: {
    backgroundColor: '#a29bfe',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Scaling.moderateScale(5)
  },
  buttonLoad: {
    flex:1,
    borderColor: '#6c5ce7',
    borderWidth: 2,
    marginHorizontal: screenWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Scaling.moderateScale(5)
  },
  containerRating:{
    backgroundColor: '#00b894',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    width: Scaling.moderateScale(50),
    borderRadius: Scaling.moderateScale(50)
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
  containerLoader: {
    height: screenHeight * 0.8,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
});
