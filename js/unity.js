let unityInstance = null;

window.startUnity = () => {
    if (unityInstance) {
        console.log("Unity läuft bereits.");
        return;
    }
    createUnityInstance(document.querySelector("#unityContainer"), {
        dataUrl: "unitygame/Build/SlendermanBuild.data",
        frameworkUrl: "unitygame/Build/SlendermanBuild.framework.js",
        codeUrl: "unitygame/Build/SlendermanBuild.wasm"
    }).then(instance => {
        unityInstance = instance;
    });
};

window.stopUnityCompletely = async () => {
    if (unityInstance) {
        await unityInstance.Quit();
        unityInstance = null;
    }
    const canvas = document.getElementById("unityContainer");
    if (canvas) {
        canvas.remove();
    }
    console.log("Unity wurde vollständig beendet und Canvas entfernt.");
};