import DeviceInfo from './DeviceInfo';
import Content from './Content';
import ConsumerData from './ConsumerData';
import Products from './Products';
import Poll from './Poll';
import Favourites from './Favourites';

export default function micro_apps() {
  return [
    DeviceInfo,
    Content,
    Products,
    Poll,
    ConsumerData,
    Favourites
  ]
};
