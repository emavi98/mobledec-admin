import { NavbarShadcnMbd } from '../components';

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="2xl:flex 2xl:justify-center 2xl:items-center 2xl:h-screen md:flex md:justify-center md:items-start  md:p-4 ">
      <div className="container">
        <div className="rounded-[0.5rem] border  bg-background 2xl:h-[800px] shadow-md md:shadow-xl md:h-[500px]">
          <NavbarShadcnMbd />
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};
