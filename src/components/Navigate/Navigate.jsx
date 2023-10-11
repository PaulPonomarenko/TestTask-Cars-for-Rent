import { MainNavigation, PageLink, NavigationWrapper } from './Navigate.styled';

export const Navigate = () => {
  return (
    <header style={{ backgroundColor: '#3470ff' }}>
      <NavigationWrapper>
        <MainNavigation>
          <PageLink to="/">Home</PageLink>
          <PageLink to="/catalog">Catalog</PageLink>
          <PageLink to="/favorites">Favorite</PageLink>
        </MainNavigation>
      </NavigationWrapper>
    </header>
  );
};
