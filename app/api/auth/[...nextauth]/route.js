import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import User from '@models/user'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
        ),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }
        )
    ],
    callbacks: {
        async session({ session }) {
            try {
                console.log("\n\n\n\n\nSESSION UPDATING");
                const sessionUser = await User.findOne({ where: { email: session.user.email } })
                session.user.id = sessionUser._id.toString();
                return session
            } catch (error) {
                console.log("ERROR", error);
            }



        },
        async signIn({ profile }) {
            try {
                const userExists = await User.findOne({ where: { email: profile.email } })
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

})

export { handler as GET, handler as POST }