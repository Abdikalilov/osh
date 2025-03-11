import { useState } from "react";
import "./catalogInput.scss";

export const CatalogInput = () => {
    const books = [
        { id: 1, aftor: 'Чынгыз Айтматов', title: 'Эрте келген турналар', description: 'На русском языке', isPopular: true },
        { id: 2, aftor: 'Чынгыз Айтматов', title: 'Материнское поле', description: 'На кыргызском языке', isPopular: false },
        { id: 3, aftor: 'Чынгыз Айтматов', title: 'Прощай, Гульсары', description: 'На русском языке', isPopular: true },
        { id: 4, aftor: 'Чынгыз Айтматов', title: 'Эрте келген турналар', description: 'На русском языке', isPopular: false },
        { id: 5, aftor: 'Чынгыз Айтматов', title: 'Материнское поле', description: 'На кыргызском языке', isPopular: true },
        { id: 6, aftor: 'Чынгыз Айтматов', title: 'Прощай, Гульсары', description: 'На русском языке', isPopular: false },
    ];

    const [searchAuthor, setSearchAuthor] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [filter, setFilter] = useState("all"); // Добавляем фильтр для кнопок

    const filteredBooks = books.filter(book => {
        const matchesAuthor = book.aftor.toLowerCase().includes(searchAuthor.toLowerCase());
        const matchesTitle = book.title.toLowerCase().includes(searchTitle.toLowerCase());
        const matchesFilter = filter === "all" || (filter === "popular" && book.isPopular);
        return matchesAuthor && matchesTitle && matchesFilter;
    });

    return (
        <div className="catalog-container">
            <div className="controls">
                <div className="buttons">
                    <button
                        className={filter === "all" ? "active" : ""}
                        onClick={() => setFilter("all")}
                    >
                        Все
                    </button>
                    <button
                        className={filter === "popular" ? "active" : ""}
                        onClick={() => setFilter("popular")}
                    >
                        Популярные
                    </button>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Поиск по автору..."
                        value={searchAuthor}
                        onChange={(e) => setSearchAuthor(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Поиск по названию..."
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                    />
                </div>
            </div>

            <table className="catalog-table">
                <thead>
                    <tr>
                        <th>АВТОР</th>
                        <th>НАЗВАНИЕ</th>
                        <th>ПРИМЕЧАНИЕ</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book) => (
                        <tr key={book.id}>
                            <td>{book.aftor}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
