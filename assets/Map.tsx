import React from 'react';
import MapView, { Marker } from 'react-native-maps';

export type MeasuringDevice = {
    coordinate: any,
    title: string,
    description: string,
    intensity: number,
}

export default function Map({markers}: {markers: MeasuringDevice[]}) {
    return (
        <MapView
        region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    );
  }