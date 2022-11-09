function extractErrorCode(str) {
    if (str.includes('Nonce too high')) {
        console.log("Nonce too high");
        return '\t\tNonce is too High\n Reset your acc using: \n settings-> Advanced-> Reset your account';
    }
    // console.log(str);
    const delimiter = '___'; //Replace it with the delimiter you used in the Solidity Contract.
    const firstOccurence = str.indexOf(delimiter);
    if (firstOccurence == -1) {
        return 'An error occured:';
    }

    const secondOccurence = str.indexOf(delimiter, firstOccurence + 1);
    if (secondOccurence == -1) {
        return 'An error occured';
    }

    //Okay so far
    return str.substring(firstOccurence + delimiter.length, secondOccurence);
}
export default extractErrorCode;