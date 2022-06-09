class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find((existingBoard) => existingBoard.name === board.name)) {
            throw Error();
        }
        board.siteAdded = true;
        this.boards.push(board);
    }

    findBoardByName(name) {
        return this.boards.find((existingBoard) => existingBoard.name === name);
    }
}

class Board {
    constructor(name) {
        if (!name) {
            throw Error();
        }
        this.name = name;
        this.siteAdded = false;
        this.articles = [];
    }
    publish(article) {
        if (this.siteAdded == false) {
            throw Error();
        }
        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        this.articles.push(article);
    }
    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (!subject || !content || !author) {
            throw Error();
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comments = [];
    }
    reply(comment) {
        if (!this.id) {
            throw Error();
        }
        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);
    }
    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if (!content || !author) {
            throw Error();
        }
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
