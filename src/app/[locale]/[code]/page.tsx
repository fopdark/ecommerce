import React from 'react';

import ApplyResult from '@/containers/result/ApplyResult';

type Props = {
  params: { code: string };
};
function PageApplyResult({ params }: Props) {
  const { code } = params;

  return <ApplyResult code={code} />;
}

export default PageApplyResult;
