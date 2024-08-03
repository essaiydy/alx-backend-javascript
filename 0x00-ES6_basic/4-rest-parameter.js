export default function returnHowManyArguments(...args) {
  let count = 0;
  let index = 0;

  while (index < args.length) {
    count += 1;
    index += 1;
  }

  return count;
}
