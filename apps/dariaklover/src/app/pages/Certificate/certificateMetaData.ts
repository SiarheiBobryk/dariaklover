export interface CertificateMetaData {
  title: string;
  heading: string;
  path: string;
}

const certificateMetaData: CertificateMetaData = {
  title: 'Сертификат',
  heading: 'Сертификат',
  path: ':certificateId',
};

export default certificateMetaData;
