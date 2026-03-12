export interface KaprekarStep {
  number: number;
  sortedDesc: string;
  sortedAsc: string;
  result: number;
}

export function getDigits(num: number): number[] {
  return num.toString().padStart(4, '0').split('').map(Number);
}

export function sortDigits(num: number, descending = true): number {
  const digits = getDigits(num);
  digits.sort((a, b) => descending ? b - a : a - b);
  return parseInt(digits.join(''));
}

export function isValidKaprekarInput(num: number | string): { valid: boolean; error?: string } {
  const str = num.toString();
  
  // Strictly enforce 4 digits (e.g., 1234 or 0123)
  if (!/^\d{4}$/.test(str)) {
    return { valid: false, error: "Please enter exactly 4 digits" };
  }

  const n = parseInt(str);
  const digits = str.split('');
  const allSame = digits.every(d => d === digits[0]);
  if (allSame) return { valid: false, error: "Digits cannot all be the same (e.g., 1111)" };
  
  return { valid: true };
}

export function runKaprekarRoutine(startNum: number): KaprekarStep[] {
  const steps: KaprekarStep[] = [];
  let current = startNum;
  
  // Max steps is usually 7, but we'll cap it at 15 to be safe
  for (let i = 0; i < 15; i++) {
    const desc = sortDigits(current, true);
    const asc = sortDigits(current, false);
    const result = desc - asc;
    
    steps.push({
      number: current,
      sortedDesc: desc.toString().padStart(4, '0'),
      sortedAsc: asc.toString().padStart(4, '0'),
      result: result
    });
    
    if (result === 6174 || result === 0) break;
    current = result;
  }
  
  return steps;
}
