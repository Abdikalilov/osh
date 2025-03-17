import { useState } from "react";
import "./catalogInput.scss";

export const CatalogInput = () => {
    const books = [
        { id: 1, author: 'Чынгыз Айтматов', title: 'Эрте келген турналар', description: 'На русском языке', isPopular: true },
        { id: 2, author: 'Чынгыз Айтматов', title: 'Материнское поле', description: 'На кыргызском языке', isPopular: false },
        { id: 3, author: 'Чынгыз Айтматов', title: 'Прощай, Гульсары', description: 'На русском языке', isPopular: true },
        { id: 4, author: 'Чынгыз Айтматов', title: 'Эрте келген турналар', description: 'На русском языке', isPopular: false },
        { id: 5, author: 'Чынгыз Айтматов', title: 'Материнское поле', description: 'На кыргызском языке', isPopular: true },
        { id: 6, author: 'Чынгыз Айтматов', title: 'Прощай, Гульсары', description: 'На русском языке', isPopular: false },
    ];

    const [searchAuthor, setSearchAuthor] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [filter, setFilter] = useState("all");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const filteredBooks = books.filter(book => {
        const matchesAuthor = book.author.toLowerCase().includes(searchAuthor.toLowerCase());
        const matchesTitle = book.title.toLowerCase().includes(searchTitle.toLowerCase());
        const matchesFilter = filter === "all" || book.isPopular;
        return matchesAuthor && matchesTitle && matchesFilter;
    });

    return (
        <div className="container">
            <div className="controls">
                <div className="kot"> 
                    <div className="buttons">
                        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
                            Все
                        </button>
                        <button className={filter === "popular" ? "active" : ""} onClick={() => setFilter("popular")}>
                            Популярные
                        </button>
                    </div>

                    <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        ☰
                    </button>
                </div>

                <div className={`search-bar ${isMenuOpen ? "open" : ""}`}>
                    <input type="text" placeholder="Поиск по автору..." value={searchAuthor} onChange={(e) => setSearchAuthor(e.target.value)} />
                    <input type="text" placeholder="Поиск по названию..." value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
                </div>

                <div className="search-bar-large ">
                    <input type="text" placeholder="Поиск по автору..." value={searchAuthor} onChange={(e) => setSearchAuthor(e.target.value)} />
                    <input type="text" placeholder="Поиск по названию..." value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
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
                        <tr key={`${book.id}-${book.title}`}>
                            <td>{book.author}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
