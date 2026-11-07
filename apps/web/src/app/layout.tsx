import type { ReactNode } from 'react';

export const metadata = {
  title: 'Decidr — Developer infrastructure for backend systems',
  description:
    'Explore, execute, test, and observe backend services, AI workflows, and smart contracts.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
