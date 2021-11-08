import React, { Component } from "react";
import { observer } from "mobx-react";
import styles from "./Navigation.scss";
import NavButton from "./NavButton";
import NavDropdown from "./NavDropdown";
export type NavButtonProps = {
  type?: "button";
  id: string;
  label: string;
  icon?: string;
  hasNotification?: boolean;
};
export type NavDropdownProps = NavButtonProps & {
  type: "dropdown";
  options: Array<{
    value: number | string;
    label: string;
  }>;
  hasNotification?: boolean;
};
type Props = {
  activeItem: string;
  isActiveNavItem?: (...args: Array<any>) => any;
  onNavItemClick: (...args: Array<any>) => any;
  items: Array<NavButtonProps | NavDropdownProps>;
};
export default @observer
class Navigation extends Component<Props> {
  isActiveNavItem = (id: string, item: NavButtonProps | NavDropdownProps | {}) => {
    let result = false;

    if (!item) {
      result = id === this.props.activeItem;
    }

    return result;
  };

  render() {
    const {
      isActiveNavItem = this.isActiveNavItem,
      onNavItemClick,
      activeItem,
      items
    } = this.props;
    return <div className={styles.component}>
        {items.map(({
        id,
        icon,
        label,
        hasNotification,
        ...item
      }) => item.type === 'dropdown' ? <NavDropdown key={id} label={label} icon={icon} isActive={isActiveNavItem(id, item)} onChange={i => onNavItemClick(i)} activeItem={activeItem} options={item.options} hasNotification={hasNotification} /> : <NavButton key={id} className={id} label={label} icon={icon} isActive={isActiveNavItem(id, item)} onClick={() => onNavItemClick(id)} hasNotification={hasNotification} />)}
      </div>;
  }

}