import MapView, { Marker, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import Config from 'react-native-config';
import React, { Component, } from "react";
import styles from './styles.js'
import { Image, View, StatusBar, Linking, TouchableOpacity,ScrollView ,StyleSheet,Dimensions} from "react-native";
import { Container, H3, Title, Body, Left, Right } from "native-base";
import { Header, Button, Card } from "react-native-elements";
var window = Dimensions.get("window");
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

const MARKERS = [];
export default class Map extends Component {
    constructor(props) {

        super(props);
        this.state = {

            mapRegion: undefined,
            lastLat: 0.0,
            lastLong: 0.0,

            coords: [],

        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }
            });
        },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });


        this.watchID = navigator.geolocation.getCurrentPosition((position) => {
            debugger;
            let region = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.00922 * 1.5,
                longitudeDelta: 0.00421 * 1.5
            };
            (error) => console.log(new Date(), error),
                { timeout: 500000, maximumAge: 3000 }
            this.onRegionChange(region, region.latitude, region.longitude);
        });

    }

    onRegionChange(region, lastLat, lastLong) {
        this.setState({
            mapRegion: region,
            lastLat: lastLat || this.state.lastLat,
            lastLong: lastLong || this.state.lastLong
        });
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    onMapPress(e) {
        console.log(e.nativeEvent.coordinate.longitude);
        let region = {
            latitude: e.nativeEvent.coordinate.latitude + 2,
            longitude: e.nativeEvent.coordinate.longitude + 2,
            latitudeDelta: 0.00922 * 1.5,
            longitudeDelta: 0.00421 * 1.5
        }
        this.onRegionChange(region, region.latitude, region.longitude);
    }

    render() {
        const { region } = this.props;
        console.log(region);
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_DEFAULT}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    ref={ref => { this.map = ref; }}
                    style={styles.map}
                    region={this.state.mapRegion}
                    rightTimeToLoadMarkers={true}
                    showsPointsOfInterest={false}
                    showsCompass={false}
                    showsTraffic={true}
                    showsIndoors={true}
                    rotateEnabled={true}
                    toolbarEnabled={false}
                    style={styles.map}
                    region={this.state.mapRegion}
                    loadingEnabled
                    loadingIndicatorColor="#666666"
                    loadingBackgroundColor="#eeeeee"
                    cacheEnabled={true}
                    showsTraffic={true}
                    loadingEnabled={true}
                    showsBuildings={true}
                    showsUserLocation={true}
                    rotateEnabled={true}
                    showsMyLocationButton={true}
                    zoomEnabled={true}
                    showsMyLocationButton={true}
                    zoomEnabled={true}
                    maxZoomLevel={20}
                    onRegionChange={this.onRegionChange.bind(this)}
                    animated={true}>
                    <MapView.Marker
                        coordinate={{
                            latitude: (this.state.lastLat),
                            longitude: (this.state.lastLong),
                        }}>
                    </MapView.Marker>

                </MapView>

                <View >
                </View>
            </View>

        );
    }
}

   