import React, { useState } from 'react';

import { PageContainer } from 'src/container';

import { DetailsForm, FormSummary, FormProps } from './sections';

const MainPage: React.FC = () => {
  const [noteValues, setNoteValues] = useState<FormProps | undefined>();

  return (
    <PageContainer>
      {noteValues ? (
        <FormSummary noteValues={noteValues} handleReset={() => setNoteValues(undefined)} />
      ) : (
        <DetailsForm handleSubmit={(values) => setNoteValues(values)} />
      )}
    </PageContainer>
  );
};

export default MainPage;
