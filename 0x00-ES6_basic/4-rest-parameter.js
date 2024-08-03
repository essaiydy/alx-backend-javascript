export default function returnHowManyArguments(...args) {
    let i = 0;
    let index = 0;
    while (index < args.length) {
        i++;
        index++;
    }
    return i;
}
