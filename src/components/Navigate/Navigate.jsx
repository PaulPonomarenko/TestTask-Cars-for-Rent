import { MainNavigation, PageLink } from './Navigate.styled';

export const Navigate = () => {
  return (
    <header>
      <MainNavigation>
        <PageLink to="/">Home</PageLink>
        <PageLink to="/catalog">Catalog</PageLink>
        <PageLink to="/favorites">Favorite</PageLink>
      </MainNavigation>
    </header>
  );
};
