import axios from "axios";

export const apiConfig = axios.create({
    // En producción, los datos aquí expuestos deberían ser tomados desde variables de entorno
    baseURL: "https://api.coinlore.net/api",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});