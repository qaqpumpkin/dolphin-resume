export function intToDateString(num: number, unit = '/'): string {
  let date;
  if (!num) {
    date = new Date();
  } else {
    date = new Date(num);
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}${unit}${month >= 10 ? month : '0' + month}${unit}${day >= 10 ? day : '0' + day}`;
}

export function intToTimeString(num?: number): string {
  let date;
  if (!num) {
    date = new Date();
  } else {
    date = new Date(num);
  }
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${hour >= 10 ? hour : '0' + hour}:${minute >= 10 ? minute : '0' + minute}:${
    second >= 10 ? second : '0' + second
  }
    `;
}
