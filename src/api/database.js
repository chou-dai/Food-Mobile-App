import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("database.db");

export const initializeDatabase = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS foods"
          + "(id TEXT primary key not null, isPressed INTEGER,"
          + "smallImage TEXT, mediumImage TEXT, largeImage TEXT, date TEXT);",
        null,
        () => {
        },
        () => {
          console.warn("Create Error");
          return true
        }
      );
    }
  );
}

export const firstSaveDatabase = (id, isPressed, smallImage, mediumImage, largeImage, date) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "INSERT INTO foods (id, isPressed, smallImage, mediumImage, largeImage, date) VALUES (?, ?, ?, ?, ?, ?);",
        [id, isPressed, smallImage, mediumImage, largeImage, date],
        () => {
        },
        (e) => {
          console.warn(e);
          return true
        }
      )
    }
  );
}

export const getDataCount = (setCount) => {
  db.transaction(
    (tx) => {
       tx.executeSql(
        "SELECT * FROM foods;",
        [],
        (_, data) => {
          setCount(data.rows.length);
        },
        () => {
          return 0;
        }
      );
    }
  );
}

export const getHomeStoryDataSet = (setData) => {
  const dataSet = [];
  db.transaction(
    (tx) => {
       tx.executeSql(
        "SELECT * FROM foods ORDER BY date DESC;",
        [],
        (_, data) => {
          for (let i = 0; i < data.rows.length; i++) {
            const date = data.rows.item(i).date.split('-');
            const dataList = {
              user_id: data.rows.item(i).id,
              user_image: {uri: data.rows.item(i).smallImage},
              user_name: date[1] + "月" + date[2] + "日",
              seen: (data.rows.item(i).isPressed===1 ? true : false),
              stories: [{
                  story_id: data.rows.item(i).id,
                  story_image: {uri: data.rows.item(i).mediumImage},
                  swipeText: data.rows.item(i).date,
              }]
            }
            dataSet.push(dataList)
          }
          setData(dataSet);
        },
        () => {
          console.warn("Select Error");
        }
      );
    }
  );
}

export const updateIsPressed = (id) => {
  db.transaction(
    (tx) => {
       tx.executeSql(
        "UPDATE foods SET isPressed = 1 WHERE id = ?;",
        [id],
        () => {
        },
        () => {
          console.warn("Updare Error");
        }
      );
    }
  );
}


// "SELECT id, largeImage FROM foods ORDER BY RANDOM() LIMIT 6;",
export const getHomeCardDataSet = (setData) => {
  const dataSet = [];
  db.transaction(
    (tx) => {
      tx.executeSql(
        "SELECT id, largeImage FROM foods;",
        [],
        (_, data) => {
          for (let i = 0; i < data.rows.length; i++) {
            const dataList = {
              id: data.rows.item(i).id,
              url: {uri: data.rows.item(i).largeImage},
            }
            dataSet.push(dataList)
          }
          setData(dataSet);
        },
        () => {
          console.warn("Select Error");
        }
      );
    }
  );
};

export const getCalendarMarkSet = (setData, color) => {
  let dataSet = {};
  db.transaction(
    (tx) => {
      tx.executeSql(
        "SELECT date FROM foods;",
        [],
        (_, data) => {
          for (let i = 0; i < data.rows.length; i++) {
            const date = data.rows.item(i).date.split('-');
            const str = date[0] + '-' + (date[1].length===1 ? '0'+date[1] : date[1]) + '-' + (date[2].length===1 ? '0'+date[2] : date[2]);
            const dataList = {
              [str]: {marked: true, dotColor: color},
            }
            dataSet = {...dataSet, ...dataList}
          }
          setData(dataSet);
        },
        () => {
          console.warn("Select Error");
        }
      );
    }
  );
}

export const getCalendarDataSet = (query, setData) => {
  const dataSet = [];
  db.transaction(
    (tx) => {
      tx.executeSql(
        "SELECT * FROM foods WHERE date LIKE ?;",
        [query+'%'],
        (_, data) => {
          for (let i = 0; i < data.rows.length; i++) {
            const date = data.rows.item(i).date.split('-');
            const dataList = {
              num: i+1,
              day: date[2],
              id: data.rows.item(i).id,
              url: {uri: data.rows.item(i).smallImage},
            }
            dataSet.push(dataList)
          }
          setData(dataSet);
        },
        () => {
          console.warn("Select Error");
        }
      );
    }
  );
}

export const getGalleryDataSet = (setData) => {
  const dataSet = [];
  db.transaction(
    (tx) => {
      tx.executeSql(
        "SELECT id, largeImage FROM foods;",
        [],
        (_, data) => {
          for (let i = 0; i < data.rows.length; i++) {
            const dataList = {
              id: data.rows.item(i).id,
              url: {uri: data.rows.item(i).largeImage},
            }
            dataSet.push(dataList)
          }
          setData(dataSet);
        },
        () => {
          console.warn("Select Error");
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
            icon: {uri: data.rows.item(0).smallImage},
            date: date[1] + "月" + date[2] + "日",
            url: {uri: data.rows.item(0).mediumImage},
          }
          setData(dataList);
        },
        () => {
          console.warn("Select Error");
        }
      );
    }
  );
}

export const showDatabase = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "SELECT isPressed FROM foods;",
        [],
        (_, resultSet) => {
          console.log(resultSet);
        },
        () => {
          console.warn("Show Error");
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
          console.warn("Drop Table Error");
          return true
        }
      );
    }
  );
}