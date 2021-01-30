import React, { useState } from 'react';

import { PageContainer } from 'src/container';

import { DetailsForm, FormSummary } from './sections';

const MainPage: React.FC = () => {
  const [noteValues, setNoteValues] = useState<any>();

  return (
    <PageContainer>
      {noteValues ? (
        <FormSummary noteValues={noteValues} />
      ) : (
        <DetailsForm handleSubmit={(values) => setNoteValues(values)} />
      )}
    </PageContainer>
  );
};

export default MainPage;
