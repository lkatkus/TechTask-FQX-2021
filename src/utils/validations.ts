export const isMore = (b: number, errorMessage: string) => (a: number): string | undefined => {
  if (a < b) {
    return errorMessage;
  }

  return undefined;
};
