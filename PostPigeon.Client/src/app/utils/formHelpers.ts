export const getInputValue = (
  event: React.FormEvent<HTMLFormElement>,
  nameItem: string
) => {
  return (event.currentTarget.elements.namedItem(nameItem) as HTMLInputElement).value;
};
