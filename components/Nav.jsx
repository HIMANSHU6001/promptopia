'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signOut } from "firebase/auth";
import { auth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "@utils/firebase-config";
import userContext from "@utils/userContext";
import { useContext } from "react";

const Nav = () => {
    const { user, setUser } = useContext(userContext)
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        console.log(provider);
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("result",result);
            return result.user;
        } catch (error) {
            console.error(error);
            return null;
        }
    };


    const signIn = async (provider) => {
        let user;
        if (provider === 'google') {
            console.log('signing in with google');
            user = await signInWithGoogle();
            console.log(" signed in with google");
        } 
        console.log(user);
        setUser(user);
        const { email, displayName, photoURL } = user;
        await fetch('/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, displayName, photoURL })
        })

    }

    const handleSignout = async () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            setUser(null);
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
            console.log("Error :", error);
        });
    }


    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href='/' className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.svg"
                    width={30}
                    height={30}
                    alt="Promptopia Logo"
                    className="object-contain"
                />
                <p className="logo_text">Promptopia</p>

            </Link>
            {/* Desktop Navigation */}
            <div className="sm:flex hidden ">
                {user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create Post
                        </Link>
                        <button type="button" onClick={() => { handleSignout() }} className="outline_btn">
                            Signout
                        </button>

                        <Link href="/profile" className="flex gap-2 flex-center">
                            <Image
                                src={user.photoURL}
                                width={30}
                                height={30}
                                alt="Profile"
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ) :
                    <>

                        <button
                            type='button'
                            key="google"
                            onClick={() => signIn('google')}
                            className="outline_btn"
                        >
                            Sign in with Google
                        </button>
                    </>}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex">
                {
                    user ? (
                        <div className="flex">
                            <Image
                                src={user.photoURL}
                                width={30}
                                height={30}
                                alt="Profile"
                                className="rounded-full"
                                onClick={() => { setToggleDropdown(prev => !prev) }}
                            />

                            {toggleDropdown && (
                                <div className="dropdown">
                                    <Link
                                        href="/profile"
                                        className="dropdown_link"
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <Link
                                        href="/create-prompt"
                                        className="dropdown_link"
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        Create Prompt
                                    </Link>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setToggleDropdown(false);
                                            handleSignout()
                                        }}
                                        className="mt-5 w-full black_btn"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button
                                type='button'
                                key="google"
                                onClick={() => signIn('google')}
                                className="outline_btn"
                            >
                                Sign in with Google
                            </button>
                        </>
                    )}
            </div>
        </nav>
    )
}
export default Nav