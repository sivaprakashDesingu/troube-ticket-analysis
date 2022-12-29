
import { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = "http://localhost:5000/api/";
//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
const _headers = {
    'Content-Type': 'application/json',
}
const fetchAxios = async ({ url, method, data = null, headers = null }) => {
    let response = null;
    let error = null;
    let loading = false

    const axiosRequest = {
        method: method.toUpperCase(),
        url: `${baseURL}${url}`,
        headers: headers || _headers,
        data: data || null
    }
    //console.log(axiosRequest)
    try {
        const result = await axios.request(axiosRequest);
        response = result;
        //return { response, error, loading };
    } catch (err) {
        error = err;
        //return { response, error, loading };
    } finally {
        loading = true;
        //console.log(response, error, loading)
        return { response, error, loading };
    }
    /*const fetchData = async (url, method, body, headers) => {
        const axiosRequest = {
            method: method.toUpperCase(),
            url: `${baseURL}${url}`,
            headers: headers || _headers,
            data: body || null
        }
        //console.log(axiosRequest)
        try {
            const result = await axios.request(axiosRequest);
            response = result;
            //return { response, error, loading };
        } catch (err) {
            error = err;
            //return { response, error, loading };
        } finally {
            loading = true;
            console.log(response, error, loading)
            return { response, error, loading };
        }
    };
    fetchData(url, method, body, headers);*/
};

export {
    fetchAxios
}