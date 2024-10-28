function calculateEllipseArea() {
    const areas = getInputValueById('ellipse-area')
    const basc = getInputValueById('ellipse-base')
    const area = 3.14 * areas * basc
    const ellipseArea = document.getElementById('ellipse-Area');
    ellipseArea.innerText = area
    console.log('hello mama', area)
}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const innerValueText = inputField.value
    innerValue = parseInt(innerValueText)
    return innerValue;

}