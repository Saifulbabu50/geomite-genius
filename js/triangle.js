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

// Rectangle area
function calculateRectangleArea() {
    const rectangleWinput = document.getElementById('Rectangle-w');
    const rectangleWText = rectangleWinput.value
    const white = parseFloat(rectangleWText)

    const rectangleLinput = document.getElementById('Rectangle-l');
    const rectangleLText = rectangleLinput.value
    const longe = parseFloat(rectangleLText)

    const area = white * longe
    const rectangleAreaSpan = document.getElementById('Rectangle-area');
    rectangleAreaSpan.innerText = area
}

// Parallelogram area
function calculateParallelogramArea() {
    const parallelogramBascinput = document.getElementById('parallelogram-basc')
    const parallelogramBascText = parallelogramBascinput.value
    const basc = parseFloat(parallelogramBascText)
    console.log(basc)

    const parallelogramHeightinput = document.getElementById('parallelogram-height')
    const parallelogramHeightText = parallelogramHeightinput.value
    const height = parseFloat(parallelogramHeightText)
    console.log(height)

    const area = basc * height

    const parallelogramAreaSpan = document.getElementById('parallelogram-Area')
    parallelogramAreaSpan.innerText = area

}

// Rhombus area

function calculateRhombusArea() {
    const rhombusinput = document.getElementById('rhombus-d1')
    const rhombusText = rhombusinput.value
    const d1 = parseFloat(rhombusText)
    console.log(d1)

    const rhombusAreainput = document.getElementById('rhombus-d2')
    const rhombusAreaText = rhombusAreainput.value
    const d2 = parseFloat(rhombusAreaText)
    const d2x = d2 * 2
    console.log(d2x)

    const aera = 0.5 * d1 * d2x
    const rhombusAreaSpan = document.getElementById('rhombus-Area');
    rhombusAreaSpan.innerText = aera
}

// Pentagon area

function calculatePentagonArea() {
    const pentagonInput = document.getElementById('pentagon-b')
    const pentagonText = pentagonInput.value
    const pentagonB = parseFloat(pentagonText)
    console.log(pentagonB)

    const pentagonAreaInput = document.getElementById('pentagon-p')
    const pentagonAreaText = pentagonAreaInput.value
    const pentagonP = parseFloat(pentagonAreaText)
    console.log(pentagonP)

    const Area = 0.5 * pentagonB * pentagonP;
    const pentagonAreaSpan = document.getElementById('pentagon-Area');
    pentagonAreaSpan.innerText = Area

    console.log(Area)

}