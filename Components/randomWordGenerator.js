import React from 'react';

const randomWordGen = (length) => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export default randomWordGen;