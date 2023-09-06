importScripts('../../node_modules/spark-md5/spark-md5.min.js');
self.addEventListener('message', async function (e) {
    var data = e.data;
    postMessage(await changeBuffer(data));
}, false);
const changeBuffer = file => {
    return new Promise(resolve => {
        let max = 1024 * 100, count = Math.ceil(file.size / max)
        if (count > 100) {
            max = file.size / 100;
            count = 100;
        }
        const CHUNK_SIZE = 1024 * 1024; // 每个块的大小，这里设置为1MB
        let offset = 0; // 当前读取的偏移量
        const spark = new SparkMD5.ArrayBuffer();
        const fileReader = new FileReader();
        fileReader.onload = function () {
            spark.append(fileReader.result); // 将当前读取的块追加到 SparkMD5 中
            console.log("追加一次");
            offset += max; // 增加偏移量

            if (offset < file.size) {
                // 如果还有剩余的文件数据没有读取完，则继续读取下一块
                readNextChunk();
            } else {
                // 文件读取完成，计算哈希值
                const HASH = spark.end();
                const suffix = /\.([a-zA-Z0-9]+)$/.exec(file.name)[1];
                resolve({
                    HASH,
                    suffix
                });
            }
        };

        function readNextChunk() {
            const blob = file.slice(offset, offset + CHUNK_SIZE); // 获取下一块的 Blob 数据
            fileReader.readAsArrayBuffer(blob); // 读取 Blob 数据为 ArrayBuffer
        }

        // 开始读取第一块数据
        readNextChunk();
    });
};