/** @format */

const switchErrors = (inputName: any) => {
  switch (inputName.type) {
    case 'required':
      return 'This field is required';
    case 'minLength':
      return "This field doesn't meet the min length";
    case 'maxLength':
      return 'This field is out of max length';
    case 'pattern':
      return 'Wrong type of email';
  }
};

export default switchErrors;
