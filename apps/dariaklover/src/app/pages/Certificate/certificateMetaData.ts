export interface CertificateMetaData {
  title: string;
  heading: string;
  path: string;
  pathCertificateHealthCoach: string;
  certificateHealthCoach: string;
}

const certificateMetaData: CertificateMetaData = {
  title: 'Сертификат',
  heading: 'Сертификат',
  path: ':certificateId',
  pathCertificateHealthCoach: '/certificates/certificate-health-coach',
  certificateHealthCoach: 'Сертификат Европейской ассоциации коучинга (European Coaching Association)',
};

export default certificateMetaData;
