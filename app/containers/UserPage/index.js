/**
 *
 * UserPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function UserPage() {
  useInjectReducer({ key: 'userPage', reducer });
  useInjectSaga({ key: 'userPage', saga });

  return (
    <div>
      <Helmet>
        <title>UserPage</title>
        <meta name="description" content="Description of UserPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

UserPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userPage: makeSelectUserPage(),
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
)(UserPage);
