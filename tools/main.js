function transHex() {

    let input = document.getElementById("inputText");
    let output = document.getElementById("outputText");


    let inputValue = input.value;


    if (!isNaN(inputValue)) {
        let num = parseInt(inputValue);
        let hex = num.toString(16);
        output.textContent = `hex ${hex}`;

    } else {
        let hexString = '';
        for (let i = 0; i < inputValue.length; i++) {
            hexString += inputValue.charCodeAt(i).toString(16);
        };

        output.textContent = `hex ${hexString}`;
    };
};