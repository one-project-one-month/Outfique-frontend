import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";
export const authClient = createAuthClient({
  trustedOrigins: ["outfiquefrontend://"],
  baseURL: process.env.EXPO_PUBLIC_API_URL, // Base URL of your Better Auth backend.
  scheme: "myapp", //  By default, Better Auth tries to read the scheme from the app.json file. If you need to override this, you can pass the scheme option to the client.
  fetchOptions: {
    credentials: "include",
  }, // Include credentials in fetch requests.
  plugins: [
    expoClient({
      scheme: "outfiquefrontend",
      storagePrefix: "outfiquefrontend",
      storage: SecureStore,
    }),
  ],
});

// SIGN IN FUNCTION
// const handleLogin = async () => {
//   await authClient.signIn.email({
//     email,
//     password,
//   });
// };

// SIGN UP FUNCTION
// const handleLogin = async () => {
//   await authClient.signUp.email({
//     email,
//     password,
//     name,
//   });
// };

// SIGN IN WITH GOOGLE FUNCTION
// const handleLogin = async () => {
//   await authClient.signIn.social({
//     provider: "google",
//     callbackURL: "/dashboard", // this will be converted to a deep link (eg. `myapp://dashboard`) on native
//   });
// };

// GET SESSION
// const { data: session } = authClient.useSession();

// SIGN OUT FUNCTION
// await authClient.signOut({
//   fetchOptions: {
//     onSuccess: () => {
//       router.push("/login"); // redirect to login page
//     },
//   },
// });

// EXPO INTEGRATION DOCUMENTATION REFERENCE
// https://www.better-auth.com/docs/integrations/expo
