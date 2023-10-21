import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Button, Card } from "react-native-paper";
import UpdateInfoModal from "./UpdatedInfoModal";

interface ProfileCardProps {
  userDetails: {
    name: string;
    email: string;
    mobile: string;
    qualification: string;
    profilePic: string;
    profession: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userDetails }) => {
  const [open, setOpen] = useState(false);
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text style={styles.title}>PROFILE</Text>
      <Card contentStyle={styles.container} elevation={0}>
        <View style={styles.section1}>
          <Image
            style={styles.profileIcon}
            source={require("../assets/images/doctor_profile.png")}
          />

          <View
            style={{
              flexDirection: "column",
              gap: 5,
            }}
          >
            <Text style={styles.name}>{userDetails.name}</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  borderColor: "#fff",
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  borderRadius: 5,
                }}
              >
                Change profile icon
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section2}>
          <View style={styles.infoRow}>
            <View style={styles.section1}>
              <Image
                style={styles.icon}
                source={require("../assets/images/email.png")}
              />
              <Text style={styles.text}>{userDetails.email}</Text>
            </View>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image
                style={styles.icon}
                source={require("../assets/images/right.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.section1}>
              <Image
                style={styles.icon}
                source={require("../assets/images/email.png")}
              />
              <Text style={styles.text}>{userDetails.mobile}</Text>
            </View>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image
                style={styles.icon}
                source={require("../assets/images/right.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.section1}>
              <Image
                style={styles.icon}
                source={require("../assets/images/email.png")}
              />
              <Text style={styles.text}>{userDetails.profession}</Text>
            </View>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image
                style={styles.icon}
                source={require("../assets/images/right.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.section1}>
              <Image
                style={styles.icon}
                source={require("../assets/images/email.png")}
              />
              <Text style={styles.text}>{userDetails.qualification}</Text>
            </View>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image
                style={styles.icon}
                source={require("../assets/images/right.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Card>

      <UpdateInfoModal
        title="Update Mobile number"
        inputLabel="Phone"
        onYes={() => {}}
        open={open}
        src={require("../assets/images/bell.png")}
        onRequestClose={() => setOpen(false)}
      />
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    fontSize: 20,
    color: "#6E6E6E",
  },
  container: {
    gap: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    backgroundColor: "#0080A8",
  },
  section1: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    gap: 5,
  },
  section2: {
    flexDirection: "column",
    gap: 20,
  },
  profileIcon: {
    width: 60,
    height: 60,
  },
  icon: {
    width: 16,
    height: 12,
  },
  text: {
    fontSize: 12,
    color: "#fff",
    paddingLeft: 20,
  },
  name: {
    fontSize: 15,
    color: "#fff",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
