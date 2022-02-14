import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("database.db");

export const initializeDatabase = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS foods (id TEXT primary key not null,"
          + "storyIconImage TEXT, storyImage TEXT, galleryImage TEXT, date TEXT);",
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

export const firstSaveDatabase = (id, storyIconImage, storyImage, galleryImage, date) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "INSERT INTO foods (id, storyIconImage, storyImage, galleryImage, date) VALUES (?, ?, ?, ?, ?);",
        [id, storyIconImage, storyImage, galleryImage, date],
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
        "SELECT * FROM foods;",
        [],
        (_, data) => {
          set.length = 0;
          for (let i = 0; i < data.rows.length; i++) {
            const date = data.rows.item(i).date.split('-');
            const dataList = {
              user_id: data.rows.item(i).id,
              user_image: {uri: data.rows.item(i).storyIconImage},
              user_name: date[1] + "月" + date[2] + "日",
              stories: [{
                  story_id: data.rows.item(i).id,
                  story_image: {uri: data.rows.item(i).storyImage},
                  swipeText: data.rows.item(i).date,
              }]
            }
            set.push(dataList)
          }
        },
        () => {
          console.log("Select Error");
        }
      );
    }
  );
}

export const getHomeCardDataSet = (setData) => {
  const dataSet = [];
  db.transaction(
    (tx) => {
      tx.executeSql(
        "SELECT id, galleryImage FROM foods;",
        [],
        (_, data) => {
          for (let i = 0; i < data.rows.length; i++) {
            const dataList = {
              id: data.rows.item(i).id,
              url: {uri: data.rows.item(i).galleryImage},
            }
            dataSet.push(dataList)
          }
          setData(dataSet);
        },
        () => {
          console.log("Select Error");
        }
      );
    }
  );
};

export const getGalleryDataSet = (setData) => {
  const dataSet = [];
  db.transaction(
    (tx) => {
      tx.executeSql(
        "SELECT id, galleryImage FROM foods;",
        [],
        (_, data) => {
          for (let i = 0; i < data.rows.length; i++) {
            const dataList = {
              id: data.rows.item(i).id,
              url: {uri: data.rows.item(i).galleryImage},
            }
            dataSet.push(dataList)
          }
          setData(dataSet);
        },
        () => {
          console.log("Select Error");
        }
      );
    }
  );
};

export const getDetailDataSet = (id, setData) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "SELECT * FROM foods WHERE id = ?;",
        [id],
        (_, data) => {
          const date = data.rows.item(0).date.split('-');
          const dataList = {
            id: data.rows.item(0).id,
            icon: {uri: data.rows.item(0).storyIconImage},
            date: date[1] + "月" + date[2] + "日",
            url: {uri: data.rows.item(0).storyImage},
          }
          setData(dataList);
        },
        () => {
          console.log("Select Error");
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