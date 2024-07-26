function logger(message: string, error?: Error) {
    console.log('-----------------START LOGGER------------------');
    console.log(message);
    if (error) {
        console.error(error);
    }
    console.log('-----------------END LOGGER------------------');
}

export default logger;
