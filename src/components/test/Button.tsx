import React from 'react';

import '../../styles/global.scss';

export const Button: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => {
  return (
    <button className="rounded bg-blue-600 px-4 py-2 text-white" onClick={onClick}>
      {label}
    </button>
  );
};
