function insertInputValueAtSelection(input, value)
{
    const oldSelectionStart = input.selectionStart;
    input.value = `${input.value.substring(0, input.selectionStart)}${value}${input.value.substring(input.selectionEnd)}`;
    input.selectionStart = input.selectionEnd = oldSelectionStart + value.length;
    input.focus();
}

function validateEmail(email)
{
    const regex = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    return email.match(regex);
}
