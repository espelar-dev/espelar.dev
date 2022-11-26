export const linkText = (string: string) => {
  let words = string.split(" ");
  let result = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  for (let i = 1; i < words.length; i += 1) {
    result += ` ${words[i].charAt(0).toUpperCase() + words[i].slice(1)}`
  }

  return result;
}

export const linkPath = (string: string) => {
  let words = string.split(" ");
  let result = "/" + words[0];

  if (string === "home") {
    result = "/";
  } else {
    for (let i = 1; i < words.length; i += 1) {
      result += `-${words[i]}`
    }
  }

  return result;
}