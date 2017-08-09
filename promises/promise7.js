function readAllChunks(readableStream) {
var reader = readableStream.getReader();
var chunks = [];
return pump();
function pump() {
return reader.read().then(function (result) {
if (result.done) {
return chunks;
}
chunks.push(result.value);
return pump();
});
};
}


