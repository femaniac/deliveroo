import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Deliverro</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src='https://cdn.vox-cdn.com/thumbor/UF5TLaSZeVNteR6kU-RIfeSHkkk=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19812906/shutterstock_1550285891.jpg' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
