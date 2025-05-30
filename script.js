let displayElement = document.getElementById('display');

function appendValue(value) {
    displayElement.value += value;
}
function clearDisplay() {
    displayElement.value = '';
}
function clearRecent(){
    displayElement.value = displayElement.value.slice(0, -1);
}
function calculate() {
    try {
        displayElement.value = eval(displayElement.value);
    } catch (error) {
        displayElement.value = 'Error';
    }
}