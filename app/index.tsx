import { Redirect } from "expo-router";
import { useState } from "react";

export default function Index() {

    const [userLoged, setUserLoged] = useState<boolean>(false);

    return (
        <Redirect href={`${userLoged === false ? "/getStarted" : "/(tabs)"}`} />
    );
}
