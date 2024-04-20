interface SideBarShadcnMbdProps {
  activeChild: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  multiStepFormConfiguration: JSX.Element[];
}

const SideBarShadcnMbd = ({
  activeChild,
  setActive,
  multiStepFormConfiguration,
}: SideBarShadcnMbdProps) => {
  return (
    <div className=" basis-2/6 ">
      <nav className="py-5 text-slate-200 h-full rounded-md border shadow-md md:shadow-xl md:p-5">
        <ul className="flex justify-center gap-2 md:flex-col">
          {multiStepFormConfiguration?.map(
            (component: JSX.Element, i: number) => (
              <li key={i} className="flex gap-2 font-medium">
                <span className="hidden text-neutral-500 uppercase text-sm md:flex">
                  {/* <ErrorBadgeIconComponent /> */}
                </span>
                <button
                  onClick={() => setActive(i)}
                  className={`text-sm ${
                    activeChild === i
                      ? 'text-sm font-medium transition-colors hover:text-primary'
                      : 'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
                  } md:text-base`}
                >
                  {component.props.title}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export { SideBarShadcnMbd };
