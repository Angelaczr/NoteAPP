import React, { useState, useEffect } from "react";
import { Box, Text, Image, VStack, ScrollView } from "@gluestack-ui/themed";
<<<<<<< HEAD
import { Button } from "../../components";
import { clearStorage, getData } from "../../utils";
import FIREBASE from "../../config/FIREBASE/index.js";

const Profile = ({ navigation }) => {
    const [profile, setProfile] = useState(null);

    const getUserData = () => {
        getData("user").then((res) => {
            const data = res;
            if (data) {
                console.log("isi data", data);
                setProfile(data);
            } else {
                // navigation.replace('Login');
            }
        });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            getUserData();
        });

        return () => {
            unsubscribe();
        };
    }, [navigation]);

    const onSubmit = (profile) => {
        if (profile) {
            FIREBASE.auth()
                .signOut()
                .then(() => {
                    // Sign-out successful.
                    clearStorage();
                    navigation.replace("MainApp");
                })
                .catch((error) => {
                    // An error happened.
                    alert(error);
                });
        } else {
            navigation.replace("Login");
        }
    };

    return (
        <Box
            mt={"$5"}
            mx={"$5"}
            backgroundColor="$blueGray100"
            flex={1}
            marginTop={"$20"}
            flexDirection="column"
        >
            <ScrollView>
                <VStack backgroundColor="$blueGray100" width={"$full"} mb={"$10"}>
                    <Image
                        source={require("../../assets/images/avatar.png")}
                        size="2xl"
                        borderRadius={"$full"}
                        alignSelf="center"
                        alt="Foto Profil"
                    />
                    <Text
                        fontSize={"$xl"}
                        alignSelf="center"
                        marginTop={"$5"}
                        fontWeight="$bold"
                    >
                        {profile?.nama}
                    </Text>
                </VStack>
                <Box
                    flexDirection="column"
                    bgColor="$white"
                    shadowColor="$black"
                    shadowOffset={{ width: 0, height: 2 }}
                    shadowOpacity={"$25"}
                    shadowRadius={"$3.5"}
                    justifyContent="space-evenly"
                    p={"$5"}
                    borderRadius={"$xl"}
                >
=======
import { Button } from "../../components/kecil";

const Profile = ({ navigation }) => {
    return (
        <Box mt={"$5"} mx={"$5"} backgroundColor="$blueGray100" flex={1} marginTop={"$20"} flexDirection="column">
            <ScrollView>
                <VStack backgroundColor="$blueGray100" width={"$full"} mb={"$10"}>
                    <Image source={require("../../assets/images/avatar.png")} size="2xl" borderRadius={"$full"} alignSelf="center" alt="Foto Profil" />
                    <Text fontSize={"$xl"} alignSelf="center" marginTop={"$5"} fontWeight="$bold">
                        Nama User
                    </Text>
                </VStack>
                <Box flexDirection="column" bgColor="$white" shadowColor="$black" shadowOffset={{ width: 0, height: 2 }} shadowOpacity={"$25"} shadowRadius={"$3.5"} justifyContent="space-evenly" p={"$5"} borderRadius={"$xl"}>
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                    <Text color="$black" fontWeight="$bold" fontSize={"$xl"}>
                        Data Diri
                    </Text>
                    <Box mt={"$5"}>
                        <Text color="$black" fontSize={"$sm"}>
                            Email
                        </Text>
                        <Text color="$black" fontSize={"$xl"} mt={"$2"}>
<<<<<<< HEAD
                            {profile?.email}
=======
                            Lorem Ipsum
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                        </Text>
                    </Box>
                    <Box mt={"$5"}>
                        <Text color="$black" fontSize={"$sm"}>
                            Nomor Ponsel
                        </Text>
                        <Text color="$black" fontSize={"$xl"} mt={"$2"}>
<<<<<<< HEAD
                            {profile?.nohp}
=======
                            Lorem Ipsum
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                        </Text>
                    </Box>
                </Box>
                <Button
                    type="text"
<<<<<<< HEAD
                    title={profile ? "Logout" : "Login"}
                    padding={"$3"}
                    onPress={() => onSubmit(profile)}
=======
                    title={"Login"}
                    padding={"$3"}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
                />
            </ScrollView>
        </Box>
    );
};

export default Profile;