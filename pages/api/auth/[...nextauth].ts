import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    }),
    // ...add more providers here
  ]

})