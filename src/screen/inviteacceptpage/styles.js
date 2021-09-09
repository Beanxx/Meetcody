import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // marginLeft: '10%',
    paddingTop: 70,
  },
  topView: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  jusoView: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 200,
    height: 80,
    marginLeft: -15,
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    marginTop: 5,
    fontWeight: 'bold',
  },

  scheduleInfoText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '200',
  },
  scheduleInfoText2: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: '200',
  },
  button: {
    alignItems: 'center',
    borderColor: '#4C4C4C',
    backgroundColor: '#4C4C4C',
    padding: 10,
    width: 260,
    borderWidth: 2,
    borderRadius: 30,
    fontSize: 14,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    elevation: 5,
  },
  buttonTextBold: {
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  },
  button2: {
    alignItems: 'center',
    borderColor: '#4374D9',
    padding: 7,
    marginTop: 10,
    width: 250,
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: '#4374D9',
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
  },

  buttonTextNoBox: {
    color: 'white',
    fontWeight: 'bold',
  },

  button3: {
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    paddingTop: 2,
    paddingBottom: 15,
    width: 250,
    fontSize: 15,

    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },

  friendlistWidth: {
    width: screenWidth,
  },

  buttonTextNoBox2: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },

  buttonTextNoBoxNotButton: {
    fontSize: 17,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
