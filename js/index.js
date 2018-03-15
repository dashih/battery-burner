const workers = [];

function hideProgress() {
    $('#workerProgressDiv').hide();
    $('#stopButtonDiv').hide();
    for (let i = 0; i < 8; i++) {
        $('#progressBar' + i.toString()).hide();
    }
}

function startClick() {
    $('#workersForm').hide();
    $('#workerProgressDiv').show();
    $('#stopButtonDiv').show();

    let numWorkers = $('#workers').val();
    for (let i = 0; i < numWorkers; i++) {
        let worker = new Worker('js/worker.js');
        workers.push(worker);
        worker.postMessage(null);

        $('#progressBar' + i.toString()).fadeIn();
    }
}

function stopClick() {
    hideProgress();
    $('#workersForm').show();
    for (let i = 0; i < workers.length; i++) {
        workers[i].terminate();
    }

    workers = [];
}

$(document).ready(() => {
    hideProgress();
    $('#startButton').click(startClick);
    $('#stopButton').click(stopClick);
});
