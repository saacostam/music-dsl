import AudioContextDelivery from './index.mjs';

async function createBuffer(audioContext, url){
    const audioBuffer = await fetch(url)
        .then(res => res.arrayBuffer())
        .then(buffer => {audioContext.decodeAudioData(buffer, (buffer)=>{ 
            const audioContextDelivery = new AudioContextDelivery();
            audioContextDelivery.storeBuffer( url, buffer );
        })});
}

export default createBuffer;