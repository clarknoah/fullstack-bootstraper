import * as yup from "yup";

export const passwordValidatorRegex: RegExp = 
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[><?@+'`~^%&\*\[\]\{\}.!#|\\\"$';,:;=/\(\),\-+*])(?=.{10,})/;


