function find_word_concat(str, words) {
    let wordFreq = {}; // how many times we need to see  our words  
    
    words.forEach((word) => { // add  all words in array to  wordFrequency 
        if(!(word in wordFreq)) {
            wordFreq[word] = 0
        }

        wordFreq[word] += 1
    });

    let resultIndices = []; // array to store indices

    // we need these two values  to start outer loop 
    let wordCount = words.length;  // how many  words in array. used for  inner loop and when to push index to result array
    let wordLength = words[0].length;  // how long each word is. used to determine starting and end  index to find word

    // this cycles until we reach the  end point, then returns array
    for(i = 0; i < (str.length - wordCount * wordLength) + 1; i++) {

        // need this hashmap to start inner loop
        let wordsSeen = {};  // how many times we see each word cycling through each index

        // start innerl loop
        for(j = 0; j < wordCount; j++) { // using  word count because we are  onlyl looking for two words (for example) and this is zero based 

            // need these variables to find our next  word
            let nextWordIdx = i + j * wordLength; // starting index using wordLength 
            let word = str.substring(nextWordIdx,  nextWordIdx + wordLength); // word, using nextwordIdx and wordLength to determine ending index

            if(!(word in wordFreq)) {  // if we don't need this word, break
                break
            };

            if(!(word in wordsSeen)) { // if  we need this word but haven't seen it, add it to words seen
                wordsSeen[word] = 0
            };

            wordsSeen[word] += 1; // add one

            if(wordsSeen[word] > (wordFreq[word] || 0)) { // if  we have this word  more than we need, break
                break
            };

            if(j + 1 === wordCount) { // if we have both words, push index to results array 
                resultIndices.push(i)
            }
        }
    }

    return resultIndices; // return results array
}

module.exports = find_word_concat