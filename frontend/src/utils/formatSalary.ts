export const formatSalary = (min: number, max: number): string => {
  const fmt = (n: number) => n >= 100 ? `₹${(n/100).toFixed(1)}Cr` : `₹${n}L`
  return `${fmt(min)} – ${fmt(max)}`
}

export const formatSalaryShort = (amount: number): string =>
  amount >= 100 ? `₹${(amount/100).toFixed(1)}Cr` : `₹${amount}L`