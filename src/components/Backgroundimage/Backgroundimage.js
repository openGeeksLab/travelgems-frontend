import React from 'react';
import { ImageBackground, View } from 'react-native';

const imageUrl =
  'https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000';

const Backgroundimage = ({ containStyle, blur }) => (
  <ImageBackground
    style={[
      {
        flex: 1,
        height: 408,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      },
      containStyle,
    ]}
    source={{ uri: imageUrl }}
  >
    {blur && (
      <View
        style={{
          marginBottom: 0,
          height: 150,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      />
    )}
  </ImageBackground>
);

export default Backgroundimage;
