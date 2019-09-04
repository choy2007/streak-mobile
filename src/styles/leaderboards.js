import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column'
  },
  header: {
    flex: 0.15,
    justifyContent: 'center',
    backgroundColor: '#FBFBFB',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
  },
    shadowOpacity: 1,
    borderBottomColor: '#999999',
    borderBottomWidth: 0.3
  },
  headerText: {
    paddingTop: 5,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  logoContainer: {
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoStyle: {
    width: width/6,
    height: height/6,
  },
  listContainer: {
    alignItems: 'center',
    backgroundColor: '#FBFBFB'
  },
  listItem: {
    flexDirection: 'row',
    width: width,
    height: 85,
    backgroundColor: '#FBFBFB',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  playersStats: {
    flex: 0.92,
    paddingLeft: 5,
    flexDirection: 'row'
  },
  styleRankNumber: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  styleRank: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  playersName: {
    flex: 0.6,
    justifyContent: 'center'
  },
  coin: {
    width: 14,
    height: 14
  },
  coinRight: {
    width: 14,
    height: 14,
    paddingLeft: 10
  },
  styleListItemProps: {
    flex: 0.3,
    justifyContent: 'center'
  },
  styleListItemPropsRight: {
    flex: 0.25,
    justifyContent: 'center'
  },
  nameText: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 18
  },
  listItemPoints: {
    flex: 0.5,
    fontSize: 20,
    paddingLeft: 4
  },
  listItemPointsRight: {
    fontSize: 16,
    paddingLeft: 1
  },
  listItemComment: {
    color: 'grey',
    fontSize: 13,
    opacity: 0.7
  },
  listItemCommentRight: {
    color: 'grey',
    fontSize: 13,
    opacity: 0.7,
    paddingLeft: 3
  },
  listContainer: {
    height: height/1,
    backgroundColor: 'white',
  },
});