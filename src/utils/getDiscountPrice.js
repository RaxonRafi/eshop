export const getDiscountPrice = (price, discount) => {
  if (!price || !discount) {
    return price;
  }

  const discountAmount = (price * discount) / 100;
  const discountedPrice = price - discountAmount;

  return discountedPrice.toFixed(2); // Return the discounted price rounded to two decimal places
}