export function exactEarthYears(dateOfBirth, currentDate) {
	let startMS = Date.parse(dateOfBirth);
  let nowMS = Date.parse(currentDate);
	let differenceMS = nowMS - startMS;
  const exactYears = differenceMS/(3.154*Math.pow(10,10));
  return Math.round(exactYears*10)/10;
}

export function mercury(exactEarthYears) {
  const mercuryYears = exactEarthYears/0.24;
  return Math.round(mercuryYears*10)/10;
}

export function venus(exactEarthYears) {
  const venusYears = exactEarthYears/0.62;
  return Math.round(venusYears*10)/10;
}

export function mars(exactEarthYears) {
  const mercuryYears = exactEarthYears/1.88;
  return Math.round(mercuryYears*10)/10;
}

export function jupiter(exactEarthYears) {
  const mercuryYears = exactEarthYears/11.86;
  return Math.round(mercuryYears*10)/10;
}
