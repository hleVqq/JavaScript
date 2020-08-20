function insertInputValueAtSelection(input, value)
{
    const start = input.selectionStart;
    const end = input.selectionEnd;

    const before = input.value.substring(0, start);
    const after = input.value.substring(end);

    input.value = `${before}${value}${after}`;
    input.selectionStart = input.selectionEnd = start + value.length;
    input.focus();
}
