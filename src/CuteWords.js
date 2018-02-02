import React from 'react';

export function cuteWords(text) {
    let cuteWord = [];
     let words = text.split("");
        words.forEach(element => {
            cuteWord.push(<span key={element + cuteWord.length}>{element}</span>);
        });
    return cuteWord;
}
