export default function FormatPhoneNumber(phoneNumber: string): string {
  if (!phoneNumber) {
    return '';
  }
  const cleaned = phoneNumber.replace(/\D/g, '');
  const regex = /^(\d{2})(\d)(\d{4})(\d{4})$/;
  const formatted = cleaned.replace(regex, '($1) $2 $3-$4');

  return formatted;
}
