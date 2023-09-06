function useWebSocket(handleMessage) {
    let socket, heartBeatTimeout
    const sendHeatBeat = () => {
        //如果超过十秒未收到心跳响应消息，则重新建立连接
        socket.send(JSON.stringify({
            type: 'heartBeat-request',
            parmas: 'success'
        }))
        heartBeatTimeout = setTimeout(() => {
            console.log("断开了试图重连");
            initWs()
        }, 10000)
    }
    const onOpen = () => {
        sendHeatBeat()
    }
    const onMessage = e => {
        const middle = JSON.parse(e.data)
        console.log(middle);
        if (middle.type === 'heartBeat-response') {
            //收到心跳响应消息，则重新计时
            clearTimeout(heartBeatTimeout)
            heartBeatTimeout = null
            setTimeout(() => {
                sendHeatBeat()
            }, 2000)

        } else {
            handleMessage(e)
        }
    }
    const onError = () => {
        //连接失败后，需要重新建立连接
        initWs()
    }
    const destroyWs = () => {
        if (socket) {
            socket.close()
            socket.removeEventListener('open', onOpen)
            socket.removeEventListener('message', onMessage)
            socket.removeEventListener('error', onError)
            clearTimeout(heartBeatTimeout)
            heartBeatTimeout = null
        }
    }
    const initWs = () => {
        console.log("建立连接");
        destroyWs()
        socket = new WebSocket('ws:localhost:8000');
        socket.addEventListener('open', onOpen)
        socket.addEventListener('message', onMessage)
        socket.addEventListener('error', onError)
    }
    initWs()
    return socket;
}

export default useWebSocket;