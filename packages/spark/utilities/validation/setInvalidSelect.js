/* global document */
const buildErrorContainer = (errorContainer, iconName, message) => {
  const errorIcon = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg',
  );
  errorIcon.classList.add('sprk-c-Icon');
  errorIcon.classList.add('sprk-c-Icon--m');
  errorIcon.classList.add('sprk-b-ErrorIcon');
  const useElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'use',
  );
  const errorText = document.createElement('span');
  errorText.classList.add('sprk-b-ErrorText');
  useElement.setAttributeNS(
    'http://www.w3.org/1999/xlink',
    'xlink:href',
    `#${iconName}`,
  );
  errorIcon.appendChild(useElement);
  errorText.textContent = message;
  errorContainer.appendChild(errorIcon);
  errorContainer.appendChild(errorText);
  return errorContainer;
};

const setInvalidSelect = (inputContainer, defaultErrorMessage) => {
  const overrideErrorMessage = inputContainer.getAttribute(
    'data-sprk-input-invalid-content',
  );
  const select = inputContainer.querySelector('select');
  const errorContainer = inputContainer.querySelector('.sprk-b-ErrorContainer');

  select.classList.add('sprk-b-Select--error');
  select.setAttribute('aria-invalid', 'true');

  if (errorContainer) {
    select.setAttribute('aria-describedby', errorContainer.getAttribute('id'));
    errorContainer.innerHTML = '';
    buildErrorContainer(
      errorContainer,
      'exclamation-filled',
      overrideErrorMessage || defaultErrorMessage,
    );
  }
};

export { setInvalidSelect as default };
