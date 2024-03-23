import {
  AvatarUserProfileShadcnMbd,
  ListActionsShadcnMbd,
  SearchBardShadcnMbd,
  MenuShadcnMbd,
  DropDownMenuConfiguration,
} from 'components';

export const NavbarShadcnMbd = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MenuShadcnMbd className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <SearchBardShadcnMbd />
          <AvatarUserProfileShadcnMbd />
          <ListActionsShadcnMbd
            dropDownMenuConfiguration={<DropDownMenuConfiguration />}
          />
        </div>
      </div>
    </div>
  );
};
