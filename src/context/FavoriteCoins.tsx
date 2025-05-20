import { createContext, useContext, useState } from 'react';

interface FavoriteCoinsContextProps {
  favoriteCoins: string[];
  setFavoritesCoins: (coinId: string) => void;
}

const FavoriteCoinsContext = createContext<FavoriteCoinsContextProps>({
  favoriteCoins: [],
  setFavoritesCoins: (coinId: string) => {}
});

export const FavoriteCoinsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteCoins, setFavoritesCoins] = useState<string[]>([]);

  return (
    <FavoriteCoinsContext value={{
      favoriteCoins, setFavoritesCoins: (coinId: string) => {
        // Check if coinId is already in the array
        if (favoriteCoins.includes(coinId)) {
          // If it is, remove it
          setFavoritesCoins(favoriteCoins.filter(id => id !== coinId));
          return;
        }
        // If it isn't, add it
        setFavoritesCoins([...favoriteCoins, coinId])
      }
    }}>
      {children}
    </FavoriteCoinsContext>
  );
};

export const useFavoriteCoins = (): FavoriteCoinsContextProps => {

  const context = useContext(FavoriteCoinsContext);

  if (context === undefined) throw new Error('useFavoriteCoins must be used within a FavoriteCoinsProvider');

  return context;
};