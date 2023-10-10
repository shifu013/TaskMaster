<template>
    <v-app>
      <v-main>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-card>
                <v-tabs v-model="activeTab">
                  <v-tab :key="1">Register</v-tab>
                  <v-tab :key="2">Login</v-tab>
                </v-tabs>
  
                <v-card-text>
                  <v-form @submit.prevent="activeTab === 1 ? login() : register()">
                    <v-text-field v-model="formData.email" :label="activeTab === 1 ? 'Email' : 'Email (Register)'" required></v-text-field>
                    <v-text-field v-model="formData.password" :label="activeTab === 1 ? 'Password' : 'Password (Register)'" required type="password"></v-text-field>
  
                    <v-btn type="submit" color="primary" block>
                      {{ activeTab === 1 ? 'Login' : 'Register' }}
                    </v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 1,
        formData: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        
        if (this.formData.email === 'user@example.com' && this.formData.password === 'password') {
          alert('Login successful!');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      },
      register() {
        
        alert('Registration successful!');
      }
    }
  };
  </script>
  