{
    /**
     * Print Loading State
     */
    type LoadingState = {
        state: "loading";
    };

    type SuccessState = {
        state: "success";
        response: {
            body: string;
        };
    };

    type FailState = {
        state: "fail";
        reason: string;
    };

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    const printLoginState = (stateObj: ResourceLoadState) => {
        switch (stateObj.state) {
            case "loading":
                console.log("👀 loading...");
                break;
            case "success":
                console.log(`😃 ${stateObj.response.body}`);
                break;
            case "fail":
                console.log(`😱 ${stateObj.reason}`);
                break;
        }
    };

    printLoginState({ state: "loading" }); // 👀 loading...
    printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
    printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
