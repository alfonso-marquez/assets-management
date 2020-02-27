/**
 *
 * MainPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

// import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMainPage, { makeSelectResponse } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchCategories } from './actions';
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
  background: white;
  -ms-flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
`;

export function MainPage(props) {
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });

  useEffect(() => {
    console.log('use effect');
    props.loadCategories();
  }, []);

  const { response } = props;

  return (
    <div>
      {/* {response} */}

      <AppWrapper>
        <SideBar>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link eventKey="/">Home</Nav.Link>
            <Nav.Link eventKey="/features">Assets</Nav.Link>
            <Nav.Link eventKey="/categories">categories</Nav.Link>
            <Nav.Link eventKey="link-4">Manufacturers</Nav.Link>
            <Nav.Link eventKey="link-5">Etc</Nav.Link>
            <Nav.Link eventKey="link-6">Etc</Nav.Link>
          </Nav>
        </SideBar>
        <MainDiv>
          content
          {/* {props.response.list.map(item => (
            <div key={`item-${item.id}`} item={item}>
              {item.name}
            </div>
          ))} */}
          <ul>
            {response &&
              response.list &&
              response.list.map(item => <li key={item}>{item.name}</li>)}
          </ul>
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
  loadCategories: PropTypes.any,
  response: PropTypes.object,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
  response: makeSelectResponse(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadCategories: response => {
      console.log('load categories ran');
      dispatch(fetchCategories(response));
    },
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
