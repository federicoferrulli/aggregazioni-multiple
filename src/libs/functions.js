function toFirstUC(str) {
  if (!str) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isDateValid(dateStr) {
  return !isNaN(new Date(dateStr));
}

function parseOutput(element){
    if(typeof element === 'object' ){
        return element?.name ? element.name : '--'
    }

    if(typeof element === 'string' && isDateValid(element)){
        return new Date(element).toLocaleDateString() + ' ' +new Date(element).toLocaleTimeString();
    }

    return element
}   


export {
    toFirstUC,
    isDateValid,
    parseOutput
}