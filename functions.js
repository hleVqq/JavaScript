function insertInputValueAtSelection(input, value)
{
    const oldSelectionStart = input.selectionStart;
    input.value = `${input.value.substring(0, input.selectionStart)}${value}${input.value.substring(input.selectionEnd)}`;
    input.selectionStart = input.selectionEnd = oldSelectionStart + value.length;
    input.focus();
}
