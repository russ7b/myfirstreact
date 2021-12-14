import httpCommon from "../commons/http-common";

const getHello = () => {
    return httpCommon.get('/greet/hello');
}

const getYo = () => {
    return httpCommon.get('/greet/yo');
}

export default {getHello, getYo};