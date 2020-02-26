/**
 *
 * MainPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

// import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const AppWrapper = styled.div`
  height: 100vh;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;

  -ms-flex-direction: row;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;
`;

const SideBar = styled.div`
  background: red;
  width: 200px;
  -ms-flex: 0 100px;
  -webkit-box-flex: 0;
  -moz-box-flex: 0;
  -ms-box-flex: 0;
  box-flex: 0;
`;

const MainDiv = styled.div`
  background: black;
  -ms-flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
`;

export function MainPage() {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Assets Management</Navbar.Brand>
        <Nav className="justify-content-end" style={{ flex: '1' }}>
          <DropdownButton
            alignRight
            variant="secondary"
            title="Test User"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Account Details</Dropdown.Item>
            <Dropdown.Item eventKey="2">Logout</Dropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar>
      <AppWrapper>
        <SideBar>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link eventKey="link-1">Home</Nav.Link>
            <Nav.Link eventKey="link-2">Assets</Nav.Link>
            <Nav.Link eventKey="link-3">Categories</Nav.Link>
            <Nav.Link eventKey="link-4">Manufacturers</Nav.Link>
            <Nav.Link eventKey="link-5">Etc</Nav.Link>
            <Nav.Link eventKey="link-6">Etc</Nav.Link>
          </Nav>
        </SideBar>
        <MainDiv>
          content
          {/* <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <FormattedMessage {...messages.header} /> */}
        </MainDiv>
      </AppWrapper>
    </div>
  );
}

MainPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
