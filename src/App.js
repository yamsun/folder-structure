import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [folderStructure, setFolderStructure] = useState([
    {
      name: "My Computer",
      files: ["index.html", "style.css"]
    },
    {
      name: "My Folder",
      files: ["report.csv", "notes.txt"]
    }
  ]);

  console.log("f str", folderStructure);

  function addNewFolderHandler() {
    let newFolderName = prompt("Enter new Folder name: ");
    let newFolderItem = { name: newFolderName, files: [] };
    setFolderStructure((prev) => [...prev, newFolderItem]);
  }

  function addNewFileHandler(folderName) {
    let newFileName = prompt("Enter new Folder name: ");
    let fakeFolder = [...folderStructure];
    let updatedFolder = fakeFolder.find((folder) => folder.name === folderName);
    updatedFolder.files.push(newFileName);
    console.log("fakef", fakeFolder);
    setFolderStructure(fakeFolder);
  }

  return (
    <div className="App">
      <hr />
      <button onClick={addNewFolderHandler}>Add New Folder</button>
      {folderStructure?.map((folder, folderIndex) => {
        return (
          <div>
            <div style={{ border: "2px solid black", padding: 4, margin: 10 }}>
              <h4>{folder.name}</h4>
              <button onClick={() => addNewFileHandler(folder.name)}>
                Add file
              </button>
              <hr />
              <div>
                {folder?.files?.map((file, fileIndex) => {
                  return (
                    <div>
                      <p>{file}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
