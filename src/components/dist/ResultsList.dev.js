"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _ResultsDetail = _interopRequireDefault(require("./ResultsDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ResultsList = function ResultsList(_ref) {
  var results = _ref.results,
      header = _ref.header;

  if (results.length == 0) {
    return null;
  } // console.log(" **************************** >>>>>>>>>> Logging for items = " + results.length);
  // console.log(results[0]);
  // return (
  //     <View>
  //         <Text style={styles.headerStyle}>{header}</Text>
  //         {/* <Text style={styles.headerStyle}>{results[1].item.name}</Text> */}
  //         {/* <ResultsDetails result={results[0].item} /> */}
  //     </View>
  // );
  // return (
  //     <View>
  //         <Text style={styles.headerStyle}>{header}</Text>
  //         <FlatList
  //             horizontal
  //             data={results}
  //             showsHorizontalScrollIndicator ={false}
  //             keyExtractor={(result)=>{return result.id}}
  //             // renderItem = {({item})=>{
  //             //     return <ResultsDetails result={item}/>;
  //             // }}
  //             renderItem = { (result) => ResultsDetails(result.item)}
  //         />
  //     </View>
  // );

};

var styles = _reactNative.StyleSheet.create({
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  }
});

var _default = ResultsList;
exports["default"] = _default;