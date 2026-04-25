export const WHATSAPP_NUMBER = "916375922906";
export const PHONE_DISPLAY = "+91 63759 22906";

export function whatsappLink(product) {
  const text = product
    ? `Hi I want to order ${product}. Please share details.`
    : `Hi, I'd like to know more about Kyal Misthan Bhandar sweets.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}