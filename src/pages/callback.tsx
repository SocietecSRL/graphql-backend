import { useSession, signOut } from "next-auth/react"

export default function Callback() {
    // Note: depending on how and where illa will be deployed, we may not need to save access token in localStorage
    // if this will be the case we may not need this page at all.

    const { data: session } = useSession() as any;

    if (session) {
        console.log(session);
        localStorage.setItem('accessToken', session.accessToken);

        location.href = 'http://116.203.196.171/0/deploy/app/ILAfx4p1C7dZ/Homepage/sub-page1#access_token=' + session.accessToken;
    }

    return (
        <>
            <div className="bg-gray-100 flex flex-col items-start justify-start h-screen">
                <p>Signed in as {session?.user?.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        </>
    )
}

