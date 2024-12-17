"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import { fetchUserAttributes } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import ExampleLoginData from "@/components/ExampleLoginData"

Amplify.configure(outputs);

// Define the User Attributes Type
interface UserAttributes {
    name?: string;
    phone_number?: string;
    email?: string;
    [key: string]: string | undefined; // For any other dynamic attributes
}

function UserProfile({ signOut }: { signOut: () => void }) {
    const [attributes, setAttributes] = useState<UserAttributes>({});

    useEffect(() => {
        const loadUserAttributes = async () => {
            try {
                const userAttributes = await fetchUserAttributes();
                setAttributes(userAttributes);
            } catch (error) {
                console.error("Error fetching user attributes:", error);
            }
        };

        loadUserAttributes();
    }, []);

    return (
        <main className="mx-auto p-4 bg-white shadow-lg rounded-lg mt-8 flex flex-col gap-8 mb-4">
            <section className={"hidden"}>
                <h1>Welcome, {attributes.name || "Guest"}</h1>
                <p>Phone Number: {attributes.phone_number || "Not Provided"}</p>
            </section>
            <section>
                <ExampleLoginData userName={attributes.name || "Guest"}/>
            </section>
            <section className=" w-full flex m-auto justify-end">
                <button className="px-4 py-2 bg-[#CC3300] text-white rounded-md " onClick={signOut}>Sign Out</button>
            </section>
        </main>

    );
}

export default function AuthPage() {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <Authenticator>
                {({ signOut }) => <UserProfile signOut={signOut} />}
            </Authenticator>
        </div>
    );
}
