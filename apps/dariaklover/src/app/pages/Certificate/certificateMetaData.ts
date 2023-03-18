export interface CertificateMetaData {
  title: string;
  heading: string;
  path: string;
  pathId: string;
  pathCertificateHealthCoach: string;
  certificateHealthCoach: string;
}

const certificateMetaData: CertificateMetaData = {
  title: 'Сертификат',
  heading: 'Сертификат',
  path: '/certificate',
  pathId: ':certificateId',
  pathCertificateHealthCoach: '/certificate/certificate-health-coach',
  certificateHealthCoach: 'Сертификат Европейской ассоциации коучинга (European Coaching Association)',
};

export default certificateMetaData;
