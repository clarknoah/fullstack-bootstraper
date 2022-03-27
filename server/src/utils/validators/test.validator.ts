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


@ValidatorConstraint({ name: "Test", async: false })
export class Test implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const matcher: RegExp = /^[\'A-Za-z1-9-\ ]+$/;
    return !!text.match(matcher);
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} contains a special character that is not allowed, only letters, numbers, dashes, and apostrophes`;
  }
}