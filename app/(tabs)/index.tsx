import { StyleSheet } from 'react-native';
import AppointmentManagement from '../../pages/appointment-management';
import Home from '../../pages/home';

export default function TabOneScreen() {
  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
