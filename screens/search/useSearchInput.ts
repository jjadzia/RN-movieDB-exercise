import { useState } from 'react';

export function useSearchInput() {
  const [inputValue, setInputValue] = useState('');

  return {
    inputValue,
    setInputValue,
  };
}
