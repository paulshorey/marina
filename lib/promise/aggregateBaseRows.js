import Airtable from "airtable";
let base = new Airtable({ apiKey: "keytWFat3VYn1wKDG" }).base("apppHCkVGu1Q6cxF3");

/**
 * Fetch "base" from Airtable. Iterate each row. Add each row to aggregate dictionary
 * @param BASE {string} - name of "base" in Airtable
 * @param ROWS {object} - each key in dictionary is row.id of value. Value is row from Airtable.
 *    Rows will be aggregated by id, even from different tables (bases).
 *    If encounter multiple same ids, latest id will overwrite previous,
 *    so, wait till this function completes before calling next instance.
 * @returns {Promise} - Promise returns nothing. All data is added to passed in ROWS dictionary
 */
export default function aggregateBaseRows(BASE='', ROWS={}){
  return new Promise((resolve) => {
    base(BASE)
      .select({
        maxRecords: 100,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // add row
          records.forEach(function (record) {
            let row = {};
            row.id = record.get("id");
            if (!row.id) return;
            row.text = record.get("text") || null;
            row.title = record.get("title") || null;
            row.image = record.get("image") || null;
            row.linkText = record.get("linkText") || null;
            row.linkUrl = record.get("linkUrl") || null;
            ROWS[row.id] = row;
          });
          // next
          fetchNextPage();
        },
        function done(err) {
          // error
          if (err) {
            console.error(err);
          }
          // done
          resolve();
        }
      );
  })
}
