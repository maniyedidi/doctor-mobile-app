import { ScrollView, StyleSheet, View } from "react-native";
import NotificationCard from "../../components/NotificationCard";
import ProfileCard from "../../components/ProfileCard";
import NotificationSettings from "../../components/NotificationSettings";
import PrivacyAndSecurity from "../../components/PrivacyAndSecurity";
import Logout from "../../components/Logout";

const userDetails = {
  name: "Dr. Rakesh Jha",
  email: "testuser@gmail.com",
  mobile: "8765456789",
  qualification: "Qualifications & Experience",
  profilePic: "string",
  profession: "Profession",
};

export default function Settings() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileCard userDetails={userDetails} />
        <NotificationSettings userDetails={userDetails} />
        <PrivacyAndSecurity userDetails={userDetails} />
        <Logout/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
