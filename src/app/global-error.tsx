'use client';

import Error from 'next/error';

export default function GlobalError(props: {
  // Remove the unused 'error' prop
  // error: Error & { digest?: string };
  params: { locale: string };
}) {
  return (
    <html lang={props.params.locale}>
      <body>
        <Error statusCode={undefined as any} />
      </body>
    </html>
  );
}
