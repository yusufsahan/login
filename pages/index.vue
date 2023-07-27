<template>
  <div
    class="w-full h-screen bg-[linear-gradient(145deg,rgba(82,0,142,1)0%,rgba(97,0,101,1)100%)] flex items-center justify-center"
  >
    <form
      action=""
      class="p-10 bg-white/20 rounded-xl shadow-xl flex flex-col gap-y-4 items-center justify-center"
    >
      <h1 class="text-white text-3xl font-bold">Login</h1>
      <div class="w-64">
        <h2 class="text-white font-light text-sm ml-3">Email</h2>
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          autocomplete="email"
          class="w-full bg-white/30 px-4 py-2 backdrop-blur-lg rounded-full outline-none mt-1 text-sm font-medium text-[#610065] placeholder:text-[#610065] border-2 border-transparent focus:border-[#610065] transition-all"
          required
        />
      </div>
      <div class="w-64">
        <h2 class="text-white font-light text-sm ml-3">Password</h2>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
          class="w-full bg-white/30 px-4 py-2 backdrop-blur-lg rounded-full outline-none mt-1 text-sm font-medium text-[#610065] placeholder:text-[#610065] border-2 border-transparent focus:border-[#610065] transition-all"
          required
        />
      </div>
      <div class="flex flex-col items-center gap-y-1">
        <input
          @click="loginHandler()"
          type="submit"
          value="Login"
          class="px-6 py-2 bg-[#610065] text-white rounded-full text-lg font-medium cursor-pointer hover:bg-white hover:text-[#610065] hover:font-bold hover:shadow-lg transition-all"
        />
        <p class="text-white font-light">
          Don't have an account?
          <NuxtLink
            to="/register"
            class="font-medium pb-1 border-b-2 border-dotted border-transparent hover:border-white transition cursor-pointer"
            >Sign Up</NuxtLink
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
const client = useAppwrite();

const email = ref("");
const password = ref("");
const router = useRouter();

const loginHandler = async () => {
  const promise = client.account.createEmailSession(
    email.value,
    password.value
  );

  promise.then(
    function (response) {
      router.push("./pages/account");
    },
    function (error) {
      console.log(error); // Failure
    }
  );
};
</script>
