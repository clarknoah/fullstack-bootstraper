import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  IsString,
  IsEmail,
  IsDate,
  IsOptional,
  MinLength,
} from "class-validator";

import * as common from "@bootstrapper/common";


@ValidatorConstraint({ name: "Password", async: false })
export class IsValidPassword implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const matcher: RegExp = common.passwordValidatorRegex;
    return !!text.match(matcher);
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} does not meet the password requirements, 10 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character`;
  }
}