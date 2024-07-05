$(document).ready(function() {
    $('#base64E').click(function() {
        const text = $('#inputValue').val();
        const encodedText = btoa(text);
        $('#inputValue').val(encodedText);
    });

    $('#base64D').click(function() {
        const text = $('#inputValue').val();
        const encodedText = atob(text);
        $('#inputValue').val(encodedText);
    });

    $('#urlE').click(function() {
        const text = $('#inputValue').val();
        const encodedText = encodeURIComponent(text).replace(/%20/g, '+');
        $('#inputValue').val(encodedText);
    });

    $('#urlD').click(function() {
        const text = $('#inputValue').val();
        const encodedText = decodeURIComponent(text);
        $('#inputValue').val(encodedText);
    });

    $('button').on('click', function() {
        $('button').removeClass('active');
        $(this).addClass('active');
    });

    //string to ascii
    $('#inputValue').on('input', function() {
        var inputText = $(this).val();

        var asciiValues = convertToAscii(inputText);
        var hexValues = convertToHex(inputText);
        var littleEndianValues = convertToLittleEndian(hexValues);
        var binaryValues = convertToBinary(inputText);

        $('#str2ascii').text(asciiValues);
        $('#str2hex').text(hexValues);
        $('#str2little').text(littleEndianValues);
        $('#str2binary').text(binaryValues);
    });

    function convertToAscii(text) {
        var asciiArray = [];
        for (var i = 0; i < text.length; i++) {
            asciiArray.push(text.charCodeAt(i));
        }
        return asciiArray.join(' ');
    }

    //string to hex
    function convertToHex(text) {
        var hexArray = [];
        for (var i = 0; i < text.length; i++) {
            hexArray.push(text.charCodeAt(i).toString(16));
        }
        return hexArray.join(' ');
    }

    function convertToLittleEndian(hexValues) {
        var hexArray = hexValues.split(' ');
        var littleEndianArray = [];
        for (var i = 0; i < hexArray.length; i += 8) {
            var chunk = hexArray.slice(i, i + 8);
            littleEndianArray.push(...chunk.reverse());
        }
        return littleEndianArray.join(' ');
    }

    function convertToBinary(text) {
        var binaryArray = [];
        for (var i = 0; i < text.length; i++) {
            var binary = text.charCodeAt(i).toString(2).padStart(8, '0');
            binaryArray.push(binary);
        }
        return binaryArray.join(' ');
    }
});