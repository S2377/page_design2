import { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';  // Import Appwrite SDK
import './Dashboard.css';  // Import the CSS file

const BookManagementDashboard = () => {
  const [books, setBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Initialize Appwrite client and set up database reference
  const client = new Client();
  const databases = new Databases(client);

  useEffect(() => {
    client
      .setEndpoint('https://cloud.appwrite.io/v1') // Set your Appwrite endpoint
      .setProject('67115b410030b907e032'); // Set your Appwrite project ID

    // Fetch books from Appwrite database on component mount
    const fetchBooks = async () => {
      try {
        const response = await databases.listDocuments(
          '6711e88c00259d80b5a8', // Replace with your database ID
          '67153962001fb662d5c6' // Replace with your collection ID
        );
        setBooks(response.documents); // Assume books are stored as documents
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };

    fetchBooks();
  }, [databases]);

  // Function to handle adding a new book to the Appwrite database
  const handleAdd = async () => {
    try {
      const newId = new Date().getTime(); // Generate a new unique ID for the book
      const response = await databases.createDocument(
        '6711e88c00259d80b5a8',  // Replace with your database ID
        '67153962001fb662d5c6', // Replace with your collection ID
        newId.toString(),     // Use newId as the document ID
        { title: newBook.title, author: newBook.author, year: parseInt(newBook.year) }
      );
      setBooks([...books, response]); // Update the books state with the new book
      setNewBook({ title: '', author: '', year: '' });
      setIsAddingNew(false);
    } catch (error) {
      console.error('Failed to add book:', error);
    }
  };

  // Function to handle updating an existing book in Appwrite database
  const handleUpdate = async () => {
    try {
      await databases.updateDocument(
        '6711e88c00259d80b5a8',  // Replace with your database ID
        '67153962001fb662d5c6', // Replace with your collection ID
        editingBook.$id,      // Document ID to be updated
        { title: editingBook.title, author: editingBook.author, year: parseInt(editingBook.year) }
      );
      setBooks(books.map(book => (book.$id === editingBook.$id ? editingBook : book)));
      setIsEditing(false);
      setEditingBook(null);
    } catch (error) {
      console.error('Failed to update book:', error);
    }
  };

  // Function to handle deleting a book from the Appwrite database
  const handleDelete = async (id) => {
    try {
      await databases.deleteDocument(
        '6711e88c00259d80b5a8',  // Replace with your database ID
        '67153962001fb662d5c6', // Replace with your collection ID
        id
      );
      setBooks(books.filter(book => book.$id !== id));
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="card">
        <div className="header">
          <h1 className="title">Book Management Dashboard</h1>
          <button 
            onClick={() => setIsAddingNew(true)}
            className="button"
          >
            <span className="icon">+</span>
            Add Book
          </button>
        </div>

        {/* Add New Book Form */}
        {isAddingNew && (
          <div className="add-book-form">
            <div className="form-header">
              <h3>Add Book</h3>
              <button
                className="close-button"
                onClick={() => setIsAddingNew(false)}
              >
                ✕
              </button>
            </div>
            <div className="form-fields">
              <input
                className="input-field"
                placeholder="Title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              />
              <input
                className="input-field"
                placeholder="Author"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              />
              <input
                className="input-field"
                placeholder="Year"
                type="number"
                value={newBook.year}
                onChange={(e) => setNewBook({ ...newBook, year: parseInt(e.target.value) })}
              />
              <button 
                onClick={handleAdd}
                className="submit-button"
              >
                Add Book
              </button>
            </div>
          </div>
        )}

        {/* Books List */}
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book.$id}>
                  {isEditing && editingBook?.$id === book.$id ? (
                    <>
                      <td>
                        <input
                          className="table-input"
                          value={editingBook.title}
                          onChange={(e) => setEditingBook({ ...editingBook, title: e.target.value })}
                        />
                      </td>
                      <td>
                        <input
                          className="table-input"
                          value={editingBook.author}
                          onChange={(e) => setEditingBook({ ...editingBook, author: e.target.value })}
                        />
                      </td>
                      <td>
                        <input
                          className="table-input"
                          type="number"
                          value={editingBook.year}
                          onChange={(e) => setEditingBook({ ...editingBook, year: parseInt(e.target.value) })}
                        />
                      </td>
                      <td className="actions">
                        <button
                          onClick={handleUpdate}
                          className="save-button"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setIsEditing(false);
                            setEditingBook(null);
                          }}
                          className="cancel-button"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.year}</td>
                      <td className="actions">
                        <button
                          onClick={() => handleEdit(book)}
                          className="edit-button"
                        >
                          ✎
                        </button>
                        <button
                          onClick={() => handleDelete(book.$id)}
                          className="delete-button"
                        >
                          🗑
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookManagementDashboard;
