import React from 'react';
import * as RiIcons from 'react-icons/ri';

const Collapsable = ({ show, showSubItems }) => {
  return (
    <div onClick={showSubItems}>
      {show ? <RiIcons.RiArrowUpSLine /> : <RiIcons.RiArrowDownSLine />}
    </div>
  );
};

export default Collapsable;
