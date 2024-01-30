export interface ICatFavoritesService {
    list: string[];

    addToFavorite (id: string): any;

    removeFromFavorite (id: string): any;

    isFavorite (id: string): boolean;
}

/**
 * Я понимаю как это выглядит, но в данном случае почему бы и нет
 */
export class CatFavoritesService implements ICatFavoritesService {
    private readonly _favorites: string[] = [];
    private readonly _ls_name: string     = 'cats_favorites';

    constructor () {
        this._favorites = this._get();
    }

    get list () {
        return this._favorites;
    }

    addToFavorite (id: string) {
        this._favorites.push(id);
        this._save(this._favorites);
    }

    removeFromFavorite (id: string) {
        for (let i = 0; i < this._favorites.length; i++) {
            if (this._favorites[i] === id) {
                this._favorites.splice(i, 1);
                break;
            }
        }
        this._save(this._favorites);
    }

    isFavorite (id: string): boolean {
        return !!this._favorites.find((favoriteId) => id === favoriteId);
    }


    private _get (): string[] {
        try {
            return JSON.parse(localStorage.getItem(this._ls_name) ?? '[]');
        } catch (_) {
            return [];
        }
    }

    private _save (favorites: string[]): void {
        localStorage.setItem(this._ls_name, JSON.stringify(favorites));
    }
}