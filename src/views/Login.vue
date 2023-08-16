<template>
  <div>
    <h1 class="text-center mt-16 text-green-darken-3">GenXhire</h1>
    <v-card max-width="400" class="mx-auto mt-16">
      <v-form @submit.prevent="handleSubmit">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field
            placeholder="Enter email"
            type="email"
            prepend-icon="mdi-email"
            v-model="userData.userID"
            :rules="emailRule"
            clearable
          ></v-text-field>
          <v-text-field
            placeholder="Enter Password"
            prepend-icon="mdi-lock"
            type="password"
            clearable
            :rules="passwordRule"
            v-model="userData.password"
          ></v-text-field>
        </v-card-text>
        <v-btn type="submit" block color="green">Login</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      emailRule: [
        (v) => !!v || "Email is required",
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;

          return "E-mail must be valid.";
        },
      ],
      passwordRule: [(v) => !!v || "password is required"],
    };
  },
  setup() {

    const userData = reactive({
      userID: "",
      password: "",
    });
     const router = useRouter()

    const handleSubmit = async () => {
      let result = await fetch(
        "http://13.71.20.179:88/api/authentication/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if(!result.ok){
        throw new Error(`Error status:${result.status}`)
      }
      result = await result.json();
      alert('successfully login')
      localStorage.setItem('token', JSON.stringify(result.token));
      localStorage.setItem('id', JSON.stringify(result.user.id))
      localStorage.setItem('user', JSON.stringify(result.user))
      await router.push('/')
    };
    
    return {
      userData,
      handleSubmit,
    };
  },
};
</script>