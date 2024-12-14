import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [quests, setQuests] = useState([]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setToken(response.data.token);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const fetchQuests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quests', {
        headers: { Authorization: token },
      });
      setQuests(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <ScrollView>
      <View>
        <Text>Email:</Text>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <Text>Password:</Text>
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button title="Login" onPress={handleLogin} />
        <Button title="Fetch Quests" onPress={fetchQuests} />
      </View>
      <View>
        {quests.map((quest) => (
          <Text key={quest._id}>{quest.title}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
