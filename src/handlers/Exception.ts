import { error_code, error_message } from './error.info';

interface IExceptions {
  message: string;
  status: number;
}

export class Exception extends Error {
  constructor() {
    super();
  }

  serverErrorException(): IExceptions {
    return {
      message: error_message.server_error,
      status: error_code.server_error,
    };
  }

  notAllowedException(): IExceptions {
    return {
      message: error_message.not_allowed,
      status: error_code.not_allowed,
    };
  }

  notFoundException(): IExceptions {
    return {
      message: error_message.not_found,
      status: error_code.not_found,
    };
  }

  unauthorizedException(): IExceptions {
    return {
      message: error_message.unauthorized,
      status: error_code.unauthorized,
    };
  }

  conflictException(): IExceptions {
    return {
      message: error_message.conflict,
      status: error_code.conflict,
    };
  }

  wrongInputException(): IExceptions {
    return {
      message: error_message.wrong_input,
      status: error_code.wrong_input,
    };
  }

  tokenExpiredException(): IExceptions {
    return {
      message: error_message.expired,
      status: error_code.expired,
    };
  }
}
