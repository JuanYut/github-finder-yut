import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url} style={{ color: '#2196f3' }}>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.array.isRequired
};

export default ReposItem;
