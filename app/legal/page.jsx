import LegalPage from '@/components/LegalPage.jsx';

export const metadata = {
  title: 'Legal | METRA d.o.o.',
  description: 'Nutzungsbedingungen und Datenschutzrichtlinie der METRA d.o.o.',
  alternates: {
    canonical: 'https://www.metra.ba/legal',
  },
};

export default function Page() {
  return <LegalPage />;
}
