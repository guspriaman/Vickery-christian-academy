import React, { Component } from 'react';
import './Header.scss';
import bg1 from '../../assets/2.png';
import bg2 from '../../assets/3.png';
import bg3 from '../../assets/4.png';
import bg4 from '../../assets/1.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBackground: 0,
      backgrounds: [bg1, bg2, bg3, bg4],
    };
  }

  componentDidMount() {
    this.backgroundInterval = setInterval(this.changeBackground, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.backgroundInterval);
  }

  changeBackground = () => {
    const { currentBackground, backgrounds } = this.state;
    const nextBackground = (currentBackground + 1) % backgrounds.length;
    this.setState({ currentBackground: nextBackground });
  };

  render() {
    const { currentBackground, backgrounds } = this.state;
    return (
      <header className="header" style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}>
        {/* Your header content here */}
      </header>
    );
  }
}

export default Header;
