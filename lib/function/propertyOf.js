export default function propertyOf() {
  if (!arguments.length) return undefined;
  let output = undefined;
  let i = 0;
  for (let arg of [...arguments]) {
    if (i === 0) {
      // first argument is the object
      output = arg;
      i++;
    } else {
      // subsequent arguments are property keys
      // if !object
      if (!output) {
        return output;
      }
      // if !property
      if (typeof arg === "string" && !arg in output) {
        return undefined;
      }
      // if expecting array, but not
      if (typeof arg === "number" && typeof output[arg] === "undefined") {
        return undefined;
      }

      // has value! continue with that
      output = output[arg];
      i++;
    }
  }
  return output;
}
