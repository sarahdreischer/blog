// import InstagramIcon from '@mui/icons-material/Instagram';
import { Toolbar } from '@mui/material';
import cn from 'classnames';
import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <Toolbar className='d-flex justify-content-between w-100 pt-1'>
      <div className={cn('h4', styles.logo)}>
        <strong>
          Software
          <br />
          With
          <br />
          Sarah
        </strong>
      </div>
      <div>{/* <InstagramIcon /> */}</div>
    </Toolbar>
  );
}
