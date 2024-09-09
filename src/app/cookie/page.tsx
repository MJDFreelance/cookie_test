"use client";

import React from "react";

export default function Cookie () {
    const doLogin = async () => {
        fetch('https://fd50xobws8.execute-api.eu-west-1.amazonaws.com/prod/login/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Username": "agentportal@unitedcarcare.com",
                "Password": "test"
            })
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            alert(JSON.stringify(data));
        });
    }

    const doTestCall = async () => {
        fetch('https://fd50xobws8.execute-api.eu-west-1.amazonaws.com/prod/Lookup?ContractNumber=KGW109407', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            alert(JSON.stringify(data));
        });
    }

    return (
        <>
            <button type="button" onClick={() => doLogin()}>Login</button>
            <button type="button" onClick={() => doTestCall()}>Test</button>
        </>
    );
};