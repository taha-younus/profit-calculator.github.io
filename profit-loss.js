const purchasePriceEl = document.getElementById("purchasePrice");
const sellingPriceEl = document.getElementById("sellingPrice");
const calculateProfitEl = document.getElementById("calculateProfit");
const profitMessageEl = document.getElementById("profitMessage");

calculateProfitEl.addEventListener("click", () => {
  const purchasePrice = parseFloat(purchasePriceEl.value) || 0;
  const sellingPrice = parseFloat(sellingPriceEl.value) || 0;

  if (sellingPrice > purchasePrice) {
    const profit = sellingPrice - purchasePrice;
    const profitMessage = `Profit of ${Math.abs(profit)} Rs.`;
    // profitMessageEl.textContent = profitMessage;
    document.getElementById('profitMessage').innerHTML = profitMessage;
  } else if (sellingPrice < purchasePrice) {
    const loss = purchasePrice - sellingPrice;
    const profitMessage = `Loss of ${Math.abs(loss)} Rs.`;
    profitMessageEl.textContent = profitMessage;
  } else {
    const profitMessage = "No Profit or Loss";
    profitMessageEl.textContent = profitMessage;
  }
});