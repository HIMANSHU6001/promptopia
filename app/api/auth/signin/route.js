// import UserModel from "@models/user"


// // const signInWithGoogle = async () => {
// //     const provider =  new GoogleAuthProvider();
// //     try {
// //         const result = await signInWithPopup(auth, provider);
// //         return result.user;
// //     } catch (error) {
// //         console.error(error);
// //         return null;
// //     }
// // };

// // const signInWithGithub = async () => {
// //     const provider = new GithubAuthProvider();
// //     try {
// //         const result = await signInWithPopup(auth, provider);
// //         return result.user;
// //     } catch (error) {
// //         console.error(error);
// //         return null;
// //     }
// // };

// // async function handler(req, res) {
// //     if (req.method === 'POST') {
// //         const body = await req.json()
// //         const { provider } = body;

// //         let user;
// //         console.log(provider);
// //         if (provider === 'google') {
// //             console.log('signing in with google');
// //             user = await signInWithGoogle(); 
// //             console.log(" signed in with google");
// //         } else if (provider === 'github') {
// //             console.log('signing in with github');
// //             user = await signInWithGithub(); 
// //         }

// //         console.log(user);

// //         if (user) {
// //             const { email, displayName, photoURL } = user
// //             const usersRef = UserModel;
// //             try {
// //                  await usersRef.findOrCreate({
// //                     where: { email: email },
// //                     defaults: {
// //                         email: email,
// //                         username: displayName,
// //                         image: photoURL
// //                     }
// //                 })
// //                 // Send the user data in the response
// //                 return new Response(JSON.stringify(user));
// //             } catch (error) {
// //                 return new Response(JSON.stringify(error));
// //             }
// //         } else {
// //             return new Response(JSON.stringify({ error: 'Authentication failed' }));
// //         }
// //     } else {
// //         // Handle any other HTTP method
// //         return new Response('Method Not Allowed', { status: 405 });
// //     }
// // }

// // export { handler as POST };