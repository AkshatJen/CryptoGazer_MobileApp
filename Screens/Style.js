import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#EBEBEE'
  },
  imageBox: {
    flex:1,
    //width: '30%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    overlayColor: 'white',
  },
  title: {
    flex: 2,
    color: 'black',
    //textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: '2%',
   // marginTop: '2.5%',
  },
  pageStyle: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: '0%',
  },
  iconRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: '5%',
    
  },
  icons: {
    flex : 1,
    marginBottom: '1%',
    marginTop: '0%',
    marginLeft : '5%',
    
  },
    textBox: {
      flexDirection : 'column',
      alignItems : 'flex-start',
   // alignItems: 'center',
    //justifyContent: 'center'
  },
});
