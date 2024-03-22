import { MainNav } from './components/main-nav/main-nav';
import { UserNav } from './components/user-nav/user-nav';
//import TeamSwitcher from './components/team-switcher/team-switcher';
import { ModeToggle } from './components/mode-toggle/mode-toggle';
import SearchComponent from '../search/search';

export const Navbar = () => {
  return (
    <div className="border-b">
      {/* <TeamSwitcher /> */}
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <SearchComponent />
          <UserNav />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
