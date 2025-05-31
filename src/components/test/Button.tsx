import React from 'react';

import "../../styles/global.scss"

export const Button: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => {
  return (
    <button className="px-4 py-2 text-white bg-blue-600 rounded" onClick={onClick}>
      {label}
    </button>
  );
};
