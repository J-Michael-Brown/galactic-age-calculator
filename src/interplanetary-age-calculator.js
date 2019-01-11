export function exactEarthYears(dateOfBirth, currentDate) {
	let startMS = Date.parse(dateOfBirth);
  let nowMS = Date.parse(currentDate);
	let differenceMS = nowMS - startMS;
  const exactYears = differenceMS/(3.154*(10**10));
  return(exactYears);
}

export function mercury(exactEarthYears) {
  const mercuryYears = exactEarthYears/0.24;
  return mercuryYears;
}

export function venus(exactEarthYears) {
  const venusYears = exactEarthYears/0.62;
  return venusYears;
}

export function mars(exactEarthYears) {
  const mercuryYears = exactEarthYears/1.88;
  return mercuryYears;
}

export function jupiter(exactEarthYears) {
  const mercuryYears = exactEarthYears/11.86;
  return mercuryYears;
}
