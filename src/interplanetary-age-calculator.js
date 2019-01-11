export function exactEarthYears(dateOfBirth, currentDate) {
	let startMS = Date.parse(dateOfBirth);
  let nowMS = Date.parse(currentDate);
	let differenceMS = nowMS - startMS;
  const exactYears = differenceMS/(3.154*(10**10));
  return(exactYears);
}

export function mercury(exactYears) {
  const mercuryYears = exactYears/0.24;
  return mercuryYears;
}

export function venus(exactYears) {
  const venusYears = exactYears/0.62;
  return venusYears;
}

export function mars(exactYears) {
  const mercuryYears = exactYears/1.88;
  return mercuryYears;
}

export function jupiter(exactYears) {
  const mercuryYears = exactYears/11.86;
  return mercuryYears;
}
