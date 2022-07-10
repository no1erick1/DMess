import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem';

import ChatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.page}>
     <FlatList
      data={ChatRoomsData}
      renderItem={({item})=><ChatRoomItem chatRoom={item} />}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white"
  },
});
