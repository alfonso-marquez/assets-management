/**
 *
 * CategoriesPage
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
import makeSelectCategoriesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function CategoriesPage() {
  useInjectReducer({ key: 'categoriesPage', reducer });
  useInjectSaga({ key: 'categoriesPage', saga });

  return (
    <div>
      <Helmet>
        <title>CategoriesPage</title>
        <meta name="description" content="Description of CategoriesPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CategoriesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  categoriesPage: makeSelectCategoriesPage(),
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
)(CategoriesPage);
