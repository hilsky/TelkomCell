import * as SQLite from 'expo-sqlite'


export const DatabaseUser = {
    getConnection: () => SQLite.openDatabase("dbUser.db"),
}