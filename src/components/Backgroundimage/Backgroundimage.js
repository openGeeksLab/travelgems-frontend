import React from 'react';
import { Image } from 'react-native';

const imageUrl =
  'https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000';

const Backgroundimage = ({ resizeMode = 'cover', containStyle }) => (
  <Image
    style={[
      {
        flex: 1,
        height: 408,
        resizeMode,
      },
      containStyle,
    ]}
    source={{ uri: imageUrl }}
  />
);

export default Backgroundimage;
