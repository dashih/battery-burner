const workers = [];

function startClick() {
    $('#workersForm').hide();
    $('#workerProgressDiv').show();

    let numWorkers = $('#workers').val();
    for (let i = 0; i < numWorkers; i++) {
        let worker = new Worker('js/worker.js');
        workers.push(worker);
        worker.postMessage(null);
    }
}

function stopClick() {
    $('#workerProgressDiv').hide();
    $('#workersForm').show();
    for (let i = 0; i < workers.length; i++) {
        workers[i].terminate();
    }

    workers = [];
}

$(document).ready(() => {
    $('#workerProgressDiv').hide();
    $('#startButton').click(startClick);
    $('#stopButton').click(stopClick);
});
