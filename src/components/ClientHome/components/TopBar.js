import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const divLiStyle = {
    marginRight: '3px',
  };
  return (
    <div className='konnect-info'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 col-sm-8 hidden-xs'>
            <ul>
              <li>
                <i className='fa fa-paper-plane' aria-hidden='true'></i>{' '}
                info@learndigitaly.com{' '}
              </li>
              <li className='li-last'>
                {' '}
                <i
                  className='fa fa-volume-control-phone'
                  aria-hidden='true'
                ></i>{' '}
                (+92) 300-2385534
              </li>

           <Link to='' >  <li className='li-last'>
              {' '}
              <i
                className='fa  fa-tachometer-alt'
                aria-hidden='true'
              ></i>{' '}
             DASHBOARD
            </li></Link>
            </ul>
          </div>
          <div className='col-md-6 col-sm-4'>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
