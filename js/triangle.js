function calculateTriangleArea() {
    const triangleBascinput = document.getElementById('triangle-basc');
    const triangleBasctext = triangleBascinput.value
    const basc = parseFloat(triangleBasctext)

    const triangleHeightinput = document.getElementById('triangle-height');
    const triangleHeighttext = triangleHeightinput.value
    const height = parseFloat(triangleHeighttext)

    const area = 0.5 * basc * height;

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area


}