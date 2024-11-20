import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Image, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../../src/api/rickAndMortyApi";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters", searchQuery],
    queryFn: () => fetchCharacters(searchQuery),
    enabled: !!searchQuery, 
  });

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Search for characters"
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error fetching characters</Text>}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.characterCard}>
            <Image source={{ uri: item.image }} style={styles.characterImage} />
            <View>
              <Text style={styles.characterName}>{item.name}</Text>
              <Text>Episodes: {item.episode.length}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  characterCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  characterImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  characterName: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
