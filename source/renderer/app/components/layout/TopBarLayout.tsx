import React, { Component } from "react";
import type { Node } from "react";
import { observer } from "mobx-react";
import styles from "./TopBarLayout.scss";
type Props = {
  topbar: Node;
  children?: Node | null | undefined;
  notification?: Node | null | undefined;
};
export default @observer
class TopBarLayout extends Component<Props> {
  render() {
    const {
      children,
      topbar,
      notification
    } = this.props;
    return <div className={styles.component}>
        <div className={styles.topbar}>{topbar}</div>
        {notification}
        <div className={styles.content}>{children}</div>
      </div>;
  }

}