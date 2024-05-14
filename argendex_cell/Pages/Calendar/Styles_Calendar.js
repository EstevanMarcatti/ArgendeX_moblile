import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  

  search_box: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  bars: {
    width: 35,
    height: 35,

  },

  search_box: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 10,
    margin: 30,
    backgroundColor: '#fff',
  },

  carrossel: {
    flex: 1,
    flexDirection: 'row',
    width: 300,
  },

  slides: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'green',
  },

  calendar_image: {
    width: 400,
    height: 450,
    marginLeft: 8,
    marginBottom: 10,
  },

  carousel_image: {
    width: 410,
    height: 100,
    alignItems: "center",
    justifyContent: "center",

  }

});
