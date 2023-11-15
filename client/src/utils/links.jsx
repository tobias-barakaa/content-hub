import React from 'react';

import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  {
    text: 'order article',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'all articles',
    path: 'all-articles',
    icon: <MdQueryStats />,
  },
 
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'Review',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];

export default links;