import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'academic', 'admission', 'graduation', 'program', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        aria-label={`Go to ${item} section`}
        role="button"
        tabIndex="0"
        style={active === item ? { backgroundColor: '#313BAC' } : { backgroundColor: '#FFFFFF' }}
      >.
      </a>
    ))}
  </div>
);

export default NavigationDots;
