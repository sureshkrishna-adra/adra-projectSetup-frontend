import React, { Fragment } from 'react';
import ButtonComponent from 'Components/Button/Button';
import Icons from 'Utils/Icons';

import { useSelector } from 'react-redux';
import { useCustomNavigate } from '../../ResuableFunctions/CustomHooks';
import HeaderCard from 'Components/Card/HeaderCard';
import LinkComponent from 'Components/Router_components/LinkComponent';
import JsonData from 'Utils/JsonData';

const Header = ({
  offcanvasOn,
  offcanvasOnButton
}) => {
  const { currentMenuName } = useSelector((state) => state.commonState);
  const navigate = useCustomNavigate();
  const { headerTitleLink, headerMenuLink } = JsonData()?.jsxJson;

  function headerTitleContentFunc() {
    return <div className="w-100 d-flex flex-wrap align-items-center justify-content-between ">
      <div className="col">
        <p className='fs-13 mb-0 text-light'>
          Impartial Consulting Services to Empower Your Growth!  Get Started
          <span className='ps-3'>
            {Icons.header_title_arrow_white}
          </span>
        </p>
      </div>

      <div className="col d-flex flex-wrap justify-content-end ">
        <div className="w-50 d-flex flex-wrap align-items-center justify-content-evenly ">
          {headerTitleLink?.map((data, index) => (
            <div className="col text-center">
              <LinkComponent
                to={data?.link}
                className="fs-14 text-light text-decoration-none"
                title={
                  <Fragment>
                    {data?.icon}
                    < span className='ps-2'>
                      {data?.title}
                    </span>
                  </Fragment>
                } />
            </div>
          ))}
        </div>
      </div>
    </div >
  }

  function headerMenuFuction() {
    return headerMenuLink?.map((data, index) => {
      switch (data?.type) {
        case "link":
          return <div className="col text-center">
            <LinkComponent
              to={data?.link}
              className="text-dark fs-18 fw-bold text-decoration-none"
              title={
                <Fragment>
                  {data?.icon}
                  < span className='ps-2'>
                    {data?.title}
                  </span>
                </Fragment>
              } />
          </div>

        case "button":
          return <div className="col text-center">
            <ButtonComponent
              className="btn-dark fs-15 text-decoration-none"
              buttonName={data?.title}
            />
          </div>

        default:
          break;
      }
    })
  }

  function headerContentFunc() {
    return <div className="col-12 d-flex flex-wrap align-items-center justify-content-between ">
      <div className="col">
        <LinkComponent
          to="/"
          title="GCC CONNECT"
          className="fs-18 text-decoration-none fw-bold text-dark"
        />
      </div>

      <div className="col d-flex flex-wrap justify-content-end ">
        <div className="w-75 d-flex flex-wrap align-items-center justify-content-around ">
          {headerMenuFuction()}
        </div>
      </div>

      {
        offcanvasOn ?
          <div className={`d-inline-block header-icon-tag-width ${offcanvasOn !== '' ? `d-${offcanvasOn}-none` : 'd-none'}`}>
            <ButtonComponent
              type="button"
              className="btn-transparent"
              clickFunction={offcanvasOnButton}
              buttonName={Icons.menuIcon}
            />
          </div>
          :
          null
      }
    </div >
  }

  return (
    <Fragment>
      <HeaderCard
        cardClassName='w-100 border-0 shadow-none '
        cardTitleClassName="row justify-content-end mb-0 px-5"
        cardBodyClassName='py-3 header-title-body'
        cardContent={headerTitleContentFunc()}
      />

      <HeaderCard
        cardClassName='w-100 border-0 shadow-none'
        cardTitleClassName="row justify-content-end mb-0 px-5"
        cardBodyClassName='py-4 header-body'
        cardContent={headerContentFunc()}
      />
    </Fragment>

  )
}

export default Header