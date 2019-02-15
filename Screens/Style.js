import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#ccc'
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
    marginBottom: '5%',
    marginRight: '2%',
    marginLeft: '8%',
    marginTop: '0%',
    
  },
  icons: {
    width: 20,
    height: 20,
    marginBottom: '1%',
    marginTop: '0%',
    marginLeft : '5%',
    
  },
    textBox: {
   // alignItems: 'center',
    //justifyContent: 'center',
    borderColor: 'green',
  },
});
