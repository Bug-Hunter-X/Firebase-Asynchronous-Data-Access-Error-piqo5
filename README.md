# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase applications: attempting to access document snapshot properties before the data has fully loaded.  This can lead to unexpected errors and crashes.

The `bug.js` file shows the erroneous code.  The `bugSolution.js` file provides the corrected implementation.

## Problem

Asynchronous operations in Firebase (like querying data) often complete after the code requesting the data has moved on.  If you try to immediately access properties of a snapshot before the asynchronous operation finishes, you'll receive an error.

## Solution

Ensure you handle data access within the asynchronous operation's completion callback. This guarantees the data is loaded before access.