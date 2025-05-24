export function createWhatsappLink(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/5548996696057?text=${encodedMessage}`;
}
