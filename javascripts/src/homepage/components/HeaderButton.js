import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


const style = {
    marginRight: 20,
};

export default class HeaderButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
        }
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark"
        return (
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                    label="Recents"
                    icon={recentsIcon}
                    onTouchTap={() => this.select(0)}
                />
                <BottomNavigationItem
                    label="Favorites"
                    icon={favoritesIcon}
                    onTouchTap={() => this.select(1)}
                />
                <BottomNavigationItem
                    label="FAQ"
                    onTouchTap={() => this.select(2)}
                />
            </BottomNavigation>
        )
    }
}