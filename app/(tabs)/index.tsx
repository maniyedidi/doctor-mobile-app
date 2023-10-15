import { StyleSheet } from 'react-native';
import AppointmentManagement from '../../pages/appointment-management';

export default function TabOneScreen() {
  return (
    <AppointmentManagement/>
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
