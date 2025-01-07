export function IndexedDbDeleteFun() {
    setTimeout(() => {
        const dbRequest = indexedDB.open("questionsDatabase", 1);
        dbRequest.onsuccess = (event) => {
            const db = event.target.result;
            db.close();
            const deleteRequest = indexedDB.deleteDatabase("questionsDatabase");

            deleteRequest.onsuccess = () => {
                console.log("Database deleted successfully");
            };
        }
    }, 100)
}