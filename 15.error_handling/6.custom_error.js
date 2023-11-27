class CustomError extends Error {
    constructor(msg) {
        super(msg)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}

try {
    console.log('I am line 1');
    throw new CustomError('I am your error')
    console.log('I am line 2');
    console.log('I am line 3');
} catch (e) {
    // console.dir(e)
    console.log(e.message);
    console.log('This is a custom error message');
} finally {
    console.log('I am finally block');
}
