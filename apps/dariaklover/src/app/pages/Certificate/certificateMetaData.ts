import { certificates } from '../../components/Certificates/Certificates';

export interface CertificateMetaData {
  title: string;
  heading: string;
  path: string;
  certificateHealthCoachUrl: string;
  certificateHealthCoachTitle: string;
  diplomaHealthCoachUrl: string;
  diplomaHealthCoachTitle: string;
  diplomaDoctorUrl: string;
  diplomaDoctorTitle: string;
}

const [certificateHealthCoach, diplomaHealthCoach, diplomaDoctor] = certificates;

const certificateMetaData: CertificateMetaData = {
  title: 'Сертификат',
  heading: 'Сертификат',
  path: ':certificateId',
  certificateHealthCoachUrl: certificateHealthCoach.url,
  certificateHealthCoachTitle: certificateHealthCoach.title,
  diplomaHealthCoachUrl: diplomaHealthCoach.url,
  diplomaHealthCoachTitle: diplomaHealthCoach.title,
  diplomaDoctorUrl: diplomaDoctor.url,
  diplomaDoctorTitle: diplomaDoctor.title,
};

export default certificateMetaData;
