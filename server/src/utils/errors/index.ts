import { createError } from "apollo-errors";
import { env } from "config/globals";

export interface IErrorProps {
  message: string;
  error?: any;
  data: any;

  sendToClient?: boolean;
}

export class DomainError extends Error {
  protected error_code: string = "00000";

  protected error_name: string = "domain_error";

  protected internal: Error;

  protected httpCode: number = 500;

  protected data: object;

  protected sendToClient: boolean;

  public constructor({
    message,
    error,
    data = null,
    sendToClient = true,
  }: IErrorProps) {
    super(message);
    this.internal = error;
    this.data = data;
    this.sendToClient = sendToClient;
  }

  public getCode(): string {
    return this.error_code;
  }

  public getInternalError(): Error {
    return this.internal;
  }

  public getHttpCode(): number {
    return this.httpCode;
  }

  public getData(): object {
    return this.data;
  }

  public getName(): string {
    return this.error_name;
  }

  public getSendToClient(): boolean {
    return this.sendToClient;
  }
}

export class InternalServerError extends DomainError {
  protected error_name: string = "server_error";

  protected httpCode: number = 500;

  public constructor(props: IErrorProps) {
    super(props);
    const {
      message = "you have just experience an internal server error",
      error,
      data = null,
    } = props;
    const stackTrace =
      env.NODE_ENV === "development"
        ? {
            internalData: {
              error,
            },
          }
        : {};
    createError("InternalServerError", {
      message,
      data,
      ...stackTrace,
    });
  }
}

export class NotAuthenticatedError extends DomainError {
  protected error_name: string = "not_authenticated";

  protected httpCode: number = 403;

  public constructor(props: IErrorProps) {
    super(props);
    const {
      message = "this request is not authenticated",
      error,
      data = null,
    } = props;
    const stackTrace =
      env.NODE_ENV === "development"
        ? {
            internalData: {
              error,
            },
          }
        : {};
    createError("NotAuthenticatedError", {
      message,
      data,
      ...stackTrace,
    });
  }
}
