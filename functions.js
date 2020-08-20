function insertInputValueAtSelection(input, value)
{
    input.focus();

    const start = input.selectionStart;
    input.value = input.value.substring(0, start) + value + input.value.substring(input.selectionEnd);
    input.selectionStart = input.selectionEnd = start + value.length;
}
