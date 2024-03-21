import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardStyle}>
          <View style={styles.topItem}>
            <Image
              style={styles.imageContainer}
              source={require("./assets/git.png")}
            />
            <View style={styles.topTextContainer}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                The October
              </Text>
              <Text style={{ color: "#16A9FF" }}>@october</Text>
              <Text>Join 25 Jan 2022</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>
              As a highly skilled Full Stack Developer with a decade of hands-on
              experience, I offer top-notch solutions tailored to meet your
              specific needs.
            </Text>
          </View>
          <View style={styles.counterParent}>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Repos</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>5</Text>
            </View>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Followers</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>128</Text>
            </View>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Following</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>8</Text>
            </View>
          </View>
          <View style={styles.lasStyle}>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text>San Facifoco</Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ fontSize: 16 }}>https//:github/main.io</Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ color: "#D9D9D3", fontSize: 16 }}>
                Not Available
              </Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ fontSize: 16 }}>@github</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardStyle}>
          <View style={styles.topItem}>
            <Image
              style={styles.imageContainer}
              source={require("./assets/git.png")}
            />
            <View style={styles.topTextContainer}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                The October
              </Text>
              <Text style={{ color: "#16A9FF" }}>@october</Text>
              <Text>Join 25 Jan 2022</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>
              As a highly skilled Full Stack Developer with a decade of hands-on
              experience, I offer top-notch solutions tailored to meet your
              specific needs.
            </Text>
          </View>
          <View style={styles.counterParent}>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Repos</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>5</Text>
            </View>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Followers</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>128</Text>
            </View>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Following</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>8</Text>
            </View>
          </View>
          <View style={styles.lasStyle}>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text>San Facifoco</Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ fontSize: 16 }}>https//:github/main.io</Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ color: "#D9D9D3", fontSize: 16 }}>
                Not Available
              </Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ fontSize: 16 }}>@github</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardStyle}>
          <View style={styles.topItem}>
            <Image
              style={styles.imageContainer}
              source={require("./assets/git.png")}
            />
            <View style={styles.topTextContainer}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                The October
              </Text>
              <Text style={{ color: "#16A9FF" }}>@october</Text>
              <Text>Join 25 Jan 2022</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>
              As a highly skilled Full Stack Developer with a decade of hands-on
              experience, I offer top-notch solutions tailored to meet your
              specific needs.
            </Text>
          </View>
          <View style={styles.counterParent}>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Repos</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>5</Text>
            </View>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Followers</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>128</Text>
            </View>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Following</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>8</Text>
            </View>
          </View>
          <View style={styles.lasStyle}>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text>San Facifoco</Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ fontSize: 16 }}>https//:github/main.io</Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ color: "#D9D9D3", fontSize: 16 }}>
                Not Available
              </Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ fontSize: 16 }}>@github</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardStyle}>
          <View style={styles.topItem}>
            <Image
              style={styles.imageContainer}
              source={require("./assets/git.png")}
            />
            <View style={styles.topTextContainer}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                The October
              </Text>
              <Text style={{ color: "#16A9FF" }}>@october</Text>
              <Text>Join 25 Jan 2022</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>
              As a highly skilled Full Stack Developer with a decade of hands-on
              experience, I offer top-notch solutions tailored to meet your
              specific needs.
            </Text>
          </View>
          <View style={styles.counterParent}>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Repos</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>5</Text>
            </View>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Followers</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>128</Text>
            </View>
            <View style={styles.counterCard}>
              <Text style={{ fontSize: 16 }}>Following</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>8</Text>
            </View>
          </View>
          <View style={styles.lasStyle}>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text>San Facifoco</Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ fontSize: 16 }}>https//:github/main.io</Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ color: "#D9D9D3", fontSize: 16 }}>
                Not Available
              </Text>
            </View>
            <View style={styles.bottomCard}>
              <Image
                style={styles.imageLocation}
                source={require("./assets/location.png")}
              />
              <Text style={{ fontSize: 16 }}>@github</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0EAF8",
    justifyContent: "center",
  },
  cardStyle: {
    display: "flex",
    gap: 15,
    justifyContent: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 25,
    marginHorizontal: 25,
    shadowColor: "#8C9092",
    backgroundColor: "white",
    borderRadius: 15,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  imageLocation: {
    width: 20,
    height: 20,
    objectFit: "cover",
  },
  topItem: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  topTextContainer: {
    display: "flex",
    gap: 8,
  },
  counterParent: {
    display: "flex",
    flexDirection: "row",
    gap: 18,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0FAFA",
    paddingVertical: 20,
    marginVertical: 10,
  },
  counterCard: {
    display: "flex",
    gap: 5,
    alignItems: "center",
  },
  bottomCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  lasStyle: {
    display: "flex",
    gap: 15,
    justifyContent: "flex-start",
    fontSize: 16,
  },
});
