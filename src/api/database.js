import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase("database.db");

export const initializeDatabase = () => {
  // console.log(FileSystem.documentDirectory + "SQLite/");
  db.transaction(
    (tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS foods (id TEXT primary key not null, image TEXT, date TEXT);",
        null,
        () => {
        },
        () => {
          console.log("Create Error");
          return true
        }
      );
    }
  );
}

export const firstSaveDatabase = (id, image, date) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "INSERT INTO foods (id, image, date) VALUES (?, ?, ?);",
        [id, image, date],
        () => {
        },
        (e) => {
          console.log(e);
          return true
        }
      )
    }
  );
}

export const getHomeStoryDataSet = (set) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "select * from foods;",
        [],
        (_, data) => {
          set.length = 0;
          for (let i = 0; i < data.rows.length; i++) {
            const dataList = {
              user_id: i+1,
              user_image: {uri: data.rows.item(i).image},
              user_name: data.rows.item(i).date,
              stories: [{
                  story_id: i+1,
                  story_image: {uri: data.rows.item(i).image},
                  swipeText: data.rows.item(i).date,
              }]
            }
            set.push(dataList)
          }
        },
        () => {
          console.log("Show Error");
          false;
        }
      );
    }
  );
}

export const showDatabase = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "select * from foods;",
        [],
        (_, resultSet) => {
          console.log(resultSet);
        },
        () => {
          console.log("Show Error");
          return false;
        }
      );
    }
  );
}

export const dropTable = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "DROP TABLE foods;",
        null,
        () => {
        },
        () => {
          console.log("Drop Table Error");
          return true
        }
      );
    }
  );
}