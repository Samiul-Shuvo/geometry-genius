console.log('connected')

function calculateParallelogramArea(){
    // console.log('parallel')

    const base = getInputValueById('parallelogram-base');
     console.log('base value', base);
    const height = getInputValueById('parallelogram-height');
     console.log('height value', height);
     const area = base * height;
     
     setInnerTextById('parallelogram-area',area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
        // console.log('r')
    return inputValue;
}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area ; 


}