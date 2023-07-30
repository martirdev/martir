import {Link, Outlet, ScrollRestoration} from 'react-router-dom';

import {UserCard} from '_entities/user-card';
import {Container} from '_shared/container';
import {Logo} from '_shared/logo';
import {VerticalNav} from '_shared/vertical-nav';
import {Header} from '_widgets/header';

import {GROUPS} from './consts';

const AdminRoot = function AdminRoot() {
  return (
    <>
      <div className="flex h-screen">
        <Container
          px={{def: 2, lg: 6}}
          py={3}
          className="w-[64px] shrink-0 border-r border-common-dark-gray bg-common-darkest-gray lg:w-[350px]"
        >
          <div className="flex h-full flex-col gap-8">
            <Link to="/">
              <Logo />
            </Link>
            <VerticalNav groups={GROUPS} className="flex-1" />
            <UserCard />
          </div>
        </Container>
        <div className="flex-1">
          <Header isAdmin />
          <Container px={6} py={3} className="border-t border-common-dark-gray">
            <Outlet />
          </Container>
        </div>
      </div>
      <ScrollRestoration />
    </>
  );
};

export default AdminRoot;
