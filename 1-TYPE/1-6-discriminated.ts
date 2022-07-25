{
    /**
     * discriminated union
     */
    // function login -> success, fail
    type SuccessState = {
        result: "success";
        response: {
            body: string;
        };
    };
    type FailState = {
        result: "fail";
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login2(id: string, password: string): LoginState {
        return {
            result: "success",
            response: {
                body: "login!",
            },
        };
    }

    // printLoginState(state: LoginState)
    // success -> 😆
    // fail -> 🥲
    function printLoginState2(state: LoginState) {
        if (state.result === "success") {
            console.log("😆");
        } else {
            console.log("🥲");
        }
        // good code
    }
}
