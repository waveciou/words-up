import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IRouteItem } from '@/Interfaces/global';
import { setIsMenuOpen } from '@/Slice/common';
import { RootState } from '@/Store/index';
import styles from '@/Styles/menu.module.scss';

const ROUTE = require('../src/data/route.json');

const Menu: React.FC = () => {
  const [routeLinks, setRouteLinks] = useState<[]>([]);
  const { isMenuOpen } = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const { route } = ROUTE;
    setRouteLinks(route);
  }, []);

  const ClassHandleMenu = () => `${isMenuOpen === true ? styles['is-active'] : ''}`;
  const ClassHandleLink = (path: string, id: string) => `${styles.item} ${styles[`icon-${id}`]} ${router.asPath === path ? styles.current : ''}`;

  return (
    <nav id={styles.menu} className={ClassHandleMenu()}>
      <div className={styles.header}>
        <button
          type="button"
          aria-label="close-menu"
          className={styles['close-btn']}
          onClick={() => { dispatch(setIsMenuOpen(false)); }}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <ul className={styles.list}>
            {
              routeLinks.map((route: IRouteItem) => {
                const { id, path, name } = route;
                return (
                  <li key={id}>
                    <Link href={path} passHref>
                      <a href="replace" className={ClassHandleLink(path, id)}>{name}</a>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
