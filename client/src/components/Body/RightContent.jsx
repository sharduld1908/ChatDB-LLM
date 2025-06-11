import FileUpload from './FileUpload';
import TableView from './TableView';

const customerTableData = {
  tableName: "customers",
  // Column order now quadrupled from original
  columns: [
    "first_name", "id", "last_name",
    "first_name1", "id1", "last_name1",
    "first_name2", "id2", "last_name2",
    "first_name3", "id3", "last_name3",
    "first_name4", "id4", "last_name4",
    "first_name5", "id5", "last_name5",
    "first_name6", "id6", "last_name6",   // New set 4
    "first_name7", "id7", "last_name7",   // New set 5
    "first_name8", "id8", "last_name8",   // New set 6
    "first_name9", "id9", "last_name9",   // New set 7
    "first_name10", "id10", "last_name10", // New set 8
    "first_name11", "id11", "last_name11"  // New set 9
  ],
  data: [
    {
      first_name: "Michael", id: 1, last_name: "P.",
      first_name1: "Michael", id1: 1, last_name1: "P.",
      first_name2: "Michael", id2: 1, last_name2: "P.",
      first_name3: "Michael", id3: 1, last_name3: "P.",
      first_name4: "Michael", id4: 1, last_name4: "P.",
      first_name5: "Michael", id5: 1, last_name5: "P.",
      first_name6: "Michael", id6: 1, last_name6: "P.", // Copied from base
      first_name7: "Michael", id7: 1, last_name7: "P.", // Copied from base
      first_name8: "Michael", id8: 1, last_name8: "P.", // Copied from base
      first_name9: "Michael", id9: 1, last_name9: "P.", // Copied from base
      first_name10: "Michael", id10: 1, last_name10: "P.",// Copied from base
      first_name11: "Michael", id11: 1, last_name11: "P." // Copied from base
    },
    {
      first_name: "Shawn", id: 2, last_name: "M.",
      first_name1: "Shawn", id1: 2, last_name1: "M.",
      first_name2: "Shawn", id2: 2, last_name2: "M.",
      first_name3: "Shawn", id3: 2, last_name3: "M.",
      first_name4: "Shawn", id4: 2, last_name4: "M.",
      first_name5: "Shawn", id5: 2, last_name5: "M.",
      first_name6: "Shawn", id6: 2, last_name6: "M.",
      first_name7: "Shawn", id7: 2, last_name7: "M.",
      first_name8: "Shawn", id8: 2, last_name8: "M.",
      first_name9: "Shawn", id9: 2, last_name9: "M.",
      first_name10: "Shawn", id10: 2, last_name10: "M.",
      first_name11: "Shawn", id11: 2, last_name11: "M."
    },
    {
      first_name: "Kathleen", id: 3, last_name: "P.",
      first_name1: "Kathleen", id1: 3, last_name1: "P.",
      first_name2: "Kathleen", id2: 3, last_name2: "P.",
      first_name3: "Kathleen", id3: 3, last_name3: "P.",
      first_name4: "Kathleen", id4: 3, last_name4: "P.",
      first_name5: "Kathleen", id5: 3, last_name5: "P.",
      first_name6: "Kathleen", id6: 3, last_name6: "P.",
      first_name7: "Kathleen", id7: 3, last_name7: "P.",
      first_name8: "Kathleen", id8: 3, last_name8: "P.",
      first_name9: "Kathleen", id9: 3, last_name9: "P.",
      first_name10: "Kathleen", id10: 3, last_name10: "P.",
      first_name11: "Kathleen", id11: 3, last_name11: "P."
    },
    {
      first_name: "Jimmy", id: 4, last_name: "C.",
      first_name1: "Jimmy", id1: 4, last_name1: "C.",
      first_name2: "Jimmy", id2: 4, last_name2: "C.",
      first_name3: "Jimmy", id3: 4, last_name3: "C.",
      first_name4: "Jimmy", id4: 4, last_name4: "C.",
      first_name5: "Jimmy", id5: 4, last_name5: "C.",
      first_name6: "Jimmy", id6: 4, last_name6: "C.",
      first_name7: "Jimmy", id7: 4, last_name7: "C.",
      first_name8: "Jimmy", id8: 4, last_name8: "C.",
      first_name9: "Jimmy", id9: 4, last_name9: "C.",
      first_name10: "Jimmy", id10: 4, last_name10: "C.",
      first_name11: "Jimmy", id11: 4, last_name11: "C."
    },
    {
      first_name: "Katherine", id: 5, last_name: "R.",
      first_name1: "Katherine", id1: 5, last_name1: "R.",
      first_name2: "Katherine", id2: 5, last_name2: "R.",
      first_name3: "Katherine", id3: 5, last_name3: "R.",
      first_name4: "Katherine", id4: 5, last_name4: "R.",
      first_name5: "Katherine", id5: 5, last_name5: "R.",
      first_name6: "Katherine", id6: 5, last_name6: "R.",
      first_name7: "Katherine", id7: 5, last_name7: "R.",
      first_name8: "Katherine", id8: 5, last_name8: "R.",
      first_name9: "Katherine", id9: 5, last_name9: "R.",
      first_name10: "Katherine", id10: 5, last_name10: "R.",
      first_name11: "Katherine", id11: 5, last_name11: "R."
    },
    {
      first_name: "David", id: 6, last_name: "S.",
      first_name1: "David", id1: 6, last_name1: "S.",
      first_name2: "David", id2: 6, last_name2: "S.",
      first_name3: "David", id3: 6, last_name3: "S.",
      first_name4: "David", id4: 6, last_name4: "S.",
      first_name5: "David", id5: 6, last_name5: "S.",
      first_name6: "David", id6: 6, last_name6: "S.",
      first_name7: "David", id7: 6, last_name7: "S.",
      first_name8: "David", id8: 6, last_name8: "S.",
      first_name9: "David", id9: 6, last_name9: "S.",
      first_name10: "David", id10: 6, last_name10: "S.",
      first_name11: "David", id11: 6, last_name11: "S."
    },
    {
      first_name: "Laura", id: 7, last_name: "B.",
      first_name1: "Laura", id1: 7, last_name1: "B.",
      first_name2: "Laura", id2: 7, last_name2: "B.",
      first_name3: "Laura", id3: 7, last_name3: "B.",
      first_name4: "Laura", id4: 7, last_name4: "B.",
      first_name5: "Laura", id5: 7, last_name5: "B.",
      first_name6: "Laura", id6: 7, last_name6: "B.",
      first_name7: "Laura", id7: 7, last_name7: "B.",
      first_name8: "Laura", id8: 7, last_name8: "B.",
      first_name9: "Laura", id9: 7, last_name9: "B.",
      first_name10: "Laura", id10: 7, last_name10: "B.",
      first_name11: "Laura", id11: 7, last_name11: "B."
    },
    {
      first_name: "Kevin", id: 8, last_name: "F.",
      first_name1: "Kevin", id1: 8, last_name1: "F.",
      first_name2: "Kevin", id2: 8, last_name2: "F.",
      first_name3: "Kevin", id3: 8, last_name3: "F.",
      first_name4: "Kevin", id4: 8, last_name4: "F.",
      first_name5: "Kevin", id5: 8, last_name5: "F.",
      first_name6: "Kevin", id6: 8, last_name6: "F.",
      first_name7: "Kevin", id7: 8, last_name7: "F.",
      first_name8: "Kevin", id8: 8, last_name8: "F.",
      first_name9: "Kevin", id9: 8, last_name9: "F.",
      first_name10: "Kevin", id10: 8, last_name10: "F.",
      first_name11: "Kevin", id11: 8, last_name11: "F."
    },
    {
      first_name: "Sarah", id: 9, last_name: "W.",
      first_name1: "Sarah", id1: 9, last_name1: "W.",
      first_name2: "Sarah", id2: 9, last_name2: "W.",
      first_name3: "Sarah", id3: 9, last_name3: "W.",
      first_name4: "Sarah", id4: 9, last_name4: "W.",
      first_name5: "Sarah", id5: 9, last_name5: "W.",
      first_name6: "Sarah", id6: 9, last_name6: "W.",
      first_name7: "Sarah", id7: 9, last_name7: "W.",
      first_name8: "Sarah", id8: 9, last_name8: "W.",
      first_name9: "Sarah", id9: 9, last_name9: "W.",
      first_name10: "Sarah", id10: 9, last_name10: "W.",
      first_name11: "Sarah", id11: 9, last_name11: "W."
    },
    {
      first_name: "Robert", id: 10, last_name: "L.",
      first_name1: "Robert", id1: 10, last_name1: "L.",
      first_name2: "Robert", id2: 10, last_name2: "L.",
      first_name3: "Robert", id3: 10, last_name3: "L.",
      first_name4: "Robert", id4: 10, last_name4: "L.",
      first_name5: "Robert", id5: 10, last_name5: "L.",
      first_name6: "Robert", id6: 10, last_name6: "L.",
      first_name7: "Robert", id7: 10, last_name7: "L.",
      first_name8: "Robert", id8: 10, last_name8: "L.",
      first_name9: "Robert", id9: 10, last_name9: "L.",
      first_name10: "Robert", id10: 10, last_name10: "L.",
      first_name11: "Robert", id11: 10, last_name11: "L."
    },
    {
      first_name: "Jennifer", id: 11, last_name: "K.",
      first_name1: "Jennifer", id1: 11, last_name1: "K.",
      first_name2: "Jennifer", id2: 11, last_name2: "K.",
      first_name3: "Jennifer", id3: 11, last_name3: "K.",
      first_name4: "Jennifer", id4: 11, last_name4: "K.",
      first_name5: "Jennifer", id5: 11, last_name5: "K.",
      first_name6: "Jennifer", id6: 11, last_name6: "K.",
      first_name7: "Jennifer", id7: 11, last_name7: "K.",
      first_name8: "Jennifer", id8: 11, last_name8: "K.",
      first_name9: "Jennifer", id9: 11, last_name9: "K.",
      first_name10: "Jennifer", id10: 11, last_name10: "K.",
      first_name11: "Jennifer", id11: 11, last_name11: "K."
    },
    {
      first_name: "Daniel", id: 12, last_name: "T.",
      first_name1: "Daniel", id1: 12, last_name1: "T.",
      first_name2: "Daniel", id2: 12, last_name2: "T.",
      first_name3: "Daniel", id3: 12, last_name3: "T.",
      first_name4: "Daniel", id4: 12, last_name4: "T.",
      first_name5: "Daniel", id5: 12, last_name5: "T.",
      first_name6: "Daniel", id6: 12, last_name6: "T.",
      first_name7: "Daniel", id7: 12, last_name7: "T.",
      first_name8: "Daniel", id8: 12, last_name8: "T.",
      first_name9: "Daniel", id9: 12, last_name9: "T.",
      first_name10: "Daniel", id10: 12, last_name10: "T.",
      first_name11: "Daniel", id11: 12, last_name11: "T."
    },
    {
      first_name: "Jessica", id: 13, last_name: "G.",
      first_name1: "Jessica", id1: 13, last_name1: "G.",
      first_name2: "Jessica", id2: 13, last_name2: "G.",
      first_name3: "Jessica", id3: 13, last_name3: "G.",
      first_name4: "Jessica", id4: 13, last_name4: "G.",
      first_name5: "Jessica", id5: 13, last_name5: "G.",
      first_name6: "Jessica", id6: 13, last_name6: "G.",
      first_name7: "Jessica", id7: 13, last_name7: "G.",
      first_name8: "Jessica", id8: 13, last_name8: "G.",
      first_name9: "Jessica", id9: 13, last_name9: "G.",
      first_name10: "Jessica", id10: 13, last_name10: "G.",
      first_name11: "Jessica", id11: 13, last_name11: "G."
    },
    {
      first_name: "Brian", id: 14, last_name: "Q.",
      first_name1: "Brian", id1: 14, last_name1: "Q.",
      first_name2: "Brian", id2: 14, last_name2: "Q.",
      first_name3: "Brian", id3: 14, last_name3: "Q.",
      first_name4: "Brian", id4: 14, last_name4: "Q.",
      first_name5: "Brian", id5: 14, last_name5: "Q.",
      first_name6: "Brian", id6: 14, last_name6: "Q.",
      first_name7: "Brian", id7: 14, last_name7: "Q.",
      first_name8: "Brian", id8: 14, last_name8: "Q.",
      first_name9: "Brian", id9: 14, last_name9: "Q.",
      first_name10: "Brian", id10: 14, last_name10: "Q.",
      first_name11: "Brian", id11: 14, last_name11: "Q."
    },
    {
      first_name: "Emily", id: 15, last_name: "V.",
      first_name1: "Emily", id1: 15, last_name1: "V.",
      first_name2: "Emily", id2: 15, last_name2: "V.",
      first_name3: "Emily", id3: 15, last_name3: "V.",
      first_name4: "Emily", id4: 15, last_name4: "V.",
      first_name5: "Emily", id5: 15, last_name5: "V.",
      first_name6: "Emily", id6: 15, last_name6: "V.",
      first_name7: "Emily", id7: 15, last_name7: "V.",
      first_name8: "Emily", id8: 15, last_name8: "V.",
      first_name9: "Emily", id9: 15, last_name9: "V.",
      first_name10: "Emily", id10: 15, last_name10: "V.",
      first_name11: "Emily", id11: 15, last_name11: "V."
    },
    {
      first_name: "Christopher", id: 16, last_name: "Z.",
      first_name1: "Christopher", id1: 16, last_name1: "Z.",
      first_name2: "Christopher", id2: 16, last_name2: "Z.",
      first_name3: "Christopher", id3: 16, last_name3: "Z.",
      first_name4: "Christopher", id4: 16, last_name4: "Z.",
      first_name5: "Christopher", id5: 16, last_name5: "Z.",
      first_name6: "Christopher", id6: 16, last_name6: "Z.",
      first_name7: "Christopher", id7: 16, last_name7: "Z.",
      first_name8: "Christopher", id8: 16, last_name8: "Z.",
      first_name9: "Christopher", id9: 16, last_name9: "Z.",
      first_name10: "Christopher", id10: 16, last_name10: "Z.",
      first_name11: "Christopher", id11: 16, last_name11: "Z."
    },
    {
      first_name: "Amanda", id: 17, last_name: "Y.",
      first_name1: "Amanda", id1: 17, last_name1: "Y.",
      first_name2: "Amanda", id2: 17, last_name2: "Y.",
      first_name3: "Amanda", id3: 17, last_name3: "Y.",
      first_name4: "Amanda", id4: 17, last_name4: "Y.",
      first_name5: "Amanda", id5: 17, last_name5: "Y.",
      first_name6: "Amanda", id6: 17, last_name6: "Y.",
      first_name7: "Amanda", id7: 17, last_name7: "Y.",
      first_name8: "Amanda", id8: 17, last_name8: "Y.",
      first_name9: "Amanda", id9: 17, last_name9: "Y.",
      first_name10: "Amanda", id10: 17, last_name10: "Y.",
      first_name11: "Amanda", id11: 17, last_name11: "Y."
    },
    {
      first_name: "Jason", id: 18, last_name: "X.",
      first_name1: "Jason", id1: 18, last_name1: "X.",
      first_name2: "Jason", id2: 18, last_name2: "X.",
      first_name3: "Jason", id3: 18, last_name3: "X.",
      first_name4: "Jason", id4: 18, last_name4: "X.",
      first_name5: "Jason", id5: 18, last_name5: "X.",
      first_name6: "Jason", id6: 18, last_name6: "X.",
      first_name7: "Jason", id7: 18, last_name7: "X.",
      first_name8: "Jason", id8: 18, last_name8: "X.",
      first_name9: "Jason", id9: 18, last_name9: "X.",
      first_name10: "Jason", id10: 18, last_name10: "X.",
      first_name11: "Jason", id11: 18, last_name11: "X."
    },
    {
      first_name: "Mary", id: 19, last_name: "A.",
      first_name1: "Mary", id1: 19, last_name1: "A.",
      first_name2: "Mary", id2: 19, last_name2: "A.",
      first_name3: "Mary", id3: 19, last_name3: "A.",
      first_name4: "Mary", id4: 19, last_name4: "A.",
      first_name5: "Mary", id5: 19, last_name5: "A.",
      first_name6: "Mary", id6: 19, last_name6: "A.",
      first_name7: "Mary", id7: 19, last_name7: "A.",
      first_name8: "Mary", id8: 19, last_name8: "A.",
      first_name9: "Mary", id9: 19, last_name9: "A.",
      first_name10: "Mary", id10: 19, last_name10: "A.",
      first_name11: "Mary", id11: 19, last_name11: "A."
    },
    {
      first_name: "Richard", id: 20, last_name: "N.",
      first_name1: "Richard", id1: 20, last_name1: "N.",
      first_name2: "Richard", id2: 20, last_name2: "N.",
      first_name3: "Richard", id3: 20, last_name3: "N.",
      first_name4: "Richard", id4: 20, last_name4: "N.",
      first_name5: "Richard", id5: 20, last_name5: "N.",
      first_name6: "Richard", id6: 20, last_name6: "N.",
      first_name7: "Richard", id7: 20, last_name7: "N.",
      first_name8: "Richard", id8: 20, last_name8: "N.",
      first_name9: "Richard", id9: 20, last_name9: "N.",
      first_name10: "Richard", id10: 20, last_name10: "N.",
      first_name11: "Richard", id11: 20, last_name11: "N."
    },
  ],
};

function RightContent() {
  return (
    // This main div uses flex column layout and takes full height from its parent.
    // The parent div in Body.jsx already has `p-4`.
    // The `overflow-auto` on `RightContent`'s direct wrapper in `Body.jsx` is removed,
    // as `App.jsx -> main` already provides overall page scroll.
    // Internal scrolling is handled by the table container.
    <div className="flex flex-col h-full text-gray-800"> 
      <h1 className="text-2xl font-semibold mb-4 flex-shrink-0">Table view</h1>
      
      {/* Table View Section: This div acts as the card for the table.
          It grows to take available vertical space and provides vertical scrolling for its content.
          With `whitespace-nowrap` on the child <p> tag, it will also provide horizontal scrolling if the text is long enough. */}
      <div className="flex-grow overflow-auto min-h-0 mb-6 bg-white shadow-md rounded-lg"> 
        <TableView
          tableName={customerTableData.tableName}
          columns={customerTableData.columns}
          data={customerTableData.data}
        />
      </div>

      {/* File Upload Section: This div ensures the FileUpload component is at the bottom. */}
      <div className="flex-shrink-0">
        <FileUpload />
      </div>
    </div>
  );
}

export default RightContent;