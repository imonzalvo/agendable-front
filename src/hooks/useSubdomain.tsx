import parseDomain from 'parse-domain';

export default function useSubdomain() {
  const domain = parseDomain(window.location.href);
  if (domain && domain.subdomain) {
    return domain.subdomain;
  }
  return null;
}
