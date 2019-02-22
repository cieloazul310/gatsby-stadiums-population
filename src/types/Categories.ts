export type FootballCategories = 'J1' | 'J2' | 'J3' | 'JFL' | '地域' | 'その他';
export const footballCategories: FootballCategories[] = ['J1', 'J2', 'J3', 'JFL', '地域', 'その他'];

export type BasketballCategories = 'B1' | 'B2' | 'B3' | '地域';
export const basketballCategories: BasketballCategories[] = ['B1', 'B2', 'B3', '地域'];

export type Categories = FootballCategories | BasketballCategories;

export type Group = 'venues' | 'arenas';
