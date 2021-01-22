const axios = require('axios');
// const app = require('../../speech/web_microphone_websocket/server');
const { API_KEY } = require('../config');

/*
let socket = new WebSocket("ws://localhost:4000");

let englishModel = createModel(DEEPSPEECH_MODEL);

let modelStream;
let recordedChunks = 0;
let silenceStart = null;
let recordedAudioLength = 0;
let endTimeout = null;
let silenceBuffers = [];

// creates a new stream - resets stream stats
async function createStream() {
    modelStream = englishModel.createStream();
    recordedChunks = 0;
    recordedAudioLength = 0;
}
*/


// gets the steps only from a recipe
async function getSteps(id) {
    try {
        const response = await axios({
            method: 'get',
            url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`
        })
        let info = response.data;

        // there may be multiple things being made, each with their own steps
        let allItemsSteps = [];
        for (let item in info) {
            let itemSteps = info[item].steps
            let itemName = info[item].name;
            let steps = [];
            if (itemName == '') {
                allItemsSteps.push("Main recipe")
            } else {
                allItemsSteps.push(itemName)
            }
            
            for (let step in itemSteps) {
                allItemsSteps.push(itemSteps[step].number + ". " + itemSteps[step].step)
            }

            
        }
        return allItemsSteps;
    } catch (err) {
        console.log(err.response);
    }
}

//speech functions


module.exports = {
    getSteps,
}