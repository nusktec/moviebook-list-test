import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

/**
 Session: Assessment | Code Test
 Email: nusktecsoft@gmail.com
 Developer: github.com/nusktec
 **/
export const themeToggle = (modV, v) => {
    modV(v != true);
}
/**
 * Array sorting mechanism
 */
export namespace MovieArrayEngine {
    //check if it is object pattern interface
    interface SorterAlgo {
        isObject(o: object)
    }

    /**
     * SA = Sorting agent
     */
    export class SorterAgent implements SorterAlgo {
        private _arrayAll = [];
        private _sortedYears = [];
        private _sortedGenres = [];
        private _sortedPopular = [];

        constructor(array?: any) {
            this._arrayAll = array;
        }

        public Initialize(array: any) {
            this._arrayAll = array;
        }

        private isObject(o: object) {
            return typeof o == "object"
        }

        /**
         * @param array movie arrays
         * @param key specific key to be filtered
         */
        public sortArrayByKey(array, key) {
            if (!this.isObject(array))
                return {}
            return array.sort(function (a, b) {
                let x = parseInt(a[key]);
                let y = parseInt(b[key]);
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        /**
         * Filter only genres data
         * @param sort
         */
        public filterGenres(sort?: boolean) {
            let tmpSort = [];
            this._arrayAll.forEach((d, i) => {
                tmpSort.push(...d.genres);
            })
            //remove repeated words
            if (sort)
                return [...new Set(tmpSort)].sort();
            else {
                return tmpSort;
            }
        }

        /**
         * String parser
         */
        public strParse(s) {
            return s.toString().toLowerCase();
        }

        /**
         * Find and sort popular movies
         */
        public filterPopular(ranking?: boolean): [] {
            let tmpArray = [];
            this._arrayAll.forEach((d, i) => {
                if (d.hasOwnProperty("rank")) {
                    tmpArray.push(d);
                }
            })
            //filter methods
            if (ranking) {
                return this.sortArrayByKey(tmpArray, "rank");
            }
            return tmpArray;
        }

        /**
         * Debt search functions
         * @param query
         * @param isSearch
         * @param isGlobal
         */
        public filterMovies(query?: string, isSearch?: boolean, isGlobal?: boolean) {
            let data = this._arrayAll;
            let tmpArray = this.sortArrayByKey(data, "year");
            //filter unique date
            let _date = [];
            tmpArray.forEach((d, i) => {
                _date.push(d.year);
            })
            //remove duplicate
            _date = [...new Set(_date)];
            //is query available ?
            if (isSearch) {
                let newList = [];
                let newYear = [];
                tmpArray.forEach((s, k) => {
                    if (!isGlobal) {
                        //search for genres only...
                        if (s?.genres.includes(query)) {
                            //as catch replace it
                            newList.push(s);
                            newYear.push(s.year);
                        }
                    } else {
                        //search for categories depth search
                        if (this.strParse(s?.title).includes(query?.toLowerCase())) {
                            //as catch replace it
                            newList.push(s);
                            newYear.push(s.year);
                        }
                        if (this.strParse(s?.year).includes(query?.toLowerCase())) {
                            //as catch replace it
                            newList.push(s);
                            newYear.push(s.year);
                        }
                        if (this.strParse(s?.director).includes(query?.toLowerCase())) {
                            //as catch replace it
                            newList.push(s);
                            newYear.push(s.year);
                        }
                        if (this.strParse(s?.actors).includes(query?.toLowerCase())) {
                            //as catch replace it
                            newList.push(s);
                            newYear.push(s.year);
                        }
                    }
                })
                //return and replace new array
                return {headers: [...new Set(newYear)].reverse(), data: newList};
            }
            //return freely
            return {headers: _date.reverse(), data: tmpArray};
        }
    }
}
/**
 * Disposable books data
 */

export namespace NetworkAgent {
    /**
     * Book store class
     */
    export class RequestAgent {
        /**
         * Fetch remake api
         */
        public Get(url: string, callback: any) {
            fetch(url)
                .then(response => response.json())
                .then(data => callback(data));
        }

        /**
         * @param url endpoint url
         * @param data data to be sent over, object
         * @param callback with data to receive as params
         * @constructor
         */
        public Post(url: string, data: object, callback: any) {
            (async () => {
                const rawResponse = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const content = await rawResponse.json();
                callback(content);
            })();
        }

        /**
         * Simple apollos server
         * @param callback
         * @constructor
         */
        public async ApollosAgent(queryObj, callback: any) {
            const client = new ApolloClient({
                uri: 'https://graph-mock.herokuapp.com/movies',
                cache: new InMemoryCache(),
            });
            const data = await client.query({query: queryObj});
            callback(data);
        }
    }

    /**
     * Api resolver and loader
     */
    class ApiResolver {

    }
}
/**
 * Color mixer
 */
export const ColorMixer = (): string => {
    let _colors = ['#9E9E9E', '#03A9F4', '#009688', '#7B1FA2', '#FF5722', '#009688'];
    let min = Math.ceil(0), max = Math.floor(_colors.length - 1);
    let rand = (Math.random() * (max - min) + 1) + min
    //list of fancy colors
    return _colors[Math.floor(rand)];
}