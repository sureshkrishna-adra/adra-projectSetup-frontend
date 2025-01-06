import React from 'react';
import ButtonComponent from 'components/Button/Button';
import HeaderCard from 'components/Card/HeaderCard';
import { useLocation } from 'react-router-dom';

const Header = ({
  offcanvasOn,
  offcanvasOnButton
}) => {
  const location = useLocation()

  const headerContentFunc = () => {
    const path = location.pathname.split('/');
    const removeEmptyString = path.filter(v => v !== '')
    const displayPath = removeEmptyString.length ? path[path.length - 1] : 'Dashboard';

    return <>

      <div className="col-sm-8 d-flex flex-wrap align-items-center justify-content-end">
        <div className="header-icon-tag-width">
          <ButtonComponent
            type="button"
            clickFunction={offcanvasOnButton}
            className={'header-icon-width'}
            buttonName={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56299 19H4.33771C3.59891 19 3 18.4011 3 17.6623V16.7893C3 16.2839 3.20077 15.7992 3.55814 15.4419C4.48135 14.5187 5 13.2665 5 11.9609V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V11.9609C19 13.2665 19.5187 14.5187 20.4419 15.4419C20.7992 15.7992 21 16.2839 21 16.7893V17.6623C21 18.4011 20.4011 19 19.6623 19H15.437C15.437 19.3565 15.4254 20.0363 15.0669 20.6873C14.4734 21.7646 13.3236 22.5 12 22.5C10.6763 22.5 9.52655 21.7646 8.93311 20.6873C8.57454 20.0363 8.56299 19.3565 8.56299 19ZM19.3812 16.5025C19.4573 16.5786 19.5 16.6818 19.5 16.7893V17.5H4.5V16.7893C4.5 16.6818 4.54273 16.5786 4.6188 16.5025C5.82331 15.298 6.5 13.6643 6.5 11.9609V9C6.5 5.96243 8.96244 3.5 12 3.5C15.0376 3.5 17.5 5.96243 17.5 9V11.9609C17.5 13.6643 18.1767 15.298 19.3812 16.5025ZM13.937 19H10.063C10.063 19.332 10.0868 19.6728 10.247 19.9636C10.3587 20.1665 10.5047 20.3479 10.6771 20.5C11.0296 20.8112 11.4928 21 12 21C12.5072 21 12.9703 20.8112 13.3229 20.5C13.4953 20.3479 13.6412 20.1665 13.753 19.9636C13.9132 19.6728 13.937 19.332 13.937 19Z" fill="black" />
                <circle cx="18" cy="5" r="3.5" fill="#D34645" stroke="white" />
              </svg>
            }
          />
        </div>

        <div className="header-icon-tag-width">
          <div className="header-icon-width">
            <ButtonComponent
              type="button"
              clickFunction={offcanvasOnButton}
              className={'header-icon-width'}
              buttonName={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              }
            />
          </div>
        </div>

        {
          offcanvasOn ?
            <div className={`d-inline-block header-icon-tag-width ${offcanvasOn !== '' ? `d-${offcanvasOn}-none` : 'd-none'}`}>
              <ButtonComponent
                type="button"
                clickFunction={offcanvasOnButton}
                buttonName="open"
              />
            </div>
            :
            null
        }
      </div>
    </>
  }

  return (

    <HeaderCard
      cardClassName='w-100 border-0 header-card'
      cardTitleClassName="row justify-content-end mb-0"
      cardContent={headerContentFunc()}
    />

  )
}

export default Header