The solution is to always access the document data within the `then()` block of the promise returned by the Firebase query.  This ensures that the data has fully loaded before you try to use it.

```javascript
db.collection('users').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // Access the data here. The data is guaranteed to be loaded.
    if (doc.exists) {
      const userData = doc.data();
      console.log(userData.name); 
    } else {
      console.log('No such document!');
    }
  });
}).catch((error) => {
  console.error('Error getting documents: ', error);
});
```

This revised code uses the `doc.exists` check for additional safety and handles potential errors using a `catch` block.