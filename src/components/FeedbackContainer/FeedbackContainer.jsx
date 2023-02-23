import PropTypes from 'prop-types';
import React from 'react';

export const Section = ({ children, title }) => {
  return (
    <section>
      <main>
        <h2>{title}</h2>
        {children}
      </main>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
