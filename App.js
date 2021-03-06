// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import Routes from './src/Routes';

// class App extends Component {

//   render() {
//     return (
//       <Routes />
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import { View, Text, StatusBar } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context"
// import { Icon, Input } from "native-base"
// import { responsiveFontSize, responsiveScreenHeight, responsiveWidth } from "react-native-responsive-dimensions"
// import TopBar from "./src/TobBar/index"
// import HomeWithoutDrop from "./src/HomeWithoutDrop/index"
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
//         <View style={{ flexDirection: "row", marginHorizontal: 15, justifyContent: "space-between", marginVertical: 10 }}>
//           <Icon ios="ios-menu" android="md-menu" />
//           <Text style={{ fontSize: responsiveFontSize(3) }}>HAVAZUSE<Text style={{ color: "#3fad72" }}>PLUS</Text></Text>
//           <Icon name="shopping-cart" type="Entypo" style={{ fontSize: 25, color: "#3fad72" }} />
//         </View>
//         <View style={{ borderWidth: 1, marginHorizontal: 15, borderColor: "gray", borderRadius: 15, flexDirection: "row", justifyContent: "center" }}>
//           <Icon name="search1" type="AntDesign" style={{ marginLeft: 10, fontSize: 25, marginVertical: 10 }} />
//           <Input
//             placeholder="Search" style={{ marginHorizontal: 10 }} />
//         </View>
//         <View style={{flex:1, marginTop:10}}>
//           {/* <TopBar/> */}
//           <HomeWithoutDrop/>
//         </View>

//       </SafeAreaView>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import { View, Text, StatusBar, Dimensions } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context"
// import { responsiveFontSize } from "react-native-responsive-dimensions"
// import { Icon } from "native-base"
// import TopBar2 from "./src/TopBar2/index"
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const windowWidthCenter = windowWidth / 3;
// const windowWidthV = windowWidth - 40;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//          <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
//          <View style={{ flexDirection: "row", marginHorizontal: 15, justifyContent: "space-between", marginVertical: 10 }}>
//            <Icon name="chevron-left" type="Entypo" />
//            <Text style={{ fontSize: responsiveFontSize(2.5) }}>Details</Text>
//            <Icon name="shopping-cart" type="Entypo" style={{ fontSize: 25, color: "#000" }} />
//          </View>
//          <View style={{flex:1}}>
//            <TopBar2/>
//          </View>
//          </SafeAreaView>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import { View, Text, StatusBar, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context"
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
// import { Icon } from "native-base"
// import { Divider } from "react-native-elements"
// import TopBarOrder from "./src/TopBarOrder/index"
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const windowWidthCenter = windowWidth / 3;
// const windowWidthV = windowWidth - 25;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
//         <View style={{ flexDirection: "row", marginHorizontal: 15, marginVertical: 10, justifyContent: "space-between" }}>
//           <Icon name="chevron-left" type="Entypo" />
//           <Text style={{ alignSelf: "center", fontSize: responsiveFontSize(2) }}>My Orders</Text>
//           <Text style={{ color: "white" }}>Cart</Text>
//         </View>
//         <View style={{flex:1}}>
//         <TopBarOrder/>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bname: "Click to Add",
      value: 3
    };
  }
  onc() {
    this.setState({ bname: "click to remove" })
  }
  pre() {
    this.setState({bname:"Click to Add"})
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => this.onc()} style={{ alignItems: "center", borderRadius: 10, justifyContent: "center", backgroundColor: "#3fad72", width: responsiveHeight(40), height: responsiveHeight(9) }}>
          <Text style={{ color: "white" }}>{this.state.bname}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pre()} style={{ marginTop:20, alignItems: "center", borderRadius: 10, justifyContent: "center", backgroundColor: "#3fad72", width: responsiveHeight(40), height: responsiveHeight(9) }}>
          <Text style={{ color: "white" }}>Reset</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default App;



