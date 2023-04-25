let input = document.querySelector('#modal-card'),
  numbers = /[0-9]/,
  regExp = /[0-9]{4}/;

input.addEventListener('input', ev => {
  if (
    (ev.inputType === 'insertText' && !numbers.test(ev.data)) ||
    input.value.length > 19
  ) {
    input.value = input.value.slice(0, input.value.length - 1);
    return;
  }

  let value = input.value;
  if (
    ev.inputType === 'deleteContentBackward' &&
    regExp.test(value.slice(-4))
  ) {
    input.value = input.value.slice(0, input.value.length - 1);
    return;
  }

  if (regExp.test(value.slice(-4)) && value.length < 19) {
    input.value += ' ';
  }
});
