import store from "../store";

export default function CheckPermission({children})
{
    const loginState = store.getState().loginUser;


    return loginState.isLogin ? <>{children}</> : null;
}