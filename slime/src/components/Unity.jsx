import React, { useEffect } from "react";
import { Unity, useUnityContext} from "react-unity-webgl"


function UnityPlayer(){
    const { unityProvider, sendMessage, isLoaded } = useUnityContext({

        // De paths om unity project op te starten vanaf een live server.
        loaderUrl: "http://127.0.0.1:5500/UnityTest/Build/UnityTest.loader.js",
        dataUrl: "http://127.0.0.1:5500/UnityTest/Build/UnityTest.data",
        frameworkUrl: "http://127.0.0.1:5500/UnityTest/Build/UnityTest.framework.js",
        codeUrl: "http://127.0.0.1:5500/UnityTest/Build/UnityTest.wasm",
    })

  useEffect(() => {
    if (isLoaded) {
      window.switchAnimation = sendMessage;
      console.log("Unity is geladen en sendMessage is beschikbaar.");
    }
  }, [isLoaded]);

return(
    <>
        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600}}/>
    </>
)



}

export default UnityPlayer;